# IWAG V2 — Initial Production Audit (Corrected)

**Audit date:** 24 November 2026  
**Target:** https://iwag-replika-rtd.vercel.app  
**Production commit inspected:** db300e459c1b67477b93ec127b3fa90655e43d0d  
**Status:** Initial static inspection, corrected against the actual route templates and the V2 preview. Not a complete browser QA, security penetration test, WCAG conformance audit, or legal opinion.

## Scope and method

The production baseline was inspected through rendered HTML and route responses. The checks covered the homepage, event and visitor pages, policy pages, locale entry pages, and Vercel runtime-error telemetry for the preceding 24 hours. The observed public pages returned HTTP 200. Vercel reported no runtime errors in the selected period.

**Correction:** An earlier draft of this audit incorrectly described Updates, Participate and Location as displaying a generic unpublished lead. The actual src/pages/[lang]/[page].astro route template contains page-specific summaries and dedicated content for those routes. The apparent “Coming Soon” matches on Participate are pass-tier status labels explicitly qualified as a dated source snapshot, not generic unpublished-page placeholders. The initial finding AUD-001 is withdrawn.

## Findings retained after source review

| ID | Priority | Area | Finding | Status / action |
|---|---|---|---|---|
| AUD-001 | Withdrawn | Page summaries | Earlier claim of generic unpublished lead on Updates, Participate and Location was incorrect. | Withdrawn after source and preview inspection. |
| AUD-002 | Withdrawn | Legal navigation | Earlier claim that /coc/ and /tnc/ were uncontrolled duplicate routes was overstated. | BaseLayout already assigns canonical URLs /code-of-conduct/ and /terms/; retain aliases and verify canonical output. |
| AUD-003 | P1 | Policy governance | Legal drafts still lack verified operator identity, data-flow inventory, actual processor configuration, contact channels, retention periods and adoption authority. | Keep drafts explicitly non-operative; complete operational fact-finding before final publication. |
| AUD-004 | P1 | Provenance | Volatile event facts and participation snapshots need source URLs, captured dates and review dates close to the claims. | Continue source-provenance review for all event facts and tier details. |
| AUD-005 | P2 | Localization | Several headings and editorial labels remain English in Indonesian and Malay pages. Some routes deliberately fall back to English. | Track translation coverage per route; set document language to actual content language and disclose partial translation. |
| AUD-006 | P2 | Accessibility | The accessibility page correctly states that conformance has not been established. Automated checks cannot verify keyboard behaviour, screen-reader output, reflow, contrast or content quality. | Add manual test evidence and route/state coverage; do not claim certification. |
| AUD-007 | P2 | CSS/preferences | Theme, accent, text scale, spacing, contrast, motion and density preferences exist. They require end-to-end verification for persistence, reset, forced-colors, high contrast and responsive layout. | High-contrast link tokens were patched on the working branch; complete manual interaction testing. |
| AUD-008 | Resolved on branch | Route integrity | The initial production audit had not exhaustively verified the generated internal link graph. | Rust AOT output validation now checked 8,596 local references and found no broken local references in the preview build. |
| AUD-009 | Informational | Runtime telemetry | No Vercel runtime errors were found in the selected 24-hour window. This does not establish browser-side correctness or absence of client errors. | Continue browser smoke tests and inspect deployment logs after preview builds. |

## Route observations

- Homepage: event hero, venue and latest updates are present.
- Events: event information is present with explicit uncertainty around programme, tickets and registration.
- Plan Your Visit: date, venue, travel and participation entry points are present.
- Community: project, contribution, resources and update links are present.
- Updates: dated announcements and historical archive entries are present.
- Participate: five tier cards are present. Each “Coming Soon” status is tied to the dated source snapshot; it is not a claim that the whole page is unpublished.
- Location: venue details and visitor guides are present.
- Privacy, Terms and Code of Conduct: draft disclaimers are visible; operator-specific details remain unverified.
- Accessibility: target and known gaps are stated honestly; no conformance claim is made.

## Release gates

1. Every public route has a page-specific title, description, visible status and source provenance where applicable.
2. Each legal document has one canonical URL and consistent cross-links.
3. All generated internal links and fragments resolve.
4. Locale labels and lang metadata match actual content.
5. A production candidate passes the Rust AOT build, route/link checks, browser smoke tests and manual accessibility review.
6. Production promotion occurs only after preview verification.
7. Operator identity, actual infrastructure processing, legal review and policy adoption are confirmed before drafts become operative.

## Explicit non-claims

- No legal compliance certification.
- No WCAG conformance or certification.
- No claim that the event organiser approved or adopted these drafts.
- No claim that Vercel telemetry covers all browser/client failures.
