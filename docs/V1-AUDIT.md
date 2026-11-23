# IWAG V1 — Repository & Static Audit

**Audit status:** Static repository audit; not a browser-based accessibility certification.  
**Reference commit:** `811617a2036002c385c997ce014d8688f45d5a0f`  
**Repository:** [Hanzet22/IWAG-replika-rtd](https://github.com/Hanzet22/IWAG-replika-rtd)  
**Audit date:** 2026-11-23

## 1. Scope and limitations

This audit examines the archived static export, repository tree, representative HTML pages, CSS bundles, JavaScript bundles, and legal-page content. It is not a complete manual review of all 120 HTML pages, a live-site network capture, a screen-reader test, or a WCAG conformance evaluation.

The archive intentionally excludes images, photographs, SVGs/icons, media, fonts, and other selected assets. Consequently, missing asset references in this repository do not prove that those assets were absent from the live website.

## 2. Repository inventory

- 253 tree entries in the archived repository.
- 129 file blobs.
- 120 HTML pages.
- 2 CSS bundles.
- 4 JavaScript files.
- Remaining files include repository metadata, license, README, and Cloudflare-related script content.
- No complete original application source structure was found: no `src/`, `package.json`, Astro project configuration, or build scripts.
- The repository is therefore treated as a static-export/reference archive, not a reproducible source project.

### Important distinction

The root `index.html` is a redirect stub, not the content homepage. It contains fallback links with empty destinations and lacks a meaningful page heading. It must not be used as the sole basis for judging the actual content pages.

An EN `code-of-conduct` page appears to carry Indonesia Furs branding and a different Astro build fingerprint from the main IWAG pages. Ownership and permission must be confirmed before any content is reused in V2.

## 3. Stack and source observations

- Main page metadata identifies Astro 6.4.8.
- A separate Code of Conduct artifact shows Astro 5.14.4 metadata.
- The static archive does not contain enough source/build metadata to identify the complete original authoring stack or reproduce its build.
- JavaScript bundles include references to Canvas APIs, `requestAnimationFrame()`, video, and autoplay. These references alone do not establish WebGL or WebGPU usage.
- No explicit WebGL/WebGPU implementation marker was confirmed in the inspected bundles.

**V2 implication:** choose a maintainable source-first architecture and document exact runtime/build dependencies. Do not treat compiled bundles as the V2 source architecture.

## 4. CSS and font audit

Inspected stylesheets:

| File | Approx. size | Font-face declarations | URL references |
|---|---:|---:|---:|
| `_astro/_document.BOuv_84H.css` | 193 KB | 68 | 91 |
| `_astro/index.ByDuR3uo.css` | 99 KB | 33 | 33 |

Detected font families include Inter Variable, Jost, EB Garamond, and Google Sans Code. Some font data is embedded as base64 WOFF2; other references point to local `/_astro/` paths.

No `fonts.googleapis.com` or `fonts.gstatic.com` reference was detected in the two inspected CSS files. This is not proof that every page is free of external font requests.

**V2 decision:** no external font CDN. Prefer a system font stack by default; include self-hosted fonts only when licensing, subset coverage, loading cost, and fallback behavior are documented.

## 5. External services and privacy review

The inspected main page references:
- an external analytics script at `a.angelo.fyi`;
- Cloudflare Insights at `static.cloudflareinsights.com`;
- Sentry-related references in the JavaScript bundle;
- external media/CDN references, whose assets were intentionally excluded from this archive.

The exact data fields, retention periods, and processing purposes of each integration have not been established by this static inspection. Their presence is a **disclosure and data-minimization review item**, not proof of unlawful collection or data leakage.

The existing privacy wording should be reconciled with all actual analytics, error reporting, payment, event, and media workflows. V2 should not load optional analytics before a documented purpose and lawful basis are established.

## 6. Accessibility observations

The inspected pages contain semantic HTML and some ARIA attributes. CSS includes `prefers-reduced-motion` and forced-colors-related rules. These are positive implementation signals, not proof of conformance.

Not yet verified across the full site:
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, and reading order;
- heading hierarchy and landmarks;
- contrast in every theme and state;
- text resizing, zoom, and reflow;
- captions, transcripts, and audio alternatives;
- accessible validation and error recovery;
- touch target behavior and mobile assistive technology;
- full-page conformance for every language and responsive variant.

**No WCAG pass is claimed.** V2's target is WCAG 2.2 Level A, not AA. Conformance must be checked against all applicable Level A success criteria on complete pages and responsive variants.

## 7. Legal and policy observations

Existing archived materials include Terms and Conditions, Privacy Policy, and Code of Conduct pages in multiple language paths.

The inspected policy content addresses event registration, cancellation/no-show, refunds, organizer discretion, liability, age groups/minors, personal data, emergency contacts, optional health information, partner/payment information, documentation media, retention, and data-subject rights.

Review items for V2:
- Minors' personal data: implement the special handling and parent/guardian consent requirements where applicable.
- Disability-related and health-related data: treat as sensitive/high-risk data; minimize collection and adapt communication/accessibility.
- Purpose limitation, transparency, retention, access, correction, deletion, and processor/vendor governance.
- Clear notice and accessible opt-out workflow for public-facing photography/video/audio documentation where appropriate.
- Review no-refund, cancellation, broad waiver, and admission-denial clauses against applicable consumer law and event-specific facts.
- Separate Terms of Service, Privacy Policy, Code of Conduct, and Cookie Policy (only if cookies/technologies actually require one).
- Do not assume GDPR applies to every visitor; assess territorial scope and actual establishment/targeting/monitoring.

This is a product/legal issue list, not a legal opinion. Final policy text and applicability must be reviewed by qualified counsel.

## 8. Source and standards register

Primary references for implementation and legal review:

- W3C, Web Content Accessibility Guidelines (WCAG) 2.2: https://www.w3.org/TR/WCAG22/
- Indonesia, UU 27/2022 on Personal Data Protection: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022
- Indonesia, PP 71/2019 on Electronic Systems and Transactions: https://peraturan.bpk.go.id/Details/122030/pp-no-71-tahun-2019
- Indonesia, UU 1/2024 (amendment to ITE Law): https://peraturan.bpk.go.id/Details/274494/uu-no-1-tahun-2024
- Indonesia, UU 8/2016 on Persons with Disabilities: https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016
- Indonesia, PP 42/2020: https://peraturan.bpk.go.id/Details/142301/pp-no-42-tahun-2020
- Indonesia, UU 8/1999 on Consumer Protection: https://peraturan.bpk.go.id/Details/45288/uu-no-8-tahun-1999
- European Union, GDPR: https://eur-lex.europa.eu/eli/reg/2016/679
- Indonesia, UU 1/2026 on Criminal Law Adjustments: https://peraturan.bpk.go.id/Details/337869/uu-no-1-tahun-2026

Legal references must be rechecked at the time of drafting and release, including relevant implementing rules, amendments, territorial scope, and the official text. Do not infer specific penalty changes without reading the relevant official provisions.

## 9. V1 disposition

V1 is retained as a read-only reference and audit artifact. V2 should not copy its compiled architecture or blindly transplant its legal text. Reuse of content, branding, media, and third-party material requires provenance, ownership, and license checks.

## 10. Recommended next work

1. Establish the V2 source repository structure and build pipeline.
2. Record architecture decisions and dependency/license inventory.
3. Implement semantic, static-first page shell and theme tokens.
4. Build the Level A accessibility baseline and test matrix.
5. Implement privacy-first analytics/error-reporting policy.
6. Draft separate legal documents for counsel review.
7. Add performance budgets and low-end device fallback rules.
8. Run browser, keyboard, screen-reader, responsive, and automated checks before claiming conformance.
