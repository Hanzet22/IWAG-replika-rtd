# IWAG Active Compiler — Architecture Specification

**Status:** Proposed implementation contract  
**Parent project:** IWAG V2 Greenfield Global Reconstruction  
**Language:** Rust  
**Role:** Active build orchestrator, project-specific compiler, validator and diagnostics engine

## 1. Purpose

The IWAG Active Compiler is the Rust-controlled entry point for development and production builds. It coordinates specialist compilers and build tools rather than reimplementing every language compiler.

The compiler is active because the normal V2 build is invoked through it, it owns the deterministic stage graph, it validates project boundaries and manifests, and it decides whether production output is publishable.

## 2. Responsibility split

### Rust compiler core owns
- CLI and build-mode selection.
- Source classification and archive-boundary enforcement.
- Manifest parsing and validation.
- Dependency and toolchain preflight.
- Build-stage ordering and process orchestration.
- Project-specific source checks and transformations.
- WASM module registry and target selection.
- Build diagnostics, timing and machine-readable reports.
- Production output integrity checks.

### Specialist backends own
- Astro page rendering and route generation.
- Vite module graph, bundling and asset processing.
- Vue SFC compilation.
- TypeScript/JavaScript parsing and transformation.
- CSS processing and minification.
- Panda/StyleX/Tailwind code generation.
- Rust-to-WASM compilation for registered modules.

Do not claim the Rust orchestrator directly compiles a language unless it invokes or contains a real compiler for that language.

## 3. Proposed command interface

```text
iwagc inspect [--json]
iwagc dev [--host <host>] [--port <port>]
iwagc build [--mode production] [--report <path>]
iwagc wasm [--module <name>|--all]
iwagc doctor [--json]
```

- `inspect`: inventory source files, dependencies and manifest entries.
- `dev`: run development orchestration and delegate HMR to Vite/Astro.
- `build`: run the production stage graph and validate output.
- `wasm`: build explicitly registered Rust modules only.
- `doctor`: report Rust, Node, npm, Astro and backend availability/version compatibility.

## 4. Production stage graph

1. Load and validate `iwag.compiler.toml`.
2. Resolve project root and reject paths that escape the repository.
3. Inventory source inputs; exclude `archive/**`, `dist/**`, `node_modules/**` and generated files.
4. Validate locale, route, content and asset manifests.
5. Validate dependency/license metadata and compiler version pins.
6. Compile registered Rust/WASM modules if the manifest requires them.
7. Invoke the Astro/Vite production build through the project package manager.
8. Validate generated HTML, route completeness, local asset references and absence of archive paths.
9. Emit `dist/iwag-build-report.json` with tool versions, stages, durations, warnings and artifact inventory.

A failed optional GPU capability or absent WebGPU API is not a build failure. A missing required compiler, invalid source manifest, broken route, or failed mandatory build stage is.

## 5. Toolchain boundary

The Rust Active Compiler itself is compiled by `rustc`/Cargo. It launches Node.js and the configured package manager to invoke Astro/Vite. This avoids writing custom parsers for HTML, JavaScript, TypeScript, CSS, Astro and Vue.

Rust modules intended for browser execution use the `wasm32-unknown-unknown` target and an explicit JS/WASM binding strategy. Native Rust build utilities remain native executables and must not be shipped to the browser.

## 6. Determinism and security

- Pin Rust toolchain and Node engine ranges.
- Use a lockfile and reproducible package-manager commands.
- Never execute shell strings assembled from untrusted content; pass executable and argument arrays.
- Canonicalize paths and reject traversal outside repository root.
- Do not execute archive content.
- Do not fetch or install dependencies from the compiler itself.
- Record backend versions and inputs in the build report.
- Keep secrets out of compiler logs and artifacts.
- Build outputs are disposable and are not committed.

## 7. WASM policy

WASM is not the default answer to every CPU task. A module must have a measurable need, stable interface, bounded memory behavior, and a JavaScript or static fallback. Small tasks should remain in native browser APIs when that is faster and simpler.

Each module entry records:
- module name and source path;
- target and output path;
- build command/backend;
- JS binding entrypoint;
- fallback behavior;
- memory and startup considerations;
- license and dependency provenance.

## 8. CSS compiler orchestration

The Active Compiler coordinates Vite plugins and generated CSS but does not replace their language semantics. Tailwind, Panda and StyleX are configured as distinct stages/plugins with pinned versions and an explicit CSS layer order. The output must be inspected for duplicated tokens, duplicate resets, specificity collisions, dead CSS and excess bytes.

## 9. Diagnostics

Diagnostics should include:
- stable error code;
- severity;
- file/path when applicable;
- stage and backend;
- human-readable explanation;
- suggested remediation;
- whether the failure is mandatory or optional.

Build reports are useful engineering evidence, not a replacement for device testing, accessibility evaluation or human review.

## 10. Implementation sequence

1. Rust CLI skeleton and manifest schema.
2. Source-boundary scanner and `doctor`.
3. Astro/Vite process orchestration.
4. Output and route validation.
5. WASM module registry.
6. CSS backend integration and generated-output inspection.
7. Incremental development orchestration.
8. Reproducibility, diagnostics and performance measurements.
