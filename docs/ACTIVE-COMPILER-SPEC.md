# IWAG Active Compiler — Current Implementation and Roadmap

**Status:** Active Rust CLI implemented; project-specific validation is expanding  
**Language:** Rust  
**Role:** Build controller, source-boundary validator, route/output verifier and diagnostics reporter

## 1. Purpose and honest compiler boundary

The Rust `iwagc` CLI is the required project-level entry point for normal development and production builds. It is the active build controller and validator.

It does **not** independently parse or transpile Astro, HTML, CSS, JavaScript, TypeScript, Vue or Next.js. Astro/Vite and any declared specialist application toolchains remain the specialist compiler backends. Rust owns orchestration and project-specific validation around them.

## 2. Current command interface

| Command | Current behavior |
|---|---|
| `iwagc inspect` | Inventory the declared source root and report the excluded V1 archive boundary |
| `iwagc doctor` | Check the configured minimum Node.js version and availability of npm and Cargo |
| `iwagc dev` | Launch Astro development server through npm |
| `iwagc build` | Validate source/output paths, invoke Astro/Vite, inspect generated assets, verify required routes, run generated-output accessibility diagnostics and write reports |
| `iwagc accessibility` | Scan the existing generated output and write JSON/SARIF diagnostics |
| `iwagc preview` | Launch Astro production preview through npm |
| `iwagc wasm` | Explicitly build the Rust contrast-engine module using wasm-pack |

The normal npm scripts call these Rust commands. Run `npm run accessibility` to re-scan an existing `dist/` output without rebuilding. `build:astro` remains a diagnostic backend escape hatch, not the normal build entry point. Next.js orchestration is a future conditional capability, not a current command.

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
13. Run generated-output accessibility diagnostics and write JSON/SARIF reports.
14. Write `.iwag-build/iwag-build-report.json` outside the public `dist/` directory.

When a real Next.js module is later declared, the compiler may add a separate backend stage for that module. It must not silently merge Next.js output into Astro's route tree or make the Next.js toolchain mandatory for builds that do not declare the module.

## 4. Output report

The report records:
- compiler and toolchain versions;
- declared source, archive and output roots;
- source language counts;
- generated output file counts and byte totals by category;
- required route count;
- build duration and status.

The report is diagnostic evidence. Static checks do not prove that alternative text is meaningful, that accessible names are understandable, or that every route passes keyboard, screen-reader, zoom, cognitive-accessibility or device testing.

## 4A. Generated-output accessibility findings

The Rust-controlled build now invokes a dedicated generated-HTML diagnostics helper after route and asset validation:

- `compiler/iwagc/scripts/accessibility-report.mjs`
- `.iwag-build/accessibility-report.json`
- `.iwag-build/accessibility.sarif` (SARIF 2.1.0)

The scanner enumerates generated HTML files, records route/locale coverage, and emits stable diagnostic IDs for document language, page title, missing image-alt attributes, link/button/form naming candidates, broken ARIA ID references, and duplicate IDs. Confirmed structural observations are separated from review-required heuristics. Severity and confidence are separate fields.

This first implementation is a lightweight Node.js source scanner orchestrated by Rust, not a Rust-native parser and not a browser accessibility-tree evaluator. It does not prove meaningful names, keyboard operation, screen-reader behavior, contrast, reflow, captions, or WCAG conformance. The scanner report is diagnostic only and does not independently fail the build; existing output validation retains its current enforcement behavior.

The formal target remains WCAG 2.2 Level A. Level AA remains an optional enhancement track. A green CI run or an empty automated report is never a conformance claim. See [Accessibility Findings Engine](ACCESSIBILITY-FINDINGS-ENGINE.md) for the rule inventory, evidence model, limitations and research references.

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
| Optional React component islands, if explicitly adopted | Astro React integration |
| Specialized React application module, only when declared | Next.js build/runtime |
| Optional Rust-to-WASM module | wasm-pack / wasm-bindgen |

## 6. Next.js specialist backend contract

Next.js is accepted as a **Specialized Application Framework**, not the primary website framework.

- Astro remains the owner of public content routes and the shared website shell.
- Next.js owns only a separately bounded application module that qualifies under `docs/ADR-NEXTJS-SPECIALIZED-APPLICATION-FRAMEWORK.md`.
- Next.js is a separately deployed application, not an Astro component or an Astro React island.
- A path mount requires a capable edge/reverse proxy and a build-time Next.js `basePath`; otherwise use a dedicated subdomain.
- The application module must define its own route manifest, asset base path, runtime requirements, environment contract, authentication/session boundaries, security headers, cache behavior and deployment target.
- The public Astro build must remain buildable and navigable without installing or starting Next.js when no module is declared.
- The Active Compiler should detect the declared module from an explicit manifest entry, invoke the Next.js backend only for that module, and report its build result separately from Astro output.
- The compiler must validate route ownership and reject collisions between Astro public routes and Next.js delegated routes.
- Do not introduce a permanent Next.js dependency or backend adapter before an actual module exists.

This is an architecture contract, not an implementation claim. Next.js is not yet installed and no Next.js application module exists.

## 7. Security and reproducibility

Implemented:
- path canonicalization for source, archive and output boundaries;
- rejection of path traversal and paths outside the repository;
- symlink exclusion during source and output scans;
- argument-array process invocation rather than assembled shell commands;
- build report written outside public output.

Implemented:
- exact Node minimum and pinned Rust 1.100.0 toolchain;
- committed npm and Cargo lockfiles;
- branch-scoped lockfile bootstrap and `npm ci` when the npm lockfile is present;
- generated local-link/asset checks and basic HTML accessibility invariants.

Still required:
- full license-text and notice review for the 530-package dependency graph;
- complete content/locale manifest validation;
- extend stable diagnostic codes and structured JSON output across all commands;
- if Next.js is adopted, isolated dependency lock, build output, runtime configuration and security review for that application module.

## 8. WASM policy

The contrast-engine crate powers the optional accessibility-page contrast calculator. The production workflow builds it through `wasm-pack`; the browser loads the module only after a user requests a calculation. The component falls back to a local JavaScript implementation if the generated module is absent or fails to initialize.

WebAssembly must not gate navigation, reading, forms or essential information. A JavaScript or static fallback remains mandatory.

## 9. CSS integration contract

- Tailwind CSS 4 imports theme and utility layers without preflight.
- Panda CSS supplies typed tokens and compile-time extracted utilities.
- StyleX uses prefixed priority layers positioned before Tailwind utilities.
- Plain semantic CSS remains the base and fallback.
- The generated CSS cascade must be inspected in production because layered declarations lose to normal unlayered declarations in the CSS cascade.
- A future Next.js application consumes the shared framework-neutral design-token contract and must not introduce a competing reset.

## 10. Remaining compiler roadmap

- complete content/locale manifest validation;
- reproducible dependency lock and license report;
- explicit diagnostics schema;
- [x] explicit expected-route baseline comparison to detect missing required and additional generated pages;
- optional WASM module manifest and browser loader;
- production CSS dead-code and size diagnostics;
- only after a real Next.js module is approved: declare its manifest and route boundary, implement conditional backend orchestration, validate output isolation and route collisions, and define the deployment/proxy contract.

No CI status is used as the definition of project completion.
