# V1 → V2 Legal and Conduct Migration Notes

**Review date:** 24 November 2026  
**Source:** Preserved read-only snapshot under `archive/v1-reference/site/`  
**Purpose:** Identify which V1 concepts require redesign, which are event-specific and which must not be represented as current V2 facts.

## 1. V1 source pages inspected

- `archive/v1-reference/site/en/tnc/index.html`
- `archive/v1-reference/site/en/coc/index.html`
- `archive/v1-reference/site/en/privacy/index.html`
- `archive/v1-reference/site/id/coc/index.html`
- `archive/v1-reference/site/id/privacy/index.html`

The root-level `/tnc/`, `/coc/` and `/privacy/` archive routes are redirect stubs. The language-specific pages contain the substantive V1 text. The archive remains excluded from V2 build inputs.

## 2. V1 content model

### Terms and Conditions
V1 is not just a generic website terms page. It combines:
- definitions for platform, event, staff, member, attendee and venue;
- agreement to event rules, privacy terms and staff/venue instructions;
- paid event-pass transactions, payment confirmation and payment-provider terms;
- pass ownership, attendee identity and badge redemption;
- pass benefits, additional attendee information, deadlines, transfers and no-show handling;
- event-specific cancellation, refund, revocation and admission consequences;
- marketplace/vendor transaction boundaries.

### Code of Conduct
V1 is an event-operations rulebook. Its subject matter includes:
- event age ratings and guardian involvement;
- public-area content expectations and attendee badge requirements;
- privacy, harassment and consent;
- photography restrictions in designated private areas and event-media use;
- venue property, attendee conduct, staff directions and event-specific safety procedures;
- panelist, performer, dealer and volunteer requirements.

### Privacy Policy
V1 describes a materially different service model from the current preview. It refers to:
- a platform account and paid event-pass workflow;
- identity details, date of birth and email;
- payment-provider reconciliation metadata;
- optional contact details and information relating to other people;
- identity verification and badge issuance;
- event operations, manual review, safety information and rights requests.

These statements describe the V1 platform/event context. They must not be copied into V2 as claims about the current read-only website.

## 3. V2 migration decisions

| V1 concept | V2 decision | Reason |
|---|---|---|
| Platform, member and attendee definitions | Do not reuse unless V2 actually operates those services | Current preview has no user account or attendee registration workflow. |
| Paid event-pass transaction terms | Keep out of operative V2 terms | The preview does not sell passes, take payment or issue badges. |
| No-refund, no-show and pass-revocation clauses | Do not import as current terms | They are event transaction rules, not generic website terms; operator, offer and applicable consumer law must be reviewed. |
| Event age thresholds and guardian rules | Do not set a V2 event age limit | Only the authorised event operator can publish current admission and safeguarding rules. |
| Staff and venue instructions | Describe only as V1 historical context | This independent project has no authority over event staff, venue operations or attendee sanctions. |
| V1 photo/media blanket permissions | Do not carry forward | V2 should use clear, purpose-specific consent and a fair opt-out/contact process where applicable. |
| Identity document and date-of-birth collection | Do not collect for the read-only preview | No such collection is required for current informational pages. Future collection requires a separate necessity, legal-basis, security and child-data assessment. |
| V1 payment metadata descriptions | Do not state as V2 processing | No payment integration is present in the current preview. |
| V1 privacy rights mailbox and controller statements | Do not reuse without verification | Contacts, operator identity, processing roles and current vendor setup must be independently verified. |
| V1 venue, staff, pass and policy details | Treat as dated source material only | Event-specific facts change and need a current source and review date. |

## 4. Drafting requirements carried into V2

- Separate website terms from event attendance, ticketing and venue rules.
- Separate project-controlled community spaces from organiser-controlled event spaces.
- Do not invent a controller, legal entity, address, privacy email, moderation team, safeguarding lead or response deadline.
- Preserve mandatory consumer and data-subject rights; do not copy blanket waivers or no-refund statements without a valid, current basis.
- Treat child-related data and safeguarding as high-risk areas requiring a documented review.
- Replace broad photo permissions with clear notice, purpose limitation, consent where required, opt-out handling and special care for minors.
- Distinguish local-storage preferences from server-side data and provider logs.
- Keep the nine public policy pages explicitly marked as independent, unapproved and non-operative drafts until adoption authority and legal review are verified.

## 5. Current V2 source-of-truth boundary

V2's present service is an independent informational preview. It has no attendee accounts, registration, ticketing, payment, bookings, messaging, comments or user uploads in the inspected application source. The preview does use local storage for display preferences. Hosting/CDN/DNS/security provider processing and retention still require verification.

Do not infer the V2 operator's legal identity from the V1 text, the event's identity, a website footer or a GitHub account. Do not publish V1 clauses as current organiser rules.

## 6. Review boundary

This migration note is an engineering and content-provenance record, not legal advice. Any operative event terms, admission rules, child-safeguarding procedures, privacy notices or consumer transaction terms must be approved by the actual responsible operator and reviewed for the jurisdictions in which the service is offered.
