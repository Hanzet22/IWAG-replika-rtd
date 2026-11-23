# IWAG typography migration

The `Ads-the-New-Font` branch replaces the archived site's typography system with six supplied font families.

## Font roles
- Alan Sans: global UI, navigation, body copy and controls.
- Amarna: headings and editorial text.
- Sekuya: selected display treatments.
- Capo Sfogliato: limited decorative/editorial accents.
- Love Malia: short handwritten accents only.
- Starveler: limited display accents.

## Required web assets
Place the supplied files at these exact paths:
- `fonts/alan-sans/AlanSans[wght].woff2`
- `fonts/amarna/Amarna[wght].woff2`
- `fonts/amarna/Amarna-Italic[wght].woff2`
- `fonts/capo-sfogliato/Capo_Sfogliato.woff2`
- `fonts/sekuya/Sekuya-Regular.woff2`
- `fonts/love-malia/Love Malia.ttf`
- `fonts/starveler/Starveler.ttf`

The original font collection currently includes WOFF2 for Alan Sans, Amarna, Capo Sfogliato and Sekuya. Love Malia and Starveler are currently supplied as TTF, so the CSS uses those formats until optimized WOFF2 versions are supplied.

## Licensing
Keep each font family's original license and README beside its font assets. Alan Sans, Amarna, Capo Sfogliato and Sekuya collections include OFL documentation; preserve those exact files. Preserve Love Malia and Starveler's original readme/license files as supplied. Do not claim a license that is not present in the original package.

## Notes
The CSS integration is committed separately from the binary font assets because the font collection is on the maintainer's device and is not yet present in this repository. The referenced font URLs will become live after those assets and their license files are added.
