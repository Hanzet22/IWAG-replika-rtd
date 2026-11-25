# Replica Technical Development (RTD)

**Project:** IWAG V2 reconstruction  
**Method:** Replica Technical Development  
**Purpose:** Reconstruct the reference website as a technically coherent, independently implemented V2.

## 1. Definition

**Replica Technical Development (RTD)** is the end-to-end engineering method for studying a reference website and developing a working replica/reconstruction of its observable product: structure, routes, content model, presentation, interactions, responsive behaviour, and technical capabilities.

RTD is not a certification programme, legal approval workflow, policy-owner approval process, or request for endorsement from the reference site's operator. Those are not project goals or completion criteria.

The reference site is the system under study. V1 is evidence and a baseline for comparison. V2 is the independently implemented result.

## 2. Core workflow

1. **Reference discovery** — enumerate routes, page families, locale variants, assets, content, UI states, navigation, forms, media, and external integrations.
2. **Reverse engineering** — inspect observable behaviour, DOM structure, styling, scripts, network dependencies where available, responsive states, and interaction flows. Record unknowns rather than inventing internals.
3. **Specification** — produce route maps, component maps, data/content schemas, behaviour notes, design measurements, asset provenance, and implementation requirements.
4. **Reconstruction** — reproduce the reference's relevant information architecture, page coverage, content intent, visual hierarchy, responsive behaviour, and functional interactions in V2.
5. **Adaptation** — replace unavailable or unsuitable internals with maintainable alternatives where source code is unavailable, dependencies are unsuitable, or V2 has a justified technical improvement. Document material deviations.
6. **Integration** — connect reconstructed routes, content, components, assets, locale data, and application services into the V2 stack.
7. **Verification** — compare V2 against the reference and its specification: route coverage, content parity, layout, responsive states, interactions, accessibility, performance, and runtime/build behaviour.
8. **Iteration** — fix measured gaps and update the evidence and implementation status.

## 3. What must be reconstructed

The reconstruction scope is the reference website as a product, not merely its homepage or visual theme:

- Information architecture, route hierarchy, aliases, and navigation.
- Page templates, content sections, metadata, and page-specific layouts.
- English and Indonesian source content, plus any additional V2 locales explicitly supported.
- UI components, design tokens, typography, spacing, themes, and visual states.
- Interaction behaviour, controls, forms, menus, accordions, filters, search, media, and state transitions where present.
- Responsive layouts and device-specific behaviour.
- Error, empty, loading, unavailable, and fallback states.
- Technical integrations and dependencies that can be observed and responsibly reproduced.
- Content families such as About, event information, location, travel, participation, updates, team, TnC, CoC, Privacy, and Other Policies.

For content and policies, RTD means substantive reconstruction of the source's subject matter and structure in independently written V2 content. It does not mean importing the original organiser's authority, contracts, operational powers, or claiming that V2 administers the event.

## 4. V1 and V2 relationship

- V1 is the reference baseline and historical evidence.
- V1's compiled bundles are evidence for reverse engineering, not automatically the preferred V2 implementation.
- V1 routes and page families must be mapped, not discarded merely because V2 uses a new framework.
- V2 may use a different stack while preserving the reference product's relevant behaviour and coverage.
- A greenfield implementation technique is allowed; a greenfield-only product scope that ignores the reference is not RTD.
- Every material omission, replacement, or behaviour change must be recorded with a technical reason.

## 5. Technical architecture

The current Astro/Vite/TypeScript/Vue/Rust Active Compiler stack is an implementation choice within RTD. It does not redefine RTD.

- Astro owns routes and static-first page rendering.
- Vite and specialist plugins compile their respective frontend languages.
- TypeScript and semantic HTML implement browser behaviour and accessible structure.
- Vue is used for justified interactive islands.
- Rust Active Compiler orchestrates and validates the build; it does not replace language-specific compilers.
- CSS, Tailwind, Panda, StyleX, SVG, Canvas, WebGL, WebGPU, and WASM are used only where they serve a defined reconstruction requirement.

## 6. Verification and completion

RTD progress is measured by engineering evidence:

- Reference route inventory and V2 route mapping.
- Page-family and content coverage.
- Component and interaction reconstruction.
- Locale completeness and translation parity.
- Visual and responsive comparison.
- Functional behaviour and state coverage.
- Asset/dependency provenance and technical integrity.
- Accessibility and performance evaluation.
- Build, runtime, and deployment correctness.

A certification, endorsement, policy-owner approval, organiser permission to define the method, or legal sign-off is **not** an RTD completion criterion. Legal research and factual cautions may be retained as separate supporting documentation where relevant, but they must not block reverse engineering or technical implementation.

## 7. Non-goals

RTD does not aim to:
- obtain certification or a conformance badge;
- obtain approval from a policy owner or reference-site operator;
- make V2 an official IWAG property or event administration system;
- turn technical reconstruction into a legal/compliance consultancy workflow;
- replace implementation with disclaimers, draft-status banners, or documentation-only deliverables.

## 8. Project rule

**Reverse Engineer → Specify → Reconstruct → Integrate → Verify → Iterate.**

When project documents conflict with this method, this RTD definition controls the project's technical scope.