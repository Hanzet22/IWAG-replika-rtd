# IWAG typography migration

The `Ads-the-New-Font` branch is the source collection for the local typography system. Five families are suitable for this public project based on the license notices included with the supplied assets.

## Font roles
- Alan Sans: global UI, navigation, body copy and controls.
- Amarna: headings and editorial hierarchy.
- Sekuya: selected uppercase display treatments.
- Capo Sfogliato: limited decorative/editorial accents.
- Starveler: limited display accents.
- Love Malia: **excluded**. Its supplied `Readme.txt` explicitly says “PERSONAL USE only”; do not embed, publish or redistribute it on this public website unless a commercial web-embedding license is separately obtained and documented.

## Required public web assets
- `fonts/alan-sans/AlanSans[wght].woff2`
- `fonts/amarna/Amarna[ital,wght].woff2`
- `fonts/capo-sfogliato/Capo_Sfogliato.woff2`
- `fonts/sekuya/Sekuya-Regular.woff2`
- `fonts/starveler/Starveler.ttf`

## Licensing
- Alan Sans, Amarna, Capo Sfogliato, Sekuya and Starveler include SIL Open Font License 1.1 notices. Keep each original `OFL.txt` and source README beside the corresponding font.
- Love Malia's supplied README grants personal use only and links to a separate purchase for commercial licensing. The font binary is removed from this public branch and its CSS face is disabled. The README is retained as provenance for the exclusion decision.
- Do not infer a license from a file extension, font catalog listing, or the fact that a file was supplied.

## Delivery and performance
- Self-host approved font files; do not add a remote font provider.
- Preload only the primary body font and, where used above the fold, the main heading font.
- Use `font-display: swap` for essential text and `optional` for nonessential decorative faces.
- Keep body copy and controls in the highly legible sans-serif stack. Decorative fonts are for short accents only.
- The source collection and its license files remain the reference; generated CSS must not reference excluded font files.
