# IWAG V2 — RTD Product and Engineering Requirements

**Status:** Baseline requirements for Replica Technical Development  
**Reference:** `docs/V1-AUDIT.md` and `docs/RTD-METHODOLOGY.md`  
**Accessibility target:** WCAG 2.2 Level A (A only; AA is not the project conformance target)

## 1. Product direction

IWAG V2 follows **Replica Technical Development (RTD)**. V1 is the reference for reverse engineering and comparison of routes, information architecture, page families, content intent, UI, interactions and responsive behaviour. V2 may be independently implemented and need not copy V1's compiled code.

The implementation must prioritize clarity, accessibility, privacy, maintainability, and reliable operation on low-end devices. Advanced visual effects are progressive enhancements and must never be required to read content or navigate.

## 2. RTD scope lock

Reconstruct the reference website as a product. A different framework or clean V2 source tree is an implementation strategy, not a reduction in reference coverage.

### Reconstruct
1. V1 route hierarchy, aliases, locale variants and navigation.
2. Page families, information architecture, content sections and metadata.
3. UI components, visual hierarchy, design tokens, themes and typography.
4. Interactions, forms, menus, media and state transitions where present.
5. Responsive layouts and relevant device-specific behaviour.
6. Terms, CoC, Privacy and Other Policies subject matter and structure, independently rewritten for V2 while preserving event-level and website-level scope.
7. Observable integrations and technical capabilities where responsible and feasible.

### Improve or adapt
1. Programming language and application architecture.
2. Framework, build stack, dependencies and deployment approach.
3. Accessibility, performance, security and maintainability.
4. Low-end device and constrained-network support.
5. Technical fallbacks for unavailable or unsuitable V1 internals.

### Add
1. WCAG 2.2 Level A engineering implementation and evaluation.
2. Deaf and non-speaking user support.
3. Color-vision deficiency support.
4. Age-inclusive interaction and readability.
5. Optional WebGL/WebGPU enhancement layer.
6. Low-end device and constrained-network support.

### Explicit non-goals
- Do not silently change the target from Level A to Level AA.
- Do not require WebGL/WebGPU for core functionality.
- Do not require autoplaying decorative motion as a default.
- Do not collect personal, health, disability, or emergency-contact data without a necessary, documented purpose.
- Do not import third-party content or branded assets without provenance and rights review.
- Do not claim legal compliance or WCAG conformance solely from automated scans.
- Do not make certification, policy-owner approval, organiser endorsement or legal sign-off a condition for RTD engineering work.

## 3. Architecture principles

- Semantic HTML is the primary content and interaction layer.
- CSS provides layout, themes, responsive behavior and reduced-motion alternatives.
- JavaScript enhances interactions; essential content and navigation must remain usable when enhancement fails.
- Prefer a small, modular dependency graph and documented build tooling.
- Keep content separate from presentation and reusable components.
- Use progressive enhancement and feature detection for optional APIs.
- Avoid a large client-side application where static/server-rendered pages meet the requirement.
- Use secure defaults, dependency pinning, license inventory and a documented update process.
- Define deployment, environment variables, secrets handling, backups and rollback before production.

### Stack decision

ADR-0001 records Astro 7 + TypeScript + Vite with static output as the application and build foundation. Vue 3 is permitted only as a narrowly scoped Astro island; Tailwind CSS 4 is integrated through Vite. CSS Houdini, Canvas, SVG, WebGL, WebGPU and Rust/WASM remain progressive enhancements with static fallbacks. Compatible Next.js architectural patterns may be adapted, but a second Next.js runtime is out of scope.

## 4. Theme, typography and accessibility

Preserve the existing theme requirements, typography requirements, and the complete WCAG 2.2 Level A implementation checklist below. Every applicable criterion must be mapped to pages, components and evidence. Automated checks are useful for regressions but cannot establish conformance alone.

- Semantic structure, text alternatives, keyboard access, focus visibility, page titles, link purpose, headings and labels.
- Accessible forms, instructions, error identification and programmatic status messages.
- Zoom, text resizing, reflow, reduced motion and forced-colors behaviour.
- Captions/transcripts and text alternatives for audio/video where applicable.
- Manual keyboard and representative assistive-technology evaluation.

## 5. Inclusive interaction

- Do not make audio the only way to receive essential information.
- Do not require voice input or phone calls as the only route for a core task.
- Never encode meaning using color alone.
- Use plain language, readable hierarchy, predictable navigation and recoverable errors.
- Do not infer disability, diagnosis or sensory profile.

## 6. Performance and runtime

- Static-first HTML and minimal route-level JavaScript.
- No GPU context or animation loop on initial load.
- SVG/HTML fallback for advanced graphics.
- Lazy-load noncritical media and modules.
- Measure CPU, memory, network transfer, layout shift, interaction responsiveness, GPU context and battery impact on representative devices.
- Establish numeric budgets from measured baselines rather than invented thresholds.

## 7. RTD verification

Track each V1 route/page family to its V2 implementation. Verify route coverage, content-section coverage, locale parity, layout, responsive states, interactions, accessibility, performance, asset provenance, build and runtime behaviour. Record omissions and deviations with reasons and iterate against the evidence.

RTD completion is an engineering assessment. Certification, endorsement, policy-owner approval and legal sign-off are not project goals or completion criteria.
