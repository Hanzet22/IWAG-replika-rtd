# IWAG V2 — Full Engineering Audit

**Review date:** 24 November 2026  
**Target branch:** `v2/full-audit-aot-compliance`  
**Production baseline:** `https://iwag-replika-rtd.vercel.app`  
**Status:** Active reconstruction work; not a certification, legal opinion, or organiser approval.

## 1. Scope and evidence boundary

This review examined the V2 source tree, Rust compiler controller, Astro route templates, canonical legal policy data, CSS, browser preference logic, existing architecture and legal research notes. The production site was previously observed responding successfully for the homepage and selected legal routes. A zero-runtime-error observation is limited to the queried Vercel window; it does not establish absence of client-side, browser, accessibility or content defects.

V1 is retained as a read-only reference archive. It is not a source tree to be copied wholesale. Content reuse requires provenance and permission review.

## 2. Confirmed engineering findings

| ID | Severity | Finding | Action |
|---|---|---|---|
| ENG-01 | High | Terms, Privacy and CoC had both hand-written page sections and a second shared policy-data renderer. | Use `src/data/legal.ts` as the single canonical legal-copy source and suppress duplicate legacy render blocks. |
| ENG-02 | Medium | Rust's required-route contract covered only a subset of critical routes. | Require primary pages, location/participation, policy index, legal documents and aliases across all locales. |
| ENG-03 | Medium | Static output URL validation previously skipped `javascript:` URLs and allowed `data:` navigation to pass as external. | Reject script URLs and data-navigation URLs. |
| ENG-04 | Medium | New-tab links were not checked for opener isolation. | Require `noopener` or `noreferrer` on `target="_blank"` anchors. |
| ENG-05 | Medium | Static deployment did not declare a project-level baseline security-header set. | Add Vercel headers for MIME sniffing, framing, referrer, cross-domain policy, browser capabilities and opener isolation. |
| ENG-06 | Informational | Rust is an active AOT build controller, not a universal language transpiler. | Keep the architecture explicit: Rust orchestrates; Astro/Vite and specialist tools compile their respective languages. |
| ENG-07 | Medium | User-selected high-contrast mode changed canvas/text system tokens but left link and visited-link colours on the normal theme palette. | Map links to the system `LinkText` and `VisitedText` colours in high-contrast mode. |

## 3. CSS and interaction review

The existing CSS already contains a semantic reset, responsive breakpoints, visible focus, text scaling, expanded text spacing, high-contrast mode, reduced-motion support, forced-colors handling, local font faces and narrow-screen layout rules. The high-contrast link and visited-link tokens were additionally aligned to system colours in this branch. The preference script stores appearance choices locally and has no account or server submission flow.

This source inspection is not a visual browser test. Remaining review areas include:
- Actual contrast of every foreground/background combination and interactive state.
- Reflow at 320 CSS px and zoom up to 400%.
- Mobile navigation and preference panel operation with keyboard and screen readers.
- Text-spacing overrides without clipping, overlap or loss of function.
- Focus visibility, focus order, sticky/overlay obstruction and touch target usability.
- Font fallback, loading, layout shift and low-memory Android performance.
- Whether all non-decorative images have meaningful alternatives and decorative images are ignored by assistive technology.

No WCAG conformance claim is made. The project's stated target remains WCAG 2.2 Level A; Level AA is not claimed.

## 4. Legal-policy architecture

The nine canonical draft documents are:
1. Code of Conduct
2. Terms and Conditions
3. Privacy Policy
4. Cookie Policy
5. Copyright and Intellectual Property
6. Disclaimer
7. Accessibility Statement
8. Moderation and Reporting
9. Data Retention

The documents are independently authored and remain explicitly marked drafting-only, not official, not verified, not approved and not in force. They must not be represented as rules issued by IWAG or its organisers.

The V1 archive includes event-specific terms concerning tickets, payments, badges, refunds, attendance, age and venue operations. These clauses are historical and are not automatically adopted into the independent V2 website terms or CoC.

## 5. Legal research register — Indonesia baseline

Primary-source checks performed on 24 November 2026 include:

- **UU 27/2022 on Personal Data Protection:** official peraturan.go.id metadata identifies it as in force, enacted and promulgated 17 October 2022. Assess controller identity, purpose, lawful basis, transparency, data-subject rights, retention, security, processors and cross-border transfers before any personal-data feature. https://www.peraturan.go.id/id/uu-no-27-tahun-2022
- **PP 17/2025 on Electronic System Governance for Child Protection:** JDIH BPK metadata identifies it as in force from 27 March 2025. Assess the actual product/service/feature, child access, risk and applicable safeguards. https://peraturan.bpk.go.id/Details/316698/pp-no-17-tahun-2025
- **Permenkomdigi 9/2026:** JDIH BPK metadata identifies it as in force from 6 March 2026. It addresses age limits, self-assessment, child-protection design, age verification, risk assessment, child accounts and social-network services. Applicability must be assessed against the actual service classification and features, not assumed from a static brochure alone. https://peraturan.bpk.go.id/Details/346040/permenkomdigi-no-9-tahun-2026
- **PP 71/2019 on Electronic Systems and Transactions:** JDIH BPK metadata identifies it as in force from 10 October 2019. Assess PSE scope, security, operational and information duties against the actual operator and functionality. https://peraturan.bpk.go.id/Details/122030/pp-no-71-tahun-2019
- **UU 1/2024 amending the ITE Law:** JDIH BPK metadata identifies it as in force from 2 January 2024. It includes child-protection provisions for electronic-system operators. Read the amended consolidated law and relevant Constitutional Court decisions before drafting legal claims. https://peraturan.bpk.go.id/Details/274494/uu-no-1-tahun-2024
- **WCAG 2.2:** W3C Recommendation dated 12 December 2024. This is the project's technical accessibility target, not a blanket claim that every criterion is independently mandated by Indonesian statute for this private website. https://www.w3.org/TR/WCAG22/

Additional instruments already tracked in `docs/LEGAL-COMPLIANCE-MATRIX.md` include UU 8/1999 and PP 80/2019 for consumer/e-commerce triggers; UU 28/2014 for copyright; UU 8/2016 and PP 42/2020 for disability/accessibility context; GDPR, ePrivacy, DSA, UK GDPR/PECR/Children's Code, Singapore PDPA, Malaysia Act 709, Thailand PDPA, COPPA and California privacy law where their territorial and service triggers apply.

**Important:** the review date is 24 November 2026. Do not treat PP 33/2026 as effective before its stated 16 January 2027 commencement. The existing research file records that official publication verification was incomplete; confirm the official Gazette and final text before relying on article-level requirements.

## 6. Release blockers

- Confirm the actual legal operator, contracting party, policy owner and any real authority to speak for the event.
- Verify Vercel, DNS, CDN, network-security and other providers; inspect actual request logs, cookies, storage, regions, retention and transfers.
- Do not add accounts, registration, payments, analytics, newsletter, contact forms or user uploads until the service model, lawful basis, notices, vendor agreements and complaint workflow are implemented.
- If any service is intended for or foreseeably accessed by children, complete the required child-safety classification and risk work before launch.
- Verify event-specific rules, venue instructions, emergency contacts, media zones, age limits and accessibility accommodations with the authorised operator.
- Obtain qualified Indonesian legal review and operator approval before any policy is made operative.
- Complete manual keyboard, screen-reader, TalkBack, zoom/reflow and representative user testing before any accessibility conformance statement.

## 7. Engineering sequence

1. Consolidate policy rendering and route contracts (implemented on this branch).
2. Apply deployment security headers and static URL hardening (implemented on this branch).
3. Review remaining content and route accuracy against V1 source evidence without importing V1 legal rules.
4. Complete responsive, keyboard, assistive-technology and contrast review.
5. Review dependencies, licences, source provenance and generated asset inventory.
6. Build the branch, resolve real failures, inspect generated pages and deploy a preview.
7. Merge and deploy only after the actual operator/project owner accepts the result.

CI status is evidence, not a stop signal. Continue investigating and fixing concrete defects from the last known-good commit; do not bypass a genuine safety or integrity failure merely to obtain a green badge.


## 8. Build and preview evidence

The Vercel preview for commit 19bb29fd1253c749e61eae2ceb11a9ce7dab447b completed successfully: Rust iwagc ran the AOT static build under Node 22.23.5, Astro generated 298 pages, 298 HTML files and one CSS file were inspected, 8,596 local references were checked, 298 routes were emitted, and 78 required root/locale routes were verified. The automated diagnostic reported zero findings; it explicitly does not establish WCAG conformance.

The first preview used Node 26.13.1 and exposed npm 11 environment/install-script warnings. The Vercel project is now pinned to Node 22.x and the package engine range is constrained to >=22.23.4 <23. The follow-up preview used Node 22.23.5 with npm 10.9.9 and no longer emitted those npm warnings. Rust 1.100.0 was installed by rustup during the build from the pinned toolchain declaration.


## 9. Dependency and supply-chain review

A separate [dependency licence and security review](DEPENDENCY-LICENSE-SECURITY-REVIEW.md) inventories all 532 locked npm packages. Every lockfile entry declares a licence field; 31 transitive entries require specific review for LGPL, MPL, CC-BY or BlueOak terms. Direct dependencies are MIT except TypeScript (Apache-2.0).

The exact Astro 7.4.13 and Vite 8.3.8 versions fall outside the reviewed recent affected ranges. Vue 3.5.45 is associated with a conditional Nuxt UI + Comark/MDC + untrusted-Markdown SSR chain; the current project is static Astro, has no such dependencies or user-content pipeline, and no current trigger was identified. Reassess if the architecture changes.

Vercel Security Review findings could not be queried because the endpoint returned HTTP 404. GitHub alert endpoints were not available through the connected fetch interface. No alert list is treated as proof of zero vulnerabilities. Licence texts and actual Sharp/libvips and Lightning CSS binary distribution still require review.


## 9. Follow-up findings and patches (24 November 2026)

| ID | Priority | Finding | Change |
|---|---|---|---|
| ENG-08 | Medium | The Node doctor enforced a minimum version but did not enforce the package's supported upper major-version bound. A local Node 26 installation could pass the doctor even though package engines and Vercel target Node 22. | Added `node_maximum_exclusive = "23.0.0"` and a semantic upper-bound check; added regression tests for Node 23/26 rejection. |
| ENG-09 | Medium | Package scripts invoked Cargo without `--locked`, allowing lockfile resolution drift during local builds. | Added `--locked` to all Cargo run scripts. The compiler crate has a committed Cargo.lock. |
| LEG-01 | High | The first legal matrix underweighted the new Indonesian child-online-protection framework. PP 17/2025 and its implementing Permenkomdigi 9/2026 require a feature-level child-access assessment. | Added a Child Safety & Protection draft, route validation, and a PP 17/2025 / Permenkomdigi 9/2026 applicability analysis. No age gate or identity verification is assumed without classification. |
| SEC-01 | Medium | The baseline response-header test expected HSTS, but Vercel configuration did not set it. | Added HSTS with a one-year max-age and includeSubDomains; verify on preview before merge. |

### PP 17/2025 scope note

The primary text defines a child as a person under 18 (Article 1), requires protection for children accessing electronic systems (Article 2), and describes covered private PSE products/services/features as those designed for or possibly accessed by children (Article 3(3)). Article 4(2) identifies indicators for possible child access, including published terms/policies, evidence of routine child users, child-directed advertising, child-attractive design and substantial similarity to services already accessed by children. The current V2 site has no accounts, chat, comments, uploads, ticketing or payment features; that is relevant risk context, not an automatic exemption. The audience, design and evidence of actual child use still need operator assessment.

The official BPK catalogue marks Permenkomdigi 9/2026 as in force from 6 March 2026 and describes provisions on minimum age, self-assessment, age assurance, child-protection design, risk profiles and social-networking services. A static public-information site must be classified on its actual features; do not copy social-network age-gating controls without a reasoned legal assessment.

### Additional release boundary

The new child-safety page is a non-operative draft only. No verified safeguarding lead, monitored reporting channel, incident-response team or event-organiser authority exists in the inspected project. Do not describe it as an active child-safety reporting service.


| LEG-02 | High | The BPK and Ministry JDIH catalogue records mark Permenkomdigi 9/2026 as in force and list BN 2026 No. 163, but the PDF linked from both official records was retrieved with the heading “RANCANGAN” and incomplete promulgation fields. | Record the discrepancy. Use official catalogue metadata and abstract for identification only; do not rely on clause-level text or age bands from the linked PDF as final until the signed Gazette copy is verified. |

A preview build of commit 1a5b2acd failed because the new hyphenated object key child-safety in src/data/legal.ts was not quoted. The key is corrected to "child-safety" in the follow-up source commit. This was a source syntax error, not a Vercel platform failure. The next preview is the release candidate for validation.
