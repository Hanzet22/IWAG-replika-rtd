# V1 route inventory and V2 migration policy

Updated: 2026-11-23

## Inventory result

The archived repository contains **116 locale-prefixed HTML page routes** across English (`en`) and Indonesian (`id`): 58 per locale.

The route families include:
- About, brand, dealers, location, participation, links, policy, privacy, terms, and code-of-conduct pages.
- Team recruitment overview and ten nested role routes.
- Updates index and dated update routes, including historical pagination routes.

## V2 route handling

- The V2 app has localized top-level page routes for English, Indonesian, English (Singapore), and Bahasa Melayu (Malaysia).
- The nested V1 route inventory is represented by `src/i18n/nested-routes.ts` and generated for the archived EN/ID locales.
- The international travel guide, transit and legacy private-vehicle guides, T-shirt guide, Super Sponsor YCH reference, role directory and nine role summaries, 29 historical update articles, and three pagination aliases have independently authored V2 content.
- Historical update summaries are marked as archives; unavailable V1 role pages are represented by generic, non-official role descriptions rather than invented source copy.
- The event collection publishes the announced 2027 edition in all four locale routes. The Malay homepage and event pages have copy; untranslated Malay routes and selected Indonesian information pages display an explicit English fallback notice.
- Terms, Privacy and Code of Conduct are new independent working drafts. They do not adopt V1 wording or rules and remain unapproved until the real operator and legal requirements are verified.
- Any remaining route without verified content renders an explicit migration-state notice rather than fabricated details.
- Legacy aliases such as `/tnc/` and `/coc/` remain distinct routes; canonical policy navigation uses Terms, Privacy, and Code of Conduct.
- No V1 schedule, price, registration rule, hotel detail, organiser statement, or policy is assumed to remain current.

## Content integrity

The route inventory preserves URL coverage, not permission to republish source copy. V1 HTML remains an audit/reference archive. New page copy must be independently authored from verified facts, and third-party material must be reviewed for rights and attribution before inclusion.

## Outstanding migration work

- Review every route with a content owner and confirm whether its snapshot remains current.
- Identify current versus historical information.
- Verify dates, venue, event status, registration, ticketing, staff role descriptions, and contacts.
- Confirm the responsible operator, controller, venue responsibilities, reporting channels, and applicable jurisdictions before approving or publishing the policy drafts.
- Review all translations natively, not by literal machine substitution.
