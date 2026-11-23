use std::env;
use std::fs;
use std::path::{Path, PathBuf};
use std::process::{Command, ExitCode, Stdio};

const VERSION: &str = env!("CARGO_PKG_VERSION");

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
        let entries = fs::read_dir(&dir).map_err(|e| format!("cannot read {}: {e}", dir.display()))?;
        for entry in entries {
            let entry = entry.map_err(|e| e.to_string())?;
            let path = entry.path();
            if path.is_dir() {
                let name = path.file_name().and_then(|v| v.to_str()).unwrap_or("");
                if matches!(name, ".git" | "node_modules" | "dist" | ".astro" | "target") { continue; }
                pending.push(path);
            } else {
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

fn tool_version(tool: &str) -> bool {
    Command::new(tool).arg("--version").stdout(Stdio::null()).stderr(Stdio::null()).status()
        .map(|s| s.success()).unwrap_or(false)
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

fn walk_count_extension(root: &Path, extension: &str) -> Result<usize, String> {
    let mut count = 0;
    let mut pending = vec![root.to_path_buf()];
    while let Some(dir) = pending.pop() {
        for entry in fs::read_dir(&dir).map_err(|e| e.to_string())? {
            let entry = entry.map_err(|e| e.to_string())?;
            let path = entry.path();
            if path.is_dir() { pending.push(path); }
            else if path.extension().and_then(|v| v.to_str()) == Some(extension) { count += 1; }
        }
    }
    Ok(count)
}

fn json_escape(value: &str) -> String {
    value.replace('\\', "\\\\").replace('"', "\\\"")
        .replace('\n', "\\n").replace('\r', "\\r")
}

fn inspect(root: &Path, manifest: &str) -> Result<(), String> {
    let source = manifest_value(manifest, "source_root").unwrap_or("src");
    let source_path = root.join(source);
    if !source_path.is_dir() { return Err(format!("source root does not exist: {source}")); }
    let (astro, ts, js, css, html) = count_files(&source_path)?;
    println!("IWAG Active Compiler {VERSION}");
    println!("source_root={source}");
    println!("astro={astro} typescript={ts} javascript={js} css={css} html={html}");
    println!("archive_root={}", manifest_value(manifest, "archive_root").unwrap_or("archive/v1-reference"));
    println!("output_root={}", manifest_value(manifest, "output_root").unwrap_or("dist"));
    Ok(())
}

fn doctor() -> Result<(), String> {
    for tool in ["node", "npm", "cargo"] {
        let available = tool_version(tool);
        println!("{tool}: {}", if available { "available" } else { "missing" });
        if !available { return Err(format!("required tool is unavailable: {tool}")); }
    }
    Ok(())
}

fn build(root: &Path, manifest: &str) -> Result<(), String> {
    doctor()?;
    let source_name = manifest_value(manifest, "source_root").unwrap_or("src");
    let output_name = manifest_value(manifest, "output_root").unwrap_or("dist");
    let archive_name = manifest_value(manifest, "archive_root").unwrap_or("archive/v1-reference");
    let source = root.join(source_name);
    if !source.is_dir() { return Err(format!("missing V2 source root: {source_name}")); }
    if !root.join("astro.config.mjs").is_file() { return Err("missing astro.config.mjs".into()); }
    if !root.join("package.json").is_file() { return Err("missing package.json".into()); }
    let (astro, ts, js, css, html) = count_files(&source)?;
    if astro + ts + js + css + html == 0 { return Err("V2 source root is empty".into()); }

    println!("[iwagc] preflight: source inventory complete");
    println!("[iwagc] source files: astro={astro}, ts={ts}, js={js}, css={css}, html={html}");
    println!("[iwagc] archive boundary: {archive_name} is excluded from application source");
    println!("[iwagc] backend: Astro + Vite");
    run_backend(root, &["build".to_string()])?;

    let output = root.join(output_name);
    if !output.is_dir() { return Err(format!("backend did not create output directory: {output_name}")); }
    let html_output = walk_count_extension(&output, "html")?;
    if html_output == 0 { return Err("production output contains no HTML pages".into()); }

    let report = format!(
        "{{\n  \"compiler\": \"iwagc\",\n  \"compiler_version\": \"{}\",\n  \"backend\": \"astro-vite\",\n  \"source_root\": \"{}\",\n  \"archive_root_excluded\": \"{}\",\n  \"output_root\": \"{}\",\n  \"source_counts\": {{\"astro\": {}, \"typescript\": {}, \"javascript\": {}, \"css\": {}, \"html\": {}}},\n  \"output_html_files\": {},\n  \"status\": \"success\"\n}}\n",
        VERSION, json_escape(source_name), json_escape(archive_name), json_escape(output_name),
        astro, ts, js, css, html, html_output
    );
    fs::write(output.join("iwag-build-report.json"), report)
        .map_err(|e| format!("cannot write build report: {e}"))?;
    println!("[iwagc] validated {html_output} generated HTML files");
    println!("[iwagc] build report: {output_name}/iwag-build-report.json");
    Ok(())
}

fn main_result() -> Result<(), String> {
    let mut args = env::args().skip(1);
    let command = args.next().unwrap_or_else(|| "help".into());
    let root = project_root()?;
    let manifest = load_manifest(&root)?;
    match command.as_str() {
        "inspect" => inspect(&root, &manifest),
        "doctor" => doctor(),
        "build" => build(&root, &manifest),
        "dev" | "preview" => {
            doctor()?;
            let mut backend_args = vec![command];
            backend_args.extend(args);
            run_backend(&root, &backend_args)
        }
        "wasm" => {
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
