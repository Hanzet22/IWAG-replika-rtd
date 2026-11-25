# IWAG V2 — Engineering Release Checklist

**Snapshot date:** 25 November 2026  
**Applies to:** technical release of the independent IWAG V2 reconstruction  
**Purpose:** verify the deployed software matches the reviewed V2 implementation.

This is an engineering checklist. It is not a certification process, policy-owner approval workflow, organiser approval request, or legal sign-off register. RTD work can continue independently of production release status.

## Current deployment context

A previous read-only inspection found an existing READY deployment for project `iwag-replika-rtd` sourced from an older `main` commit. Git-triggered deployment was reported disabled. Refresh this historical note before any new release; it does not authorise or trigger deployment.

## Engineering release checks

| Check | Required evidence | Status |
|---|---|---|
| Reviewed source revision | Exact main/PR commit SHA recorded and diff reviewed | OPEN |
| Build reproducibility | Active Compiler and Astro/Vite build complete from a clean install | OPEN |
| Route coverage | Required V1-to-V2 route map resolves; no accidental missing or duplicate routes | OPEN |
| Locale coverage | EN/ID parity and all declared V2 locales checked; fallbacks are explicit | OPEN |
| Content reconstruction | V1 page families and policy subject matter mapped to V2 deliverables; material omissions recorded | OPEN |
| UI and responsive behaviour | Representative mobile, tablet and desktop layouts checked against reference states | OPEN |
| Interaction behaviour | Navigation, controls, forms and state transitions work as specified | OPEN |
| Accessibility engineering | Keyboard, focus, semantics, zoom, reduced motion and assistive-technology checks recorded against the declared target | OPEN |
| Performance | Bundle/output size and representative-device behaviour measured; regressions documented | OPEN |
| Asset and dependency integrity | Source, licence, attribution and security provenance recorded for assets/dependencies actually shipped | OPEN |
| Runtime and headers | Deployed routes, redirects, cache behaviour, security headers and console/network errors checked | OPEN |
| Rollback | Previous known-good deployment and rollback path identified | OPEN |

## Separation from supporting research

Legal research, privacy/data-flow notes, policy draft status, event-operational facts and third-party rights observations remain separate supporting workstreams. They do not define RTD and are not certification or policy-owner approval gates.

A technical release must not publish unsupported claims or assets. If a specific asset or feature is not ready, exclude or replace that item and continue with the rest of the technical release where feasible. Unknown external facts should be labelled as unknown rather than turned into a blanket project blocker.

## Release procedure

1. Record the exact source commit.
2. Run the defined build and regression checks once against that revision.
3. Inspect the generated route manifest and representative pages.
4. Verify the candidate deployment and its actual commit.
5. Confirm the production alias only if the deployment provider reports it.
6. Record defects and rollback information.

Production deployment requires an explicit release instruction. This checklist does not deploy anything.
