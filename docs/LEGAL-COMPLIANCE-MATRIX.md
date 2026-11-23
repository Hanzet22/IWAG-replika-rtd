# IWAG V2 — Legal, Regulatory & Trust Requirements

**Review date:** 2026-11-23  
**Jurisdictional baseline:** Indonesia  
**Accessibility target:** WCAG 2.2 Level A only (A, not AA)  
**Status:** Engineering compliance requirements and legal-review checklist; not approved legal advice or final public policy.

## 1. How to apply this document

V2 is an independent educational re-engineering project. This document sets product and engineering controls; it does not make V2 the operator of IWAG, identify the event's legal contracting party, or authorize collection of attendee data or money.

Legal duties depend on facts that are not yet established: the operator's legal identity and establishment, whether the site is merely informational or enables transactions/accounts, what personal data is processed, whether children can access services, which vendors receive data, and which countries are intentionally targeted.

**Release blockers:** do not enable registration, ticket sales, payment, account creation, analytics, sponsor lead forms or collection of sensitive/child data until the actual operator, purpose, lawful basis, service model, notices, vendor contracts, retention and complaint channel are documented and reviewed.

Use a legal register with: instrument, issuing authority, jurisdiction, official URL, status, effective date, applicable trigger, affected feature, implementation evidence, reviewer and next review date. Recheck amendments before every material release.

## 2. Indonesia — binding baseline when the relevant trigger applies

### 2.1 Personal data protection

**Law No. 27 of 2022 on Personal Data Protection (UU PDP)** — in force since 17 October 2022; the statutory adjustment period has elapsed.

Applies to personal-data processing within Indonesia and to certain processing outside Indonesia with legal effects in Indonesia or affecting Indonesian citizens abroad. It is not limited to ticketing databases. Contact forms, registration, mailing lists, account identifiers, analytics identifiers, photographs linked to identifiable people, badge details and support requests can all involve personal data.

V2 requirements:
- Identify the actual Personal Data Controller and publish its verified legal name and reachable contact channel before collection.
- Maintain a data inventory and processing record: fields, purpose, data subject, source, lawful basis, recipients/processors, hosting country, retention, deletion and security controls.
- Map each purpose to a valid Article 20 lawful basis. Do not use a generic “by continuing you consent” statement as a substitute for the correct basis.
- Collect only what is necessary. Do not collect identity-document copies, health/disability details, emergency contacts, precise location or biometric data merely for convenience.
- Give a clear privacy notice before collection: controller, purposes, legal basis, data categories, retention, recipients/transfers, rights, withdrawal/contact route and consequences of not providing required fields.
- Support data-subject rights and requests through a monitored channel; verify requesters proportionately and keep an auditable response record.
- Set retention periods and deletion workflows. “Keep indefinitely for future events” is not an acceptable default.
- Put processor agreements, access control, staff confidentiality, incident response, backup protection and vendor review in place.
- Assess international transfers under Article 56 before sending personal data outside Indonesia. Document destination protection and the applicable safeguards/consent route.
- Evaluate whether a Data Protection Officer is required under Article 53 based on the actual processing scale, nature and statutory triggers.

Official text: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022

### 2.2 PDP implementing regulation — prepare ahead of commencement

**Government Regulation No. 33 of 2026**, implementing UU PDP, was promulgated on 16 July 2026 and is scheduled to enter into force six months later, on **16 January 2027**. It is not yet in force on this document's review date (23 November 2026). The underlying UU PDP duties already apply.

V2 requirements:
- Track the commencement date and prepare a separate gap assessment against the final official text.
- Do not describe PP 33/2026 as already effective before 16 January 2027.
- Review implementing detail on data-subject rights, processing, DPIA, DPO, cross-border transfer and sanctions with Indonesian counsel before launch or continued processing after commencement.

Reference copy and commencement analysis: https://peraturan.go.id/id/pp-no-33-tahun-2026  
Secondary commencement explainer (not a substitute for the official text): https://www.deloitte.com/content/dam/assets-zone1/southeast-asia/en/docs/services/legal/2026/sea-id-legal-client-alert-oct2026-en.pdf

### 2.3 Children and online services

**PP No. 17 of 2025** on Governance of Electronic System Implementation for Child Protection is in force (promulgated 27 March 2025). **Permenkomdigi No. 9 of 2026**, its implementing regulation, is also in force (6 March 2026). PP 17/2025 covers private electronic-system providers whose products/services/features are specifically designed for, or may be accessed by, children. A public event website may be accessible to minors even where the physical event has an age rating.

V2 requirements:
- Complete a child-access/risk applicability assessment before accounts, registration, profiling, messaging, user-generated content, location functions or personalised recommendations are added.
- Clearly state minimum age and explain age-related rules in plain language.
- Where the rules apply, implement the required parent/guardian consent, age assurance, child-friendly information, high-privacy defaults, child-rights reporting and other controls in the final applicable regulations.
- Do not collect precise geolocation from children or profile children where prohibited.
- Do not use behavioural advertising or manipulative engagement patterns directed at children.
- Separate website access from event attendance eligibility; an event's 14+ rule does not automatically remove child-protection duties for a website that children may access.
- Minimise parental-consent evidence and avoid retaining identity documents unless necessary and legally justified.
- Provide a child-rights/safety reporting path and an escalation process before enabling interactive features.

Official sources:
- PP 17/2025: https://peraturan.bpk.go.id/Details/316698/pp-no-17-tahun-2025
- Permenkomdigi 9/2026: https://peraturan.bpk.go.id/Details/346040/permenkomdigi-no-9-tahun-2026

### 2.4 Electronic systems and information disclosure

**PP No. 71 of 2019** on the Implementation of Electronic Systems and Transactions and the amended ITE Law (including **Law No. 1 of 2024**) are part of the Indonesian electronic-systems baseline. Private Electronic System Operator registration requirements must be assessed against the actual operator and system functions; do not assume a simple static information page has the same profile as an account, ticketing or marketplace platform.

V2 requirements:
- Identify the system operator and provide accurate contact/complaint information where required.
- Design for reliable, secure and accountable operation, access control, backup and incident handling.
- Where electronic agreements/transactions are offered, disclose the parties, object, terms, price/fees, process, security/privacy information and complaint channel before the user agrees.
- Preserve transaction/consent evidence and make confirmation, correction and error recovery understandable.
- Assess private-PSE registration with the relevant Indonesian authority once the operator and service model are known.

Official sources:
- PP 71/2019: https://peraturan.bpk.go.id/Details/122030/pp-no-71-tahun-2019
- Law 1/2024: https://peraturan.bpk.go.id/Details/274494/uu-no-1-tahun-2024

### 2.5 Consumer protection and electronic commerce

**Law No. 8 of 1999 on Consumer Protection** applies where an operator acts as a business supplying goods/services to consumers. **PP No. 80 of 2019** and **Minister of Trade Regulation No. 19 of 2026** may apply where V2 conducts trade through electronic systems (PMSE). Permendag 19/2026 was promulgated 8 June 2026 and revoked Permendag 31/2023. The exact obligations depend on the actual business model; a static event-information site is not automatically a marketplace.

Before selling passes, merchandise, dealer space or sponsor benefits:
- Verify the seller/contracting party, required business licences and PMSE classification.
- Display what is being sold, total price and fees, taxes where applicable, date/time/location, eligibility, limitations, fulfilment, cancellation/rescheduling/refund terms and a working complaint channel before payment.
- Avoid misleading availability, scarcity, discounts, sponsorship claims, testimonials or “official” labels.
- Use affirmative, informed acceptance and provide durable transaction confirmation.
- Review refund, cancellation, no-show, revocation and liability terms against mandatory consumer protections. Do not copy an absolute no-refund clause from the source site as a default.
- Separate the event organiser, payment processor, ticketing platform, dealer and sponsor responsibilities accurately.

Official sources:
- Consumer Protection Law: https://peraturan.bpk.go.id/Details/45288/uu-no-8-tahun-1999
- PP 80/2019: https://peraturan.bpk.go.id/Details/126143/pp-no-80-tahun-2019
- Permendag 19/2026 (official Ministry of Trade JDIH abstract): https://jdih.kemendag.go.id/peraturan/download/5d4ff6c5-ae21-4591-81ed-4949d6e6ac1d/file_abstract

### 2.6 Copyright, trademarks, media and attribution

**Law No. 28 of 2014 on Copyright** applies to text, photographs, illustrations, logos, maps, fonts, video, music and code. The original IWAG Brand Guideline separately requires third parties to consult the organiser before using its logo and states Kiki/Tama are under CC BY-NC.

V2 requirements:
- Keep an asset register with creator, rights holder, source URL, licence, permission, attribution, allowed edits, commercial-use status and review/expiry.
- Do not reproduce protected source-site copy or media just because it is publicly viewable or included in an archive.
- Obtain written permission for logos, photographs, event artwork, staff portraits, video and other assets unless a clear licence permits the exact intended use.
- For CC BY-NC assets, confirm the licence applies to the exact asset, attribute correctly, link the licence, indicate modifications and avoid commercial use unless separate permission is granted.
- Do not assume a project connected to paid ticketing, merchandise, sponsor benefits or commercial promotion qualifies as non-commercial.
- Respect privacy and image/recording choices in event media workflows.

Official text: https://peraturan.bpk.go.id/Details/38690/uu-no-28-tahun-2014  
CC BY-NC 4.0: https://creativecommons.org/licenses/by-nc/4.0/

### 2.7 Disability rights, event access and public safety

**Law No. 8 of 2016 on Persons with Disabilities** and **PP No. 42 of 2020** are relevant to disability rights and accessibility in their applicable contexts. Their existence does not by itself establish that WCAG 2.2 A is a statutory conformance requirement for every private website. Physical venue access, public services and event operations require a separate assessment with the venue and relevant authorities.

V2 requirements:
- Publish only verified accessibility facts: step-free routes, lifts, accessible toilets, seating, quiet space, captioning/interpreting, evacuation arrangements and contact options.
- Never promise a service (e.g. sign-language interpretation or dedicated support staff) until the operator and venue confirm it.
- Provide text-based contact alternatives; do not make essential registration/support voice-only.
- For physical events, assess permits, occupancy, fire/evacuation, first aid, security, venue rules and local requirements with the actual venue and competent authorities.
- Keep the Code of Conduct distinct from emergency procedures, venue safety plans and statutory duties.

Official sources:
- Law 8/2016: https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016
- PP 42/2020: https://peraturan.bpk.go.id/Details/142301/pp-no-42-tahun-2020

## 3. International laws and standards — apply only when their trigger is met

### 3.1 GDPR and other foreign privacy regimes

The EU GDPR applies to a non-EU operator only where its territorial-scope rules are met, such as an EU establishment, intentionally offering goods/services to people in the EU, or monitoring behaviour in the EU. A visitor's nationality alone does not automatically make GDPR apply to every processing operation. Other jurisdictions may have their own privacy, consumer, marketing, accessibility and child-protection laws.

V2 requirements:
- Keep an applicability register for each market intentionally targeted.
- If GDPR applies, assess Articles 3, 5–6, 8, 12–22, 25, 28, 32–35 and Chapter V transfers as relevant.
- Article 8 concerns consent under Article 6(1)(a) for information-society services offered directly to a child: the default age is 16, and a Member State may lower it to no less than 13. Verify the national rule for each relevant Member State; this is not a universal age threshold for every processing basis.
- Article 44 and the following Chapter V provisions govern transfers to third countries/international organisations.
- Do not claim worldwide compliance from an Indonesian-only review.
- Review local consumer and marketing rules before selling to or targeting users in a foreign market.

Official GDPR text: https://eur-lex.europa.eu/eli/reg/2016/679/oj

### 3.2 Singapore — Personal Data Protection Act

Singapore's PDPA governs organisations' collection, use and disclosure of personal data in Singapore. The PDPC's guidance describes the Act as applying to organisations carrying out activities involving personal data in Singapore; overseas collection followed by processing in Singapore can therefore require assessment. A transfer of personal data from Singapore to an overseas recipient is subject to the Transfer Limitation Obligation: the recipient must provide a standard of protection comparable to the PDPA, using an applicable method such as contractual protections or comparable laws.

V2 requirements:
- Do not treat Singapore nationality alone as the territorial trigger; map where the organisation and processing activities are situated.
- If personal data is processed in Singapore, assess the organisation definition, exclusions and applicable obligations.
- Map every onward transfer from Singapore and document the comparable-protection mechanism and destination.
- If using a vendor or cloud service, include transfer protections and onward-transfer controls in the contract.

Official sources:
- PDPC PDPA overview: https://www.pdpc.gov.sg/about/the-legislation/pdpa-overview
- PDPC Guide to Cross-Border Data Transfers (published 14 April 2026): https://www.pdpc.gov.sg/organisations/resources/guidance-by-topic/guide-to-cross-border-data-transfers
- Singapore Statutes Online, PDPA 2012: https://sso.agc.gov.sg/Act/PDPA2012

### 3.3 Malaysia — Personal Data Protection Act 2010 (Act 709)

Malaysia's Act 709 regulates personal-data processing in connection with commercial transactions, subject to its territorial and statutory scope. The Personal Data Protection (Amendment) Act 2024 (Act A1727) commenced in phases: 1 January, 1 April and 1 June 2025. The Commissioner's 2026 reprint of Act 709 records those commencement dates. Section 129 governs transfers outside Malaysia; the Commissioner's 2025 Cross-Border Personal Data Transfer Guideline explains the available conditions and transfer-impact assessment approach.

V2 requirements:
- Assess whether the operator's processing is in respect of commercial transactions and whether the Act's territorial provisions are met.
- Map transfers from Malaysia and apply the current Section 129 conditions; do not assume a generic consent checkbox is the only route.
- Provide the required notice of overseas transfers and document the assessment and safeguards.
- Review the 2024 amendments and current Commissioner's guidelines rather than relying on pre-2025 summaries.

Official sources:
- Act 709 reprint as at 15 September 2026: https://www.pdp.gov.my/wp-content/uploads/2026/10/Akta-709-cetakan-semula-2026-BI.pdf
- Federal Gazette P.U. (B) 522 — commencement dates for Act A1727: https://www.pdp.gov.my/wp-content/uploads/2024/12/PENETAPAN-TARIKH-PERMULAAN-KUAT-KUASA-2.pdf
- Personal Data Protection Guidelines No. 3/2025 — Cross-Border Personal Data Transfer: https://www.pdp.gov.my/wp-content/uploads/2025/08/GP_CBPDT_EN.pdf

### 3.4 Thailand — Personal Data Protection Act B.E. 2562 (2019)

Section 5 applies to controllers/processors in Thailand regardless of where processing occurs. It also reaches a controller or processor outside Thailand when processing personal data of people in Thailand in connection with offering goods or services to them or monitoring their behaviour in Thailand. Sections 28–29 govern transfers abroad. The official PDPC English version is labelled an unofficial translation; consult the Thai-language Gazette text for authoritative interpretation.

V2 requirements:
- Assess both the operator's location and whether it intentionally offers services to, or monitors, people physically in Thailand.
- If the foreign-controller provision applies, review the local representative requirement in Section 37(5).
- Map international transfers and the applicable Section 28/29 safeguard route.
- Do not infer applicability solely from a visitor's Thai nationality.

Official regulator sources:
- Thailand PDPC — Personal Data Protection Act B.E. 2562 (2019): https://www.pdpc.or.th/en/10455/
- PDPC Act and subordinate legislation index: https://www.pdpc.or.th/en/pdpc-act/

### 3.5 United Kingdom — UK GDPR and Children's Code

UK GDPR applies to processing in the context of a UK establishment and can also apply to an organisation outside the UK that offers goods or services to people in the UK or monitors their behaviour there. The ICO's Children's Code applies to online services likely to be accessed by children, subject to its territorial and service-scope rules; it is not limited to services marketed exclusively to children. A simple information-only site may not qualify as an information society service, but online registration, booking, accounts or other interactive services can change the assessment.

V2 requirements:
- Assess UK targeting/monitoring and the service's actual functionality before deciding whether UK GDPR applies.
- If the Children's Code applies, assess the standards for high-privacy defaults, age-appropriate transparency, profiling, geolocation, nudges and children's rights.
- Do not equate an event age rating with the online service's child-protection scope.

Official ICO sources:
- Who does the UK GDPR apply to?: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/personal-information-what-is-it/who-does-the-uk-gdpr-apply-to
- Services covered by the Children's Code: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/services-covered-by-this-code/

### 3.6 United States — COPPA and California CCPA

COPPA applies to operators of child-directed websites/services and general-audience operators with actual knowledge that they collect personal information online from a child under 13. The FTC's 2025 Rule amendments add requirements concerning separate parental consent for certain third-party disclosures, data retention/deletion and security; the compliance deadline for the amended Rule was in April 2026. COPPA is not a general privacy law for every teen or adult visitor.

The California CCPA applies to qualifying for-profit businesses doing business in California that determine the purposes and means of processing California residents' personal information and meet statutory thresholds. As of 1 January 2025, the revenue threshold is USD 26.625 million; alternative thresholds include processing the personal information of 100,000 or more California residents/households or deriving at least 50% of annual revenue from selling or sharing that information. Nonprofits and government agencies are generally outside the CCPA's business definition.

V2 requirements:
- Assess child-directed design and actual knowledge before collecting any under-13 personal information from US users.
- If COPPA applies, implement verifiable parental consent, notice, minimisation, security and retention/deletion controls as required by the current Rule.
- Do not assume CCPA applies merely because a California resident visits the site; assess the for-profit/business and threshold tests.
- Recheck thresholds and state privacy laws before any US-targeted commercial or registration feature is launched.

Official sources:
- FTC COPPA Rule, 16 CFR Part 312: https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312
- Federal Register, 2025 COPPA Rule amendments: https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule
- California Privacy Protection Agency FAQ: https://cppa.ca.gov/faq
- CCPA statute effective 1 January 2026: https://cppa.ca.gov/pdf/20260101_ccpa_statute.pdf
- CCPA updated monetary thresholds: https://cppa.ca.gov/regulations/cpi_adjustment.html

### 3.7 International copyright treaties

The Berne Convention and WIPO Copyright Treaty form part of the international copyright framework. They do not grant permission to reuse third-party assets. Use the rights/permission process in Section 2.6 and comply with the licence or applicable national law.

References:
- Berne Convention: https://www.wipo.int/treaties/en/ip/berne/
- WIPO Copyright Treaty: https://www.wipo.int/treaties/en/ip/wct/

### 3.8 WCAG 2.2 Level A — product target, not a legal shortcut

WCAG 2.2 is a W3C Recommendation (12 December 2024). For this project the requested conformance target is **Level A only**, not AA. WCAG is an international technical standard; it is not itself a blanket Indonesian statute for every private event website. Separate statutory disability/accessibility duties may still apply.

V2 requirements:
- Evaluate every applicable WCAG 2.2 Level A success criterion across complete pages, routes, forms, errors, media, locales and responsive states.
- Include text alternatives, applicable prerecorded-media alternatives/captions, semantic relationships, keyboard operation, no keyboard trap, no colour-only meaning, controllable timing/movement, seizure-safe flashing, skip blocks, descriptive titles/links, logical focus, pointer gesture alternatives, page language, predictable input, consistent help, identified errors and programmatic names/roles/values.
- Provide captions/transcripts and text equivalents for important event announcements. No core task may require speaking or listening.
- Respect reduced motion; do not autoplay decorative motion.
- Test keyboard-only, desktop screen reader and Android TalkBack manually. Automated scans alone cannot prove conformance.
- Do not silently upgrade the claim to AA. Stronger contrast, larger targets or clearer focus may be adopted as product improvements without changing the stated formal target.

Normative reference: https://www.w3.org/TR/WCAG22/

## 4. Cookies, analytics and embedded services

Indonesia does not have a single general cookie statute equivalent to the EU ePrivacy framework. However, cookies, pixels, SDKs, device identifiers, logs and embedded services may process personal data and are subject to applicable PDP/electronic-system duties. Foreign cookie rules apply only where their territorial scope is met.

V2 default:
- No third-party analytics, advertising pixels, social embeds, remote fonts or nonessential SDKs by default.
- Inventory each cookie/SDK with purpose, provider, data, duration, transfer destination and lawful basis.
- Keep optional tracking off until a lawful basis and transparent user choice are implemented.
- If consent is used, make reject and withdraw as accessible as accept; do not use dark patterns.
- Prefer first-party, aggregated, data-minimised analytics and short retention.
- Publish a cookie notice/policy only when the actual technology and legal review justify it; do not invent a cookie banner as a substitute for data governance.

## 5. Code of Conduct and event rules — content requirements

The V2 content model must keep these separate:
1. **Website Terms:** website use and any real transaction terms.
2. **Privacy Notice:** actual controller, purposes, lawful bases, data rights, processors, transfers and retention.
3. **Code of Conduct:** expected behaviour, prohibited conduct, reporting, review process, possible sanctions and appeal/review path.
4. **Event Safety Information:** venue-specific access, emergency, evacuation, first aid, restricted areas and operational instructions.
5. **Accessibility Statement:** target, current limitations, last review, and verified support channel.

A Code of Conduct draft should cover harassment/discrimination, consent and photography, public-facing content rating, badges/access control, props and restricted items, smoking/vaping, venue property, staff instructions, reporting and safeguarding. Do not copy the original IWAG wording or assume the original age rules, penalties or refund clauses are approved for V2.

## 6. Legal release checklist

- [ ] Actual legal operator, contracting party and data controller verified.
- [ ] Service/business model and PMSE/PSE applicability assessed.
- [ ] Data inventory, lawful basis, privacy notice, retention and rights workflow approved.
- [ ] Processor/vendor agreements and international data transfers reviewed.
- [ ] PP 33/2026 readiness reviewed before 16 January 2027.
- [ ] PP 17/2025 and Permenkomdigi 9/2026 child-service applicability assessed.
- [ ] Age/guardian process and child-safety reporting ready where applicable.
- [ ] Consumer disclosures, checkout, refund/cancellation and complaint process reviewed before any payment feature.
- [ ] Copyright, brand, photography and third-party content rights documented.
- [ ] Venue permits, emergency and accessibility facts verified by responsible parties.
- [ ] WCAG 2.2 Level A manual review and evidence recorded; no premature conformance claim.
- [ ] Each public policy approved by the actual operator and qualified Indonesian legal reviewer.
- [ ] All international-law claims tied to an identified territorial trigger.

## 7. Non-negotiable engineering defaults

- No personal data collection until the purpose and legal basis are documented.
- No child account, profiling, precise location or behavioural advertising feature without a child-protection assessment.
- No transaction without seller identity, full material terms, price and complaint route.
- No third-party tracking by default.
- No copyrighted/brand asset without provenance and permission/licence.
- No unverified claims about safety, accessibility, venue, schedule, visa, transport or refunds.
- No “legally compliant” or “WCAG conformant” badge based only on this document or automated tests.

## 8. Legal source register

The following links are starting points to official or primary repositories. Verify the consolidated text, amendments, status and effective date at the time of implementation:

- UU 27/2022 PDP: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022
- PP 33/2026 PDP implementing regulation: signed-text mirror (third-party host; not an official repository): https://legaltrans.id/downloads/pp-33-tahun-2026-pelindungan-data-pribadi.pdf — official BPK/peraturan.go.id listing was not located on 23 November 2026; verify against the official Gazette before relying on article-level details.
- PP 17/2025 child online protection: https://peraturan.bpk.go.id/Details/316698/pp-no-17-tahun-2025
- Permenkomdigi 9/2026: https://peraturan.bpk.go.id/Details/346040/permenkomdigi-no-9-tahun-2026
- PP 71/2019 electronic systems: https://peraturan.bpk.go.id/Details/122030/pp-no-71-tahun-2019
- UU 1/2024 ITE amendment: https://peraturan.bpk.go.id/Details/274494/uu-no-1-tahun-2024
- UU 8/1999 consumer protection: https://peraturan.bpk.go.id/Details/45288/uu-no-8-tahun-1999
- PP 80/2019 electronic commerce: https://peraturan.bpk.go.id/Details/126143/pp-no-80-tahun-2019
- Permendag 19/2026 PMSE: https://jdih.kemendag.go.id/peraturan/download/5d4ff6c5-ae21-4591-81ed-4949d6e6ac1d/file_abstract
- UU 28/2014 copyright: https://peraturan.bpk.go.id/Details/38690/uu-no-28-tahun-2014
- UU 8/2016 disability rights: https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016
- PP 42/2020: https://peraturan.bpk.go.id/Details/142301/pp-no-42-tahun-2020
- GDPR: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- Singapore PDPA: https://sso.agc.gov.sg/Act/PDPA2012
- Malaysia Act 709 reprint: https://www.pdp.gov.my/wp-content/uploads/2026/10/Akta-709-cetakan-semula-2026-BI.pdf
- Thailand PDPA: https://www.pdpc.or.th/en/10455/
- UK GDPR applicability: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/personal-information-what-is-it/who-does-the-uk-gdpr-apply-to
- US COPPA Rule: https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312
- California CCPA: https://cppa.ca.gov/faq
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
