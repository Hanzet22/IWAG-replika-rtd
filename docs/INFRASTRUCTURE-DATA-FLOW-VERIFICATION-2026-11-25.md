# Infrastructure and Data-Flow Verification — 25 November 2026

**Repository:** `Hanzet22/IWAG-replika-rtd`  
**Repository baseline inspected:** `main` at `8c23d9af61ee9629680c128098e08807a5393621`  
**Vercel production deployment inspected:** `dpl_9KXUdkcJPMN9F5kRLmL1stq2vxkD`  
**Deployment source commit:** `fbe8005559e2e96d67a85153a23e2d7222dfa37b`  
**Assessment status:** Point-in-time technical evidence register; not a legal opinion, security certification, or complete provider audit.

## 1. Executive findings

1. The connected Vercel account contains a project named `iwag-replika-rtd`, using the Astro framework and Node.js 22.x.
2. The project has a verified Vercel-managed production hostname, `iwag-replika-rtd.vercel.app`. No custom/apex domain was returned by the project's domain listing.
3. The inspected production deployment is `READY` and responds with HTTP 200 on its project hostname. Its source is commit `fbe8005...`, while `main` has advanced to `8c23d9a...`. The production snapshot therefore does not contain the later PR #8 policy corrections.
4. The current repository config declares Astro `output: "static"`; `vercel.json` sets `git.deploymentEnabled: false`.
5. The Vercel project API returned no project environment variables (including zero hidden production variables) and no configured Vercel Log Drains. No variable values were decrypted or read.
6. Vercel's runtime-log documentation describes request metadata and plan-dependent retention. These platform capabilities do not prove which requests were logged, which plan is active, or whether any records exist for this project.
7. The project deployment reports region `iad1`. This is deployment/compute metadata, not proof that every CDN request or all associated processing occurs only in that region.
8. Vercel's DPA and subprocessor register describe the vendor's general processing chain. They are not proof that every listed subprocessor is engaged for this specific project.

## 2. Repository configuration evidence

### 2.1 Application and build configuration

The inspected `main` files show:

- `package.json`: Astro `7.4.13`, Node engine `>=22.23.4`, and the Rust Active Compiler as the normal `build` entry point.
- `astro.config.mjs`: `output: "static"`; four locale prefixes (`en`, `id`, `en-sg`, `ms-my`); Vue integration and build-time CSS tooling.
- `vercel.json`: `git.deploymentEnabled: false`, so automatic Git deployments are intentionally disabled.

The static-output setting supports the conclusion that Astro generates static pages. It does not by itself describe Vercel's edge routing, CDN request metadata, build logs, security processing, or any future function added outside the Astro page pipeline.

### 2.2 Application-level collection

The repository's architecture and privacy documentation state that the current V2 source has no intentionally configured analytics, behavioural advertising, remote fonts, third-party scripts, accounts, ticketing, payments, contact forms, or attendee-data collection by default.

The preference script uses browser local storage for display/accessibility preferences. The current `main` disclosure identifies seven keys:

- `iwag-v2-theme`
- `iwag-v2-accent`
- `iwag-v2-text-scale`
- `iwag-v2-text-spacing`
- `iwag-v2-contrast`
- `iwag-v2-motion`
- `iwag-v2-density`

The reviewed preference code does not send those preference values to the application server or analytics. Local storage is not an HTTP cookie and is not automatically attached to HTTP requests. This is not a claim that hosting, CDN, DNS, network or security providers receive no visitor metadata.

## 3. Vercel project configuration snapshot

The following was read from the connected Vercel project API on 25 November 2026:

| Item | Observed result | Interpretation |
|---|---|---|
| Project | `iwag-replika-rtd` | Project record found in the connected account |
| Framework | Astro | Platform project metadata |
| Node version | `22.x` | Configured Vercel runtime/build version family |
| Production hostname | `iwag-replika-rtd.vercel.app` | Vercel-managed hostname |
| Custom domain | None returned | No custom domain appeared in the project-domain response |
| Password protection | Disabled | No project password gate was configured in the returned settings |
| Preview SSO protection | Enabled | Applies to preview deployment protection as reported by Vercel |
| Trusted IP restriction | Disabled | No trusted-IP restriction was returned |
| Project environment variables | Empty list | API returned no variables and `hiddenProductionEnvCount: 0`; no values were decrypted |
| Vercel Log Drains | Empty list | No Vercel Log Drain was configured for this project at inspection time |
| Latest production deployment | `READY` | Deployment record reports a ready production target |
| Deployment region | `iad1` | Deployment metadata; not an exclusive data-residency guarantee |

The project API also returned a `live: false` field while the deployment record was `READY`, the project hostname was aliased, and the public hostname returned HTTP 200. This field is not interpreted here as proof that the site is offline; the observed deployment and HTTP response are the more direct evidence of availability.

## 4. Production-versus-main divergence

The latest production deployment inspected:

- Deployment ID: `dpl_9KXUdkcJPMN9F5kRLmL1stq2vxkD`
- Deployment state: `READY`
- Target: `production`
- Source branch: `main`
- Source commit: `fbe8005559e2e96d67a85153a23e2d7222dfa37b`

The current `main` head at inspection was:

- `8c23d9af61ee9629680c128098e08807a5393621`

This means the production deployment inspected is behind current `main` by the merged PR #8 policy update.

A live scrape of the production CoC route returned both the earlier event-oriented draft sections (including venue/event staff language) and the later website-only material. The production Privacy route still disclosed only the older two localStorage keys (`iwag-v2-theme` and `iwag-v2-accent`), not the seven-key disclosure now in `main`.

**Release implication:** Do not describe the merged PR #8 corrections as already published to production. The current public production snapshot still needs a deliberate, reviewed release after the owner decides to deploy.

## 5. What Vercel documents about request processing

Official Vercel documentation describes a CDN request path involving routing, caching and compute layers. Runtime-log documentation lists metadata that may be available for logged requests, including:

- request timestamp and status;
- request method, domain/host and path;
- search parameters;
- request ID;
- browser user-agent;
- processing region;
- firewall result;
- Vercel cache status and cache age/TTL;
- function metadata, timing and outgoing requests where applicable.

The runtime-log retention table is plan-dependent:

| Vercel plan/configuration | Published runtime-log retention |
|---|---:|
| Hobby | 1 hour |
| Pro | 1 day |
| Enterprise | 3 days |
| Pro with Observability Plus | 30 days |
| Enterprise with Observability Plus | 30 days |

Vercel documentation separately describes build logs as retained indefinitely. Log Drains can export observability data to external services; the project API returned no Vercel Log Drain for this project.

**Limits:** the project plan, actual log contents, logging settings, log access history, build-log contents, and any manually configured application-level forwarding were not established by this review. The published retention table must not be copied into the public Privacy Policy as this project's actual retention schedule until the account configuration and applicable contract are confirmed.

## 6. DPA and subprocessors

Official Vercel documents inspected:

- [Vercel Data Processing Addendum](https://vercel.com/legal/dpa) — page stated last updated 17 March 2026 and effective 31 March 2026 at inspection.
- [Vercel Subprocessors](https://security.vercel.com/subprocessors) — page stated last updated 21 August 2026 at inspection.
- [Vercel Runtime Logs](https://vercel.com/docs/logs/runtime).
- [Vercel CDN](https://vercel.com/docs/cdn).
- [Vercel Logs](https://vercel.com/docs/logs).

The general subprocessor register includes providers across hosting/storage, monitoring, audit, communications, payments, analytics and AI services. It includes (among others) Google, Microsoft, Datadog, Honeycomb, Redis, WorkOS, Stripe, OpenAI and Anthropic.

**Do not treat this platform-wide list as the project's own vendor list.** A vendor appearing in Vercel's register does not prove that it processes this project's data. The project-specific Log Drain list was empty, and no project environment variables were returned. The precise subprocessor engagement, data categories, purpose, location, transfer mechanism and retention for this account still require contract/configuration-level confirmation.

## 7. DNS and delivery boundary

The project's returned domain list contains the Vercel-managed hostname and generated Vercel deployment aliases. No external apex/custom domain was returned. Therefore this review does not identify a separate customer-selected authoritative DNS provider for a custom project domain.

Vercel's CDN and edge/security infrastructure remain relevant even when the application output is static. A static Astro build does not eliminate request metadata processing by the delivery platform.

## 8. Open verification items

| Item | Status | Evidence needed |
|---|---|---|
| Exact Vercel plan and contracted retention | Open | Account billing/plan record and current contract |
| Runtime and build log settings/content | Open | Authorized dashboard/API log inspection; do not infer from documentation |
| Log access permissions and audit history | Open | Team roles and audit records |
| Actual project data residency | Partially known | Deployment region is `iad1`; obtain applicable DPA, CDN processing and support/backup location terms |
| Subprocessor applicability | Open | Vercel DPA schedule, service configuration and provider engagement evidence |
| Any external log forwarding outside Vercel Drains | Open | Source search plus project integrations, runtime code and external account configuration |
| DNS provider for any future custom domain | Not applicable to current returned domain list | Reassess if a custom domain is attached |
| Production policy release | Open | Owner-authorized manual deployment of the current approved `main` commit |
| Current live CoC/Privacy consistency | Known mismatch | Deploy corrected `main` only after release review |

## 9. Legal and publication guardrails

- Keep the public Privacy Policy factual and distinguish browser-local preferences from infrastructure request metadata.
- Do not promise that IP addresses or request metadata are never processed or retained.
- Do not publish a fixed Vercel retention period until the actual plan and configuration are confirmed.
- Do not list every Vercel subprocessor as a project subprocessor without evidence of engagement.
- Do not claim Indonesian-only data residency from the `iad1` deployment region.
- Do not claim PR #8's policy corrections are in production until a deployment built from the corrected `main` commit is verified.
- The policy documents remain independent working drafts and require an identified operator/controller and qualified legal review before being treated as operative notices.

## 10. Source references

- Repository main: https://github.com/Hanzet22/IWAG-replika-rtd
- PR #8 (merged policy corrections): https://github.com/Hanzet22/IWAG-replika-rtd/pull/8
- PR #4 (separate open draft; not merged): https://github.com/Hanzet22/IWAG-replika-rtd/pull/4
- Production homepage: https://iwag-replika-rtd.vercel.app/
- Production CoC: https://iwag-replika-rtd.vercel.app/en/coc/
- Production Privacy: https://iwag-replika-rtd.vercel.app/en/privacy/
- PP 17/2025 official text: https://jdih.komdigi.go.id/produk_hukum/unduh/id/965/t/peraturan+pemerintah+nomor+17+tahun+2025
- Permenkomdigi 9/2026 JDIH metadata: https://jdih.komdigi.go.id/produk_hukum/view/id/1007/t/peraturan+menteri+komunikasi+dan+digital+nomor+9+tahun+2026
- Permenkomdigi 9/2026 official abstract: https://jdih.komdigi.go.id/produk_hukum/unduh-abstrak/547
- Permenkomdigi 9/2026 linked PDF (marked `RANCANGAN`): https://jdih.komdigi.go.id/produk_hukum/unduh/id/1007/t/peraturan+menteri+komunikasi+dan+digital+nomor+9+tahun+2026

This register records evidence observed on 25 November 2026. Recheck all account, deployment, legal-source and provider details before relying on them for a later release or public notice.


## 9. Infrastructure refresh — 25 November 2026, later point-in-time snapshot

This section supersedes earlier deployment identifiers and project-state observations in this document where they differ. A fresh read-only inspection of the connected Vercel project on 25 November 2026 returned:

| Item | Latest observed value | Qualification |
|---|---|---|
| Project | iwag-replika-rtd (prj_zyV8oiqVLtYPG1XKQncpLcg50ICM) | Connected project record |
| Framework / Node | Astro / Node 22.x | Project metadata |
| Latest production deployment | dpl_FHP8HCeMDBSgJ4wTw4ajrrdRsBou | State READY, target production |
| Deployment source | main at 17250ef8bfb18df7c7abc212dcaa27e572139704 | Commit message: “docs: add 2026 child digital-wellbeing evidence” |
| Production alias | iwag-replika-rtd.vercel.app | Verified Vercel-managed hostname |
| Other project aliases | iwag-replika-rtd-hypergarudas-projects.vercel.app; iwag-replika-rtd-git-main-hypergarudas-projects.vercel.app | Returned by project metadata |
| Project environment variables | Empty; hidden production count 0 | Values were not decrypted or read |
| Vercel drains | None returned | No Vercel drain configured in the project-scoped listing at inspection time |
| Production domains | Only iwag-replika-rtd.vercel.app returned | No custom domain returned in this project-scoped production-domain query |
| Project password protection | Disabled | Project setting |
| Preview SSO protection | Enabled | Preview setting only; not production access control |
| Deployment region | iad1 | Deployment metadata, not an exclusive data-residency guarantee |

**Release state:** the latest observed production deployment is already live and was created from the main commit above. This audit did not create, promote, or alter any deployment. PR #16 remains an unmerged draft and is not included in that deployment. The repository's vercel.json continues to set git.deploymentEnabled: false; this disables automatic Git-triggered deployment but does not prevent an explicitly initiated/manual deployment.

**Data/logging limitation:** an empty project environment-variable list and no configured Vercel drains do not establish that Vercel collects no request metadata. They also do not establish retention periods for every CDN, edge, build, security or platform log. Runtime logs are not a substitute for CDN request-log and provider-retention documentation. The project is static Astro output, so absence of application functions would not settle platform-level request logging. Obtain current plan-specific retention terms and provider/DPA/subprocessor evidence before making a public retention promise.

**Operational limitation:** public HTTP reachability and a READY deployment do not verify the live content route-by-route, the venue contract/permits, archive redistribution rights, legal operator identity or final policy approval. Keep these as independent release gates.


### 9.1 Production-to-main divergence

The repository's current main branch resolves to 6893b69ede3fed1a152b4737f76bc7705edfa1ae. A GitHub commit comparison confirms that main is **5 commits ahead** of the deployed production source commit 17250ef8bfb18df7c7abc212dcaa27e572139704, with no commits behind that deployed source. PR #16 then adds a separate 29-commit remediation stack on top of main; its current head is 0082b3fbde56587dc2d45eb1bb0d546500e39e97. Therefore the current production snapshot is behind main, and PR #16 is further ahead still. Do not describe the current production deployment as containing the current main or PR #16 policy changes.
