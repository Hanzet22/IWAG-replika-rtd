use std::env;
use std::fs;
use std::path::{Component, Path, PathBuf};
use std::process::{Command, ExitCode};
use std::time::Instant;

const VERSION: &str = env!("CARGO_PKG_VERSION");

struct Toolchain {
    node: String,
    npm: String,
    cargo: String,
}

fn project_root() -> Result<PathBuf, String> {
    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .join("../..")
        .canonicalize()
        .map_err(|e| format!("cannot resolve project root: {e}"))
}

fn manifest_value<'a>(text: &'a str, key: &str) -> Option<&'a str> {
    text.lines().find_map(|line| {
        let line = line.trim();
        if line.starts_with('#') { return None; }
        let (name, value) = line.split_once('=')?;
        if name.trim() != key { return None; }
        Some(value.trim().trim_matches('"'))
    })
}

fn safe_project_path(root: &Path, value: &str, label: &str) -> Result<PathBuf, String> {
    let relative = Path::new(value);
    if relative.as_os_str().is_empty()
        || relative.is_absolute()
        || relative.components().any(|part| !matches!(part, Component::Normal(_)))
    {
        return Err(format!("{label} must be a non-empty repository-relative path: {value}"));
    }
    Ok(root.join(relative))
}

fn canonical_inside_root(root: &Path, path: &Path, label: &str) -> Result<PathBuf, String> {
    let canonical = path.canonicalize()
        .map_err(|e| format!("cannot resolve {label} {}: {e}", path.display()))?;
    if !canonical.starts_with(root) {
        return Err(format!("{label} resolves outside the repository root"));
    }
    Ok(canonical)
}

fn load_manifest(root: &Path) -> Result<String, String> {
    let path = root.join("iwag.compiler.toml");
    fs::read_to_string(&path).map_err(|e| format!("cannot read {}: {e}", path.display()))
}

fn count_files(root: &Path) -> Result<(usize, usize, usize, usize, usize), String> {
    let mut astro = 0;
    let mut ts = 0;
    let mut js = 0;
    let mut css = 0;
    let mut html = 0;
    let mut pending = vec![root.to_path_buf()];
    while let Some(dir) = pending.pop() {
        for entry in fs::read_dir(&dir).map_err(|e| format!("cannot read {}: {e}", dir.display()))? {
            let entry = entry.map_err(|e| e.to_string())?;
            let file_type = entry.file_type().map_err(|e| e.to_string())?;
            if file_type.is_symlink() { continue; }
            let path = entry.path();
            if file_type.is_dir() {
                let name = path.file_name().and_then(|v| v.to_str()).unwrap_or("");
                if matches!(name, ".git" | "node_modules" | "dist" | ".astro" | "target") { continue; }
                pending.push(path);
            } else if file_type.is_file() {
                match path.extension().and_then(|v| v.to_str()).unwrap_or("") {
                    "astro" => astro += 1,
                    "ts" | "tsx" => ts += 1,
                    "js" | "mjs" | "cjs" => js += 1,
                    "css" => css += 1,
                    "html" => html += 1,
                    _ => {}
                }
            }
        }
    }
    Ok((astro, ts, js, css, html))
}

fn command_version(tool: &str) -> Result<String, String> {
    let output = Command::new(tool).arg("--version").output()
        .map_err(|e| format!("required tool is unavailable: {tool}: {e}"))?;
    if !output.status.success() {
        return Err(format!("{tool} --version exited with status {}", output.status));
    }
    let value = String::from_utf8_lossy(&output.stdout).trim().to_string();
    Ok(if value.is_empty() {
        String::from_utf8_lossy(&output.stderr).trim().to_string()
    } else { value })
}

fn version_tuple(value: &str) -> Option<(u64, u64, u64)> {
    let clean = value.trim().trim_start_matches('v');
    let mut parts = clean.split('.');
    let major = parts.next()?.parse().ok()?;
    let minor = parts.next()?.parse().ok()?;
    let patch_text = parts.next()?;
    let patch_digits: String = patch_text.chars().take_while(|c| c.is_ascii_digit()).collect();
    let patch = patch_digits.parse().ok()?;
    Some((major, minor, patch))
}

fn version_at_least(actual: &str, minimum: &str) -> bool {
    match (version_tuple(actual), version_tuple(minimum)) {
        (Some(a), Some(m)) => a >= m,
        _ => false
    }
}

fn doctor(manifest: &str) -> Result<Toolchain, String> {
    let minimum = manifest_value(manifest, "node_minimum").unwrap_or("22.23.4");
    let node = command_version("node")?;
    if !version_at_least(&node, minimum) {
        return Err(format!("Node.js {minimum} or newer is required; found {node}"));
    }
    let npm = command_version("npm")?;
    let cargo = command_version("cargo")?;
    println!("node: {node}");
    println!("npm: {npm}");
    println!("cargo: {cargo}");
    Ok(Toolchain { node, npm, cargo })
}

fn run_backend(root: &Path, backend_args: &[String]) -> Result<(), String> {
    let status = Command::new("npm")
        .args(["exec", "--", "astro"])
        .args(backend_args)
        .current_dir(root)
        .status()
        .map_err(|e| format!("failed to launch Astro through npm: {e}"))?;
    if status.success() { Ok(()) } else {
        Err(format!("Astro backend exited with status {status}"))
    }
}

#[derive(Default)]
struct OutputStats {
    files: usize,
    html: usize,
    css: usize,
    js: usize,
    images: usize,
    fonts: usize,
    total_bytes: u64,
    html_bytes: u64,
    css_bytes: u64,
    js_bytes: u64,
    media_bytes: u64,
}

fn scan_output(root: &Path) -> Result<OutputStats, String> {
    let mut stats = OutputStats::default();
    let mut pending = vec![root.to_path_buf()];
    while let Some(dir) = pending.pop() {
        for entry in fs::read_dir(&dir).map_err(|e| format!("cannot read {}: {e}", dir.display()))? {
            let entry = entry.map_err(|e| e.to_string())?;
            let file_type = entry.file_type().map_err(|e| e.to_string())?;
            if file_type.is_symlink() { continue; }
            let path = entry.path();
            if file_type.is_dir() {
                pending.push(path);
                continue;
            }
            if !file_type.is_file() { continue; }
            let bytes = entry.metadata().map_err(|e| e.to_string())?.len();
            let extension = path.extension().and_then(|v| v.to_str()).unwrap_or("").to_ascii_lowercase();
            stats.files += 1;
            stats.total_bytes += bytes;
            match extension.as_str() {
                "html" => { stats.html += 1; stats.html_bytes += bytes; }
                "css" => { stats.css += 1; stats.css_bytes += bytes; }
                "js" | "mjs" => { stats.js += 1; stats.js_bytes += bytes; }
                "png" | "jpg" | "jpeg" | "webp" | "avif" | "svg" | "gif" => {
                    stats.images += 1;
                    stats.media_bytes += bytes;
                }
                "woff" | "woff2" | "ttf" | "otf" => {
                    stats.fonts += 1;
                    stats.media_bytes += bytes;
                }
                _ => {}
            }
        }
    }
    Ok(stats)
}

fn validate_required_routes(output: &Path) -> Result<usize, String> {
    let mut required = vec![
        "index.html".to_string(),
        "404.html".to_string(),
    ];
    for locale in ["en", "id", "en-sg", "ms-my"] {
        for route in [
            "index.html",
            "events/index.html",
            "plan-your-visit/index.html",
            "community/index.html",
            "updates/index.html",
            "accessibility/index.html",
            "policy/index.html",
        ] {
            required.push(format!("{locale}/{route}"));
        }
    }
    for route in &required {
        let path = output.join(route);
        let metadata = fs::metadata(&path)
            .map_err(|e| format!("required route missing: {route}: {e}"))?;
        if !metadata.is_file() || metadata.len() == 0 {
            return Err(format!("required route is not a non-empty file: {route}"));
        }
    }
    Ok(required.len())
}

fn json_escape(value: &str) -> String {
    value.replace('\\', "\\\\").replace('"', "\\\"")
        .replace('\n', "\\n").replace('\r', "\\r")
}

fn inspect(root: &Path, manifest: &str) -> Result<(), String> {
    let source_name = manifest_value(manifest, "source_root").unwrap_or("src");
    let archive_name = manifest_value(manifest, "archive_root").unwrap_or("archive/v1-reference");
    let source_path = safe_project_path(root, source_name, "source_root")?;
    let source = canonical_inside_root(root, &source_path, "source_root")?;
    let archive_path = safe_project_path(root, archive_name, "archive_root")?;
    if archive_path.exists() {
        let archive = canonical_inside_root(root, &archive_path, "archive_root")?;
        if source.starts_with(&archive) || archive.starts_with(&source) {
            return Err("source_root and archive_root must be separate trees".into());
        }
    }
    let (astro, ts, js, css, html) = count_files(&source)?;
    println!("IWAG Active Compiler {VERSION}");
    println!("source_root={source_name}");
    println!("astro={astro} typescript={ts} javascript={js} css={css} html={html}");
    println!("archive_root={archive_name} (excluded)");
    println!("output_root={}", manifest_value(manifest, "output_root").unwrap_or("dist"));
    Ok(())
}

fn build(root: &Path, manifest: &str) -> Result<(), String> {
    let toolchain = doctor(manifest)?;
    let started = Instant::now();
    let source_name = manifest_value(manifest, "source_root").unwrap_or("src");
    let output_name = manifest_value(manifest, "output_root").unwrap_or("dist");
    let archive_name = manifest_value(manifest, "archive_root").unwrap_or("archive/v1-reference");
    let source_path = safe_project_path(root, source_name, "source_root")?;
    let output_path = safe_project_path(root, output_name, "output_root")?;
    let archive_path = safe_project_path(root, archive_name, "archive_root")?;
    let source = canonical_inside_root(root, &source_path, "source_root")?;
    if archive_path.exists() {
        let archive = canonical_inside_root(root, &archive_path, "archive_root")?;
        if source.starts_with(&archive) || archive.starts_with(&source) {
            return Err("source_root and archive_root must be separate trees".into());
        }
    }
    if !source.is_dir() { return Err(format!("missing V2 source root: {source_name}")); }
    if !root.join("astro.config.mjs").is_file() { return Err("missing astro.config.mjs".into()); }
    if !root.join("package.json").is_file() { return Err("missing package.json".into()); }

    let (astro, ts, js, css, html) = count_files(&source)?;
    if astro + ts + js + css + html == 0 { return Err("V2 source root is empty".into()); }
    if output_path.exists() {
        let output = canonical_inside_root(root, &output_path, "output_root")?;
        if output == source || output.starts_with(&source) || source.starts_with(&output) {
            return Err("source_root and output_root must be separate directories".into());
        }
    }

    println!("[iwagc] preflight: source inventory complete");
    println!("[iwagc] source files: astro={astro}, ts={ts}, js={js}, css={css}, html={html}");
    println!("[iwagc] archive boundary: {archive_name} is excluded from build inputs");
    println!("[iwagc] backend: Astro + Vite");
    run_backend(root, &["build".to_string()])?;

    let validation = Command::new("node")
        .args(["compiler/iwagc/scripts/validate-output.mjs", output_name])
        .current_dir(root)
        .status()
        .map_err(|e| format!("failed to launch local route validator: {e}"))?;
    if !validation.success() {
        return Err(format!("local route and asset validation failed with status {validation}"));
    }

    let output = canonical_inside_root(root, &output_path, "output_root")?;
    let output_stats = scan_output(&output)?;
    if output_stats.html == 0 { return Err("production output contains no HTML pages".into()); }
    let required_routes_checked = validate_required_routes(&output)?;
    if css > 0 && output_stats.css == 0 { return Err("production output contains no CSS files although CSS source files exist".into()); }

    let elapsed_ms = started.elapsed().as_millis();
    let report_dir = root.join(".iwag-build");
    fs::create_dir_all(&report_dir).map_err(|e| format!("cannot create build report directory: {e}"))?;
    let report = format!(
        "{{\n  \"compiler\": \"iwagc\",\n  \"compiler_version\": \"{}\",\n  \"backend\": \"astro-vite\",\n  \"toolchain\": {{\"node\": \"{}\", \"npm\": \"{}\", \"cargo\": \"{}\"}},\n  \"source_root\": \"{}\",\n  \"archive_root_excluded\": \"{}\",\n  \"output_root\": \"{}\",\n  \"source_counts\": {{\"astro\": {}, \"typescript\": {}, \"javascript\": {}, \"css\": {}, \"html\": {}}},\n  \"output\": {{\"files\": {}, \"html\": {}, \"css\": {}, \"javascript\": {}, \"images\": {}, \"fonts\": {}, \"total_bytes\": {}, \"html_bytes\": {}, \"css_bytes\": {}, \"javascript_bytes\": {}, \"media_bytes\": {}}},\n  \"required_routes_checked\": {},\n  \"build_duration_ms\": {},\n  \"status\": \"success\"\n}}\n",
        VERSION, json_escape(&toolchain.node), json_escape(&toolchain.npm), json_escape(&toolchain.cargo),
        json_escape(source_name), json_escape(archive_name), json_escape(output_name),
        astro, ts, js, css, html, output_stats.files, output_stats.html, output_stats.css, output_stats.js, output_stats.images, output_stats.fonts, output_stats.total_bytes, output_stats.html_bytes, output_stats.css_bytes, output_stats.js_bytes, output_stats.media_bytes, required_routes_checked, elapsed_ms
    );
    fs::write(report_dir.join("iwag-build-report.json"), report)
        .map_err(|e| format!("cannot write build report: {e}"))?;
    println!("[iwagc] validated {} HTML files, {} CSS files, {} JS files, {} images and {} fonts", output_stats.html, output_stats.css, output_stats.js, output_stats.images, output_stats.fonts);
    println!("[iwagc] verified {required_routes_checked} required root and locale routes");
    println!("[iwagc] output footprint: {} bytes across {} files; build duration: {elapsed_ms} ms", output_stats.total_bytes, output_stats.files);
    println!("[iwagc] build report: .iwag-build/iwag-build-report.json");
    Ok(())
}

fn main_result() -> Result<(), String> {
    let mut args = env::args().skip(1);
    let command = args.next().unwrap_or_else(|| "help".into());
    let root = project_root()?;
    let manifest = load_manifest(&root)?;
    match command.as_str() {
        "inspect" => inspect(&root, &manifest),
        "doctor" => { doctor(&manifest)?; Ok(()) },
        "build" => build(&root, &manifest),
        "dev" | "preview" => {
            doctor(&manifest)?;
            let mut backend_args = vec![command];
            backend_args.extend(args);
            run_backend(&root, &backend_args)
        }
        "wasm" => {
            command_version("wasm-pack")
                .map_err(|_| "wasm-pack is required for this optional module build".to_string())?;
            let status = Command::new("wasm-pack")
                .args(["build", "rust/contrast-engine", "--target", "web", "--out-dir", "../../public/wasm", "--release"])
                .current_dir(&root).status()
                .map_err(|e| format!("failed to launch wasm-pack: {e}"))?;
            if status.success() { Ok(()) } else { Err(format!("wasm-pack exited with status {status}")) }
        }
        "help" | "--help" | "-h" => {
            println!("IWAG Active Compiler {VERSION}\n\nCommands:\n  inspect   Inventory V2 source and manifest\n  doctor    Check required build tools\n  dev       Start Astro development server through the compiler\n  build     Run production compilation and validate output\n  preview   Preview the production build\n  wasm      Build the registered contrast-engine WASM module");
            Ok(())
        }
        other => Err(format!("unknown command: {other}; run iwagc --help")),
    }
}

fn main() -> ExitCode {
    match main_result() {
        Ok(()) => ExitCode::SUCCESS,
        Err(error) => {
            eprintln!("[iwagc:error] {error}");
            ExitCode::FAILURE
        }
    }
}
