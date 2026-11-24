# Rust Active AOT Compiler — Execution Contract

**Status:** Existing Rust build controller is active; AOT pipeline hardening roadmap  
**Entry point:** `iwagc` in `compiler/iwagc/`  
**Production command:** `npm run build`

## 1. Current implementation truth

The Rust binary is already the required project-level entry point for normal development, production build, preview and diagnostics. Its production build invokes Astro/Vite, validates source/archive/output boundaries, validates required routes and local references, runs generated-output accessibility diagnostics and writes a machine-readable report.

The resulting Astro/Vite production build is an ahead-of-time static compilation: pages and frontend assets are generated before deployment. Rust is the active controller and validator around that specialist toolchain.

Rust does **not** currently parse and compile Astro, TypeScript, JavaScript, Vue or CSS language semantics itself. Astro/Vite, Vue integration, TypeScript transforms, Tailwind, Panda and StyleX own those specialist compilation stages. Do not label the current Rust program a standalone replacement for those compilers.

## 2. Target pipeline

```text
Source + manifests
      |
      v
Rust iwagc — preflight and dependency graph
      |
      +--> source boundary / archive exclusion
      +--> route, locale and asset manifest validation
      +--> dependency and toolchain verification
      |
      v
Specialist AOT backends
      |
      +--> Astro static page compiler
      +--> Vite production module graph and asset bundling
      +--> Vue SFC compilation for declared islands
      +--> TypeScript / JavaScript transforms
      +--> Tailwind / Panda / StyleX CSS extraction
      +--> rustc native compiler and optional wasm-pack target
      |
      v
Rust iwagc — artifact verification
      |
      +--> HTML route and locale manifest
      +--> CSS/JS/font/image/WASM inventory
      +--> local references and fragments
      +--> HTML structural diagnostics
      +--> accessibility JSON + SARIF diagnostics
      +--> build report and reproducibility metadata
      |
      v
dist/ — static deployable output
```

## 3. Required AOT properties

1. Deterministic declared inputs: source root, archive root, output root, toolchain versions, backend versions and optional modules are explicit.
2. Fail-closed source boundary: V1 archive, temporary folders, generated output and unapproved files cannot become implicit application inputs.
3. Explicit dependency graph: stages run only when their declared inputs are available; optional graphics/WASM modules never gate core site generation.
4. Specialist ownership: Rust orchestrates and validates; maintained language compilers implement their language semantics.
5. Structured diagnostics: each error includes stable code, stage, file/route, severity, confidence and remediation.
6. Artifact integrity: output is checked for required routes, local references, unexpected external runtime dependencies and forbidden placeholder/redirect patterns.
7. Reproducibility: lockfiles, pinned toolchains, deterministic configuration and output report are retained.
8. Release safety: build, test and preview verification complete before a candidate is promoted to production.

## 4. Compiler modes

| Mode | Expected behavior |
|---|---|
| `doctor` | Verify required tools and version constraints. |
| `inspect` | Inventory source files, modules, routes and excluded archive. |
| `dev` | Start specialist dev backends through Rust. |
| `build` | Execute the full AOT production graph, validate outputs and write reports. |
| `accessibility` | Re-run generated-output diagnostics. |
| `wasm` | Build only explicitly registered optional Rust/WASM modules. |
| `preview` | Serve the generated production output through the selected backend. |

## 5. Additional compiler hardening backlog

- [ ] Introduce a typed build manifest rather than the current minimal key/value reader.
- [ ] Validate declared stages, dependencies, required tools and optional modules before execution.
- [ ] Emit JSON diagnostics from every stage and aggregate them in the final report.
- [ ] Add a content/locale manifest and fail on missing required translations.
- [ ] Add canonical route and alias validation.
- [ ] Verify generated CSS cascade layer order and absence of duplicate resets.
- [ ] Validate CSP/security headers against actual deployed assets and required functionality.
- [ ] Add dependency license, vulnerability and provenance reports.
- [ ] Add browser smoke-test stage against the staged preview deployment.
- [ ] Add source-map policy and ensure no private source or environment values leak into public artifacts.
- [ ] Record compiler version, backend versions, source commit and manifest digest in the build report.
- [ ] Add an artifact allowlist and reject unexpected files in `dist/`.
- [ ] Add reproducibility comparison for two clean builds of the same source and toolchain.
- [ ] Add a release gate: preview test evidence required before production promotion.

## 6. Non-goals and guardrails

- Do not rewrite a full JavaScript, CSS, Astro or Vue compiler in Rust merely to claim the language is “compiled by Rust”.
- Do not add multiple competing frontend bundlers or duplicate framework runtimes.
- Do not make Next.js a required backend unless a separately scoped application module is approved.
- Do not require WebGPU, WebGL, Canvas or WASM to read content or navigate.
- Do not silently execute untrusted repository scripts with deployment credentials.
- Do not publish build reports containing secrets or private environment values.

## 7. Acceptance criteria

- `npm run build` runs through Rust and produces a complete static output.
- Build report identifies the AOT mode, source commit, toolchain and backend versions.
- Required routes, locale coverage, CSS/JS assets and all local references are verified.
- Compiler diagnostics are stable and machine-readable.
- Optional modules fail independently and retain functional fallbacks.
- Preview browser tests pass before production promotion.
- A green build is treated as engineering evidence, not accessibility, legal or security certification.
