# IWAG V2 — TnC, CoC and Website Ruleset Reconstruction

**Review date:** 25 November 2026  
**Source baseline:** V2 repository `main` at `4b8745f6b358b15b98736683cb97e92dbc098cfa`; original website `https://iwag.furries.id/` crawled on 24 November 2026.  
**Status:** Independent policy drafts for review. Not official IWAG policy, not approved by IWAG or its organisers, and not in force.

## 1. Executive finding

The original website's TnC, CoC, Other Policies and Privacy Policy are event-organiser documents. They govern an event and connected services, including paid passes, attendee identity, badges, venue access, staff instructions, event conduct, payment processing, attendee data and physical event operations.

V2's README expressly describes the project as an independent educational recreation and research project, not affiliated with, endorsed by, sponsored by or officially connected to IWAG or its organisers. The current V2 application is an informational publication. Its source does not define attendee accounts, registration, ticketing, payment, bookings, messaging, public comments, user uploads or a staffed community-moderation service.

**Therefore, V2 must not copy the original organiser's contractual powers, operational promises, event restrictions, identity checks, ticketing rules, refund policy, staff authority or privacy practices and present them as V2 rules.** The original documents are comparison evidence, not a grant of authority or permission to republish protected text/assets.

## 2. Sources reviewed

### Original website

- [Original English Terms and Conditions](https://iwag.furries.id/en/tnc/)
- [Original Indonesian Syarat dan Ketentuan](https://iwag.furries.id/id/tnc/)
- [Original English Code of Conduct](https://iwag.furries.id/en/coc/)
- [Original Indonesian Pedoman Perilaku](https://iwag.furries.id/id/coc/)
- [Original English Other Policies](https://iwag.furries.id/en/policy/)
- [Original Indonesian Kebijakan Lainnya](https://iwag.furries.id/id/policy/)
- [Original English Privacy Policy](https://iwag.furries.id/en/privacy/)
- [Original Indonesian Kebijakan Privasi](https://iwag.furries.id/id/privacy/)
- [Original Brand Guideline](https://iwag.furries.id/en/brand/) and [Indonesian brand guide](https://iwag.furries.id/id/brand/)

The V1 snapshot is also preserved in `archive/v1-reference/site/`; it is a read-only research archive and must not be imported into V2 runtime/build inputs.

### V2 repository

- `src/data/legal.ts` — policy content and policy navigation.
- `src/pages/[lang]/[page].astro` — legal-page routing and draft-status banner.
- `docs/LEGAL-COMPLIANCE-MATRIX.md` — existing compliance engineering matrix.
- `docs/LEGAL-REWRITE-RESEARCH.md` — existing jurisdictional research.
- `docs/POLICY-DRAFTS.md` — prior policy draft inventory.
- `README.md` — independent-project boundary and current application feature scope.

## 3. Original vs V2 comparison

| Area | Original website / organiser policy | V2 position | Reconstruction decision |
|---|---|---|---|
| Contracting parties | Defines Platform, Event, Service, Staff, Member, Attendee and Event Venue; identifies the organiser/staff as the service operator. | V2 has no verified legal operator, contracting entity, address or authorised representative. | Do not reuse organiser definitions. Keep V2 operator facts explicitly unverified until confirmed. |
| TnC agreement | Conditions attendance and paid participation on acceptance of CoC, TnC and Privacy Policy. | V2 offers informational pages and external references only. | TnC must describe the independent informational service only; it must not pretend to form an event contract. |
| Passes, badges and payments | Covers pass purchase, payment provider, confirmation, quotas, pass information, transfers, no-shows, fraud, cancellations and badge revocation. | V2 does not sell or validate passes, accept payment or issue badges. | Exclude all pass, payment, refund, transfer, badge and seller clauses from V2 TnC. Direct users to the actual organiser/seller for those terms. |
| Refunds and liability | Original materials contain broad no-refund and organiser-liability exclusions. | V2 has no ticket transaction and cannot adopt organiser refund policy. | No blanket no-refund clause. Preserve mandatory consumer rights and non-excludable liability. |
| Event age rules | Original CoC describes a 14+ event audience, parental consent for some younger attendees and guardian accompaniment for under-14 attendees; related identity/consent procedures appear in event material. | V2 is a public information site, not the event admission authority. | Do not set an event admission age in V2. Assess child-access and child-data duties for the website separately. |
| Venue conduct | Original CoC includes venue-specific rules: badge display, shared public areas, smoking/vaping, outside food, pool/fursuit safety, lounge photography, props, contraband and property damage. | V2 does not operate the venue or direct event staff. | Do not import venue rules into the V2 Ruleset. Link to current official organiser/venue rules where appropriate. |
| Media and photography | Original CoC contains event-media use terms and opt-out language, plus no-camera areas. | V2 has no verified media operation or image-release process. | Do not claim event-media consent or permission. V2 must obtain its own rights/consent before using identifiable images. |
| Harassment and conduct | Original Other Policies lists harassment examples, vendor expectations, staff reporting and event exclusion consequences. | V2 currently has no user accounts, public comments, messaging or staffed moderation. | CoC applies only to future spaces directly controlled by V2 and only after operator adoption. Do not claim an active report desk. |
| Dangerous-behaviour exclusions | Original Other Policies includes broad disqualification categories involving past bans, convictions, investigations, support for conduct, and permanent exclusion. | V2 has no authority to screen convention attendees or make event admission decisions. | Do not adopt an attendee blacklist. Any future project moderation must use clear scope, reliable evidence, proportionality, notice, review and privacy safeguards. |
| Privacy and identity | Original Privacy Policy describes legal names, birth dates, email, payment-linked information, optional third-party data, attendee identity verification and event service fulfilment. | V2 has no attendee registry, payment store, registration or account database in application source; infrastructure logs and browser storage still require verification. | Do not claim to collect or verify attendee identity. Publish only a factual notice based on actual processing and vendor configuration. |
| Intellectual property | Original Brand Guideline governs organiser marks and assets; third-party assets may carry separate licences. | V2 is an independent recreation and does not own original event marks or artwork. | Maintain a per-asset rights register. Do not assume archived/public assets are reusable. |
| Reporting and enforcement | Original organiser has event operations and staff channels. | V2 has no verified moderator roster, report inbox, response SLA or emergency service. | Keep moderation/reporting policy as a future-governance draft, not an operational promise. |

## 4. Key risk findings in the original material

These are policy-design observations, not findings that the original organiser acted unlawfully.

1. **Scope and authority must be explicit.** Event rules should not be represented as general community rules or as rules of a separate independent website.
2. **Absolute no-refund and liability language needs legal review.** Consumer rights and remedies may be mandatory. A broad disclaimer cannot override statutory protections.
3. **Consent is not a universal legal basis.** A blanket statement that attendees consent to all personal-data processing does not replace purpose-by-purpose lawful-basis analysis, transparency, minimisation, rights handling and transfer safeguards.
4. **Identity-document handling is high risk.** A policy that requests visual identity checks or reserves the right to retain copies in serious cases must be assessed against necessity, data minimisation, security, retention and special-category/criminal-data rules.
5. **Broad exclusion criteria create fairness and privacy risks.** “Under investigation”, “supporting” a category of conduct, historical bans and reputational allegations need defined evidence standards, decision authority, context, notice, response rights, proportionality and appeal. V2 has no basis to create an event-attendee blacklist.
6. **Media consent must be specific to the operator and use.** An event organiser's media permission does not authorise an independent replica to publish attendee images.
7. **Child-access and event-admission are different questions.** A convention's age rating does not automatically determine whether a website or online feature is likely to be accessed by children.

## 5. V2 policy architecture after reconstruction

The V2 legal index now contains ten independent drafting documents:

1. **Code of Conduct (CoC):** expected behaviour and prohibited conduct only in spaces/interactions V2 directly controls.
2. **Website Ruleset:** acceptable use of the V2 website, security boundaries, scraping/reuse limits and future enforcement safeguards. It does not regulate event attendance.
3. **Terms and Conditions (TnC):** scope of the independent informational service, no event contract, external links, information limits, intellectual property and mandatory-rights savings clause.
4. **Privacy Policy:** actual data flows, controller identity, purposes, legal bases, recipients, transfers, rights, children, security and incidents.
5. **Cookie & Browser Storage Policy:** distinguishes HTTP cookies, local storage and third-party technologies.
6. **Copyright & Intellectual Property:** project licences, third-party ownership, asset register and rights notices.
7. **Disclaimer:** independent status, information limitations and no professional/emergency advice.
8. **Accessibility Statement:** actual engineering target and known limitations; no unsupported conformance claim.
9. **Moderation & Reporting:** future reporting, triage, human review, appeals, privacy and transparency requirements.
10. **Data Retention:** purpose-based retention, deletion, backups, legal holds and provider verification.

All ten remain marked as drafting-only, independent, unapproved and not in force. A page banner is not a substitute for approval or a valid contract.

## 6. Document boundaries and conflict handling

- Mandatory law, binding court orders and regulator directions prevail over all project policy text.
- A service-specific agreement from the actual verified operator may govern a particular transaction only to the extent it is valid and properly accepted.
- TnC describes the general V2 informational service. Ruleset governs permitted website use. CoC governs conduct in V2-controlled interactions. Each specialised policy controls its subject matter; none grants V2 authority over IWAG or third parties.
- The original organiser's terms, venue rules, ticket conditions and privacy notices remain separate. V2 may link to them but must not rewrite or claim to administer them.
- If future functionality changes (accounts, analytics, forms, comments, uploads, messaging, ticketing, payment, sponsorship, marketplace or physical event operations), re-run the feature and jurisdiction applicability assessment before launch.

## 7. Legal register and citation standard

The legal register is maintained separately in:

- `docs/INDONESIA-PINPOINT-LEGAL-REGISTER.md`
- `docs/LEGAL-RESEARCH-2026-11-24.md`
- `docs/LEGAL-COMPLIANCE-MATRIX.md`
- `docs/LEGAL-REWRITE-RESEARCH.md`

Each legal proposition should identify the instrument type, official title, number/year, issuing authority, jurisdiction, effective status/date, exact Pasal/ayat/huruf/angka or Article/section/subsection/paragraph, official source URL, territorial/functional trigger and affected feature.

**No fabricated statutory line numbers.** Indonesian statutes and regulations ordinarily use Pasal, ayat, huruf and angka as their controlling locators. PDF page numbers and line ranges are additional locators only when verified from the exact official document/version. If the official source does not provide stable line numbers, say so. If OCR or a translation does not preserve a provision number reliably, do not guess it.

Classify every requirement as:
- **Legally required:** binding law applies to the actual operator/function.
- **Policy required:** the project voluntarily adopts the rule.
- **Recommended practice:** supported by standards or evidence but not universally mandated by law.

## 8. Publication and adoption gates

Do not label any V2 document official, binding, approved, certified, or in force until all of the following are complete:

- the legal operator and authorised approver are identified;
- the website's real infrastructure, cookies, logs, vendors, subprocessors, locations and retention are verified;
- the actual feature set and data flows match the document;
- each relevant jurisdiction's territorial and functional trigger is assessed;
- all third-party assets have a documented licence or permission;
- working privacy/reporting/accessibility contacts and response responsibilities exist where promised;
- qualified legal review is completed for the operator's home jurisdiction and material target markets; and
- the authorised operator expressly approves and dates the documents.

A successful build, CI check or deployment is not legal approval, regulatory certification or proof of global compliance.


## 9. 25 November 2026 — implementation and legal-source correction

The public CoC route in `src/pages/[lang]/[page].astro` has been rewritten to cover only the V2 website and digital interactions V2 directly controls. Event attendance, venue access, badge/ticket powers, organiser staff instructions and physical event sanctions are expressly excluded. The V2 privacy text now identifies all seven localStorage preference keys and explains that the absence of accounts does not decide PP 17/2025 scope. See [CHILD-ACCESS-PP17-SCOPE-ASSESSMENT.md](CHILD-ACCESS-PP17-SCOPE-ASSESSMENT.md).

The Indonesia register now treats PP 17/2025 as in force and records its child-access indicators. It also downgrades the reported PP 33/2026 to an unverified watch item and flags the discrepancy between Permenkomdigi 9/2026 JDIH metadata and its linked PDF marked “RANCANGAN”. Do not cite article-level provisions from that draft until the final gazetted copy is obtained.
