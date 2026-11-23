# IWAG V2 — Independent Website Re-engineering

> Independent educational recreation and research project. This repository is not affiliated with, endorsed by, sponsored by, or officially connected to IWAG or its organisers. Third-party names and materials remain the property of their respective owners.

## Project status

IWAG V2 is a fresh implementation. The archived V1 files are retained as a reference for structural research; they are not the V2 application source.

The current V2 implementation includes:
- Astro static output with TypeScript
- Locale-prefixed routes for English, Indonesian, English (Singapore), and Bahasa Melayu (Malaysia); the homepage has Malay copy, while other Malay routes display an explicit English-fallback notice until reviewed translations are ready
- Semantic HTML-first layouts and progressive enhancement
- System, Light, Black, Super Black, AMOLED Black, and Dynamic Color themes
- System fonts; no external font CDN
- Reduced-motion and forced-colors styling
- Reconstructed homepage, events, venue, participation, team, resources, and travel-guide pages
- Historical update archive covering the discovered 2024–2026 update routes
- Nine staff-role overview routes, clearly marked as non-official summaries where source pages are unavailable
- Dated event and pass information snapshots; no live ticket sales, registration, accounts, or payments
- Separate structural routes for Terms, Privacy, and Code of Conduct
- WCAG 2.2 Level A as the engineering target only, without claiming conformance or pursuing certification

Event details are independently rewritten source snapshots, not official IWAG information or guarantees. Volatile facts must be rechecked before publication. Terms, Privacy, and Code of Conduct are not copied from V1 and are not final public policies; they require a complete independent rewrite after the actual operator, data flows, responsibilities, and applicable jurisdictions are verified. Do not treat preview copy as an approved legal policy.

## Requirements

- Node.js 22.23.4 or newer
- npm

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
- [ADR-0001: static-first Astro architecture](docs/ADR-0001-architecture.md)
- [Implementation status](docs/IMPLEMENTATION-STATUS.md)

## Guardrails

- This is an independent V2 replica/re-engineering project, not a certification or accreditation project.
- Do not bypass repository branch protection.
- Do not copy V1 compiled bundles as the V2 implementation.
- Do not add trackers, analytics, remote fonts, or social embeds by default.
- Do not make event content or essential actions depend on JavaScript, WebGL, or WebGPU.
- Do not invent event details, organiser identity, legal terms, or privacy commitments.
- Automated checks alone cannot establish WCAG conformance.
