# ADR-0002: Greenfield V2 and Rust Active Compiler

- Status: Accepted for the greenfield reconstruction branch
- Date: 2026-11-23
- Supersedes: the optional Rust/WASM build boundary in ADR-0001
- Scope: IWAG V2 application source, build orchestration and archive boundary

## Context

The project has explicitly chosen a full reconstruction from zero. V1 is retained as a read-only research archive and is not a design template, dependency base, source import, runtime route or production build input. The current repository mixed static V1 snapshot files with the V2 source tree.

## Decision

1. Move legacy root HTML snapshots and their compiled assets into `archive/v1-reference/site/`.
2. Keep the active V2 application under `src/`.
3. Introduce a Rust Active Compiler CLI under `compiler/iwagc/` as the normal development and production build entry point.
4. Keep Astro as the only application framework, Vite as the only frontend build engine, and Vue as the scoped island renderer.
5. Integrate Tailwind CSS, Panda CSS and StyleX with non-overlapping ownership and a centralized CSS layer order.
6. Treat WASM, Canvas, WebGL and WebGPU as optional enhancements with static fallbacks.
7. Keep Java out of browser animation paths; no JVM runtime is justified for the static informational site.

## Compiler responsibility

Rust owns source-boundary validation, manifest checks, toolchain preflight, build orchestration, project-specific output validation, diagnostics and build reporting. Astro/Vite and specialist plugins retain responsibility for their language-specific compilation.

## Consequences

- Normal `npm run build` requires Node/npm and Rust/Cargo.
- The frontend remains static-first and does not require a Rust/WASM module to render content.
- CSS tooling requires a deliberate cascade contract to prevent duplicate resets and tokens.
- A separate diagnostic Astro-only command remains available but is not the production build entry point.
- Full device, accessibility, performance and content audits remain independent of CI status.

## References

- [Astro Islands](https://docs.astro.build/en/concepts/islands/)
- [Panda CSS for Astro](https://panda-css.com/docs/get-started/astro)
- [StyleX Vite integration](https://stylexjs.com/docs/learn/installation/vite)
- [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4)
- [Rust and WebAssembly Book](https://rustwasm.github.io/docs/book/)
