# IWAG V2 Application and Compiler Architecture

## 1. Architecture decision

IWAG V2 uses one application architecture: **Astro static output with Vite as its frontend build pipeline**. The site is an information and event guide. It does not need a second client-side application runtime.

The Rust Active Compiler is the project-level build controller and validator. It is not a replacement HTML/CSS/JavaScript compiler and does not independently transpile Astro templates. It validates the declared project boundary, checks toolchain prerequisites, invokes the specialist frontend backend, validates generated output, and writes a build report.

## 2. Build and runtime topology

```text
Developer / CI
    |
    v
npm scripts
    |
    v
Rust iwagc (active build controller)
    |-- inspect source manifest and archive boundary
    |-- check Node / npm / Cargo
    |-- invoke Astro CLI
    |-- validate static output
    |-- write .iwag-build report
    |
    v
Astro 7
    |
    v
Vite
    |-- Vue integration: only explicit interactive islands
    |-- Tailwind CSS 4: utility layer
    |-- Panda CSS: typed tokens and extracted styling
    |-- StyleX: compile-time atomic component styling
    |-- TypeScript / JavaScript transforms
    |-- Rust/WASM: optional separately built compute module
    |
    v
Static HTML + CSS + minimal opt-in JavaScript
```

The archive at `archive/v1-reference/` is not a runtime dependency and is excluded from the application source root.

## 3. Responsibility boundaries

| Technology | Responsibility | Explicit non-responsibility |
|---|---|---|
| HTML | Semantic content and document structure | Not replaced by canvas rendering |
| CSS | Layout, typography, tokens, responsive behavior, fallbacks | No mandatory JS layout engine |
| JavaScript | Small progressive enhancements and preference controls | No monolithic client application |
| TypeScript | Typed application and tooling code | No second runtime |
| Astro | Routing, content rendering and static HTML output | No need for Next.js alongside it |
| Vite | Asset and frontend build pipeline managed by Astro | Not a second application framework |
| Vue | Small interactive components when static HTML is insufficient | Not used for every page |
| Tailwind CSS | Utility composition | Preflight is intentionally excluded |
| Panda CSS | Typed design tokens and extracted recipes/utilities | Not a competing global reset |
| StyleX | Compile-time atomic component styling | No runtime style injection |
| Rust `iwagc` | Active project build controller, validation and reports | Does not claim to transpile Astro/JS/CSS itself |
| Rust contrast crate | Optional contrast computation compiled to WASM | Not required for normal page rendering |
| WebAssembly | Optional compute module with JavaScript/static fallback | Not required for navigation or content |
| CSS Houdini | Progressive typed custom-property enhancement | Not a baseline dependency |
| SVG | Static diagrams and illustrations | No GPU requirement |
| Canvas 2D | User-activated bounded graphics | No autoplay or always-on render loop |
| WebGL2 / WebGPU | Future opt-in rendering only if measured need exists | No default context/device initialization |
| Node.js | Package manager and frontend tooling runtime | Not the public site runtime |
| Java | Not present in the audited V1/V2 source inventory | No browser animation runtime is introduced |
| Next.js | Not installed; alternative framework concepts may inform design | No parallel Next.js app/runtime |

## 4. One architecture, not a framework collection

Astro owns route generation and static output. Vite is the single build pipeline behind Astro. Vue is a scoped integration for interactive islands, not a second routing system.

Next.js is deliberately excluded. Installing it beside Astro would introduce another framework, routing model, bundling assumptions and runtime surface without solving a requirement that Astro cannot already meet. Its patterns may be studied, but Next-specific APIs are not directly portable.

Java is not included because the archived V1 source inventory contains no Java source and browser animation is implemented by browser technologies such as CSS, JavaScript, SVG, Canvas, WebGL and WebGPU. Adding a JVM would increase build and runtime complexity without a demonstrated product need.

## 5. Rust Active Compiler contract

Commands:
- `inspect`: inventory the V2 source root and report the V1 archive boundary.
- `doctor`: validate Node.js minimum version and availability of npm and Cargo.
- `dev`: launch the Astro development server through Rust.
- `build`: validate source/output boundaries, invoke Astro/Vite, require generated HTML, and emit a machine-readable report outside `dist/`.
- `preview`: launch the Astro production preview through Rust.
- `wasm`: explicitly build the optional contrast-engine WASM module.

A successful `iwagc build` means the Rust controller completed its validation and Astro/Vite produced static HTML. It does not mean every route has passed manual accessibility, browser, visual, content or device-performance evaluation.

## 6. Styling pipeline

- CSS layer order is declared once in `src/styles/compiler-layers.css`.
- StyleX uses its documented `useCSSLayers` object with a `stylex` prefix, base/design layers before its priority layers, and Tailwind utilities after them. This prevents the StyleX layer order from accidentally outranking utility classes.
- Unlayered semantic CSS still outranks normal declarations inside named layers; use utilities only where they do not conflict with the semantic base, or move the relevant rule into a named layer.
- Tailwind CSS v4 imports only its theme and utility layers; preflight remains disabled to avoid competing resets.
- Panda CSS runs through its Vite integration and uses generated typed tokens.
- StyleX runs as a build-time transform with runtime injection disabled.
- Plain CSS remains the semantic base and fallback for every optional enhancement.

Do not introduce a second CSS reset or duplicate the same design tokens across all three styling tools. A feature should have one owning layer.

## 7. Runtime and low-end device rules

- Static HTML is the default; hydrate only components that need interaction.
- No analytics, tracking or remote font service is required by the architecture.
- No graphics context or WebGPU device is created during initial page load.
- Motion is opt-in and must respect reduced-motion settings.
- SVG and semantic HTML remain available when Canvas, WebGL, WebGPU or WASM are unavailable.
- Measure transfer, main-thread work, memory and real-device behavior before adopting heavier libraries.

## 8. Dependency admission

Every new dependency requires:
1. a concrete user-facing requirement;
2. evidence that the existing stack cannot meet it cleanly;
3. license and provenance review;
4. maintenance and security review;
5. bundle, CPU, memory and compatibility impact;
6. a fallback or removal plan.

The target is a coherent stack, not maximum framework count.
