# ADR-0001: Static-first Astro architecture with progressive islands

- Status: Accepted
- Date: 2026-11-23
- Decision owners: IWAG V2 project maintainers

## Context

IWAG V2 is an independent, static-first recreation/re-engineering project. Its primary content is informational and multilingual. The project prioritises semantic HTML, keyboard access, low-end device performance, privacy minimisation, five self-hosted font families, and WCAG 2.2 Level A as the engineering target only.

## Decision

Keep **Astro 7 + TypeScript + Vite** as the single application, routing, and build foundation, with static output. Use Astro components and semantic HTML for all core content. Add **Vue 3** only for narrowly scoped interactive islands. Use **Tailwind CSS 4** through its official Vite plugin for utility styling while retaining the existing design-token and component CSS.

This is one application and one build pipeline. Do not add a second Next.js application or run a second framework runtime.

### Next.js capability compatibility

Adopt compatible architectural ideas where useful: file-oriented routes, server-side/build-time data preparation, static rendering, metadata discipline, component boundaries, and progressive client interactivity. These are implementation patterns, not a claim that Next.js App Router APIs run inside Astro. Next.js Server Actions, Next server runtime, middleware conventions, and framework-specific routing APIs remain unavailable unless separately reimplemented as explicit services.

### Progressive graphics and WebAssembly

- CSS Houdini typed custom properties may enhance visual tokens; CSS Paint Worklets remain optional and feature-detected.
- SVG is the accessible static vector baseline.
- Canvas 2D and WebGL2 are opt-in enhancements; no continuous render loop is allowed for decorative content.
- WebGPU is optional and secure-context/browser/device dependent. It must never gate content or navigation.
- Rust/WASM utilities are isolated and opt-in. The default website build must not require a Rust toolchain or a generated WASM binary.
- Every enhancement must have a static HTML/SVG fallback, a user-initiated activation path where appropriate, cleanup, and a reduced-motion-safe implementation.

## Consequences

### Positive
- One static site, one dependency graph, and one deployable output.
- Core content remains readable without JavaScript or graphics APIs.
- Vue hydration is limited to components that need it.
- Vite remains the build pipeline managed by Astro.
- Advanced rendering can be removed without breaking event information.

### Trade-offs
- Next.js-only APIs cannot be imported as if Astro were a Next.js runtime.
- Vue islands add client JavaScript and must be justified component by component.
- Tailwind utilities must not replace semantic markup or design tokens.
- Rust/WASM and GPU paths need separate device/browser evaluation before production use.

## Non-goals

- Running Astro and Next.js as two separate applications in one website deployment.
- Recreating V1 compiled bundles or copying bundled dependencies.
- Requiring Vue, Canvas, WebGL, WebGPU, or WASM to read or navigate core content.
- Claiming WCAG conformance from framework choice or automated checks.
- Claiming legal approval, organiser endorsement, or official status.
- Adding remote fonts, trackers, analytics, or third-party scripts by default.

## References

- Astro Vue integration: https://docs.astro.build/en/guides/integrations-guide/vue/
- Astro islands: https://docs.astro.build/en/concepts/islands/
- Astro framework components: https://docs.astro.build/en/guides/framework-components/
- Tailwind CSS 4 with Astro: https://tailwindcss.com/docs/installation/framework-guides/astro
- CSS Houdini Properties and Values API: https://developer.mozilla.org/en-US/docs/Web/API/CSS/registerProperty
- WebGL: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API
- WebGPU: https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API
- Rust WebAssembly: https://rustwasm.github.io/docs/book/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
