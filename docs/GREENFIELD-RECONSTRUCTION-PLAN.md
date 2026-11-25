# IWAG V2 — RTD Reconstruction and Execution Plan

**Status:** Active execution plan  
**Branch:** `v2/greenfield-global-reconstruction`  
**Baseline:** `main` at `c84ea35f23b4373d498889eb43464e942a6ddb13`  
**Method:** Replica Technical Development (RTD)  
**Relationship:** V1 is the reference baseline; V2 is the independently implemented reconstruction.

## 1. Non-negotiable direction

IWAG V2 follows RTD. Reverse-engineer V1's observable routes, page families, content structures, components, interactions, visual states and responsive behaviour; specify them; reconstruct them in V2; integrate; and verify against the reference. V2 may use a clean implementation and a different stack, but greenfield implementation is a technique, not permission to ignore or reduce the reference product.

Keep V1 outside V2 application imports and build inputs. The archive remains an active engineering reference for inspection, comparison, route mapping and content reconstruction. Reuse of source code or assets is a separate provenance/licensing decision; it does not restrict independent reconstruction of observed behaviour and structure.

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

V1 is the technical and content reference, not a requirement to copy its compiled implementation verbatim. Reconstruct its relevant visual hierarchy, information architecture, content intent, route coverage and interactions. Check volatile facts and asset provenance; do not invent event details, official status or operational guarantees.

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

1. Reference discovery and complete V1 route/page-family inventory.
2. Reverse engineering of layouts, components, assets, interactions, responsive states and technical dependencies.
3. Route, content, component, interaction and locale specifications.
4. V1/V2 gap analysis and prioritised reconstruction backlog.
5. V2 architecture and Rust Active Compiler integration.
6. Reconstruct design tokens, components, page templates and route families.
7. Reconstruct content, policy subject matter, interactions and localization.
8. Integrate all reconstructed modules and verify route coverage.
9. Compare visual, responsive and functional behaviour against V1.
10. Evaluate accessibility, security, performance and runtime behaviour.
11. Iterate on measured gaps and package the implementation.

Do not treat CI/CD status as the project completion criterion. Use CI as one source of implementation evidence; continue resolving scope, usability, performance, accessibility, content and release work independently.

## 11. Current status

- [x] RTD direction established; implementation uses a clean V2 application boundary.
- [x] Repository audit snapshot captured.
- [x] Dedicated reconstruction branch created.
- [ ] Complete path-level V1/V2 classification and route-to-implementation traceability.
- [ ] Archive boundary migration.
- [ ] Active Compiler implementation.
- [ ] CSS ecosystem integration spike.
- [ ] Complete V1-informed V2 design system and page-family reconstruction.
- [ ] Manual accessibility and device evaluation.
- [ ] Full performance evidence and release review.

## 12. Execution update — 23 November 2026

- [x] Dedicated greenfield branch created.
- [x] Rust Active Compiler specification and initial CLI committed.
- [x] Normal npm dev/build/preview commands routed through Rust.
- [x] Build workflow updated to provision stable Rust and invoke the Active Compiler.
- [x] 120 legacy HTML snapshots, five compiled Astro assets and one CDN helper moved to `archive/v1-reference/site/`.
- [x] Archive README added; active V2 source root remains `src/`.
- [x] Panda CSS 2.6.0 and StyleX 0.19.2 integrated alongside Tailwind CSS 4 in the Astro/Vite pipeline.
- [x] Central CSS layer declaration added; Panda and Tailwind preflight resets are not enabled.
- [ ] Validate all CSS plugins and compiler output together.
- [ ] Replace the remaining page templates and global UI with the new V2 identity.
- [ ] Complete route-by-route localization, content and accessibility reconstruction.
- [ ] Measure bundle, CPU, memory and battery behavior on mid/low-end devices.
