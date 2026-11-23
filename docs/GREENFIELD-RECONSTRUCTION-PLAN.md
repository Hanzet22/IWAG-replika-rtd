# IWAG V2 Greenfield Global Reconstruction Plan

**Status:** Active execution plan  
**Branch:** `v2/greenfield-global-reconstruction`  
**Baseline:** `main` at `c84ea35f23b4373d498889eb43464e942a6ddb13`  
**Decision:** V1 is a read-only reference archive. V2 is an independent implementation.

## 1. Non-negotiable direction

IWAG V2 is being reconstructed from a clean application boundary. Do not inherit V1 page templates, compiled bundles, CSS, JavaScript, framework wiring, or third-party libraries by default. Reuse is allowed only after an explicit review of purpose, license, maintenance, security, browser support, accessibility, size, and measured performance.

The source archive is evidence, not an application dependency. No import, build glob, runtime route, or production copy step may silently consume legacy files.

## 2. Repository audit snapshot

The inspected `main` tree contains 345 entries:

| Area | Observed |
|---|---:|
| HTML files outside `src/` | 120 |
| Astro components/pages | 8 |
| CSS files | 4 |
| JavaScript files | 4 |
| TypeScript files | 6 |
| Rust source files | 1 |
| checked-in `_astro/` compiled assets | 5 |
| `cdn-cgi/` legacy files | 4 |

Top-level legacy-looking directories include `_astro/`, `cdn-cgi/`, `en/`, `id/`, `coc/`, `privacy/`, and `tnc/`. The active application source is currently under `src/`; a Rust contrast utility exists under `rust/contrast-engine/`.

The counts are a source-tree inventory, not proof that every file is V1. Each path must be classified before moving or deleting it. In particular, preserve historical evidence and licensed font notices.

## 3. Archive boundary

Target repository shape:

- `archive/v1-reference/`: read-only HTML, CSS, JS, media, route snapshots and provenance notes.
- `src/`: V2 application source only.
- `compiler/`: Rust Active Compiler source and configuration.
- `rust/modules/`: optional browser-targeted Rust/WASM modules.
- `docs/`: architecture decisions, evidence, audits, policy drafts and implementation status.
- `public/`: approved V2 static assets only.
- `dist/`: generated build output; never committed.

Do not bulk-move files until route and asset provenance has been mapped. Keep the archive outside Astro's source, public, and content globs.

## 4. Unified application architecture

- Astro is the sole application framework and route system.
- Vite is the single frontend build engine, managed through Astro.
- TypeScript is the default application language.
- Vue is restricted to interactive islands where interaction justifies hydration.
- Semantic HTML is the baseline for all content and controls.
- CSS is the browser rendering foundation.
- Tailwind CSS provides utility composition.
- Panda CSS provides typed design tokens, recipes and generated styling where it adds distinct value.
- StyleX is restricted to isolated components that benefit from atomic compile-time extraction; it must not duplicate Panda recipes or global token ownership.
- CSS Houdini is progressive enhancement only; unsupported browsers use ordinary CSS.
- SVG is the preferred static vector layer; Canvas 2D, WebGL and WebGPU are opt-in enhancements.
- JavaScript and TypeScript own browser interactions. Java is not a native browser animation runtime; only introduce JVM tooling if a concrete build-time or service requirement is justified.
- Next.js patterns may inform architecture, but a second Next.js runtime is explicitly excluded.

All CSS systems must have a documented cascade/layer contract and generated-output ownership. No duplicate token sources, resets, or competing component systems.

## 5. Rust Active Compiler

Rust is an active build orchestrator and custom compilation/validation engine, not merely a standalone WASM utility. The compiler must:

1. Read a deterministic build manifest.
2. Classify source inputs and enforce the archive/source boundary.
3. Validate route, asset, locale and module manifests.
4. Invoke the appropriate maintained frontend compiler/backend for Astro, Vue, TypeScript, CSS and assets.
5. Compile explicitly registered Rust modules to native or WASM targets.
6. Coordinate deterministic build stages and capture diagnostics.
7. Validate production output and produce a machine-readable build report.
8. Fail on source-integrity or compiler errors, not on unrelated optional CI metadata.

Rust must not pretend to compile JavaScript, CSS, Astro or Vue itself unless a dedicated, compatible compiler backend is actually integrated. It owns orchestration, project-specific transformations and validation; specialist compilers own their language semantics.

### Compiler modes

- `dev`: watch/incremental orchestration and actionable diagnostics.
- `build`: deterministic production orchestration, optimization and output validation.
- `inspect`: source manifest and dependency inventory without producing deployable output.
- `wasm`: compile only explicitly registered WASM modules.

The normal production build must use the Active Compiler. A direct Astro-only build may remain as a diagnostic escape hatch, not the release path.

## 6. Styling tool responsibility boundaries

| System | Primary responsibility | Restriction |
|---|---|---|
| CSS | Reset, semantic base, layouts, fallbacks, accessibility | No duplicate design token authority |
| Tailwind CSS | Small utility composition | Avoid utility-only semantic structure |
| Panda CSS | Typed tokens, recipes and patterns | Single token authority; generated CSS reviewed |
| StyleX | Isolated atomic component styles | No duplicate global recipes/tokens |
| Houdini | Typed properties and optional paint enhancements | Never required for content or controls |

A small integration spike must prove the pinned versions can coexist in Astro/Vite and produce deterministic CSS. If a tool cannot be integrated without duplicated output or runtime overhead, record the limitation and keep it behind an adapter rather than forcing an unstable stack.

## 7. UX/UI reconstruction scope

Rebuild the complete user experience:
- information architecture and task journeys;
- global navigation, locale switching and footer;
- homepage and all content templates;
- event discovery, event detail and updates;
- venue, travel, participation and community journeys;
- search, filtering and forms only where the source and product requirements justify them;
- legal and governance drafts with explicit draft status;
- all responsive states and interaction states;
- localization and translation completeness;
- empty, loading, error, success and offline states.

V1 is not a visual template. Use source facts only after checking provenance and volatility. Do not invent event details, official status, policies, organiser identity or operational guarantees.

## 8. Accessibility and inclusive interaction

- WCAG 2.2 Level A is an initial engineering target, not a certification claim.
- Use WAI cognitive accessibility guidance and participatory research as complementary inputs.
- Do not infer disability, diagnosis, sensory profile or attention state.
- Use calm defaults, stable navigation, clear language, visible focus, reversible preferences and recoverable errors.
- Respect `prefers-reduced-motion`; provide user control and avoid flashing, autoplay and unnecessary motion.
- Never use color alone to communicate status.
- Provide scalable text, reflow, semantic labels and keyboard support.
- Validate with people with varied access needs; automated checks alone are insufficient.

## 9. Performance strategy for mid/low-end devices

- Static-first HTML; no hydration for content-only pages.
- Minimal route-level JavaScript and per-island hydration.
- No GPU context or animation loop on initial load.
- SVG/HTML fallback for every advanced graphics path.
- Lazy-load noncritical images and modules.
- Avoid large dependency graphs, deep DOM trees, expensive blur/filter effects and long main-thread tasks.
- Reserve image/media dimensions and use responsive formats.
- Keep fonts local only when licensed and needed; subset where practical.
- Stop observers, timers, workers and rendering work when unused or offscreen.
- Measure CPU, memory, network transfer, layout shift, interaction responsiveness, GPU context and battery impact on representative low-end Android hardware.
- Establish numeric budgets only after baseline measurements; do not invent pass thresholds.

## 10. Execution phases

1. Repository and V1 source inventory.
2. V1 archive boundary and dependency/license audit.
3. Product requirements, route inventory and content provenance.
4. UX research synthesis and global information architecture.
5. Unified architecture and Rust Active Compiler specification.
6. Clean V2 application scaffold and compiler integration.
7. Design tokens and component foundations.
8. Global page/template reconstruction.
9. Interactions, localization and content integration.
10. Accessibility, security and performance evaluation.
11. Release packaging and documentation.

Do not treat CI/CD status as the project completion criterion. Use CI as one source of implementation evidence; continue resolving scope, usability, performance, accessibility, content and release work independently.

## 11. Current status

- [x] Greenfield direction confirmed.
- [x] Repository audit snapshot captured.
- [x] Dedicated reconstruction branch created.
- [ ] Full path-level V1/V2 classification.
- [ ] Archive boundary migration.
- [ ] Active Compiler implementation.
- [ ] CSS ecosystem integration spike.
- [ ] New V2 design system and page implementation.
- [ ] Manual accessibility and device evaluation.
- [ ] Full performance evidence and release review.
