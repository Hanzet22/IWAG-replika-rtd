# IWAG V2 — Product and Engineering Requirements

**Status:** Baseline requirements for re-engineering  
**Target branch:** `v2/foundation-audit-requirements`  
**Reference:** `docs/V1-AUDIT.md`  
**Accessibility target:** WCAG 2.2 Level A (A only; AA is not the project conformance target)

## 1. Product direction

IWAG V2 is a source-first re-engineering effort. The V1 static export is a reference for information architecture and content discovery, not a codebase template.

The implementation must prioritize clarity, accessibility, privacy, maintainability, and reliable operation on low-end devices. Advanced visual effects are progressive enhancements and must never be required to read content, navigate, register, or understand event information.

## 2. Scope lock

### Rework
1. Programming language and application architecture.
2. Framework, build stack, dependencies, and deployment approach.
3. UI/UX and information architecture.
4. Terms, privacy, and conduct policy content.
5. Theme system.
6. Font delivery and typography.

### Add
1. WCAG 2.2 Level A implementation and verification.
2. Deaf and non-speaking user support.
3. Color-vision deficiency support.
4. Age-inclusive interaction and readability.
5. Optional WebGL/WebGPU enhancement layer.
6. Low-end device and constrained-network support.

### Explicit non-goals
- Do not silently change the target from Level A to Level AA.
- Do not require WebGL/WebGPU for core functionality.
- Do not add autoplaying decorative motion as a default.
- Do not collect personal, health, disability, or emergency-contact data without a necessary, documented purpose.
- Do not import third-party content or branded policy pages without permission/provenance checks.
- Do not claim legal compliance or WCAG conformance solely from automated scans.

## 3. Architecture principles

- Semantic HTML is the primary content and interaction layer.
- CSS provides layout, themes, responsive behavior, and reduced-motion alternatives.
- JavaScript enhances interactions; essential content and navigation must remain usable when enhancement fails.
- Prefer a small, modular dependency graph and documented build tooling.
- Keep content separate from presentation and reusable components.
- Use progressive enhancement and feature detection for optional APIs.
- Avoid a single large client-side application where static/server-rendered pages meet the requirement.
- Use secure defaults, dependency pinning, license inventory, and a documented update process.
- Define deployment, environment variables, secrets handling, backups, and rollback before production.

### Stack decision

ADR-0001 records Astro 7 + TypeScript + Vite with static output as the only application and build foundation. Vue 3 is permitted only as a narrowly scoped Astro island; Tailwind CSS 4 is integrated through Vite without replacing the existing semantic component system. CSS Houdini, Canvas, SVG, WebGL, WebGPU and Rust/WASM remain progressive enhancements with non-JavaScript/static fallbacks. Compatible Next.js architectural patterns may be adapted, but a second Next.js application/runtime is explicitly out of scope.

Reopen this decision only if a material requirement changes or measured limitations show that the current architecture cannot meet the product goals. Do not replace the stack solely because another framework is fashionable or because V1 used Astro.

## 4. Theme system

Required user-selectable themes:
1. Light
2. Black
3. Super Black
4. AMOLED Black
5. Dynamic Color

Requirements:
- Theme changes must not change semantic meaning or remove focus visibility.
- Every theme must be checked for text, controls, focus, disabled, hover, selected, and error-state contrast.
- Dynamic Color must have a deterministic fallback on unsupported browsers and must not force low-contrast user/device colors.
- Respect system preference on first visit where appropriate, while allowing explicit user override.
- Persist only the theme preference, using a privacy-conscious mechanism.
- Avoid color-only status communication; pair color with text, icon, shape, or pattern.
- Do not make color-blind users depend on red/green distinctions.

## 5. Typography and fonts

- No external font CDN requests.
- Default to a system font stack for fast rendering and broad platform coverage.
- Self-host optional fonts only after checking license, language glyph coverage, file size, and fallback.
- Use appropriate line height, paragraph width, and scalable units.
- Avoid fixed text sizing that blocks browser zoom or user text-size preferences.
- Ensure long labels, translations, and user-generated text can wrap without clipping.

## 6. Accessibility baseline — WCAG 2.2 Level A

The release gate must evaluate every applicable Level A success criterion in WCAG 2.2, across complete pages, language variants, and responsive layouts.

Minimum engineering checklist includes:
- text alternatives for meaningful non-text content;
- captions for applicable prerecorded synchronized media;
- meaningful semantic structure and relationships;
- meaningful reading and focus order;
- instructions that do not rely on sensory characteristics alone;
- sufficient text alternatives for color-coded information;
- keyboard access to all core functionality;
- no keyboard trap;
- descriptive page titles, link purpose, headings, and labels;
- visible focus indication and predictable interaction;
- language of page and language changes identified where applicable;
- accessible form labels, instructions, and error identification;
- status messages exposed programmatically where applicable;
- no content that violates applicable seizure/flash thresholds;
- content that can be presented without loss when style sheets are disabled.

This list is an implementation aid, not a substitute for the complete normative WCAG 2.2 Level A criteria. The test plan must map each applicable criterion to pages, components, and evidence.

### Testing policy
- Automated checks are useful for regressions but cannot certify conformance alone.
- Manually test keyboard-only navigation.
- Test with representative screen readers and browser/OS combinations.
- Verify zoom, text resizing, focus visibility, and mobile layouts.
- Include disabled users in usability evaluation where feasible and appropriately arranged.
- Record defects, affected criteria, reproduction steps, and retest evidence.

## 7. Deaf and non-speaking user support

- Do not make audio the only way to receive essential information.
- Provide captions for prerecorded speech/video and transcripts where meaningful.
- Provide text equivalents for announcements, alerts, instructions, and support pathways.
- Do not require voice input, phone calls, or spoken confirmation as the only route for a core task.
- Offer text-based contact and support alternatives.
- Use clear visual status indicators, but pair them with text and accessible programmatic announcements.
- For live event announcements, provide a reasonable text/visual information channel where operationally feasible.
- Do not assume all deaf users use sign language or that all non-speaking users use the same communication method.

## 8. Color-vision and visual accessibility

- Never encode meaning using color alone.
- Use labels, icons, patterns, shape, and position redundantly.
- Provide a high-contrast-friendly presentation and test all theme states.
- Avoid red/green-only charts, maps, status indicators, and badges.
- Keep controls and focus indicators distinguishable from adjacent surfaces.
- Provide text labels or data tables for information conveyed visually.

## 9. Age-inclusive interaction

- Use plain language and explain uncommon terms.
- Use readable text, clear hierarchy, and predictable navigation.
- Make controls easy to identify and operate.
- Avoid time limits unless essential; provide warning/extension where applicable.
- Keep error messages specific and recovery-oriented.
- Avoid relying on gesture-only interactions.
- Support browser zoom and device text scaling.
- Do not stereotype users by age; provide adjustable, consistent controls for everyone.

## 10. Motion, animation, and visual effects

- Respect `prefers-reduced-motion` and provide an in-product motion reduction control if complex motion exists.
- No autoplaying decorative animation by default.
- Avoid flashing, rapid transitions, parallax, and forced motion.
- Provide pause/stop controls for any qualifying moving, blinking, or auto-updating content.
- Stop or suspend offscreen animation work.
- Clean up animation frames, observers, listeners, and timers when components unmount.
- Prefer transform/opacity only when justified; avoid expensive blur, large shadows, and continuous layout recalculation.
- Never use animation as the only way to communicate a state change.

## 11. WebGL and WebGPU

WebGL/WebGPU are optional enhancement technologies only.

- Core content, navigation, forms, and registration must work without either API.
- Detect support at runtime; do not infer support from user-agent strings.
- Provide a static/DOM fallback for unsupported, blocked, lost, or failed graphics contexts.
- Avoid creating a GPU context on initial page load unless the current page genuinely needs it.
- Respect reduced motion, device constraints, context loss, and browser resource limits.
- Release GPU resources and stop render loops when no longer needed.
- Do not use GPU rendering for text or controls that can be rendered accessibly with HTML.
- Provide a user control to disable nonessential advanced effects.
- Test on integrated/older GPUs and mobile devices; measure memory, frame time, startup, and battery impact.

## 12. Low-end device and network requirements

- Static-first content and progressive enhancement.
- Minimize JavaScript shipped to content pages.
- Lazy-load noncritical media and defer noncritical scripts.
- Use responsive images only when media is part of the approved content scope.
- Avoid large client-side bundles, excessive DOM depth, expensive filters, and unnecessary third-party scripts.
- Reserve media dimensions to reduce layout shifts.
- Provide useful loading, empty, offline, and error states.
- Core informational pages must remain readable on constrained connections.
- Establish measured performance budgets before implementation; do not invent arbitrary pass metrics without baseline devices and test methodology.

## 13. Privacy, security, and legal document requirements

### Separate documents
- Terms of Service / Terms and Conditions.
- Privacy Policy.
- Code of Conduct.
- Cookie Policy only where applicable to actual cookies or similar technologies.
- Event-specific notices/consents where required.

### Privacy-by-design
- Document each data field, purpose, lawful basis, recipient/processor, retention period, and user-rights pathway.
- Collect only data necessary for a defined purpose.
- Avoid collecting health/disability information unless genuinely necessary for an identified accommodation or safety purpose.
- Apply special handling to children's personal data and obtain parent/guardian consent where legally required.
- Provide accessible privacy notices and accessible consent/withdrawal mechanisms.
- Maintain processor/vendor inventory and review cross-border transfers.
- Reconcile analytics, crash reporting, payment, and media tools with public disclosures.
- Do not load optional analytics or advertising trackers until their purpose, legal basis, and consent requirements have been assessed.
- Define incident response, access control, deletion, retention, and backup handling.

### Legal review
Review Indonesian applicability including, as relevant:
- UU 27/2022 on Personal Data Protection;
- PP 71/2019;
- UU 1/2024 (ITE);
- UU 8/2016 and PP 42/2020;
- UU 8/1999 on Consumer Protection;
- later amendments and implementing rules in force at publication.

Assess international laws such as GDPR only where territorial scope and actual processing/targeting make them applicable. Legal applicability must be assessed, not assumed from global accessibility alone.

Do not copy broad liability waivers, no-refund clauses, cancellation terms, or organizer discretion clauses without legal review. Legal copy is not complete until reviewed against the real event/registration/payment process by qualified counsel.

## 14. Localization and content governance

- Keep language variants structurally consistent without forcing literal word-for-word translation where meaning differs.
- Identify the page language in markup and language changes within content.
- Avoid embedding important copy in images.
- Maintain a content owner, review date, source/provenance, and translation status for policy and event content.
- Keep third-party names, logos, photographs, and policy content subject to rights/provenance review.

## 15. Release gates

A V2 release candidate is not ready until:
1. Architecture decisions and dependency/license inventory are documented.
2. Core pages work without optional GPU APIs or decorative JavaScript.
3. All five required themes are implemented and contrast-tested.
4. External font CDN usage is absent.
5. Applicable WCAG 2.2 Level A criteria are mapped and manually evaluated.
6. Keyboard and screen-reader checks are completed on representative critical flows.
7. Deaf/non-speaking and color-vision support requirements are verified.
8. Low-end device and constrained-network tests are recorded.
9. Privacy/vendor/data inventory is reconciled with the published Privacy Policy.
10. Terms, Privacy Policy, and Code of Conduct receive appropriate legal/content review.
11. No unresolved critical security, privacy, or accessibility defects remain.
12. Rollback and incident-response procedures are documented.

## 16. Suggested implementation phases

| Phase | Deliverable |
|---|---|
| 0 — Foundation | ADRs, content inventory, ownership/license review, requirements traceability |
| 1 — Core shell | Semantic layout, navigation, localization, responsive system, five theme tokens |
| 2 — Accessibility | Level A components, keyboard behavior, labels, captions/transcripts, error/status patterns |
| 3 — Content | Rebuilt page templates and approved content migration |
| 4 — Legal/privacy | Separate policies, vendor/data map, accessible consent and contact flows |
| 5 — Enhancement | Optional WebGL/WebGPU feature with static fallback and kill switch |
| 6 — Verification | Browser/AT testing, performance, security, privacy, legal review, release evidence |

## 17. Decision log

| Decision | Status |
|---|---|
| WCAG target | Locked: WCAG 2.2 Level A only |
| Themes | Locked: Light, Black, Super Black, AMOLED Black, Dynamic Color |
| External font CDN | Prohibited |
| WebGL/WebGPU | Optional progressive enhancement |
| Low-end support | Mandatory |
| Deaf/non-speaking support | Mandatory |
| Color-blind support | Mandatory |
| Age-inclusive support | Mandatory |
| V1 archive role | Reference/audit only; not V2 source template |
| Legal documents | Separate and subject to qualified review |
| Framework/language | Recorded in ADR-0001: Astro 7 + TypeScript, static output |

## 18. Primary references

- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Indonesia UU 27/2022: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022
- Indonesia PP 71/2019: https://peraturan.bpk.go.id/Details/122030/pp-no-71-tahun-2019
- Indonesia UU 1/2024: https://peraturan.bpk.go.id/Details/274494/uu-no-1-tahun-2024
- Indonesia UU 8/2016: https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016
- Indonesia PP 42/2020: https://peraturan.bpk.go.id/Details/142301/pp-no-42-tahun-2020
- Indonesia UU 8/1999: https://peraturan.bpk.go.id/Details/45288/uu-no-8-tahun-1999
- EU GDPR: https://eur-lex.europa.eu/eli/reg/2016/679
- Indonesia UU 1/2026: https://peraturan.bpk.go.id/Details/337869/uu-no-1-tahun-2026

## 15. Legal, regulatory, and content-integrity requirements

The implementation baseline and release checklist are maintained in [docs/LEGAL-COMPLIANCE-MATRIX.md](LEGAL-COMPLIANCE-MATRIX.md). The live-site reading and page-specific migration notes are maintained in [docs/ORIGINAL-SITE-REFERENCE.md](ORIGINAL-SITE-REFERENCE.md).

Non-negotiable requirements:
- Treat Indonesian Law 27/2022 on Personal Data Protection as the binding baseline when V2 processes personal data within its scope. Identify the actual controller, lawful basis, purposes, processors, retention, rights and transfer route before collecting data.
- Prepare for PP 33/2026, promulgated 16 July 2026 and scheduled to take effect 16 January 2027. Do not describe it as already effective before that date.
- Assess PP 17/2025 and Permenkomdigi 9/2026 child-protection requirements where the electronic service is designed for or may be accessed by children. A physical event age rating does not itself remove website duties.
- Assess PP 71/2019, the ITE framework, PSE registration, consumer protection and PMSE requirements against the real operator and service model. Do not assume every static page is an e-commerce platform.
- Apply foreign laws such as GDPR only when their territorial scope is triggered. International standards and treaties must not be mislabelled as universally binding website laws.
- Keep WCAG 2.2 Level A as the formal target only. It is a technical conformance target, not a claim of Indonesian statutory compliance; test every applicable Level A criterion.
- No third-party tracking, analytics, advertising pixels or remote fonts by default. Any later integration needs a documented purpose, lawful basis, disclosure, vendor and retention review.
- No event registration, ticket sales, accounts, sponsor forms or collection of sensitive/child data until the legal operator, data controller, business model and policy text are verified.
- Do not copy V1 legal wording, event rules, assets, staff details, photographs or brand elements without a documented rights basis and content-owner review.
- Mark all event, venue, transport, visa, ticket, pricing, sponsorship and accessibility facts with a source and review date. Revalidate volatile information before release.
- Do not publish legal compliance or accessibility conformance claims based only on automated checks or draft documentation.


## Global UI/UX reconstruction
Every tab and route must use the shared accessibility-first layer: predictable navigation, scalable text, contrast preferences, reduced-motion and content-spacing controls, semantic structure, meaningful text alternatives, visible keyboard focus and responsive layouts. This does not claim one configuration fits everyone or that WCAG conformance has been achieved.
