# IWAG V2 implementation status

Updated: 2026-11-23

## Implemented in the foundation branch

- [x] Astro static-output application manifest and configuration
- [x] TypeScript strict configuration
- [x] Locale routes: English, Indonesian, English (Singapore), Malay (Malaysia)
- [x] Language-specific document language metadata
- [x] Semantic base layout, skip link, navigation, and legal navigation
- [x] Theme tokens: System, Light, Black, Super Black, AMOLED Black, Dynamic Color
- [x] Progressive theme preference with local-only storage
- [x] Reduced-motion and forced-colors CSS handling
- [x] Responsive layout with system fonts and no external font CDN
- [x] Independent-project notice
- [x] Distinct structural routes for Terms, Privacy, and Code of Conduct
- [x] Accessibility target statement with no premature conformance claim
- [x] Architecture decision record

## Intentionally not represented as complete

- Final event content, schedules, venue, ticketing, and registration
- Approved Terms, Privacy Notice, and Code of Conduct
- Organiser/controller identity and legal review
- Final translations and editorial review for all locales
- Full manual keyboard, screen-reader, TalkBack, zoom, and assistive-technology audit
- WebGL/WebGPU enhancement (not required by the initial content shell)
- Contact forms or attendee data collection
- Production deployment and domain configuration

## Engineering guardrails

- WCAG 2.2 Level A is the declared target; do not describe the preview as conformant.
- No external font CDNs or third-party scripts in the baseline.
- No user-facing content may depend on JavaScript, WebGL, or WebGPU.
- Do not fabricate event facts, policies, legal operator identity, or privacy commitments.
- Keep V1 archived and unmodified; V2 source lives under `src/`.

## Live-site reference and legal work added (2026-11-23)

- [x] Identified and read the original public domain: https://iwag.furries.id/
- [x] Reviewed the homepage, About, Brand Guideline, Code of Conduct, Privacy, Terms, Location and 2027 venue announcement, plus extracted travel, transport, sponsor and T-shirt page content.
- [x] Recorded the live 2027 announcement as source-observed information, with a requirement to recheck before publication.
- [x] Flagged stale legacy travel/parking references to ibis Styles BSD City after the new Hotel Ciputra Jakarta venue announcement.
- [x] Documented third-party logo approval and Kiki/Tama CC BY-NC conditions; V2 does not import those assets.
- [x] Added Indonesia and international legal/regulatory implementation matrix, including PDP, child online safety, electronic systems, consumer/PMSE, copyright, disability/accessibility, GDPR territorial scope, WCAG 2.2 Level A and launch gates.

## Still blocked pending real-world verification

- Actual legal operator, contracting party and data controller remain unverified.
- Final Terms, Privacy Notice and Code of Conduct cannot be approved or represented as official.
- No attendee registration, ticketing, payment, account, tracking or sensitive-data collection is enabled.
- Legal applicability and final public policy require review against the real operator/service model by qualified Indonesian counsel.
- WCAG Level A manual and assistive-technology review is still outstanding; this documentation is not a conformance claim.
