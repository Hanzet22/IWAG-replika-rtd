# ADR: Next.js as a Specialized Application Framework

- Status: Accepted
- Date: 2026-11-24
- Scope: IWAG V2
- Supersedes: the earlier decision to exclude a separate Next.js application runtime

## Context

IWAG V2 is primarily an information and event website. Its public content routes benefit from Astro's static-first model and selective hydration. However, a future application module may need a connected React component tree, complex shared state, server-side application behavior, or a library that is specifically built for Next.js.

Treating Next.js as the primary website framework would duplicate Astro's route and rendering responsibilities. Rejecting Next.js categorically would also remove a useful specialist option.

## Decision

Adopt Next.js as a **Specialized Application Framework**.

- Astro remains the sole owner of the public website shell and ordinary content routes.
- Next.js may own a bounded, application-heavy route space only when a concrete requirement justifies it.
- Next.js is a separately deployed application, not an Astro component and not a React island.
- A reverse-proxy path mount is preferred only when the deployment platform supports it correctly. A dedicated subdomain is the fallback.
- Vue remains the existing choice for small, scoped interactive islands in Astro.
- The Rust Active Compiler can orchestrate a Next.js build only after the project declares an actual Next.js module.
- This decision does not authorize installing Next.js immediately or adding an unused permanent runtime.

## Route and deployment contract

1. Astro owns the canonical public route tree except for an explicitly delegated application prefix or subdomain.
2. The Next.js application must not claim or shadow Astro content routes.
3. For a path mount, configure Next.js `basePath` at build time and validate assets, route handlers, server actions, redirects, metadata, deep links, and streaming through the proxy.
4. If path mounting cannot be supported without brittle rewrites, use a dedicated application subdomain.
5. Define authentication, cookie scope, CSRF defenses, authorization, logout, caching, security headers, observability, canonical URLs, sitemap ownership, and error handling before exposing an application route.
6. Share design tokens and UI contracts across the boundary. Do not share framework runtime internals.
7. Keep the public content experience independent: visitors who do not enter the application must not download the Next.js/React runtime.

## Admission criteria

A proposed module must demonstrate at least one meaningful need:
- many interdependent interactive regions sharing state;
- a substantial authenticated dashboard or workspace;
- a multi-step application workflow with complex server/client coordination;
- a Next.js-specific API or ecosystem dependency that cannot be replaced cleanly by the existing stack.

A static page, simple form, isolated control, or ordinary content route does not qualify.

## Consequences

### Positive
- Retains Astro's static-first delivery for the majority of routes.
- Allows Next.js where its application model provides real value.
- Makes route ownership, deployment, and runtime cost explicit.
- Avoids forcing unrelated frameworks into one shared routing system.

### Costs and risks
- Requires a separate deployment target and operational ownership.
- Cross-application authentication and navigation need deliberate design.
- A path mount requires a capable reverse proxy and careful base-path validation.
- Shared design tokens and accessibility behavior need parity checks.
- The additional framework increases maintenance and dependency surface once a real module is adopted.

## Evidence and references

- Astro framework components: https://docs.astro.build/en/guides/framework-components/
- Astro islands: https://docs.astro.build/en/concepts/islands/
- Astro authentication guidance: https://docs.astro.build/en/guides/authentication/
- Next.js `basePath`: https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath
- Next.js rewrites: https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites
- Next.js self-hosting: https://nextjs.org/docs/app/guides/self-hosting
- Next.js authentication: https://nextjs.org/docs/app/guides/authentication

## Implementation status

Architecture decision recorded. Next.js has not yet been installed, a module has not been selected, and no application route or deployment target has been created. These remain intentional until a real workload is scoped.
