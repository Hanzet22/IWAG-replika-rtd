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
- [x] Responsive layout with five self-hosted font families and no external font CDN
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
- Terms, Privacy Notice, and Code of Conduct are independently authored working drafts; they are not approved or in force until the actual operator, data flows, and applicable legal requirements are verified
- Organiser/controller identity and legal review
- Final translations and editorial review for all locales
- Full manual keyboard, screen-reader, TalkBack, zoom, and assistive-technology audit
- Full WebGL/WebGPU rendering backend; the current lab only probes WebGL2 and detects WebGPU API exposure without creating a GPU device
- Contact forms or attendee data collection
- Production deployment and domain configuration

## Engineering guardrails

- WCAG 2.2 Level A is the declared target; do not describe the preview as conformant.
- No external font CDNs or third-party scripts in the baseline; five licensed font families are self-hosted.
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
- Terms, Privacy Notice and Code of Conduct drafts are present, but cannot be approved or represented as official until the actual operator and service model are verified and qualified legal review is completed.
- No attendee registration, ticketing, payment, account, tracking or sensitive-data collection is enabled.
- Legal applicability and final public policy require review against the real operator/service model by qualified Indonesian counsel.
- WCAG Level A manual and assistive-technology review is still outstanding; this documentation is not a conformance claim.

## Typography migration

- [x] Imported five locally hosted font families from the dedicated font branch: Alan Sans, Amarna, Capo Sfogliato, Sekuya and Starveler.
- [x] Applied Alan Sans to body/UI, Amarna to headings, and the remaining families only to short display/editorial accents.
- [x] Preloaded only the primary body and heading variable fonts; decorative fonts use optional loading.
- [x] Preserved each selected font's original SIL Open Font License 1.1 notice and source README.
- [x] Excluded Love Malia from the public build because its supplied notice grants personal use only; its binaries were not copied into V2 and were removed from the public font branch.
- [x] Documented asset provenance and usage boundaries in `docs/FONT-LICENSING.md`.

## Full-stack and policy-draft integration (2026-11-23)

- [x] Kept Astro 7 + TypeScript + Vite as the only application/build pipeline.
- [x] Added the official Vue 3 Astro renderer for isolated, visibility-hydrated UI islands.
- [x] Added Tailwind CSS 4 through the official Vite plugin without enabling Tailwind Preflight over the existing reset/design system.
- [x] Added CSS Houdini Properties and Values API registrations for typed visual custom properties; Paint Worklets remain optional and are not required.
- [x] Added an opt-in graphics capability panel with an SVG baseline, user-triggered Canvas 2D rendering, WebGL2 capability probing, and WebGPU availability detection.
- [x] Added an isolated Rust/WASM contrast utility source and an optional build script; normal Astro builds do not require Rust or generated WASM.
- [x] Documented compatible Next.js architectural patterns and explicitly excluded the separate Next.js runtime/App Router from the single-app architecture.
- [x] Added a 50px-minimum draft-status banner above the body of every Terms, Privacy, and Code of Conduct page.
- [x] Added draft version/date metadata and clear non-official, unapproved, not-in-force wording in English and Indonesian.
- [x] Existing Terms, Privacy, and Code of Conduct content is independently authored; it remains a working draft pending verification of the real operator, actual service/data flows, and qualified legal review.

## Remaining real-world release blockers

- [ ] Confirm legal operator, controller, service scope, event authority, and responsible policy owner.
- [ ] Verify hosting/CDN/DNS providers, access logs, retention, international transfers, and actual cookie behavior.
- [ ] Obtain qualified legal review and explicit approval before any policy is represented as official or in force.
- [ ] Complete manual WCAG 2.2 Level A review with keyboard, screen readers, TalkBack, zoom/reflow, and representative disabled users.
- [ ] Verify actual browser/device support before enabling WebGPU or other GPU features in production.
- [ ] Verify Rust/WASM build output and license/dependency inventory before shipping generated binaries.

## Global accessibility and legal rewrite

- [x] Added global text-scale, high-contrast, reduced-motion and content-spacing controls with local-only preference storage.
- [x] Added a single reset action that restores theme, accent, text scale, contrast, motion, and spacing preferences to their defaults.
- [x] Reworked primary navigation around Home, Discover, Plan your visit, Community, and Updates; added dedicated Plan your visit and Community landing routes.
- [x] Added nine separately addressable legal policy pages with English and Indonesian draft copy.
- [x] Updated the legal banner to drafting-only, not official, not verified, not approved and not in force.
- [x] Added a policy index linking all nine documents.
- [x] Added an independent V2 design-system specification at `docs/V2-DESIGN-SYSTEM.md`.
- [x] Added shared design tokens and an imported global stylesheet for responsive reflow, user text scaling, high-contrast system colors, focus visibility, reduced motion, and narrow-screen controls.
- [ ] Audit all routes and components for actual alt text quality, meaningful/decorative image handling, and text equivalents.
- [ ] Manual review across all routes, locales, viewports and assistive technologies remains outstanding.
- [ ] Verify deployed cookies, hosting/CDN logs, vendors, data locations, retention and transfers.
- [ ] Qualified legal review and operator approval remain mandatory before any document becomes operative.

## Greenfield reconstruction execution (2026-11-23)

- [x] Created dedicated `v2/greenfield-global-reconstruction` branch.
- [x] Moved 120 root/static HTML snapshots plus six compiled/CDN assets into `archive/v1-reference/site/`; original blob contents were preserved.
- [x] Added archive README and source/technology inventory.
- [x] Added Rust Active Compiler CLI with `inspect`, `doctor`, `dev`, `build`, `preview`, and `wasm` commands.
- [x] Routed normal npm dev/build/preview commands through the Rust CLI.
- [x] Updated the production workflow to provision Rust and invoke the Active Compiler.
- [x] Added build-report generation outside the public `dist/` directory.
- [x] Integrated Panda CSS 2.6.0 and StyleX 0.19.2 into the Astro/Vite pipeline alongside Tailwind CSS 4.
- [x] Defined a centralized CSS layer order and disabled duplicate Panda/Tailwind preflight resets.
- [x] Added new semantic Panda tokens and a replacement global CSS baseline; the shared layout no longer imports the previous global V2 stylesheets.
- [x] Added literature and engineering evidence notes for cognitive accessibility, motion, typography, color vision, and low-resource mobile rendering.
- [ ] Complete a full route-by-route UI/UX and content-template rewrite.
- [ ] Validate Panda/StyleX/Tailwind plugin interoperability and generated CSS in production.
- [ ] Complete the Rust compiler's deeper manifest, route, asset, dependency and output validation.
- [ ] Review every remaining asset and transitive dependency license.
- [ ] Complete keyboard, screen-reader, TalkBack, zoom/reflow and disabled-user evaluations.
- [ ] Measure JavaScript/CSS transfer, LCP/INP/CLS, CPU, memory, GPU, battery and thermal behavior on representative mid/low-end devices.

CI runs are diagnostic evidence only. Cancelled or pending workflow runs do not close the reconstruction scope or halt engineering work.

- [x] Added a user-activated Canvas motion preview capped at 30 fps; it stops when the document is hidden, the lab leaves the viewport, or reduced-motion is enabled.
- [x] Kept SVG as the static fallback; WebGL2 is probed with context release and WebGPU is detected without requesting an adapter/device.
- [ ] Implement or adopt a real WebGL/WebGPU renderer only if a measured use case justifies its startup, memory and GPU costs.

## Continued global reconstruction (24 November 2026)

- [x] Consolidated root and localized homepages into one shared localized Astro component.
- [x] Root `/` renders the actual English homepage directly; no language-choice interstitial or timed redirect.
- [x] Added localized breadcrumb navigation across nested routes and explicit current-page semantics.
- [x] Activated Tailwind CSS 4 theme and utility layers without importing its preflight reset.
- [x] Kept Panda CSS tokens and StyleX compile-time classes in their separate styling responsibilities.
- [x] Added architecture and global UX/UI system specifications.
- [x] Reviewed full text of four accessibility papers in the existing Undermind workspace and documented study design, evidence limitations and practical implications.
- [x] Added mobile performance evidence from real-user battery-saver research and underpowered-device research, with dated-device caveats.
- [x] Expanded the Rust compiler build report to count output files, HTML/CSS/JS/images/fonts and their byte footprints; it rejects missing generated CSS when CSS source exists.
- [x] Generated and committed `package-lock.json` through a branch-scoped lockfile bootstrap job; the production workflow now selects `npm ci` when the lockfile is present.
- [x] Recorded license metadata for 530 locked npm package entries; all have a declared license field.
- [ ] Review full license texts/notices and actual installed optional LGPL/MPL packages before distribution.
- [ ] Verify the combined Tailwind/Panda/StyleX production output and generated CSS cascade.
- [ ] Complete page-template-specific visual and content reconstruction for every route.
- [ ] Complete route/locale link integrity and missing-asset checks.
- [ ] Perform real keyboard, screen-reader, TalkBack, zoom/reflow and disabled-user evaluations.
- [x] Captured first raw output baseline: 298 HTML, 1 CSS, 4 JS, 5 fonts, 2,460,461 bytes, 7,111 local refs checked.
- [ ] Measure representative mid/low-end Android devices; do not set unmeasured budgets.
- [ ] Review all public assets, licenses and translations before release.

The latest implementation is a working reconstruction foundation and shared homepage/navigation system. It is not a claim that every route or accessibility criterion has been completed.

- [x] Rebuilt the localized event index and event-detail templates with semantic date metadata, clear event facts and responsive layouts.
- [x] Standardized page-intro hierarchy across generic landing pages and nested article routes.
- [x] Extended Rust Active Compiler output diagnostics with required root/locale route checks and generated asset-size accounting.

- [x] Added a Rust-invoked Node validator for local HTML `href`/`src`/`poster` and CSS `url()` references in generated output.
- [ ] Extend local-reference validation to `srcset`, fragment IDs, and a complete generated route manifest.

- [x] Added basic generated-HTML invariants to the output validator: document language/title, main landmark, skip link, duplicate IDs, image alt presence, named SVGs/buttons/form controls, and no meta-refresh/legacy redirect interstitial/autoplay video.
- [ ] Review validator findings and false-positive/false-negative boundaries; these static checks are not a WCAG conformance test.

- [x] Added a user-triggered contrast calculator that prefers the Rust/WASM module and falls back to a local JavaScript implementation.
- [x] Added production workflow steps to install the WASM target/wasm-pack and build the contrast module before Astro/Vite.
- [x] Added Rust output-report accounting for generated WASM modules and bytes.
- [ ] Verify the generated wasm-bindgen wrapper and module load path in the production output.
- [ ] Measure first-use latency and memory against the JavaScript fallback on target Android devices.

- [x] Committed Cargo lockfiles for both the Rust compiler and contrast-engine crate.
- [x] Added a pinned Rust 1.100.0 toolchain manifest including the WASM target.
- [x] Pinned wasm-pack to 0.13.1 in the production workflow.

- [x] Investigated the yanked `spin 0.9.8` warning from wasm-pack 0.13.1 and moved the CI pin to wasm-pack 0.15.0; the next build log must confirm the warning is gone.

- [x] Repaired literal escaped-newline sequences in the global breadcrumb CSS block.
- [x] Added a native, keyboard-operable mobile navigation disclosure for narrow viewports; core navigation works without JavaScript.
- [x] Preserved query strings and fragments during locale changes.
- [x] Extended generated-output validation to local srcset references and same-site HTML fragments.
- [x] Added a generated route manifest outside public output.
- [ ] Verify the mobile navigation with keyboard, zoom/reflow and Android TalkBack.
- [ ] Review route-manifest and fragment-validator results on the latest full build.

- [x] Removed the one-time lockfile bootstrap job after npm and both Cargo lockfiles were committed; the workflow now installs deterministically with npm ci.
- [x] Rust Active Compiler now reconciles the generated route manifest count with the complete HTML file count and records generated_routes in its machine-readable report.

- [x] Marked the homepage event date range and recent update dates with semantic time elements and machine-readable datetime values.

- [x] Wired the existing dynamic link/visited-link tokens into global anchor styles and added distinct high-contrast default pairs for light and dark themes.


## Accessibility implementation pass — 24 November 2026

- [x] Reconciled the new engineering specification with the existing project decision: WCAG 2.2 Level A remains the formal target; Level AA is tracked as a voluntary enhancement, not an implicit target change.
- [x] Added a source-based accessibility implementation matrix separating inspected foundations from unverified behavior.
- [x] Restored the complete architecture decision map and linked accessibility, compiler, stack and evidence documents.
- [x] Added a user-controlled expanded text-spacing preference with local persistence and reset support.
- [x] Kept core navigation and content independent of the new preference script; the added control is progressive enhancement.
- [ ] Complete generated-route Level A mapping and route-by-route content review.
- [ ] Perform keyboard, screen-reader, Android TalkBack, zoom/reflow, forced-colors and human-participant validation.
- [ ] Reconcile any remaining stale accessibility target wording across all archived and active documents before publication.

This pass is source implementation evidence only. It is not a WCAG conformance claim. CI/CD is not a completion criterion.


## Generated-output accessibility diagnostics

- [x] Add generated HTML route/locale enumeration to the post-build diagnostic pass.
- [x] Emit stable accessibility diagnostic IDs and confidence-separated findings.
- [x] Emit machine-readable JSON and SARIF 2.1.0 reports outside the public output directory.
- [x] Keep heuristic findings review-required and explicitly disclaim automated conformance.
- [x] Compare generated routes against a checked-in 30-route expected baseline; report missing required routes and additional generated routes separately.
- [x] Replace regex scanning with parse5 8.1.1; preserve source locations, HTML5 tree correction and parser-error diagnostics.
- [ ] Add source-map resolution for originating Astro/Markdown source locations.
- [ ] Complete keyboard, screen-reader/TalkBack, zoom/reflow, forced-colors and human evaluation.



## Full engineering audit and policy consolidation — 24 November 2026

- [x] Created isolated work branch `v2/full-audit-aot-compliance`; production and `main` remain unchanged.
- [x] Reviewed the current Rust compiler controller, generated-output validator, route renderer, legal policy data, layout, preference script, CSS baseline, architecture and legal research documents.
- [x] Consolidated Terms, Privacy and Code of Conduct rendering on the canonical `src/data/legal.ts` policy model to prevent duplicate sections.
- [x] Kept the Accessibility Statement's dedicated engineering page as the primary presentation while suppressing duplicate generic legal-policy rendering.
- [x] Expanded the Rust required-route contract to cover all core pages, legal policy pages and aliases in each configured locale.
- [x] Hardened generated-output validation against `javascript:` URLs, `data:` navigation, and unsafe new-tab links.
- [x] Added baseline HTTP security headers for the static Vercel deployment.
- [x] Added a dated engineering audit and legal-policy release-gate register.
- [ ] Browser visual QA, full production build, and assistive-technology testing remain to be performed on the branch before merge.
- [ ] Actual operator identity, data controller, infrastructure logging/retention and vendor transfers remain unverified.
- [ ] Qualified legal review and operator approval remain mandatory before any draft is treated as official or operative.

The Vercel production deployment remains untouched by this branch. Workflow results are diagnostic evidence, not the sole definition of engineering completion.


- [x] High-contrast mode now maps link and visited-link colours to system `LinkText` and `VisitedText` tokens.
- [x] Constrained Node engine compatibility to the Node 22 major and set the Vercel project runtime to 22.x after the first preview build showed Node 26.13.1 auto-selection.
- [x] First preview build completed: 298 generated HTML routes, 8,596 local references checked, 78 required routes verified, and zero automated accessibility diagnostic findings (not a conformance claim).
- [x] Follow-up preview completed after Node 22 pin and high-contrast CSS change: Node 22.23.5, Rust 1.100.0, 298 routes, 8,596 local references checked, zero automated accessibility diagnostic findings.


- [x] Corrected the initial audit's false-positive claims about generic unpublished placeholders on Updates, Participate and Location; the actual route template and rendered preview contain page-specific content. “Coming Soon” on pass cards is a dated source-snapshot status, not an unpublished-page error.
- [x] Confirmed the /coc/ and /tnc/ aliases emit canonical links to /code-of-conduct/ and /terms/ respectively.
- [x] Verified the final preview returns HTTP 200 on the homepage and the main EN/ID/EN-SG/MS-MY legal routes, with baseline security headers present.


- [x] Inventoried 532 locked npm packages; all declare licence metadata. Direct packages are MIT except TypeScript (Apache-2.0).
- [x] Reviewed recent Astro and Vite advisories against exact locked versions; both are outside the cited affected ranges.
- [x] Assessed the conditional Vue 3.5.45 SSR advisory against the current static Astro/no-user-content architecture; no current trigger identified.
- [ ] Third-party notice review remains for 31 transitive packages with LGPL/MPL/CC-BY/BlueOak licences and for actual Sharp/libvips binary distribution.
- [ ] Repository dependency alerts/SBOM automation still require owner-side setup; connected alert endpoints were unavailable in this session.


- [x] Node LTS upper bound enforced in Rust compiler doctor; regression tests added.
- [x] Cargo commands use --locked to prevent dependency resolution drift.
- [x] Added Child Safety & Protection draft in English and Indonesian, and registered its static route in all four locale builds.
- [x] Added PP 17/2025 and Permenkomdigi 9/2026 feature-level scope assessment; no blanket age gate is assumed.
- [x] Added HSTS to the Vercel security-header baseline; preview verification pending.

- [x] Recorded a primary-source integrity discrepancy: the official Permenkomdigi 9/2026 catalogue says in force, but the linked PDF is labelled “RANCANGAN”; clause-level interpretation is held pending a verified Gazette copy.
- [x] Corrected the quoted hyphenated child-safety object key after the preview build exposed a TypeScript parse error.
- [ ] Rebuild and verify the child-safety route and HSTS response header after the syntax fix.
