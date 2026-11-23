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
- [x] Independently authored Terms, Privacy, and Code of Conduct draft pages, with V1 rules and wording explicitly excluded; all three remain unpublished/unapproved pending operator and legal verification
- [x] Reconstructed homepage, about, venue, participate, team, links, policy index and resources pages
- [x] Published locale-specific IWAG 2027 event collection entries for English, Indonesian, English (Singapore), and Bahasa Melayu; event dates render as dates, not invented midnight times
- [x] International Travelers Guide, public transit guide, obsolete private-vehicle guide warning, and T-shirt size reference
- [x] Expanded international guide with official convention-attendee visa activity conditions, All Indonesia declaration, customs cash-declaration threshold, and direct government/operator links
- [x] Current five-tier participation snapshot with source-listed benefits, pass limits and raffle notes
- [x] Super Sponsor YCH reference route without copying unlicensed artwork
- [x] Historical update archive: all 34 nested update routes across the 2024–2026 inventory, including pagination
- [x] Nine staff role overview routes; source pages were checked and found unavailable, so summaries are explicitly non-official
- [x] Nested route generation for all four supported locales
- [x] Correct document language metadata and explicit English-fallback notices on untranslated Malay routes and selected Indonesian information pages, including nested routes and top-level information pages
- [x] Base theme text, muted text, link, visited-link, and focus token contrast calculated across the available palettes; full component/state review remains outstanding
- [x] Accessibility target statement with no premature conformance claim
- [x] Architecture decision record

## Intentionally not represented as complete

- Official confirmation of every event detail, programme schedule, ticket release, and operational arrangement; current event content is a dated public-source snapshot only
- Final Terms, Privacy Notice, and Code of Conduct — these must be fully rewritten independently and approved by the actual operator; V1 wording is not adopted
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
- [x] Added and expanded the legal/regulatory implementation matrix: Indonesia PDP and child-online-safety rules, electronic systems, consumer/PMSE, copyright, disability/accessibility, GDPR, UK GDPR/Children's Code, Singapore PDPA, Malaysia Act 709, Thailand PDPA, US COPPA/CCPA, WCAG 2.2 Level A and release gates.
- [x] Updated the PP 33/2026 source caveat: its 16 January 2027 commencement is corroborated by a signed-text mirror and secondary legal analysis, but an official BPK/peraturan.go.id record was not located during this review; official Gazette verification remains required.

## Still blocked pending real-world verification

- Actual legal operator, contracting party and data controller remain unverified.
- Final Terms, Privacy Notice and Code of Conduct remain deferred for a full independent rewrite and cannot be approved or represented as official.
- No attendee registration, ticketing, payment, account, tracking or sensitive-data collection is enabled.
- Legal applicability and final public policy require review against the real operator/service model by qualified Indonesian counsel.
- WCAG Level A manual and assistive-technology review is still outstanding; this documentation is not a conformance claim.
