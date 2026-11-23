# IWAG V2 stack integration map

Updated: 2026-11-23

## One application, one pipeline

| Technology | Integration | Responsibility | Default requirement |
|---|---|---|---|
| HTML | Native Astro templates | Semantic structure and content | Required |
| CSS | Global design tokens and component styles | Layout, themes, responsive UI | Required |
| JavaScript | Small progressive enhancements | Preferences and optional interactions | Optional |
| TypeScript | Astro and browser scripts | Type safety | Required |
| Astro 7 | Primary application and routing | Static rendering, locale routes, layouts | Required |
| Vite | Astro-managed build pipeline | Plugin and asset processing | Required |
| Vue 3 | `@astrojs/vue` island renderer | Small interactive widgets | Opt-in per component |
| Tailwind CSS 4 | `@tailwindcss/vite` plugin | Utility classes alongside existing CSS | Available; use selectively |
| CSS Houdini | `@property` typed custom properties | Typed CSS tokens and progressive visual effects | Progressive enhancement |
| SVG | Inline/vector markup | Static, scalable visual fallback | Preferred for simple graphics |
| Canvas 2D | User-triggered canvas module | Optional raster drawing | Opt-in |
| WebGL2 | Capability probe / isolated renderer | Optional GPU rendering | Opt-in |
| WebGPU | Secure-context capability detection / future backend | Advanced GPU work | Opt-in; limited availability |
| Rust + WASM | Standalone `wasm-pack` crate | Small CPU utility modules | Optional build |
| Next.js patterns | Documented compatibility mapping | File-based conventions, static generation, metadata and component boundaries | Patterns only; no Next runtime |

## Next.js compatibility boundary

Astro and Next.js are both application frameworks. They are not merged into one executable framework. V2 keeps Astro as its only runtime and adapts compatible ideas from Next.js:

- Build-time/static data generation maps to Astro frontmatter and static output.
- Route organisation maps to Astro's file-based `src/pages` routing.
- Shared layouts and metadata map to Astro layouts and document head markup.
- Client interactivity maps to Vue islands or small browser modules.
- Server-only data access must be implemented in Astro build-time code or a separately specified service.

Next-specific APIs such as App Router, Server Actions, Next middleware, and Next server runtime are not directly available in Astro. Do not add a second Next.js app just to claim compatibility.

## Accessibility and performance contract

- Semantic HTML is the source of truth. Tailwind classes and Vue components do not replace accessible names, roles, labels, headings, or keyboard behavior.
- No content or essential navigation depends on client-side hydration.
- Vue islands use the narrowest suitable hydration directive; the graphics lab hydrates only when visible.
- Tailwind Preflight is intentionally omitted to avoid silently resetting the established global component styles.
- Houdini is used only for typed custom properties. CSS Paint Worklets are not assumed to exist.
- SVG remains the fallback if Canvas, WebGL2, or WebGPU is unavailable.
- No autoplay, flashing, parallax, continuous render loops, or GPU context at initial page load.
- The graphics lab activates only after a user action and announces its status in a live region.
- Rust/WASM output is not loaded by the default site; native JavaScript/static fallbacks remain available.
- Five locally hosted fonts remain in place; no external font CDN or remote font import is introduced.

## Research references

- https://docs.astro.build/en/guides/integrations-guide/vue/
- https://docs.astro.build/en/concepts/islands/
- https://docs.astro.build/en/guides/styling/
- https://tailwindcss.com/docs/installation/framework-guides/astro
- https://developer.mozilla.org/en-US/docs/Web/API/CSS/registerProperty
- https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API
- https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API
- https://wgpu.rs/doc/wgpu/documentation/platforms/web/index.html
