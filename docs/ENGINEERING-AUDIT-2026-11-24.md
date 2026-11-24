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

## 3. CSS and interaction review

The existing CSS already contains a semantic reset, responsive breakpoints, visible focus, text scaling, expanded text spacing, high-contrast mode, reduced-motion support, forced-colors handling, local font faces and narrow-screen layout rules. The preference script stores appearance choices locally and has no account or server submission flow.

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
