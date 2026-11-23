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
