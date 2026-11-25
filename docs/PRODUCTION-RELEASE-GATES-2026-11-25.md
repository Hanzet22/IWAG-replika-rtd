# IWAG V2 — Production Release Gates

**Snapshot date:** 25 November 2026  
**Applies to:** the independent IWAG V2 informational-site reconstruction  
**Status:** NOT APPROVED FOR A NEW PRODUCTION RELEASE

This register is an engineering and evidence checklist. It is not legal advice, organiser approval, a venue safety certification, or proof of compliance. The repository owner controls release decisions; the actual event organiser and relevant providers must supply evidence for matters outside this repository.

## Current deployment state

A read-only Vercel account inspection on 25 November 2026 found an existing READY production deployment for project iwag-replika-rtd, sourced from main commit 17250ef8bfb18df7c7abc212dcaa27e572139704. The deployment was not created or changed by this remediation. PR #16 is still an unmerged draft and is not included in that production deployment. The repository config keeps Git-triggered deployment disabled. No new production release is authorised by this register.

## Gate register

| Gate | Status | Evidence required to close | Owner / dependency |
|---|---|---|---|
| Website/event policy separation | IMPLEMENTED — CI verified | Keep public routes website-only; event terms remain separate drafts; regression tests pass | Repository maintainer |
| Localized legal routes and response headers | IMPLEMENTED — CI verified on prior PR head | Re-run CI after the latest documentation commits; manually inspect actual response headers and CSP console output on a non-production preview | Repository maintainer |
| Permenkomdigi 9/2026 metadata | PARTIALLY VERIFIED | JDIH Komdigi inventory/abstract and BPK metadata corroborate date, BN 2026 No. 163 and status “Berlaku” | Official catalogue records |
| Permenkomdigi 9/2026 final text | OPEN — BLOCKING | Authenticated final 29-page BN 2026 No. 163 PDF or written confirmation from the issuing ministry; reconcile exact file hash/content against the catalogue entry. Do not rely on PDFs marked “RANCANGAN” | Ministry / official legal repository |
| PP 33/2026 central Gazette locator | OPEN — BLOCKING FOR ARTICLE-LEVEL RELIANCE | Canonical central BPK/Setneg/JDIH record and authenticated final text/TLN locator. A signed copy hosted by a local-government PPID corroborates promulgation and LN No. 88, but is not the canonical central locator | Setneg / BPK / JDIH |
| V1 archive redistribution rights | OPEN — BLOCKING FOR PUBLIC REDISTRIBUTION | Written permission or licence covering reproduction, hosting, public repository distribution, translations, screenshots and derivative summaries as applicable. If permission is not obtained, remove or restrict the V1 source archive and any unlicensed material before public release; repository history may require separate remediation | Rights holder / repository owner |
| Actual legal operator and policy authority | OPEN — BLOCKING FOR FINAL POLICY APPROVAL | Written identification of the actual website publisher, event organiser, controller, contracting party, authorised signatory and policy approver; confirm whether the independent site is authorised to publish event-facing representations | Actual operator / organiser |
| Hosting, CDN, DNS and logging | PARTIALLY VERIFIED — BLOCKING FOR RETENTION CLAIMS | Confirm active Vercel plan, request/CDN/security/build log categories, retention periods, access controls, subprocessors, DPA, cross-border processing and any provider-level log exports. Current project API showed no project env vars and no configured Vercel drains; that does not prove no platform logging | Account owner / Vercel |
| Venue contract and event safety | OPEN — BLOCKING FOR EVENT-OPERATIONAL CLAIMS | Signed venue agreement; authorised venue operator; event capacity and floor plan; current PBG/SLF and fire-safety evidence as applicable; permits/notifications; emergency/evacuation plan; medical/security responsibilities; accessible routes and facilities | Actual organiser / Hotel Ciputra Jakarta / competent authorities |
| Accessibility claims | OPEN | Manual keyboard, screen-reader/TalkBack, zoom, contrast, reduced-motion and mobile testing; verify any event venue accommodation claims against evidence. WCAG 2.2 remains an engineering target, not a conformance claim | Repository maintainer / organiser / venue |
| Final policy and legal review | OPEN — BLOCKING | Qualified Indonesian counsel reviews the actual operator, service features, data flows, child-access scope, public policies, event terms and territorial applicability; written approval from the responsible policy owner | Actual operator / qualified counsel |
| Final release verification | OPEN | Re-run CI on final PR head; inspect preview routes and headers; check broken links and locale parity; confirm the deployed commit matches the reviewed merge commit; perform rollback readiness review | Repository maintainer |

## Release decision rule

A green CI run is necessary but not sufficient. Do not mark the release ready while a blocking gate remains open. Do not represent draft policies as official or in force. Do not make privacy-retention, accessibility, venue-safety, organiser-authority or legal-compliance claims beyond the evidence actually obtained.

The existing production deployment may continue to serve its current snapshot, but it must not be described as containing PR #16. Any future production deployment must be a separate, explicit release action after review and approval of the final merged commit.
