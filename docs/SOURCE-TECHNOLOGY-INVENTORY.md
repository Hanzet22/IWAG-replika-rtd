# IWAG V2 Source and Technology Inventory

**Baseline:** main at `c84ea35f23b4373d498889eb43464e942a6ddb13`  
**Branch:** `v2/greenfield-global-reconstruction`

## Repository observations

The repository tree contains 345 entries. The current inventory reports 120 HTML files outside `src/`, 5 checked-in files under `_astro/`, 4 files under `cdn-cgi/`, 8 Astro files, 4 CSS files, 4 JavaScript files, 6 TypeScript files and 1 Rust source file.

This indicates a mixed repository containing V2 source plus exported/legacy site material. It is not safe to treat the root as a clean source-only tree.

## Current application and build dependencies

From the inspected `package.json`:

- Runtime dependencies: Astro 7, Vue 3.
- Development dependencies: TypeScript 5.9, `@astrojs/vue`, `@tailwindcss/vite`, Tailwind CSS 4.
- Build commands: Astro dev/build/preview and optional `wasm-pack` contrast utility build.
- Node engine: >=22.23.4.
- No StyleX or Panda CSS dependency is currently declared.
- Rust currently contains a small contrast calculation library using `wasm-bindgen`; it is not an Active Compiler.

## Current source organization

- `src/pages/`: Astro routes.
- `src/layouts/`: shared page layout.
- `src/components/`: Vue interactive component(s).
- `src/styles/`: global styles and V2 design-system foundations.
- `src/scripts/`: progressive browser scripts.
- `src/content/`: event content.
- `src/i18n/`: locale definitions and messages.
- `src/data/`: legal draft data.
- `rust/contrast-engine/`: optional Rust/WASM contrast helper.

## Technology decisions to validate

| Technology | Present in current repo | Greenfield treatment |
|---|---|---|
| HTML | Yes | Native semantic output, rewrite templates |
| CSS | Yes | New design tokens and component styles |
| JavaScript | Yes | Small progressive enhancements |
| TypeScript | Yes | Primary application scripting |
| Astro | Yes | Sole application framework candidate |
| Vue | Yes | Interactive islands only |
| Vite | Via Astro | Sole frontend build engine |
| Node.js | Build runtime | Tooling runtime |
| Tailwind CSS | Yes | Utility layer |
| CSS Houdini | Yes | Progressive typed-property enhancement |
| Rust | Contrast utility only | Active Compiler plus registered modules |
| WebAssembly | Optional helper | Explicit opt-in modules with fallback |
| SVG | Existing graphics | Preferred static vector baseline |
| Canvas | Existing opt-in lab | User-triggered enhancement |
| WebGL | Capability probe | Optional, measured renderer only |
| WebGPU | API detection | Optional future backend |
| StyleX | Not installed | Isolated compile-time styling spike |
| Panda CSS | Not installed | Token/recipe generation spike |
| Java | Not established | Exclude from browser animation; justify any build-time JVM use |
| Next.js | Not installed | Patterns only; no second application runtime |

## Classification requirements before archive migration

For every non-`src/` path, capture:
- path and file type;
- likely origin (V1 snapshot, generated output, legal draft, licensed asset, V2 documentation, unknown);
- provenance/source URL where known;
- license/permission status;
- whether it is referenced by active V2 source;
- whether it is needed for historical traceability;
- proposed destination or deletion decision;
- reviewer and decision date.

Do not delete files merely because they look generated. Preserve evidence until classification is complete.
