# Font licensing and implementation

The V2 site self-hosts five supplied font families. Original source license and README files are retained beside each asset under `public/fonts/<family>/source/`.

| Family | V2 role | Web asset | License status |
|---|---|---|---|
| Alan Sans | Body, navigation, controls | `AlanSans[wght].woff2` | SIL Open Font License 1.1 |
| Amarna | Headings and editorial hierarchy | `Amarna[ital,wght].woff2` | SIL Open Font License 1.1 |
| Sekuya | Short, uppercase display accents | `Sekuya-Regular.woff2` | SIL Open Font License 1.1 |
| Capo Sfogliato | Limited ornamental/editorial numerals | `Capo_Sfogliato.woff2` | SIL Open Font License 1.1 |
| Starveler | Small decorative labels only | `Starveler.ttf` | SIL Open Font License 1.1 |

## Excluded asset

Love Malia is **not loaded or redistributed by this website**. The supplied `Readme.txt` explicitly states that the font is for personal use only and points to a separate commercial-license purchase. A public website is not treated as personal use, so the asset is excluded unless a suitable commercial web-embedding license is obtained and documented.

## Performance and accessibility

- Fonts are served locally; no remote font provider or third-party font request is required.
- Only Alan Sans and Amarna are preloaded because they serve the body and primary heading hierarchy.
- Decorative families use `font-display: optional` so slow font downloads do not delay or repeatedly replace essential text.
- Alan Sans is declared as a variable font (300–900); Amarna is declared as a variable font (100–700, normal/italic).
- The system stack remains available as a fallback. CSS disables synthetic font styles.
- Decorative families are restricted to short accents; long-form content remains in Alan Sans.
- Original OFL notices and source readmes remain in the repository. Do not remove or replace them when optimizing or converting assets.

## Asset provenance

The selected font binaries and their corresponding original license/readme files were imported from the `Ads-the-New-Font` branch. The project does not claim ownership of these typefaces.
