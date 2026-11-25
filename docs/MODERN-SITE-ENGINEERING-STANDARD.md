# Modern Site Engineering Standard — IWAG V2

**Status:** Supporting engineering standard under Replica Technical Development (RTD)  
**Snapshot:** 25 November 2026  
**Applies to:** Reference discovery, reconstruction, implementation, integration and verification  
**Authority:** This document operationalizes the existing RTD methodology; it does not replace it or reduce V1 reconstruction scope.

## 1. Purpose and relationship to RTD

IWAG V2 is a reconstruction of an observable reference website, not a greenfield redesign exercise. Modern engineering practices are used to make the reconstruction robust, maintainable and independently implemented.

The controlling workflow remains:

**Reference Discovery → Reverse Engineering → Specification → Reconstruction → Integration → Verification → Iteration.**

Modernization must not silently remove reference routes, page families, content intent, navigation, interaction states, locale coverage, responsive behavior or observable capabilities. When a modern implementation intentionally differs from V1, record the difference, reason, affected routes/states and verification evidence.

This standard is a technical decision aid. It is not a certification scheme, legal approval workflow, organiser endorsement request or policy-owner sign-off gate.

## 2. Reference-first engineering contract

Before implementing a page family, record:

- Source URL, route, locale and observation date.
- Page family, purpose, content sections, hierarchy and navigation relationships.
- Interactive controls, expected input, state transitions, validation and recovery.
- Responsive states, overflow behavior, sticky/fixed elements and navigation changes.
- Assets, dimensions, formats, loading behavior and provenance.
- Empty, loading, error, unavailable and fallback states.
- Observable network dependencies and third-party integrations, without assuming inaccessible server internals.
- Confidence level, unresolved questions and evidence links.

Use a route/state matrix rather than homepage-only screenshots. Compare equivalent routes and states across V1 and V2. Screenshots are useful evidence, but do not establish semantic structure, keyboard operation, content completeness or behavior by themselves.

A reconstruction record should distinguish **observed fact**, **inference**, **implementation decision** and **unverified assumption**. Never present inferred backend architecture as observed fact.

## 3. Semantic platform and progressive enhancement

### Baseline

- Use standards-based HTML elements according to their meaning.
- Keep headings, landmarks, lists, tables, links, buttons and form controls semantically correct.
- Prefer native browser controls and platform behavior over custom replacements where they meet the requirement.
- Use ARIA only to express semantics or state that native HTML does not already provide. Do not add redundant or contradictory ARIA.
- Preserve meaningful DOM order and keyboard order.
- Keep essential information and navigation available as rendered HTML.

### Progressive enhancement contract

The site must remain understandable and navigable when optional JavaScript, a Vue island, WASM, Canvas, WebGL or WebGPU fails or is unavailable. Enhancement may add convenience or visual richness; it must not become the only way to access essential content or complete a core information task.

For each enhanced component, document:
1. Its HTML/CSS baseline.
2. The enhancement and the user-visible benefit.
3. Feature detection and failure handling.
4. Keyboard and assistive-technology behavior.
5. Reduced-motion and low-resource behavior.
6. Cleanup of listeners, observers, timers, animation frames and graphics resources.

Do not infer browser capability from user-agent strings when feature detection is available.

## 4. Interoperability and browser support

Use web standards and progressive enhancement to reduce browser-specific dependencies. Maintain a browser/device matrix based on the project's actual audience and supported test devices.

For each critical feature:
- Identify the relevant HTML, CSS or JavaScript platform capability.
- Check current compatibility information, including MDN Browser Compatibility Data and Baseline where relevant.
- Provide a functional fallback for unsupported or restricted optional capabilities.
- Test the complete user task, not merely whether an API exists.
- Record browser, version, operating system, viewport, input method and test result.

A Baseline label is useful compatibility context, not a substitute for checking the project's supported browser/device matrix. Avoid experimental APIs in critical paths. Do not ship vendor-prefixed or browser-specific behavior without a documented need and fallback.

## 5. Responsive and adaptive behavior

Responsive behavior is content-driven, not a fixed collection of device mockups.

Validate at minimum:
- Narrow mobile, typical mobile, tablet, laptop and wide desktop widths.
- Portrait and landscape where layout behavior changes.
- Browser zoom and enlarged text.
- Long headings, long URLs, translated strings and unusually large content.
- Keyboard-only use and touch input.
- Navigation expansion, menus, dialogs and tables.
- Reduced motion, forced colors and high-contrast presentation where supported.

Requirements:
- Avoid fixed-height containers that clip content.
- Allow text and controls to reflow without overlap or truncation.
- Use fluid sizing and content-based breakpoints.
- Keep horizontal scrolling limited to content that is genuinely two-dimensional, such as wide data tables.
- Ensure sticky/fixed elements do not obscure focused controls or important content.
- Preserve logical reading order when layouts change.
- Do not hide essential content solely because a viewport is small.

## 6. Accessibility and cognitive usability

The formal project conformance target remains the one declared in the current accessibility specification. This standard does not silently upgrade that target or claim conformance.

Engineering practice:
- Use WCAG 2.2 as the normative accessibility reference.
- Map applicable success criteria to routes, components, states and evidence.
- Use W3C COGA material as supplemental design guidance; it is not itself a separate normative WCAG conformance standard.
- Provide clear page structure, descriptive labels, predictable navigation and consistent interaction patterns.
- Make instructions and error recovery specific and understandable.
- Avoid ambiguous icon-only controls; use visible labels or accessible names that communicate the action.
- Keep choices and workflows understandable; avoid unnecessary branching and hidden state.
- Do not rely on memory, color, shape, position, sound or motion alone to communicate essential meaning.
- Respect text resizing, zoom, reduced motion, contrast preferences and assistive technology.
- Evaluate real tasks with people with varied access needs when feasible; automated scans alone are insufficient.

Research evidence is informative, not universal proof. Small-sample usability studies can identify design risks but must not be generalized as population-wide estimates. Record sample size, task, method and limitations when citing empirical findings.

### Research notes

- Gartland et al. (2022), *The State of Web Accessibility for People with Cognitive Disabilities: A Rapid Evidence Assessment*, reviewed 45 papers and reported heterogeneous evidence with limited high-quality intervention evidence. This supports iterative, participatory evaluation rather than claims that one checklist guarantees cognitive accessibility. DOI: https://doi.org/10.3390/bs12020026
- Hu & Feng (2015), *Investigating Information Search by People with Cognitive Disabilities*, studied 23 participants and found that information architecture and recovery from navigation errors materially affected search tasks. DOI: https://doi.org/10.1145/2729981.2729988
- Moreno, Alarcón & Martínez (2021), *Designing and Evaluating a User Interface for People with Cognitive Disabilities*, reported usability issues in a preliminary six-participant evaluation, including ambiguous icons and difficulty distinguishing help-resource types. Treat the findings as design signals, not population estimates. DOI: https://doi.org/10.1145/3471391.3471400

## 7. Security and privacy engineering

Use secure-by-default implementation and threat-aware review even for a primarily informational site.

- Use OWASP ASVS as a structured verification reference where applicable; select requirements appropriate to the actual features and risk.
- Use NIST Cybersecurity Framework 2.0 as an organizational risk-management reference, not as a product certification claim.
- Validate and constrain untrusted input at the appropriate boundary.
- Encode output for its destination context; avoid unsafe HTML injection.
- Use restrictive, tested security headers and a Content Security Policy that reflects actual dependencies.
- Keep secrets out of source control, client bundles, logs and public build artifacts.
- Pin and inventory dependencies; review provenance, maintenance status, known vulnerabilities and licenses.
- Minimize third-party requests and document any external resource, data flow and operational dependency.
- Do not introduce analytics, session replay, fingerprinting, advertising pixels or remote fonts without a defined need and a documented privacy/data-flow decision.
- Avoid collecting personal, health, disability or attendee data when the static information site does not need it.
- Treat uploaded content, external responses and copied reference material as untrusted input.

Security controls must be verified against the real deployed configuration. A header declaration in source does not prove the production response contains that header. A dependency audit does not prove the whole application is secure.

Primary references:
- OWASP Application Security Verification Standard: https://owasp.org/www-project-application-security-verification-standard/
- NIST Cybersecurity Framework 2.0: https://www.nist.gov/cyberframework

## 8. Performance and resilience

The performance objective is reliable access to essential information on low-end and mid-range mobile devices, including constrained networks.

Measure:
- Core Web Vitals: LCP, INP and CLS.
- Initial HTML, CSS, JavaScript, font, image and media transfer.
- Critical request count and dependency chains.
- Main-thread long tasks, hydration and interaction latency.
- Image decode and layout shifts.
- Memory and optional graphics startup/resource use where measurable.
- Essential task completion, errors and recovery.

Use representative route/device/network scenarios. Report browser version, device class, cache state, network condition and test method. Use the 75th percentile only when a sufficiently representative sample exists. A single desktop Lighthouse run or successful CI build is not field-performance evidence.

Keep numerical budgets unset until representative baselines are collected. Set and revise budgets using measured bottlenecks, not arbitrary targets. Never trade readability, accessibility, route coverage, content accuracy or privacy for a smaller bundle or better synthetic score.

Provide useful unavailable/error states and preserve access to already-rendered content when optional resources fail. Avoid making essential pages dependent on remote fonts, third-party scripts or graphics APIs.

Reference: https://web.dev/articles/vitals

## 9. Maintainability and change control

- Keep route data, content, UI components and infrastructure responsibilities separate.
- Prefer small components with explicit contracts over broad abstractions that obscure behavior.
- Keep the dependency graph understandable and avoid duplicate runtimes.
- Document the ownership and CSS layer contract for each styling system.
- Pin toolchain and dependency versions where reproducibility requires it.
- Record architecture changes as decisions with context, alternatives, consequences and rollback considerations.
- Preserve source-to-output traceability for generated routes and assets.
- Keep V1 reference material outside V2 application imports and build inputs while retaining it for inspection and comparison.
- Make changes in focused branches and review the diff against the RTD scope before merging.

## 10. Verification matrix and completion evidence

Every reconstructed route family should be verified across the relevant dimensions:

| Dimension | Minimum evidence |
|---|---|
| Route coverage | V1-to-V2 route mapping, aliases and locale coverage |
| Content | Section/intent comparison, factual provenance and link checks |
| Structure | Semantic landmarks, heading order and DOM reading order |
| Interaction | Keyboard, pointer/touch, state transitions, errors and recovery |
| Responsive | Representative widths, zoom, text enlargement and overflow checks |
| Accessibility | Criterion-to-route mapping, manual review and assistive-technology checks |
| Interoperability | Supported browser/device matrix and fallback behavior |
| Security | Dependency/configuration review and feature-appropriate security checks |
| Privacy | Actual data-flow inventory and third-party request review |
| Performance | Repeatable route/device/network measurements and task outcomes |
| Maintainability | Dependency/license inventory, architecture notes and reproducible build |

A passing automated check is one piece of evidence. It does not establish visual parity, complete route reconstruction, accessibility conformance, privacy compliance, security assurance or successful real-device use.

## 11. Existing authoritative documents

This standard is intentionally additive. Use the more detailed project documents for implementation-specific requirements:

- [RTD methodology](./RTD-METHODOLOGY.md)
- [V2 requirements](./V2-REQUIREMENTS.md)
- [Architecture](./ARCHITECTURE.md)
- [Global UX/UI system](./UX-UI-SYSTEM.md)
- [Accessibility engineering specification](./ACCESSIBILITY-ENGINEERING-SPEC.md)
- [Accessibility implementation matrix](./ACCESSIBILITY-IMPLEMENTATION-MATRIX.md)
- [Performance measurement plan](./PERFORMANCE-MEASUREMENT-PLAN.md)
- [Research evidence](./RESEARCH-EVIDENCE.md)
- [Source and technology inventory](./SOURCE-TECHNOLOGY-INVENTORY.md)
- [Dependency licence inventory](./DEPENDENCY-LICENSE-INVENTORY.md)

If this document conflicts with RTD scope or an accepted architecture decision, the authoritative RTD methodology and accepted decision record control. This document must be updated when the underlying implementation or evidence changes.
