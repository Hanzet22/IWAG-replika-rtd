# IWAG V2 — Global Legal & Regulatory Compliance Audit

**Research register:** GLR-0.1  
**Prepared:** 25 November 2026  
**Repository baseline:** `rewrite/substantive-v1-rules-v2` at `885e74f044c3679df7800e0c3c97257812452761`  
**Audit branch:** `research/global-legal-compliance-audit`  
**Scope:** Event rules, ticketing/registration, attendee communications, website/app, personal data, minors, venue operations, exhibitors/dealers, programme participants, media, and cross-border services.

> This is a living research register, not a legal opinion, a certification of compliance, or a claim that every country's law applies. No single review can truthfully certify that every statute, regulation, local ordinance, court decision, regulator order, and current amendment in every jurisdiction has been read. The audit instead identifies legal triggers, screens jurisdictions, researches primary sources, and records what remains unresolved. A jurisdiction is not marked applicable merely because an attendee can open the website there.

## 1. Legal applicability model

For each legal rule, determine and record:

1. **Entity and role:** contracting organiser, event operator, website operator, controller, joint controller, processor, employer, vendor, venue operator, promoter, ticket reseller, or agent.
2. **Territory:** organiser establishment, venue location, attendee location, data-subject location, vendor location, hosting/processing location, and where an offer or monitoring activity is directed.
3. **Activity:** in-person event, online registration, ticket sale, payment, account, marketing, photography, livestream, research, merchandise, food service, vendor sales, employment/volunteering, or cross-border transfer.
4. **Trigger:** statutory territorial test, establishment, targeting, monitoring, local physical activity, consumer transaction, regulated activity, or contractual connection.
5. **Instrument and status:** exact title/number, issuing authority, official text, amendment history, commencement, transitional provisions, territorial extent, subordinate rules, and enforcement guidance.
6. **Requirement:** mandatory obligation, prohibition, conditional duty, contractual choice, or recommended control. Keep these categories separate.
7. **Evidence:** official source URL, access date, relevant articles/sections, source language, translation status, and reviewer notes.
8. **IWAG consequence:** clause, process, product feature, vendor agreement, venue contract, or operational control that must change.

## 2. Research status vocabulary

- **Verified — primary source:** official legislation/gazette/regulator source inspected; exact provision and status recorded.
- **Corroborated — secondary source:** credible legal or government commentary supports the finding, but primary text/status still needs inspection.
- **Screened:** jurisdiction or legal family identified; applicability not decided.
- **Open:** missing source, trigger facts, commencement, local rule, or operational evidence.
- **Not applicable — reasoned:** trigger tested and not met on documented facts; re-screen when facts change.

Do not mark a law “compliant” based only on a policy paragraph. Compliance also depends on actual data flows, contracts, notices, consent mechanisms, safety plans, training, and conduct.

## 3. Priority tiers

### Tier 0 — Always establish before drafting legal conclusions

- Actual organiser/contracting party and its legal form.
- Actual event venue and every city/state/province/country where physical activities occur.
- Actual ticket/pass sale markets and currencies.
- Website/app audience, language, marketing targets, registration access, age gates, and analytics.
- Data collected, data subjects' locations, processors, hosting regions, payment providers, photo/video vendors, and international transfers.
- Whether the event is commercial, nonprofit, fundraising, member-only, public, or mixed.
- Whether minors can attend, register, volunteer, exhibit, perform, or appear in media.
- Whether food, merchandise, alcohol, raffles, public performances, music, livestreams, or other regulated activities are actually offered. Do not assume any of these activities exist.

### Tier 1 — Indonesia (baseline; high priority)

| Legal family | Initial instrument/source | Status and relevance | Next verification |
|---|---|---|---|
| Personal data | UU 27/2022, JDIH BPK: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022 | **Verified — primary source.** BPK records it as in force. Covers data-subject rights, processing, controllers/processors, transfers, administrative and criminal provisions. | Inspect full text, amendments/constitutional decisions, all implementing rules, regulator status, and operational data map. |
| PDP implementing rules | PP 33/2026, secondary copies and government corroboration: https://pemerintahdigital.id/assets/resources/PP33_2026-PeraturanPelaksanaanUU27_2022_PerlindunganDataPribadi.pdf ; https://makassar.bawaslu.go.id/berita/pp-332026-berlaku-januari-2027-kpu-dan-bawaslu-wajib-siapkan-tata-kelola-pelindungan-data | **Corroborated — primary gazette verification open.** Search evidence reports enactment/publication in July 2026 and commencement six months later, 16 January 2027. Do not treat the commencement date or complete legal status as finally verified until official gazette/JDIH record is obtained. | Obtain official signed promulgated text and official LN/TLN record; verify exact promulgation date, commencement, transitional rules, amendments, and relation to existing regulations. |
| Child protection in electronic systems | PP 17/2025 (PP TUNAS) | **Screened / corroborated.** Relevant to covered electronic systems and child access; not a substitute for physical-event safeguarding law. | Inspect official BPK/JDIH text, implementing rules, age/risk classifications, provider scope, and commencement. |
| Electronic systems and transactions | UU ITE as amended; PP 71/2019; relevant ministerial rules | **Screened.** May apply to website, registration, accounts, electronic contracts, and platform operation. | Verify latest consolidated text, PSE registration/scope, notices, security, records, and cross-border provisions. |
| Consumer protection | UU 8/1999 | **Screened.** Relevant to ticket/pass descriptions, price disclosures, misleading claims, cancellations, refunds, complaints, and vendor sales depending on transaction roles. | Inspect exact provisions and current implementing rules; determine who is the business actor/seller and whether the organiser acts as seller/agent/platform. |
| Disability/accessibility | UU 8/2016 and implementing accessibility/building/transport rules | **Screened.** Relevant to accessible venue, reasonable accommodation, information, evacuation, toilets, seating, and service access. | Check current national/local technical rules and venue-specific obligations. |
| Child safeguarding | UU 23/2002 as amended, including UU 35/2014 and later changes; relevant criminal/sexual-violence rules | **Screened.** Relevant to child attendees, staff/volunteers, photography, supervision, reporting, and safeguarding. | Verify consolidated current text, implementing regulations, reporting duties, and role-specific obligations. |
| Sexual violence and harassment | UU 12/2022 and relevant criminal-law provisions | **Screened.** Relevant to response procedures, reporting, evidence handling, privacy, and referrals. | Check exact legal definitions, mandatory reporting boundaries, victim protection, and current criminal-law amendments. |
| Copyright and related rights | UU 28/2014 | **Screened.** Relevant to art, music, photographs, performances, livestreams, badges, mascots, fan works, and dealer merchandise. | Verify licences, collecting-society permissions, public performance/broadcast rules, exceptions, and notice/takedown process. |
| Business licensing and local permits | OSS risk-based licensing framework; local/regional rules; venue and fire/building rules | **Open.** Depends on organiser legal form, event size, venue, activity, and local authority. | Determine business activity classifications, local event permits, crowd capacity, fire/evacuation, security, temporary structures, noise, sanitation, and public-space permissions. |
| Tax and payments | National tax rules, local taxes/retributions, payment-system rules | **Open.** Depends on organiser status, revenue, ticket sales, sponsorship, vendor sales, payment intermediary, and event location. | Determine tax subject, VAT/income tax/withholding, local entertainment tax where applicable, invoicing, and whether any payment activity is regulated. |
| Employment and volunteers | Labour laws, occupational safety, social security rules | **Open.** Depends on actual employment/contractor/volunteer relationship and work arrangements. | Classify staff and volunteers; check wages, hours, workplace safety, insurance, harassment, and contractor obligations. |
| Venue and public safety | Building, fire, occupational safety, health, crowd management, local police/authority rules | **Open.** Primarily venue- and locality-specific. | Obtain venue's approved capacity, emergency plan, fire approvals, accessibility evidence, medical response arrangements, and written event conditions. |

### Tier 2 — Cross-border screening (conditional)

The following is a screening list, not an applicability finding. Each country requires a separate official-source review of privacy, consumer, child-protection, accessibility, copyright, event/venue, tax, employment, and e-commerce rules where relevant.

| Region | Jurisdictions to screen | Initial legal families / trigger |
|---|---|---|
| EU / EEA | EU Member States and EEA states | GDPR territorial scope; ePrivacy and national implementation; consumer rights and unfair commercial practices; accessibility rules; local venue/public safety and tax. Determine EU/EEA establishment, targeting, monitoring, transaction, and physical venue triggers. |
| United Kingdom | UK | UK GDPR and Data Protection Act 2018; PECR; consumer and ticketing rules; Equality Act 2010; child online safety rules where services fall within scope; local licensing/venue rules. |
| North America | United States (federal + relevant states), Canada (federal + provinces) | US state privacy laws, COPPA only for covered child-directed/known-child online collection, consumer protection, ADA and state accessibility rules, ticketing/event/venue rules; Canada PIPEDA and provincial privacy/consumer/accessibility laws. State/province matters; do not treat the country as one uniform regime. |
| Latin America | Brazil, Mexico, Argentina, Chile, Colombia, Peru, Uruguay, Ecuador | National privacy laws (e.g., LGPD and local equivalents), consumer protection, children, copyright, accessibility, tax, and local event permits. Screen territorial and transaction triggers. |
| East Asia | Japan, South Korea, China, Hong Kong, Taiwan | National privacy/data security/cybersecurity rules, consumer/e-commerce, children, copyright, advertising, local venue and event rules. China requires separate analysis of PIPL, DSL, CSL and cross-border transfer rules if triggered. |
| Southeast Asia | Singapore, Malaysia, Philippines, Thailand, Vietnam, Indonesia, Brunei, Cambodia, Laos, Myanmar, Timor-Leste | National privacy, consumer, child, electronic transaction, copyright, tax, immigration/work, and venue rules. Confirm commencement and regulator guidance for recent reforms. |
| South Asia | India, Bangladesh, Pakistan, Sri Lanka, Nepal | National data protection/e-commerce/consumer, child, copyright, accessibility, tax, venue, and foreign-visitor rules. Confirm commencement and rules made under framework statutes. |
| Oceania | Australia, New Zealand, Pacific states where event or targeting occurs | Privacy, consumer, accessibility/discrimination, child safety, copyright, work/volunteer, venue and public-safety rules. Australia requires federal plus state/territory screening. |
| Middle East | UAE (federal and relevant free zones), Saudi Arabia, Israel, Turkey, Qatar, Bahrain, Oman, Kuwait, Jordan | Privacy/data transfer, cyber, consumer, media/content, public events, licensing, labour/immigration, and venue rules. Free-zone rules may differ from federal rules. |
| Africa | South Africa, Nigeria, Kenya, Ghana, Egypt, Uganda, other countries where triggered | National data protection, consumer, child, copyright, accessibility, event licensing, tax, labour, and venue rules. |
| Other jurisdictions | Any country where IWAG establishes, targets, sells, monitors, processes data, contracts, hires, or holds an event | Add jurisdiction when facts create a credible legal trigger; record why included/excluded. |

## 4. Global legal workstreams

Every applicable jurisdiction must be screened across these workstreams, not just privacy:

1. Organiser identity, legal capacity, registration, agency and contracting authority.
2. Event permits, venue hire, occupancy, fire safety, crowd management, emergency response, security, first aid and incident reporting.
3. Ticket/pass sales, pricing, taxes, payment providers, chargebacks, cancellations, refunds, resales, unfair terms and consumer complaints.
4. Privacy, cookies, analytics, accounts, identity verification, payment metadata, sensitive data, minors' data, photography, recordings, retention, deletion, access and cross-border transfers.
5. Child protection, guardian consent, supervision, staff/volunteer screening where lawful, missing-child response, reporting and media safeguards.
6. Disability rights, accessibility, reasonable accommodation, accessible evacuation and non-discrimination.
7. Anti-harassment, sexual misconduct response, violence prevention, due process, evidence handling, confidentiality, retaliation and referral boundaries.
8. Copyright, trademarks, publicity/personality rights, music, performances, fan art, photography, livestreaming, dealer merchandise, AI-generated content and licences.
9. Dealers/exhibitors: business registration where required, consumer disclosures, product safety, labelling, IP clearance, sales tax, returns and restricted product categories.
10. Food, beverages, health, sanitation and any other regulated services actually offered.
11. Staff, contractors and volunteers: classification, labour, safety, insurance, immigration/work authorisation and safeguarding.
12. Marketing, sponsorship, advertising, endorsements, contests/promotions, fundraising and charitable solicitation.
13. Environmental and neighbourhood rules: waste, noise, public space, transport, accessibility and local restrictions.
14. Insurance, indemnity, liability limitations, mandatory rights and claims procedures.
15. Cross-border dispute handling, governing law, jurisdiction, consumer forum rights, language and enforceability of online terms.

## 5. Initial verified sources

### Indonesia
- UU 27/2022, official BPK record: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022
- UU 27/2022, Komdigi JDIH: https://jdih.komdigi.go.id/produk_hukum/view/id/832/t/crc32/
- PP 33/2026: third-party PDF copy surfaced in research; official promulgation record still open: https://pemerintahdigital.id/assets/resources/PP33_2026-PeraturanPelaksanaanUU27_2022_PerlindunganDataPribadi.pdf
- PP 33/2026 corroborating government publication: https://makassar.bawaslu.go.id/berita/pp-332026-berlaku-januari-2027-kpu-dan-bawaslu-wajib-siapkan-tata-kelola-pelindungan-data
- PP 17/2025 context and child electronic-system scope: https://www.agilegal.id/id/publication/articles/30752/sets-child-protection-standards-for-electronic-system-providers

### Cross-border examples
- EU GDPR, EUR-Lex consolidated text, Article 3 territorial scope: https://eur-lex.europa.eu/eli/reg/2016/679
- UK Data Protection Act 2018, legislation.gov.uk revised text: https://www.legislation.gov.uk/ukpga/2018/12/2026-09-30
- US COPPA, FTC official FAQ: https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions
- California CCPA rulemaking/effective date: https://cppa.ca.gov/regulations/ccpa_updates
- Global privacy-law index (discovery aid only; not primary law): https://trustpractitioners.org/regulations?level=global&view=matrix

## 6. Important status finding — Indonesia PP 33/2026

Search results now corroborate the existence of PP 33/2026 on implementation of UU 27/2022, with reported promulgation in July 2026 and a six-month delayed commencement on 16 January 2027. This was not visible in the initial official BPK search result. The audit therefore records it as **corroborated, official gazette/JDIH verification open**, not as absent and not yet as primary-source verified. Before relying on it, obtain the official promulgated PDF or official State Gazette entry and compare the entire text, not just summaries.

The research must distinguish:
- law already in force on the audit date;
- enacted law with a future commencement date;
- draft legislation/proposals;
- regulator guidance;
- court decisions and binding interpretations;
- voluntary standards and best practices.

## 7. Source hierarchy

1. Official gazette / official legislation database / official court database.
2. Official regulator, ministry, municipality, venue authority, or government guidance.
3. Treaty/depositary and official international-organisation materials where relevant.
4. Credible legal commentary for discovery and interpretation, clearly labelled secondary.
5. Search snippets, commercial compliance matrices, forums, and AI summaries are leads only; never final legal authority.

For every legal proposition, cite the precise article/section and official source. Check amendments and commencement, not only the original enactment. Where official translations are unavailable, record the original language and translation method.

## 8. Deliverables still required

- [ ] Confirm event operator, legal form, venue, event date, audience and countries of active marketing/sales.
- [ ] Complete primary-source Indonesia review, including PP 33/2026 official promulgation and PP TUNAS.
- [ ] Complete clause-by-clause legal mapping from each V2 policy section to Indonesian provisions.
- [ ] Complete EU/EEA, UK, US, Canada, and APAC country screening based on actual targeting and attendee/data flows.
- [ ] Add other jurisdictions only where an actual trigger is found; record the reason for each jurisdiction.
- [ ] Review event safety, permits, accessibility, consumer, copyright, tax, labour, immigration, insurance and vendor obligations.
- [ ] Create a requirements-to-controls matrix and identify policy text versus operational controls.
- [ ] Produce a conflict/overlap register and update English/Indonesian legal documents.
- [ ] Obtain qualified local legal review for the organiser's actual operating jurisdictions before adoption.

## 9. No false-completion rule

This register is an initial baseline. It does **not** mean all listed countries' laws have been read, every law in the world has been catalogued, or IWAG is legally compliant. A research item is complete only when the primary source, current status, applicability trigger, exact provision, and IWAG control have been recorded. New countries, venues, payment markets, data processors, services, or event formats reopen the screening.


## 10. Primary-source and IWAG-facts update — 25 November 2026

A deeper review has now inspected the 120-page government-hosted PP 33/2026 text, the official BPK PP 17/2025 text, UU 27/2022, PP 28/2025 metadata, and the full Perpol 7/2023 text. The more detailed findings and IWAG public operating-facts map are in [INDONESIA-PRIMARY-SOURCE-AUDIT.md](./INDONESIA-PRIMARY-SOURCE-AUDIT.md).

Key corrections and additions:

- **PP 33/2026:** the inspected government-hosted copy states promulgation on 16 July 2026, LN 2026 No. 88, and Pasal 225 delayed commencement six months later (16 January 2027). A central BPK/Setneg/peraturan.go.id record and TLN identifier were not located in this pass. Treat the copy as government-hosted and the central record/TLN as open; do not label PP 33/2026 already in force on 25 November 2026.
- **PP 17/2025:** effective 27 March 2025, with Pasal 49 allowing covered electronic-system providers up to two years to adjust (deadline 27 March 2027). Determine PSE scope and operator roles.
- **PP 28/2025:** BPK records it as in force from 5 June 2025 and repealing PP 5/2021. Use the current OSS/KBLI 2025 mapping, not old KBLI numbers by assumption.
- **Perpol 7/2023:** Pasal 4 lists festivals, bazaars, exhibitions and activities involving foreigners; Pasal 8 addresses international-scale activities; Pasal 10, 12, 15, 16 and 18 specify documents, application lead times, verification, coordination and issuance. Applicability and scale require confirmation with the competent police authority.
- **IWAG public facts:** current site pages describe a non-corporate social organisation in Jakarta, registration through the Community platform, ID checks, minors, hotel group bookings, Dealers Den, panels/performances, public photo uploads and 2027 hotel-booking perks. The 2027 venue was not identified. The current Privacy Policy has material omissions concerning controller identity, children, processors, cross-border transfers, retention and public media sharing. The CoC does not set out a clear disability-accommodation plan. The T&C's all-sales-final/refund/liability clauses require review under consumer law.
- **Research evidence:** event-safety and accessibility literature is supplementary operational evidence, never a substitute for binding Indonesian law.

The updated document also flags a broken/uncertain Registration FAQ link and distinguishes 2026 historical venue facts from 2027 venue facts.
