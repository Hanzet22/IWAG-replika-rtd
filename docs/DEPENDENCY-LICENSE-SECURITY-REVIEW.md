# IWAG V2 — Dependency License and Security Review

**Review date:** 24 November 2026  
**Source of truth:** package.json and package-lock.json on v2/full-audit-aot-compliance  
**Scope:** npm dependency metadata and published advisory version ranges. This is not a complete SCA, SBOM attestation, penetration test or guarantee that no vulnerability exists.

## 1. Lockfile inventory

- 532 locked npm package entries were inspected.
- All 532 entries declare a license field in package-lock.json.
- Direct runtime/build dependencies are MIT except TypeScript (Apache-2.0).
- The lockfile is version 3 and pins exact resolved package versions and integrity hashes.
- This inventory reads package metadata; it does not replace reviewing each licence text, notices, attribution, distribution method or binary redistribution terms.

### Direct dependency inventory

| Package | Locked version | Declared licence |
|---|---:|---|
| @stylexjs/stylex | 0.19.2 | MIT |
| astro | 7.4.13 | MIT |
| vue | 3.5.45 | MIT |
| parse5 | 8.1.1 | MIT |
| @astrojs/vue | 7.1.6 | MIT |
| @pandacss/dev | 2.6.0 | MIT |
| @pandacss/preset-base | 2.6.0 | MIT |
| @pandacss/preset-panda | 2.6.0 | MIT |
| @pandacss/vite | 2.6.0 | MIT |
| @stylexjs/unplugin | 0.19.2 | MIT |
| @tailwindcss/vite | 4.3.5 | MIT |
| tailwindcss | 4.3.5 | MIT |
| typescript | 5.9.3 | Apache-2.0 |

## 2. Transitive licences requiring notice review

The lockfile contains 31 transitive package entries with licences outside the simple MIT/Apache-2.0/ISC/BSD group:

- LGPL-3.0-or-later: 10 platform-specific libvips packages under @img/sharp-libvips.
- Combined Apache-2.0 AND LGPL-3.0-or-later: 1 @img/sharp-wasm32 package and 3 @img/sharp-win32 packages.
- MPL-2.0: 12 Lightning CSS packages (base package and platform variants).
- CC-BY-4.0: caniuse-lite.
- BlueOak-1.0.0: common-ancestor-path, graceful-fs, sax and one nested lru-cache package.

The libvips/Sharp packages are optional platform packages in the lockfile. The first preview output contained zero image files and the project uses static output; this does not by itself prove that no package binary is downloaded, executed during build, cached or distributed. Determine the actual installed platform package and whether any binary or modified source is redistributed before preparing a third-party notices file.

MPL-2.0, LGPL and CC-BY obligations are not interchangeable. Review the actual licence texts and the way each dependency is used. Do not delete or suppress licence metadata simply to make the inventory appear permissive.

## 3. Security advisory review

### 3.1 Astro 7.4.13 — no affected range found in the reviewed Astro advisories

- GHSA-MH32-JXCR-MH9F / CVE-2026-126361: dynamic-tag attribute injection affects Astro <=7.4.4; patched in 7.4.5. The lockfile has Astro 7.4.13.
  - Advisory: https://github.com/advisories/GHSA-MH32-JXCR-MH9F
- GHSA-r3h5-4585-7x3w / CVE-2026-126364: image endpoint path issue affects Astro 5.14.3 through 7.4.6 with the @astrojs/node on-demand image endpoint; patched in Astro 7.4.7. This project uses Astro 7.4.13 and static output, not @astrojs/node.
  - Advisory: https://github.com/withastro/astro/security/advisories/GHSA-r3h5-4585-7x3w
- Astro 7.4.13 release notes: https://github.com/withastro/astro/releases/tag/astro%407.4.13

### 3.2 Vite 8.3.8 — outside the reviewed affected range

- GHSA-p4f5-76q4-ffq7 affects Vite 4.0.0–6.4.5, 7.0.0–7.3.7, 8.0.0–8.1.6, 8.2.0–8.2.4 and 8.3.0–8.3.6 when the Vite dev server is explicitly exposed to the network. Patched versions include 8.3.7. The lockfile resolves Vite 8.3.8.
  - Advisory: https://github.com/vitejs/vite/security/advisories/GHSA-p4f5-76q4-ffq7

### 3.3 Vue 3.5.45 — conditional SSR primitive; no current trigger identified

- GHSA-x9jw-j844-v24h describes a server-side template compilation/RCE chain involving Nuxt UI components, Comark/MDC bound props and attacker-controlled Markdown reaching polymorphic component values.
- The lockfile contains Vue and @vue/server-renderer 3.5.45. However, the current project is an Astro static site, has no Nuxt UI, Comark or MDC dependency, has no user-authored Markdown/content upload pipeline, and does not expose a Vue SSR request runtime. Vue components are compiled into static output.
- This is not a blanket statement that Vue 3.5.45 is universally safe. Reassess before introducing server-rendered Vue endpoints, untrusted Markdown, dynamic polymorphic component names, user-generated content or CMS content.
  - Advisory: https://github.com/nuxt/ui/security/advisories/GHSA-x9jw-j844-v24h

### 3.4 Other direct dependencies

The search did not identify a matching direct advisory for the locked @astrojs/vue 7.1.6, Tailwind CSS 4.3.5, @tailwindcss/vite 4.3.5, Panda CSS 2.6.0, StyleX 0.19.2, parse5 8.1.1 or TypeScript 5.9.3 versions in the sources reviewed. This is a point-in-time search result, not proof of zero vulnerabilities.

## 4. Security scanning limits

- Vercel's Security Review vulnerability endpoint returned HTTP 404 for this project/workspace, so no Vercel Security Review finding list was available.
- GitHub Dependabot/code-scanning/secret-scanning alert endpoints were not available through the connected GitHub fetch interface in this session.
- No full npm audit JSON/SBOM scanner output was available. Do not interpret the absence of an alert list as zero findings.
- The generated-output validator and Vercel preview build are separate engineering checks, not dependency vulnerability scanners.

## 5. Actions

- [x] Exact lockfile versions and declared licence metadata inventoried.
- [x] Astro and Vite reviewed against recent published advisories and their fixed-version ranges.
- [x] Conditional Vue SSR chain assessed against the current static Astro architecture and content model.
- [ ] Review licence texts and actual platform-specific binaries for Sharp/libvips and Lightning CSS; add third-party notices if required.
- [ ] Enable and review Dependabot or equivalent dependency alerting in the repository owner settings.
- [ ] Add a reproducible SBOM export and automated licence/advisory review to the release process.
- [ ] Reassess dependency risk whenever SSR, user-generated content, remote CMS, ticketing, uploads or server-side image processing is introduced.

## 6. Conclusion

No direct Astro or Vite version in the reviewed lockfile falls inside the cited patched advisory ranges. The Vue SSR advisory is conditional on a different Nuxt/Markdown architecture and no current exploit path was identified in the inspected static Astro project. Licence metadata is present for all 532 locked packages, but 31 transitive entries need specific licence/notice review. This is a scoped point-in-time review, not a clean security certification.
