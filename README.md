# IWAG V2 — Replica Technical Development (RTD)

> Independent technical reconstruction project. This repository is not affiliated with, endorsed by, sponsored by, or officially connected to IWAG or its organisers. Third-party names and materials remain the property of their respective owners.

## Project direction

IWAG V2 follows **Replica Technical Development (RTD)**: reverse-engineer the reference website, specify its observable structure and behaviour, reconstruct the product in V2, integrate the implementation, and verify the result against the reference.

V1 is the reference baseline and historical evidence. V2 is an independently implemented reconstruction. A new application stack is allowed, but it does not justify dropping V1 route coverage, page families, content intent, interactions, or responsive behaviour. The V1 archive stays outside application imports and build inputs; it remains available for inspection and comparison.

RTD is an engineering method. It is **not** a certification effort, policy-owner approval process, organiser endorsement request, or legal sign-off programme. None of those is a project completion gate.

Read the authoritative [RTD methodology](docs/RTD-METHODOLOGY.md) first.

## Core project documents

- [RTD methodology](docs/RTD-METHODOLOGY.md)
- [RTD execution and reconstruction plan](docs/GREENFIELD-RECONSTRUCTION-PLAN.md)
- [V1 audit](docs/V1-AUDIT.md)
- [Original-site reference notes](docs/ORIGINAL-SITE-REFERENCE.md)
- [V1 route inventory and V2 migration](docs/V1-ROUTE-MIGRATION.md)
- [V2 requirements](docs/V2-REQUIREMENTS.md)
- [Application and compiler architecture](docs/ARCHITECTURE.md)
- [Global UX/UI system](docs/UX-UI-SYSTEM.md)
- [Source and technology inventory](docs/SOURCE-TECHNOLOGY-INVENTORY.md)
- [Dependency licence inventory](docs/DEPENDENCY-LICENSE-INVENTORY.md)
- [Rust Active Compiler specification](docs/ACTIVE-COMPILER-SPEC.md)
- [Research evidence](docs/RESEARCH-EVIDENCE.md)
- [Accessibility engineering specification](docs/ACCESSIBILITY-ENGINEERING-SPEC.md)
- [Accessibility implementation matrix](docs/ACCESSIBILITY-IMPLEMENTATION-MATRIX.md)
- [TnC, CoC and Ruleset reconstruction notes](docs/TNC-COC-RULESET-RECONSTRUCTION.md)
- [Legal and regulatory research](docs/LEGAL-RESEARCH-2026-11-24.md)
- [Infrastructure and data-flow verification](docs/INFRASTRUCTURE-DATA-FLOW-VERIFICATION-2026-11-25.md)
- [Engineering release checklist](docs/PRODUCTION-RELEASE-GATES-2026-11-25.md)
- [Performance measurement plan](docs/PERFORMANCE-MEASUREMENT-PLAN.md)
- [ADR-0002: V2 reconstruction and Rust Active Compiler](docs/ADR-0002-greenfield-active-compiler.md)

Legal and policy research documents are supporting references. They do not define RTD, and policy approval is not required to continue technical reconstruction.

## Architecture direction

- Astro is the application framework and route system.
- Vite is the frontend build engine.
- Vue is limited to justified interactive islands.
- TypeScript and semantic HTML form the application baseline.
- CSS, Tailwind CSS 4, Panda CSS 2.6.0 and StyleX 0.19.2 have distinct responsibilities and a central CSS layer contract.
- Rust Active Compiler controls build orchestration, source validation, backend invocation, diagnostics and production-output verification.
- WebAssembly powers an optional contrast calculator loaded only on user request; Canvas, WebGL and WebGPU remain optional enhancements and never gate core content.
- Next.js is an architectural reference only; no second framework runtime is introduced.

## Requirements

- Node.js 22.23.4 or newer
- npm
- Rust 1.100.0 and Cargo (required by the Active Compiler)
- Optional local WASM build: `wasm-pack` and `wasm32-unknown-unknown`

## Commands

```sh
npm ci
npm run compiler:doctor
npm run compiler:inspect
npm run dev
npm run wasm:build
npm run build
npm run preview
```

`npm run build` invokes the Rust Active Compiler, which validates the V2 source boundary, orchestrates Astro/Vite, checks generated HTML/CSS, verifies critical localized routes, checks local references and same-site fragments, emits a generated-route manifest, inventories generated asset bytes, and writes `.iwag-build/iwag-build-report.json`.

`npm run build:astro` is a diagnostic backend escape hatch; it is not the normal production build entry point.

## Project guardrails

- Keep the V1 archive outside application imports, public assets and build globs, but use it as the source for reverse engineering and comparison.
- Do not copy V1 compiled bundles as the V2 implementation.
- Reconstruct reference route families, content intent, layouts and interactions; record justified deviations.
- Do not add analytics, trackers, remote fonts or third-party scripts without a defined technical need and documented data flow.
- Do not make core content depend on JavaScript, WASM, Canvas, WebGL or WebGPU.
- Do not invent event facts, organiser identity or operational commitments.
- WCAG 2.2 Level A is an engineering target, not a certification claim.
- CI/CD is implementation evidence, not the project completion criterion.
