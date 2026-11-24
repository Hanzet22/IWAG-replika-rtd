# IWAG V2 Application and Compiler Architecture

## 1. Architecture decision

IWAG V2 uses Astro as the primary website framework and Vite as its frontend build pipeline. The site is an information and event guide, so content routes remain static-first. Next.js is accepted as a **specialized application framework** for bounded, genuinely application-heavy workloads; it does not replace Astro or become a second owner of the public website.

The Rust Active Compiler is the project-level build controller and validator. It is not a replacement HTML/CSS/JavaScript compiler and does not independently transpile Astro, Next.js, or frontend assets. It validates the declared project boundary, checks toolchain prerequisites, invokes the relevant specialist build backend, validates generated output, and writes a build report.

## 2. Build and runtime topology

```text
Developer / CI
    |
    v
Rust iwagc (active build controller)
    |-- inspect source manifest and archive boundary
    |-- check Node / npm / Cargo and specialist toolchains when declared
    |-- invoke Astro CLI for the public website
    |-- invoke Next.js build only for a declared application module
    |-- validate generated output and route ownership
    |-- write .iwag-build report
    |
    +-------------------------------+
    |                               |
    v                               v
Astro 7 + Vite                Next.js (optional module)
    |                               |
    |-- Vue integration             |-- React / App Router
    |   for scoped islands          |-- application-specific
    |-- Tailwind CSS 4              |   server/client workloads
    |-- Panda CSS                   |-- isolated deployment target
    |-- StyleX                      |
    |-- TypeScript / JavaScript     |
    |                               |
    +---------------+---------------+
                    |
                    v
        One coherent IWAG V2 experience
        with explicit route and deployment boundaries

Rust/WASM remains an optional browser-side compute target.
```

The archive at `archive/v1-reference/` is not a runtime dependency and is excluded from the application source root.

## 3. Responsibility boundaries

| Technology | Responsibility | Explicit non-responsibility |
|---|---|---|
| HTML | Semantic content and document structure | Not replaced by canvas rendering |
| CSS | Layout, typography, tokens, responsive behavior, fallbacks | No mandatory JS layout engine |
| JavaScript | Small progressive enhancements and preference controls | No monolithic client application |
| TypeScript | Typed application and tooling code | No second runtime by default |
| Astro | Primary website routing, content rendering and static HTML output | Does not own Next.js application internals |
| Vite | Asset and frontend build pipeline managed by Astro | Not a second application framework |
| Vue | Small interactive components when static HTML is insufficient | Not used for every page or as a second site router |
| Next.js | Specialized React application modules with complex shared state, server rendering, or Next-specific ecosystem requirements | Not the primary website, not a dependency of static content routes, and not a competing owner of Astro routes |
| Tailwind CSS | Utility composition | Preflight is intentionally excluded |
| Panda CSS | Typed design tokens and extracted styling | Not a competing global reset |
| StyleX | Compile-time atomic component styling | No runtime style injection |
| Rust `iwagc` | Active project build controller, validation and reports; orchestrates declared specialist backends | Does not claim to transpile Astro/Next/JS/CSS itself |
| Rust contrast crate | Optional contrast computation compiled to WASM | Not required for normal page rendering |
| WebAssembly | Optional compute module with JavaScript/static fallback | Not required for navigation or content |
| CSS Houdini | Progressive typed custom-property enhancement | Not a baseline dependency |
| SVG | Static diagrams and illustrations | No GPU requirement |
| Canvas 2D | User-activated bounded graphics | No autoplay or always-on render loop |
| WebGL2 / WebGPU | Future opt-in rendering only if measured need exists | No default context/device initialization |
| Node.js | Package manager and frontend tooling runtime | Not the public site runtime |

## 4. Framework ownership and Next.js admission

Astro owns the public website's canonical route tree, content pages, shared shell, and static-first delivery. Vite remains the Astro-managed frontend build pipeline. Vue remains limited to explicitly scoped interactive islands.

Next.js is admitted only for an application workload that materially benefits from React's connected component tree, shared client state, server-side application behavior, or a required Next.js-specific library/API. Examples may include a substantial dashboard, multi-step application workflow, or authenticated workspace. A static page, simple form, isolated counter, or ordinary content page is not sufficient justification.

**Next.js is a separate application boundary, not an Astro component.** Astro's official framework integrations can render and hydrate React components, but that is React integration—not execution of a Next.js App Router application inside Astro. Do not describe the two as interchangeable.

Integration contract:

1. The Next.js module owns only its explicitly assigned application routes. Astro owns all other public routes.
2. Prefer an independently deployable application target. A path mount such as `/app/` may be used only when the hosting edge/reverse proxy can route that prefix to the Next.js service reliably. Otherwise use a dedicated application subdomain; do not fake path integration with client-side redirects or an iframe.
3. If path-mounted, configure Next.js `basePath` at build time and verify static assets, server actions, route handlers, redirects, metadata, and deep links under the prefix. The edge proxy must preserve the required headers and streaming behavior.
4. Authentication, session cookies, CSRF protection, authorization, and logout semantics must be designed explicitly across the site/app boundary. Do not assume cookies or sessions are shared safely just because the applications share a parent domain.
5. Share design tokens and documented UI contracts, not framework internals. Keep the public design system framework-neutral; React-specific components remain inside the Next.js application unless a deliberate port is justified.
6. The Next.js deployment must not be required to render or navigate the static public site. Visitors who never open the application module should not download its React/Next.js runtime.
7. Keep route ownership, canonical URLs, sitemap inclusion, error handling, observability, security headers, cache policy, and deployment rollback explicit.
8. The Active Compiler may orchestrate the Next.js build only after a real module is declared in the source manifest. Do not install Next.js or add a permanent second build pipeline merely to reserve the option.

Default deployment decision: separate app deployment, with an edge reverse-proxy path mount only when the selected host supports it cleanly. A dedicated subdomain is the fallback. The exact host and public route are not selected until an actual application module exists.

## 5. Rust Active Compiler contract

Commands:
- `inspect`: inventory the V2 source root and report the V1 archive boundary.
- `doctor`: validate Node.js minimum version and availability of npm and Cargo; validate Next.js tooling only when an application module is declared.
- `dev`: launch the Astro development server through Rust.
- `build`: validate source/output boundaries, invoke Astro/Vite, invoke declared specialist backends when present, validate generated output, and emit a machine-readable report outside `dist/`.
- `preview`: launch the Astro production preview through Rust.
- `wasm`: explicitly build the optional contrast-engine WASM module.

A successful `iwagc build` means the Rust controller completed its declared validation and the applicable specialist backends produced their expected output. It does not mean every route has passed manual accessibility, browser, visual, content or device-performance evaluation.

## 6. Styling pipeline

- CSS layer order is declared once in `src/styles/compiler-layers.css`.
- StyleX uses its documented `useCSSLayers` object with a `stylex` prefix, base/design layers before its priority layers, and Tailwind utilities after them. This prevents the StyleX layer order from accidentally outranking utility classes.
- Unlayered semantic CSS still outranks normal declarations inside named layers; use utilities only where they do not conflict with the semantic base, or move the relevant rule into a named layer.
- Tailwind CSS v4 imports only its theme and utility layers; preflight remains disabled to avoid competing resets.
- Panda CSS runs through its Vite integration and uses generated typed tokens.
- StyleX runs as a build-time transform with runtime injection disabled.
- Plain CSS remains the semantic base and fallback for every optional enhancement.
- Next.js application styling consumes the shared, framework-neutral design-token contract; it must not introduce a competing global reset or silently fork the design system.

Do not introduce a second CSS reset or duplicate the same design tokens across all styling tools. A feature should have one owning layer.

## 7. Runtime and low-end device rules

- Static HTML is the default; hydrate only components that need interaction.
- No analytics, tracking or remote font service is required by the architecture.
- No graphics context or WebGPU device is created during initial page load.
- Narrow-screen primary navigation uses a native disclosure control; the desktop navigation is hidden at the same breakpoint so duplicate links are not exposed to assistive technology.
- Motion is opt-in and must respect reduced-motion settings.
- SVG and semantic HTML remain available when Canvas, WebGL, WebGPU or WASM are unavailable.
- Next.js code and runtime load only after a visitor enters a route owned by the application module.
- Measure transfer, main-thread work, memory and real-device behavior before adopting heavier libraries.

## 8. Dependency admission

Every new dependency or specialist runtime requires:
1. a concrete user-facing requirement;
2. evidence that the existing stack cannot meet it cleanly;
3. license and provenance review;
4. maintenance and security review;
5. bundle, CPU, memory and compatibility impact;
6. a fallback or removal plan;
7. a clear owner, route boundary and deployment contract.

The target is a coherent stack, not maximum framework count.
