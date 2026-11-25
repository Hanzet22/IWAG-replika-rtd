# IWAG V2 RTD implementation status

Updated: 2026-11-25

## Implemented in the current V2 foundation

- [x] Astro static-output application manifest and configuration
- [x] TypeScript strict configuration
- [x] Locale routes: English, Indonesian, English (Singapore), Malay (Malaysia)
- [x] Language-specific document language metadata
- [x] Semantic base layout, skip link, navigation, and legal navigation
- [x] Theme tokens: System, Light, Black, Super Black, AMOLED Black, Dynamic Color
- [x] Progressive theme preference with local-only storage
- [x] Reduced-motion and forced-colors CSS handling
- [x] Responsive layout with five self-hosted font families and no external font CDN
- [x] Independent-project notice
- [x] V1-informed Terms, Privacy, Code of Conduct and Other Policies content reconstructed as independent V2 drafts; event-level and website-level scopes are kept distinct
- [x] Reconstructed homepage, about, venue, participate, team, links, policy index and resources pages
- [x] Published locale-specific IWAG 2027 event collection entries for English, Indonesian, English (Singapore), and Bahasa Melayu
- [x] International Travelers Guide, public transit guide, obsolete private-vehicle guide warning, and T-shirt size reference
- [x] Historical update archive and nested route generation
- [x] Nine staff role overview routes; source pages were checked and found unavailable, so summaries are explicitly non-official
- [x] Correct document language metadata and explicit English-fallback notices on untranslated Malay routes and selected Indonesian information pages
- [x] Base theme text, muted text, link, visited-link, and focus token contrast calculated across available palettes
- [x] Accessibility target statement with no premature conformance claim
- [x] Architecture decision records and Rust Active Compiler foundation

## RTD work still requiring implementation or verification

- [ ] Complete path-level V1/V2 classification and route-to-implementation traceability.
- [ ] Compare every V1 page family and route against its V2 counterpart.
- [ ] Verify page structure, content-section coverage, visual hierarchy and responsive states.
- [ ] Verify all interactive behaviours and state transitions against observed reference behaviour.
- [ ] Compare V1 policy-page sections with V2 event-policy and website-policy deliverables; record missing topics and locale gaps.
- [ ] Complete EN/ID content parity and review all additional locale fallbacks.
- [ ] Complete manual keyboard, screen-reader, TalkBack, zoom and assistive-technology evaluation.
- [ ] Complete WebGL/WebGPU rendering backend only where justified; the current lab probes WebGL2 and detects WebGPU API exposure without creating a GPU device.
- [ ] Measure bundle, CPU, memory, network and battery behaviour on representative devices.
- [ ] Verify build, runtime, deployment configuration and rollback path.

## Supporting research status

Legal, privacy, child-access, event-operational and asset-provenance research remains available as separate supporting documentation. Policy documents retain their stated V2 draft status. These workstreams do not require certification, organiser endorsement or policy-owner approval to continue technical reverse engineering, reconstruction, integration or verification.

## Engineering guardrails

- WCAG 2.2 Level A is the declared engineering target; do not claim conformance without evidence.
- No external font CDNs or third-party scripts in the baseline unless a defined requirement and data-flow review justify them.
- No user-facing content may depend on JavaScript, WebGL or WebGPU.
- Do not fabricate event facts, policies, legal operator identity or privacy commitments.
- Keep V1 archived and available as the RTD reference; V2 source lives under `src/`.
