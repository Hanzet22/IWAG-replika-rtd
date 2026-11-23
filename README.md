# IWAG V2 — Independent Website Re-engineering

> Independent educational recreation and research project. This repository is not affiliated with, endorsed by, sponsored by, or officially connected to IWAG or its organisers. Third-party names and materials remain the property of their respective owners.

## Project status

IWAG V2 is a fresh implementation. The archived V1 files are retained as a reference for structural research; they are not the V2 application source.

The current V2 implementation includes:
- Astro 7 static output with TypeScript and Vite as the single application/build pipeline
- Vue 3 interactive islands via the official Astro integration; Tailwind CSS 4 via the Vite plugin
- CSS Houdini typed custom properties, plus an opt-in SVG/Canvas 2D/WebGL2/WebGPU capability lab
- Optional standalone Rust/WASM contrast utility; the normal site build does not require Rust
- Compatible Next.js architectural patterns documented without adding a second Next.js runtime
- Locale-prefixed routes for English, Indonesian, English (Singapore), and Bahasa Melayu (Malaysia); the homepage and event pages have Malay copy; untranslated Malay routes and selected Indonesian information pages display an explicit English-fallback notice until reviewed translations are ready
- Semantic HTML-first layouts and progressive enhancement
- Global accessibility preferences for text scaling, contrast, reduced motion, and content spacing across all site routes
- System, Light, Black, Super Black, AMOLED Black, and Dynamic Color themes
- Five locally hosted font families (Alan Sans, Amarna, Capo Sfogliato, Sekuya and Starveler); no external font CDN
- Reduced-motion and forced-colors styling
- Reconstructed homepage, localized event listings, venue, participation, team, resources, and travel-guide pages
- Historical update archive covering the discovered 2024–2026 update routes
- Nine staff-role overview routes, clearly marked as non-official summaries where source pages are unavailable
- Dated event and pass information snapshots; no live ticket sales, registration, accounts, or payments
- Nine independently drafted bilingual legal and governance documents, all explicitly marked drafting-only and not in force
- An independent V2 design-system specification covering visual tokens, cognitive accessibility, motion, interaction, color, and alternative text
- WCAG 2.2 Level A as the engineering target only, without claiming conformance or pursuing certification

Event details are independently rewritten source snapshots, not official IWAG information or guarantees. Volatile facts must be rechecked before publication. Terms, Privacy, and Code of Conduct are independently written V2 working drafts, not copied from V1 and not final public policies. They must be reviewed and approved after the actual operator, data flows, responsibilities, and applicable jurisdictions are verified. Do not treat preview copy as an approved legal policy.

## Requirements

- Node.js 22.23.4 or newer
- npm
- Optional Rust/WASM build only: Rust toolchain, `wasm32-unknown-unknown`, and `wasm-pack` (not needed for the default Astro build)

## Development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Architecture

See:
- [V1 audit](docs/V1-AUDIT.md)
- [Original live-site reference review](docs/ORIGINAL-SITE-REFERENCE.md)
- [Legal and regulatory compliance matrix](docs/LEGAL-COMPLIANCE-MATRIX.md)
- [V2 requirements](docs/V2-REQUIREMENTS.md)
- [V2 independent design system](docs/V2-DESIGN-SYSTEM.md)
- [ADR-0001: static-first Astro architecture](docs/ADR-0001-architecture.md)
- [Stack integration map](docs/STACK-INTEGRATION.md)
- [Legal policy draft status](docs/POLICY-DRAFTS.md)
- [Legal rewrite research](docs/LEGAL-REWRITE-RESEARCH.md)
- [Implementation status](docs/IMPLEMENTATION-STATUS.md)

## Guardrails

- This is an independent V2 re-engineering project, not a certification or accreditation project.
- V1 is a reference for research and content discovery, not a UI, UX, route, or page template.
- Do not bypass repository branch protection.
- Do not copy V1 compiled bundles as the V2 implementation.
- Do not add trackers, analytics, remote fonts, or social embeds by default.
- Do not make event content or essential actions depend on JavaScript, WebGL, or WebGPU.
- Do not invent event details, organiser identity, legal terms, or privacy commitments.
- Automated checks alone cannot establish WCAG conformance.
