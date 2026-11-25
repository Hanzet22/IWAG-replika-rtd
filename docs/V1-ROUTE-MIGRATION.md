# V1 route inventory and RTD reconstruction map

Updated: 2026-11-23

## Inventory result

The archived repository contains **116 locale-prefixed HTML page routes** across English (`en`) and Indonesian (`id`): 58 per locale.

The route families include:
- About, brand, dealers, location, participation, links, policy, privacy, terms, and code-of-conduct pages.
- Team recruitment overview and ten nested role routes.
- Updates index and dated update routes, including historical pagination routes.

## V2 route handling

- The V2 app has localized top-level page routes for English, Indonesian, English (Singapore), and Bahasa Melayu (Malaysia). These routes are part of RTD's route-coverage work and must be compared against the V1 inventory.
- The 49 nested V1/reference routes are represented by `src/i18n/nested-routes.ts` and generated for all four V2 locales. This includes the international travel, public transit, private vehicle and T-shirt guide routes discovered from the live source even though they are not separate archived HTML files.
- The international travel guide, transit and legacy private-vehicle guides, T-shirt guide, Super Sponsor YCH reference, role directory and nine role summaries, 29 historical update articles, and three pagination aliases have independently authored V2 content.
- Historical update summaries are marked as archives; unavailable V1 role pages are represented by generic, non-official role descriptions rather than invented source copy.
- The event collection publishes the announced 2027 edition in all four locale routes. The Malay homepage and event pages have copy; untranslated Malay routes and selected Indonesian information pages display an explicit English fallback notice.
- Terms, Privacy, Code of Conduct and Other Policies are reconstructed as substantive V1-informed V2 content, written independently. Preserve the distinction between event-level subject matter and website-level scope; draft-status wording describes the document's status and does not suspend technical reconstruction.
- Any future route without verified content renders an explicit migration-state notice rather than fabricated details.
- Legacy aliases such as `/tnc/` and `/coc/` remain distinct routes; canonical policy navigation uses Terms, Privacy, and Code of Conduct.
- No V1 schedule, price, registration rule, hotel detail, organiser statement, or policy is assumed to remain current.

## Content integrity

The route inventory preserves URL coverage, not permission to republish source copy. V1 HTML remains an audit/reference archive. New page copy must be independently authored from verified facts, and third-party material must be reviewed for rights and attribution before inclusion.

## Outstanding migration work

- Identify current versus historical information.
- Verify dates, venue, event status, registration, ticketing, staff role descriptions, and contacts.
- Review all translations natively, not by literal machine substitution.
- Compare each mapped V2 route against its V1 reference for structure, content coverage, layout and interaction behaviour.
