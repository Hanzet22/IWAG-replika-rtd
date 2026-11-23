# IWAG V2 Dependency License Inventory

**Snapshot:** `package-lock.json`, lockfileVersion 3  
**Scope:** npm package metadata recorded in the committed lockfile  
**Status:** metadata inventory completed; distribution notice and legal review still required

## 1. Snapshot

- 12 direct dependencies are pinned to exact versions.
- 530 transitive/direct package entries are recorded in the lockfile.
- All 530 entries have a declared `license` metadata field in the lockfile.
- Direct dependencies declare MIT or Apache-2.0.
- The lockfile is a dependency-resolution record, not proof that every package's full license text, notice, patent terms, or source-distribution obligations have been satisfied.

## 2. Direct dependency licenses

| Package | Locked version | Declared license |
|---|---:|---|
| `@stylexjs/stylex` | 0.19.2 | MIT |
| `astro` | 7.4.13 | MIT |
| `vue` | 3.5.45 | MIT |
| `@astrojs/vue` | 7.1.6 | MIT |
| `@pandacss/dev` | 2.6.0 | MIT |
| `@pandacss/preset-base` | 2.6.0 | MIT |
| `@pandacss/preset-panda` | 2.6.0 | MIT |
| `@pandacss/vite` | 2.6.0 | MIT |
| `@stylexjs/unplugin` | 0.19.2 | MIT |
| `@tailwindcss/vite` | 4.3.5 | MIT |
| `tailwindcss` | 4.3.5 | MIT |
| `typescript` | 5.9.3 | Apache-2.0 |

## 3. Notable transitive license families

The lockfile metadata includes:
- MIT
- Apache-2.0
- ISC
- BSD-2-Clause
- BSD-3-Clause
- 0BSD
- BlueOak-1.0.0
- LGPL-3.0-or-later
- MPL-2.0
- CC-BY-4.0
- CC0-1.0
- combined multi-license expressions

Notable entries:
- `lightningcss` and its platform packages declare MPL-2.0.
- `@img/sharp-libvips-*` platform packages declare LGPL-3.0-or-later.
- `@img/sharp-wasm32` and Windows Sharp platform packages declare combined Apache/LGPL/MIT expressions.
- `caniuse-lite` declares CC-BY-4.0.
- `mdn-data` declares CC0-1.0.

Some platform-specific packages are optional and are not necessarily installed on every runner or target. Confirm the actual installed production/build dependency tree before making distribution claims.

## 4. Required follow-up

1. Generate a third-party notices bundle from the actual installed dependency tree.
2. Review full license texts and combined-license expressions, especially MPL and LGPL packages.
3. Determine which optional platform packages are installed and whether any are redistributed.
4. Confirm whether build-only tools are present in the deployed artifact.
5. Preserve required notices and attribution in any redistributed binary or source package.
6. Re-run the inventory when dependencies or the lockfile change.

This is a technical metadata inventory, not legal advice or a declaration that all license obligations are satisfied.


## 5. Rust build tooling

- `wasm-pack` is installed in CI at version 0.15.0 and declares `MIT OR Apache-2.0`.
- The earlier 0.13.1 pin produced a Cargo warning for yanked `spin 0.9.8`. It was replaced with 0.15.0, whose published dependency metadata is current as of May 2026.
- Recheck the actual install log and generated lockfile whenever this tool version changes. A yanked warning is not automatically a security advisory, but it should not be silently ignored.
