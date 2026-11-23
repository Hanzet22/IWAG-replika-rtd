# ADR-0001: Static-first Astro architecture

- Status: Accepted for the V2 foundation
- Date: 2026-11-23
- Decision owners: IWAG V2 project maintainers

## Context

The archived V1 is a compiled static website with substantial generated CSS and JavaScript. V2 is a fresh implementation, not a continuation of the compiled output. Its primary content is informational: event details, community information, updates, accessibility information, and policy documents.

The requirements prioritise WCAG 2.2 Level A as the stated conformance target, semantic HTML, keyboard operation, low-end device performance, multilingual routes, privacy minimisation, five user-selectable themes, and optional GPU enhancements that cannot become a core dependency.

## Decision

Use Astro 6 with TypeScript and static output. Render public pages as HTML at build time. Use Astro components and plain CSS for the baseline. Add browser JavaScript only for explicit progressive enhancements such as theme preference and language selection. Do not add a client-side UI framework to the initial foundation.

Use locale-prefixed routes:
- `/en/` — English
- `/id/` — Bahasa Indonesia
- `/en-sg/` — English (Singapore)
- `/ms-my/` — Bahasa Melayu (Malaysia)

The locale route is an editorial identifier; each document declares its proper BCP 47 language tag. Add further locales only with reviewed translations and matching route coverage.

## Consequences

### Positive
- Public content remains readable and navigable without client-side JavaScript.
- Static output reduces runtime infrastructure and attack surface.
- Locale routes and translated content remain explicit.
- Theme selection can be progressively enhanced without a framework runtime.
- WebGL/WebGPU can remain isolated optional enhancements.

### Trade-offs
- Account features, live registration, and dynamic attendee workflows require separately designed services.
- Content updates require a rebuild and deployment.
- Complex stateful UI may later justify a narrowly scoped island.

## Non-goals

- Reproducing V1's compiled Astro output or copying its bundled dependencies.
- Claiming WCAG conformance based only on the framework or automated checks.
- Publishing invented event facts, legal terms, privacy promises, or organiser identities.
- Adding analytics, trackers, remote fonts, social embeds, or GPU effects by default.

## Runtime baseline

The package manifest requires Node.js 22.23.4 or later, matching the current Astro 6 runtime floor identified during implementation research. Dependencies are intentionally limited to Astro and TypeScript.

## References

- Astro islands: https://docs.astro.build/en/concepts/islands/
- Astro internationalisation: https://docs.astro.build/en/guides/internationalization/
- Astro content collections: https://docs.astro.build/en/guides/content-collections/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- W3C accessibility principles: https://www.w3.org/WAI/fundamentals/accessibility-principles
