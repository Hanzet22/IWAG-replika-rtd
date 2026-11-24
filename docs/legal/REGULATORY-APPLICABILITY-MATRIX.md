# IWAG V2 — Regulatory Applicability Matrix

**Research snapshot:** 24 November 2026  
**Purpose:** Drafting and engineering guidance for an independent, read-only informational preview.  
**Status:** Research aid, not legal advice, not an adopted policy and not a determination that every listed law applies.

## 1. Applicability method

Do not label a law “globally applicable”. Determine scope from the actual operator, establishment, service, target users, processing purpose, data flows, transactions and territorial connections. The site currently presents public information and links; it does not offer attendee accounts, ticket checkout, payment, user uploads, comments, or a registration form in the inspected application source. Hosting and infrastructure providers may still process connection metadata.

Before treating any rule as applicable, record:
- responsible operator and legal form;
- where the operator is established;
- countries in which the service is intentionally offered;
- whether the service is an intermediary, marketplace, e-commerce service, or merely a static information site;
- categories of people and data processed;
- whether children are directly targeted or known to use a service;
- whether transactions, contracts, bookings or paid services exist;
- hosting, CDN, DNS, security, repository and deployment vendors, subprocessors and transfer destinations.

## 2. Indonesia — primary review set

| Instrument | Subject | Relevance to this project | Drafting / engineering consequence |
|---|---|---|---|
| Law No. 27 of 2022 on Personal Data Protection (UU PDP) | Personal data, controller/processor duties, data-subject rights, security, transfers and child data | Primary review if the operator processes personal data in Indonesia or the law's extraterritorial conditions are met. Data about children is specifically classified as specific personal data; Article 25 requires special processing and parent/guardian consent in accordance with law. | Identify the controller before finalising a privacy notice. Map purposes, lawful basis, minimisation, retention, rights workflow, security, processors and transfers. Do not collect child data without a properly reviewed process. |
| Government Regulation No. 71 of 2019 (PP 71/2019) on Electronic Systems and Transactions | Reliability, security, governance and obligations of electronic-system operators | Review whether the actual operator/service qualifies as a private-scope Electronic System Operator (PSE Lingkup Privat) and whether registration or other obligations apply. Do not infer registration status from a static preview. | Determine PSE status, operator identity, system function, operational control, registration duties and required user information before launch of interactive services. |
| Law No. 1 of 2024 (second amendment to the ITE Law) | Electronic information, systems and transactions | Relevant where the site or operator engages in covered electronic-system or electronic-transaction conduct. | Keep security, authenticity, notices, content controls and any future electronic contracts accurate. Avoid unsupported claims about what is legally prohibited. |
| Law No. 8 of 1999 on Consumer Protection | Consumer rights and business/operator obligations | Relevant if the project operator supplies goods or services to consumers, particularly if tickets, merchandise, paid services, bookings or other transactions are introduced. | Before any sale, identify the seller, total price, product/service details, payment, cancellation, refund, complaint and dispute processes. Do not publish waivers that purport to remove mandatory rights. |
| Law No. 23 of 2002 on Child Protection, as amended (including Law No. 35 of 2014 and subsequent amendments) | Child rights and protection from violence, exploitation and discrimination | Relevant to safeguarding where children participate in event-related services, content, staffing, volunteering or communities. | Separate online privacy from physical event safeguarding. Define child-safe reporting, adult responsibility, consent boundaries, image/media practices and escalation only after a real operator and trained responsible persons exist. |
| Law No. 28 of 2014 on Copyright | Copyright and related rights | Relevant to event names, logos, artwork, characters, photos, music, video, fonts, maps, text and archived materials. | Maintain a provenance/licence register. Attribution alone does not grant permission. Respect licence scope, non-commercial restrictions, moral rights and takedown/review procedures. |

## 2.1 Child-access assessment for this project

The official PP 17/2025 text defines a child as a person under 18 (Article 1), requires electronic-system providers to protect children accessing the system (Article 2), and describes the covered private PSE scope in terms of products, services or features specifically designed for, or possibly accessed by, children (Article 3(3)). Article 4(2) lists indicators for possible child access. The site must therefore document an actual feature-level assessment rather than assert either automatic exemption or automatic full application.

Current inspected V2 facts: static informational pages; no user accounts, chat, comments, uploads, ticket sales, payments, booking or user-generated content. This lowers some interaction and data risks but is not a legal exemption. Its audience, visual design, published terms and evidence of routine child access still need assessment. Do not add an age gate or identity verification solely by assumption; first classify each product/service/feature under the current regulation and obtain operator/legal review.

Permenkomdigi 9/2026's BPK record marks it in force from 6 March 2026 and summarises minimum-age, self-assessment, age-verification, risk-profile and child-protection-design provisions. The official summary does not, by itself, settle the classification of this particular website.

## 3. International and regional laws — conditional, not universal

| Framework | Trigger to assess | Project treatment |
|---|---|---|
| EU GDPR (Regulation (EU) 2016/679) | Article 3: processing in the context of an EU establishment, or offering goods/services to people in the EU, or monitoring their behaviour in the EU. | Apply only after territorial-scope analysis. If in scope, map controller/processor roles, lawful bases, transparency, rights, security, records, transfers and any required representative/DPO. Article 8 concerns consent for information-society services offered directly to children when consent is the relied-upon basis; Member States may set the relevant age between 13 and 16. This is not a universal global age threshold. |
| UK GDPR and UK Data Protection Act 2018; ICO Children's Code | UK territorial scope and, for the Children's Code, relevant online services likely to be accessed by children in the UK. | Assess separately from EU GDPR. Do not reuse the EU age threshold or assume every website is within the Children's Code. |
| Singapore Personal Data Protection Act 2012 (PDPA) | Organisation's collection, use or disclosure of personal data in Singapore, subject to the Act's scope and exceptions. | Review if the operator or relevant processing falls within scope. Document purposes, notification/consent where required, protection, retention limitation, access/correction, transfers and breach response. |
| Malaysia Personal Data Protection Act 2010 (Act 709), as amended | Processing of personal data in commercial transactions within the Act's scope and applicable territorial rules. | Assess the operator's role, commercial character, data flows and current amendments before applying. |
| Thailand Personal Data Protection Act B.E. 2562 (2019) | Processing in Thailand or offering goods/services to, or monitoring, people in Thailand under its scope rules. | Assess territorial scope, controller/processor duties, lawful bases, notices, rights and cross-border transfer requirements. |
| US COPPA (15 U.S.C. §§ 6501–6506; 16 CFR Part 312) | A website/service directed to children under 13, or an operator with actual knowledge it collects personal information online from a child under 13. | Do not treat COPPA as applying to every site merely because children might visit. If triggered, assess notice, verifiable parental consent, parental rights, security and retention. |
| US state privacy laws (including California CCPA/CPRA) | State-specific statutory thresholds, covered-business status, processing categories and consumer residency/territorial criteria. | Do not claim blanket US coverage. Assess each relevant state law and thresholds before drafting rights, sale/share, targeted advertising or sensitive-data statements. |
| EU Digital Services Act (Regulation (EU) 2022/2065) | The service qualifies as an intermediary service offered to recipients in the EU, with obligations depending on service category and size. | A static informational site is not automatically an online platform. Reassess if hosting user content, forums, marketplaces or intermediary functions are added. |
| European Accessibility Act (Directive (EU) 2019/882) | Covered products/services placed on or provided in the EU, including certain consumer-facing e-commerce services, subject to scope and exemptions. | A static event-information site is not automatically covered merely because it is accessible from the EU. Reassess before ticketing, online sales or covered services are offered to EU consumers. |
| WCAG 2.2 | Technical accessibility standard; legal force depends on adoption or incorporation by a jurisdiction/contract. | Use as an engineering benchmark. Do not present WCAG as a worldwide statute or claim conformance without evaluation. |

## 4. Policy documents and minimum content

### Terms and Conditions
- verified operator identity and contact;
- accurate service scope and feature status;
- permitted use and proportionate restrictions;
- intellectual-property and third-party-link boundaries;
- age and guardian language that does not invent event rules;
- transaction, cancellation, refund, delivery and complaint terms only if transactions actually exist;
- mandatory consumer rights preserved;
- governing law, forum and effective date only after operator/jurisdiction review.

### Code of Conduct
- scope limited to spaces controlled by the actual adopting operator;
- clear definitions and examples of harassment, discrimination, threats, privacy violations, impersonation and retaliation;
- consent and media boundaries;
- child safeguarding and escalation;
- accessible reporting and support alternatives;
- fair, impartial, proportionate moderation and appeal;
- no invented enforcement authority over the event, venue or third-party communities.

### Privacy Notice
- controller identity and contact;
- data categories and sources;
- purposes and lawful bases;
- recipients, processors, sub-processors and countries;
- retention periods grounded in actual vendor configuration;
- security and incident response;
- data-subject rights and functioning request channel;
- child-data treatment;
- cookies/local storage and actual network technologies;
- cross-border transfer safeguards where applicable.

### Cookie / Device Storage Notice
- distinguish HTTP cookies, local storage, session storage, service workers and third-party technologies;
- record actual names, domains, purposes, lifetimes and providers;
- determine consent requirements by jurisdiction and technology;
- do not display a consent banner if it does not correspond to real technologies or actual choices.

### Accessibility Statement
- tested scope, methods, dates and versions;
- known barriers and remediation status;
- a verified contact channel and response process;
- no claim of WCAG conformance based only on automated checks.

### Copyright / Media / Photo Policy
- asset provenance and licence evidence;
- permissions for third-party marks and artwork;
- identifiable-person image consent and withdrawal/contact process where applicable;
- special safeguarding for minors;
- clear distinction between event organiser rules and this independent project's own publishing practices.

## 5. Release blockers before a policy becomes operative

- [ ] Legal operator identity and address verified.
- [ ] Actual service and data-flow inventory completed.
- [ ] Hosting/CDN/DNS/security vendor processing and retention verified.
- [ ] Applicable jurisdictions and territorial triggers documented.
- [ ] Child-data and safeguarding assessment completed.
- [ ] Transaction terms reviewed before any payment or ticketing feature exists.
- [ ] Working privacy, accessibility, copyright and safeguarding contact channels exist.
- [ ] Independent legal review completed by a qualified professional for the operator's jurisdictions.
- [ ] Version, adoption authority, effective date and change process recorded.

## 6. Official source register

- Indonesia UU PDP No. 27/2022 — BPK: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022
- Indonesia UU PDP — JDIH Komdigi: https://jdih.komdigi.go.id/produk_hukum/view/id/832/t/undangundang%2Bnomor%2B27%2Btahun%2B2022
- Indonesia PP No. 71/2019 — BPK: https://peraturan.bpk.go.id/Details/122030/pp-no-71-tahun-2019\n- Indonesia PP No. 17/2025 — BPK PDF: https://peraturan.bpk.go.id/Download/377994/PP%20Nomor%2017%20Tahun%202025.pdf; official catalogue: https://peraturan.go.id/id/pp-no-17-tahun-2025\n- Indonesia Permenkomdigi No. 9/2026 — BPK: https://peraturan.bpk.go.id/Details/346040/permenkomdigi-no-9-tahun-2026
- Indonesia UU No. 1/2024 (ITE amendment) — BPK: https://peraturan.bpk.go.id/Details/274494/uu-no-1-tahun-2024
- Indonesia UU No. 8/1999 (Consumer Protection) — BPK: https://peraturan.bpk.go.id/Details/45288/uu-no-8-tahun-1999
- Indonesia UU No. 35/2014 (Child Protection amendment) — BPK: https://peraturan.bpk.go.id/Details/38723/uu-no35tahun-2014
- Indonesia UU No. 28/2014 (Copyright) — BPK: https://peraturan.bpk.go.id/Details/38690
- EU GDPR consolidated text — EUR-Lex: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex:32016R0679
- EU Digital Services Act — EUR-Lex: https://eur-lex.europa.eu/eli/reg/2022/2065/oj
- European Accessibility Act — EUR-Lex: https://eur-lex.europa.eu/eli/dir/2019/882/oj
- US COPPA Rule — FTC: https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa
- US COPPA FAQ — FTC: https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions
- WCAG 2.2 — W3C: https://www.w3.org/TR/WCAG22/

## 7. Review warning

This matrix is a starting point, not a final jurisdictional opinion. Regulations change, local implementing rules may add obligations, and a lawyer must review the final policy against the actual operator and service. Do not publish invented addresses, contacts, retention periods, legal bases, refund rules, event age limits or enforcement powers.


## 2.2 Source-integrity issue — Permenkomdigi 9/2026

The Ministry JDIH catalogue entry (product id 1007) and BPK record identify Permenkomdigi 9/2026, dated and promulgated 6 March 2026, BN 2026 No. 163, and mark it in force. The official JDIH abstract (record 547) also records the 6 March 2026 effective date and summarises its subject matter. However, the PDF linked from both official records was retrieved with the heading “RANCANGAN PERATURAN MENTERI” and the last-page promulgation fields appear incomplete. The inconsistency is recorded as a source-integrity blocker: do not cite detailed clause wording or age bands from that PDF as final law until the signed Gazette copy is independently verified. High-level metadata and abstract are used here only to identify the instrument and its subject matter.

Official catalogue: https://jdih.komdigi.go.id/produk_hukum/view/id/1007/t/peraturan+menteri+komunikasi+dan+digital+nomor+9+tahun+2026
Official abstract: https://jdih.komdigi.go.id/produk_hukum/abstrak/547
Official BPK record: https://peraturan.bpk.go.id/Details/346040/permenkomdigi-no-9-tahun-2026
