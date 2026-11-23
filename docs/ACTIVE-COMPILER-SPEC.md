# IWAG Active Compiler — Current Implementation and Roadmap

**Status:** Active Rust CLI implemented; project-specific validation is expanding  
**Language:** Rust  
**Role:** Build controller, source-boundary validator, route/output verifier and diagnostics reporter

## 1. Purpose and honest compiler boundary

The Rust `iwagc` CLI is the required project-level entry point for normal development and production builds. It is the active build controller and validator.

It does **not** independently parse or transpile Astro, HTML, CSS, JavaScript, TypeScript or Vue. Astro/Vite and their registered plugins remain the specialist frontend compiler backends. Rust owns the orchestration and project-specific validation around them.

## 2. Current command interface

| Command | Current behavior |
|---|---|
| `iwagc inspect` | Inventory the declared source root and report the excluded V1 archive boundary |
| `iwagc doctor` | Check the configured minimum Node.js version and availability of npm and Cargo |
| `iwagc dev` | Launch Astro development server through npm |
| `iwagc build` | Validate source/output paths, invoke Astro/Vite, inspect generated assets, verify required routes and write a build report |
| `iwagc preview` | Launch Astro production preview through npm |
| `iwagc wasm` | Explicitly build the Rust contrast-engine module using wasm-pack |

The normal npm scripts call these Rust commands. `build:astro` remains a diagnostic backend escape hatch, not the normal build entry point.

## 3. Current build stages

1. Resolve the Rust project root and read `iwag.compiler.toml`.
2. Check Node.js, npm and Cargo availability.
3. Resolve and canonicalize the declared V2 source path.
4. Reject absolute, empty, traversal and out-of-repository source paths.
5. Ensure the V1 archive and V2 source roots do not overlap.
6. Inventory Astro, TypeScript, JavaScript, CSS and HTML source files.
7. Verify the application configuration and package manifest exist.
8. Invoke Astro/Vite through npm.
9. Confirm generated output exists and contains HTML.
10. Confirm generated CSS exists when CSS source files are present.
11. Verify root homepage, 404 page and seven critical routes for each of four locales.
12. Count generated HTML, CSS, JavaScript, images and fonts, plus byte footprints.
13. Write `.iwag-build/iwag-build-report.json` outside the public `dist/` directory.

## 4. Output report

The report records:
- compiler and toolchain versions;
- declared source, archive and output roots;
- source language counts;
- generated output file counts and byte totals by category;
- required route count;
- build duration and status.

The report is diagnostic evidence. It does not prove that every link resolves, every image has appropriate alternative text, or every route has passed manual accessibility or device testing.

## 5. Specialist backend ownership

| Stage | Owner |
|---|---|
| Rust CLI compilation | rustc / Cargo |
| Static page rendering and route generation | Astro |
| Frontend module graph and asset processing | Vite |
| Vue single-file component compilation | Astro Vue integration / Vite |
| TypeScript and JavaScript transforms | Vite toolchain |
| Tailwind CSS utilities | Tailwind CSS 4 Vite plugin |
| Typed design tokens and extracted utilities | Panda CSS Vite plugin |
| Atomic component CSS extraction | StyleX Vite plugin |
| Optional Rust-to-WASM module | wasm-pack / wasm-bindgen |

## 6. Security and reproducibility

Implemented:
- path canonicalization for source, archive and output boundaries;
- rejection of path traversal and paths outside the repository;
- symlink exclusion during source and output scans;
- argument-array process invocation rather than assembled shell commands;
- build report written outside public output.

Still required:
- a committed npm lockfile and reproducible `npm ci` workflow;
- transitive dependency and license inventory;
- local-link and asset-reference validation;
- content/locale manifest validation;
- stable diagnostic codes and structured JSON output for all commands.

## 7. WASM policy

The contrast-engine crate is optional and is not required for normal site rendering. The `wasm` command builds it only when explicitly requested. The browser-facing integration, startup cost and fallback path must be verified before it is used by a page.

WebAssembly must not gate navigation, reading, forms or essential information. A JavaScript or static fallback remains mandatory.

## 8. CSS integration contract

- Tailwind CSS 4 imports theme and utility layers without preflight.
- Panda CSS supplies typed tokens and compile-time extracted utilities.
- StyleX uses prefixed priority layers positioned before Tailwind utilities.
- Plain semantic CSS remains the base and fallback.
- The generated CSS cascade must be inspected in production because layered declarations lose to normal unlayered declarations in the CSS cascade.

## 9. Remaining compiler roadmap

- full local-link and asset integrity scan;
- locale and content-schema checks;
- reproducible dependency lock and license report;
- explicit diagnostics schema;
- route manifest generated from Astro output rather than only a critical-route allowlist;
- optional WASM module manifest and browser loader;
- production CSS dead-code and size diagnostics.

No CI status is used as the definition of project completion.
