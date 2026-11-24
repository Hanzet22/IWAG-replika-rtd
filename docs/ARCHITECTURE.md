# IWAG V2 Architecture

**Status:** Accepted architecture baseline  
**Branch:** `v2/greenfield-global-reconstruction`  
**Application model:** One static-first Astro application, one Vite frontend pipeline, Rust Active Compiler orchestration.

## 1. Application architecture

- **Astro 7** owns the public site, file-based routes, layouts, static rendering and localized pages.
- **Vite** is the single frontend build engine managed by Astro.
- **TypeScript** is the default application and browser scripting language.
- **Vue 3** is limited to small interactive islands where browser interaction is justified; content and navigation remain server/static rendered.
- **Semantic HTML** is the primary structure and accessibility layer. JavaScript enhances rather than gates core content.
- **CSS** owns semantic base styles, layout, themes, responsive behavior and fallbacks.
- **Tailwind CSS 4** supplies utility composition; **Panda CSS** owns typed design tokens/recipes; **StyleX** is limited to isolated atomic component styles. Their CSS layer order and ownership boundaries are documented in [STACK-INTEGRATION.md](./STACK-INTEGRATION.md).
- **CSS Houdini** is progressive enhancement only. SVG is the preferred static vector layer; Canvas, WebGL2 and WebGPU are opt-in enhancements with non-GPU fallbacks.
- **Rust Active Compiler (`iwagc`)** validates source boundaries, orchestrates specialist build tools, checks generated output and emits diagnostics. It does not claim to parse or transpile Astro/TypeScript/CSS itself.
- **Rust/WASM** is isolated to optional utilities. It must not be required to read, navigate or use core pages.
- **Next.js** is an architectural reference and a possible separately bounded specialist application framework only after a real app module is approved. It is not embedded inside Astro and is not installed as a second runtime today.

## 2. Build and source boundaries

- Active application source: `src/`.
- Read-only V1 reference archive: `archive/v1-reference/`.
- Rust build controller: `compiler/iwagc/`.
- Optional contrast engine: `rust/contrast-engine/`.
- Approved static assets: `public/`.
- Build output: `dist/`; compiler reports: `.iwag-build/`.

Normal development/build/preview commands route through the Rust Active Compiler. Astro/Vite and specialist plugins retain ownership of language-specific compilation. The V1 archive must not enter application imports, public assets, route generation or build globs.

## 3. Accessibility and inclusion

The formal project target is **WCAG 2.2 Level A** across all applicable pages, states, locales and complete processes. Level AA and AAA criteria may be adopted as voluntary engineering enhancements; this does not silently change the formal conformance target. See:

- [Accessibility engineering specification](./ACCESSIBILITY-ENGINEERING-SPEC.md)
- [WCAG 2.2 A/AA/AAA criteria register](./WCAG-2.2-AA-COMPLETE-CRITERIA-REGISTER.md)
- [Accessibility implementation matrix](./ACCESSIBILITY-IMPLEMENTATION-MATRIX.md)
- [Neuroinclusive and Life Sciences evidence](./NEUROINCLUSIVE-LIFE-SCIENCES-EVIDENCE.md)

Accessibility is not established by a green pipeline, automated score, framework choice or documentation alone. Acceptance requires source review, repeatable manual technical evaluation and appropriate participation from people with relevant access needs. Do not infer diagnoses or collect disability/health data for personalization.

## 4. Privacy, content and legal boundaries

- No analytics, advertising pixels, remote fonts, third-party scripts, accounts, ticketing, payments, contact forms or attendee-data collection by default.
- Policy documents remain independent drafts, not official or in force, until the actual operator, service/data flows and legal review are verified.
- Event facts, venue details, accessibility facilities, legal statements, third-party assets and translations require provenance and review.
- Do not claim organiser endorsement, legal compliance or WCAG conformance without evidence.

## 5. Performance and progressive enhancement

Static HTML is the core delivery format. Keep route-level JavaScript small, hydrate only interactive islands, lazy-load noncritical media, avoid initial GPU contexts and stop optional rendering work when hidden or unused. Establish performance budgets from measured target devices rather than arbitrary thresholds.

## 6. Decision records and implementation contracts

- [ADR-0001 — Static-first Astro architecture](./ADR-0001-architecture.md)
- [ADR-0002 — Greenfield V2 and Rust Active Compiler](./ADR-0002-greenfield-active-compiler.md)
- [Active Compiler specification](./ACTIVE-COMPILER-SPEC.md)
- [Stack integration map](./STACK-INTEGRATION.md)
- [Next.js specialist-framework boundary](./ADR-NEXTJS-SPECIALIZED-APPLICATION-FRAMEWORK.md)
- [Greenfield reconstruction plan](./GREENFIELD-RECONSTRUCTION-PLAN.md)

**Completion rule:** CI/CD is diagnostic evidence, not the project completion criterion. Continue implementation and evidence gathering independently of unrelated workflow status.
