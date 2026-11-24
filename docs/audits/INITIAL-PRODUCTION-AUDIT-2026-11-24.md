# IWAG V2 — Initial Production Audit

**Audit date:** 24 November 2026  
**Target:** `https://iwag-replika-rtd.vercel.app`  
**Production commit inspected:** `db300e459c1b67477b93ec127b3fa90655e43d0d`  
**Status:** Initial static inspection; not a complete browser QA or legal audit.

## Scope and method

The production deployment was inspected through rendered HTML and route responses. The checks covered the homepage, event and visitor pages, policy pages, four locale entry pages, and Vercel runtime-error telemetry for the preceding 24 hours. The observed public pages returned HTTP 200. Vercel reported no runtime errors in the selected period.

This is not a visual browser test, keyboard test, screen-reader test, mobile-device test, penetration test, WCAG conformance audit, or legal opinion.

## Confirmed findings

| ID | Priority | Area | Finding | Required action |
|---|---|---|---|---|
| AUD-001 | P1 | Page summaries | Several populated pages display the generic “This information has not been published in this preview” lead text. This is misleading on Updates, Participate, Location, Links, Privacy, Policies and Join the Team. | Replace generic fallback copy with page-specific, truthful summaries. |
| AUD-002 | P1 | Legal navigation | Both `/coc/` and `/code-of-conduct/` represent the same policy. Terms also has a `/tnc/` alias. | Choose one canonical route per document and redirect/alias consistently without duplicate content. |
| AUD-003 | P1 | Policy coverage | The policy index lists nine documents, but the drafts still lack verified operator identity, data-flow inventory, actual processor configuration, contact channels, retention periods and adoption authority. | Keep drafts explicitly non-operative; complete operational fact-finding before final publication. |
| AUD-004 | P1 | Provenance | Several event facts and participation tier snapshots are displayed from dated public announcements. Their date and source status are not consistently visible next to every volatile claim. | Attach source URL, captured date, review date and confidence to each volatile fact. |
| AUD-005 | P2 | Localization | Several headings and editorial labels remain English in Indonesian and Malay pages. Some pages deliberately fall back to English. | Use explicit translation coverage per route; set the document language to the actual content language and disclose partial translation. |
| AUD-006 | P2 | Accessibility | The accessibility page accurately says the project has not completed a conformance audit. However, automated source/output checks cannot verify keyboard behavior, focus states in every theme, screen-reader output, reflow, contrast or content quality. | Add manual test evidence and route/state coverage; do not claim certification. |
| AUD-007 | P2 | CSS/preferences | Theme, accent, text scale, spacing, contrast, motion and density preferences exist. They require end-to-end verification for persistence, reset behavior, forced-colors, high contrast and responsive layout. | Test each preference in all supported themes and on narrow viewports. |
| AUD-008 | P2 | Route integrity | The inspected pages link to nested visitor guides and policy routes. The full internal link graph has not yet been exhaustively verified. | Generate a route inventory and run link, fragment, canonical and hreflang checks across every generated route. |
| AUD-009 | P2 | Runtime telemetry | No Vercel runtime errors were found for the selected 24-hour window. This does not establish browser-side correctness or absence of client errors. | Add browser smoke tests and inspect deployment logs after each preview build. |

## First-pass route observations

- Homepage: hero, event dates, venue, quick guide and update cards are present.
- Events: published event card is present with an explicit notice that programme, ticket and access details are not confirmed.
- Plan your visit: four planning cards are present.
- Community: project, contribution, resources and update links are present.
- Updates: archive entries are present, but the generic unpublished lead is contradictory.
- Participate: tier snapshot is present, with “Coming Soon” status; generic unpublished lead is contradictory.
- Location: venue details and visitor links are present; generic unpublished lead is contradictory.
- Privacy: a draft is present, but provider processing and retention remain unverified.
- Terms and Code of Conduct: draft disclaimers are prominent; the legal content remains preliminary.
- Accessibility: target and known gaps are stated honestly; no conformance claim is made.

## Release gates

1. Every public route has a page-specific title, description, visible status and source provenance where applicable.
2. No placeholder status contradicts visible content.
3. Each legal document has one canonical URL and consistent cross-links.
4. All generated internal links and fragments resolve.
5. Locale labels and `lang` metadata match actual content.
6. A production candidate passes build, compiler validation, link checks, browser smoke tests and manual accessibility review.
7. Production promotion occurs only after preview verification.

## Explicit non-claims

- No legal compliance certification.
- No WCAG conformance or certification.
- No claim that the event organiser approved or adopted these drafts.
- No claim that Vercel telemetry covers all browser/client failures.
