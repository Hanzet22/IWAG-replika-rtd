# ADR-0002: V2 RTD Implementation and Rust Active Compiler

- Status: Accepted implementation architecture
- Date: 2026-11-23; scope clarified 2026-11-25
- Supersedes: the optional Rust/WASM build boundary in ADR-0001
- Scope: V2 implementation, build orchestration and V1/V2 source boundary

## Context

IWAG V2 follows **Replica Technical Development (RTD)**. V1 is the reference baseline for reverse engineering and comparison. V2 is an independently implemented reconstruction of the reference website's observable product: routes, information architecture, page families, content intent, UI, interactions, responsive behaviour and relevant technical capabilities.

A clean V2 application boundary is an implementation strategy. It does not mean the project is a generic greenfield website, and it does not remove the obligation to map and reconstruct the reference product.

## Decision

1. Keep the V1 snapshot in `archive/v1-reference/site/` as read-only engineering evidence.
2. Keep the active V2 application under `src/`; do not import archived compiled bundles as runtime code.
3. Use the V1 archive and original-site observations for route mapping, reverse engineering, content reconstruction and verification.
4. Introduce the Rust Active Compiler CLI under `compiler/iwagc/` as the normal development and production build entry point.
5. Keep Astro as the application framework, Vite as the frontend build engine, and Vue as the scoped island renderer.
6. Integrate Tailwind CSS, Panda CSS and StyleX with non-overlapping ownership and a centralized CSS layer order.
7. Treat WASM, Canvas, WebGL and WebGPU as optional enhancements with static fallbacks.
8. Record material deviations from V1 and verify them against explicit V2 requirements.

## Compiler responsibility

Rust owns source-boundary validation, manifest checks, toolchain preflight, build orchestration, project-specific output validation, diagnostics and build reporting. Astro/Vite and specialist plugins retain responsibility for their language-specific compilation.

## RTD completion evidence

Completion is assessed through reference coverage, route mapping, component and interaction reconstruction, content/locale parity, responsive and visual comparison, accessibility/performance evaluation, and build/runtime correctness.

Certification, organiser endorsement, policy-owner approval and legal sign-off are not RTD goals or technical completion gates. Legal and policy research may remain as supporting documentation without blocking engineering work.

## Consequences

- Normal `npm run build` requires Node/npm and Rust/Cargo.
- The frontend remains static-first and does not require a Rust/WASM module to render content.
- CSS tooling requires a deliberate cascade contract to prevent duplicate resets and tokens.
- A separate diagnostic Astro-only command remains available but is not the production build entry point.
- CI status is one item of implementation evidence, not the sole measure of RTD completion.

## References

- [RTD methodology](./RTD-METHODOLOGY.md)
- [Astro Islands](https://docs.astro.build/en/concepts/islands/)
- [Panda CSS for Astro](https://panda-css.com/docs/get-started/astro)
- [StyleX Vite integration](https://stylexjs.com/docs/learn/installation/vite)
- [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4)
- [Rust and WebAssembly Book](https://rustwasm.github.io/docs/book/)
