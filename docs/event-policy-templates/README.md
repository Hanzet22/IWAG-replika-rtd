# Event policy draft templates — internal research material

This directory documents the boundary between event-level policy reconstruction and the public V2 information website.

- Public website policies are maintained in `src/data/website-legal.ts` and the custom website-only sections in `src/pages/[lang]/[page].astro`.
- `src/data/legal.ts` is retained as an event-level research/template corpus only. It is explicitly marked non-public and must not be imported by a public route, page metadata, navigation, or client bundle.
- Event-level clauses concerning attendees, badges, tickets, payments, refunds, venue access, staff, volunteers, dealers, performers, event photography, event sanctions, or event personal-data processing are not V2 website terms.
- The event organiser's adopted policies remain separate. This repository is not authorised to create or administer those rules.

The legacy template source is preserved in its existing path to retain its history. It is not a runtime dependency. Any future migration into this directory must preserve provenance and review history, and must not publish third-party source text without redistribution rights.

All materials are independent drafts for research. They are not official IWAG policies, not organiser-approved, and not in force.
