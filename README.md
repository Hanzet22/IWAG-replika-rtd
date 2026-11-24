# IWAG V2 — Independent Website Re-engineering

> Independent educational recreation and research project. This repository is not affiliated with, endorsed by, sponsored by, or officially connected to IWAG or its organisers. Third-party names and materials remain the property of their respective owners.

## Project direction

IWAG V2 is undergoing a greenfield global reconstruction. V1 is a read-only research/reference archive; it is not the V2 application source, design template, dependency base, or build input. No legacy library is inherited by default.

The dedicated reconstruction plan, source inventory and compiler contract are maintained in:
- [Greenfield reconstruction plan](docs/GREENFIELD-RECONSTRUCTION-PLAN.md)
- [Application and compiler architecture](docs/ARCHITECTURE.md)
- [Global UX/UI system](docs/UX-UI-SYSTEM.md)
- [Source and technology inventory](docs/SOURCE-TECHNOLOGY-INVENTORY.md)
- [Dependency license inventory](docs/DEPENDENCY-LICENSE-INVENTORY.md)
- [Rust Active Compiler specification](docs/ACTIVE-COMPILER-SPEC.md)
- [Research evidence](docs/RESEARCH-EVIDENCE.md)
- [Accessibility engineering specification](docs/ACCESSIBILITY-ENGINEERING-SPEC.md)
- [Accessibility implementation matrix](docs/ACCESSIBILITY-IMPLEMENTATION-MATRIX.md)\n- [Accessibility findings engine](docs/ACCESSIBILITY-FINDINGS-ENGINE.md)
- [WCAG 2.2 criteria register](docs/WCAG-2.2-AA-COMPLETE-CRITERIA-REGISTER.md)
- [Graphics and motion policy](docs/GRAPHICS-AND-MOTION-POLICY.md)
- [Performance measurement plan](docs/PERFORMANCE-MEASUREMENT-PLAN.md)
- [ADR-0002: Greenfield V2 and Rust Active Compiler](docs/ADR-0002-greenfield-active-compiler.md)

## Architecture direction

- Astro is the single application framework and route system.
- Vite is the single frontend build engine.
- Vue is limited to interactive islands.
- TypeScript and semantic HTML form the application baseline.
- CSS, Tailwind CSS 4, Panda CSS 2.6.0 and StyleX 0.19.2 are integrated with distinct responsibilities and a central CSS layer contract.
- Rust Active Compiler controls the build graph, source validation, backend invocation, diagnostics and production-output verification.
- WebAssembly powers an optional contrast calculator loaded only on user request; Canvas, WebGL and WebGPU remain optional enhancements and never gate core content.
- Next.js is an architectural reference only; no second framework runtime is introduced.
- Java is not a native browser animation runtime and is excluded unless a concrete build-time/service use case justifies a JVM dependency.

## Requirements

- Node.js 22.23.4 or newer
- npm
- Rust 1.100.0 and Cargo (required by the Active Compiler)
- Optional local WASM build: `wasm-pack` and `wasm32-unknown-unknown` (the production workflow builds the contrast module)

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

`npm run build` invokes the Rust Active Compiler, which validates the V2 source boundary, orchestrates Astro/Vite, checks generated HTML/CSS, verifies the root/404 and critical localized routes, checks local HTML/CSS/srcset references and same-site fragments, emits a full generated-route manifest, inventories generated asset bytes, and writes `.iwag-build/iwag-build-report.json`.

`npm run build:astro` is a diagnostic backend escape hatch; it is not the normal production build entry point.

## Project guardrails

- Keep V1 material out of application imports, public assets, route generation and build globs.
- Do not copy V1 compiled bundles into V2.
- Do not add analytics, trackers, remote fonts or third-party scripts by default.
- Do not make content or essential actions depend on JavaScript, WASM, Canvas, WebGL or WebGPU.
- Do not invent event facts, organiser identity, legal terms or privacy commitments.
- WCAG 2.2 Level A remains an engineering target, not a conformance claim.
- CI/CD is implementation evidence, not the project completion criterion.
