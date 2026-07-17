---
name: update-shadcn-vue-components
description: Upgrade this repository's canonical Vue registry components in components/ from its recorded shadcn-vue release to a newer stable release. Use when checking for shadcn-vue updates, reading intervening release notes, adding newly released components, or selectively backporting upstream component changes while preserving the local APIs and styling documented in CUSTOMIZATIONS and validating the registry plus Laravel docs/workbench consumer.
---

# Update shadcn-vue Components

## Repository model

Treat `components/` as the single source of truth for registry components. The Laravel app in `docs/` consumes it through the `@/Components/Base/*` alias and generates the deployable registry in `docs/public/r`.

Read the repository-root `VERSION` and `CUSTOMIZATIONS` files completely before planning an update. `VERSION` contains the exact v-prefixed shadcn-vue release tag used as the upstream comparison baseline. `CUSTOMIZATIONS` is the preservation contract for repository conventions, local-only groups, local APIs, variants, options, integrations, and styles.

Do not copy components into `docs/resources/js/Components/Base`, restore `bin/update-components`, or treat `resources/js/Components` as the sync target.

## Version gate

1. Run `git status --short`. Preserve all existing edits, especially changes under `components/`, `VERSION`, and `CUSTOMIZATIONS`.
2. Read and validate `VERSION`. Require one v-prefixed stable semver tag such as `v2.7.4`; stop and report an invalid or missing value instead of guessing a baseline.
3. Query the latest non-draft, non-prerelease GitHub release from `unovue/shadcn-vue`. Use the GitHub releases API, `gh api repos/unovue/shadcn-vue/releases/latest`, or `https://github.com/unovue/shadcn-vue/releases`.
4. Compare semantic versions, not strings. Use the latest stable release as the target unless the user explicitly requested a newer stable tag no later than latest.
5. If `VERSION` equals the latest stable tag, refuse to update components: state that the repository is already current and make no component, dependency, generated-registry, `VERSION`, or `CUSTOMIZATIONS` changes. Also stop when an explicit target is not newer than `VERSION`. Report inconsistent states such as `VERSION` being newer than the latest stable release.

Do not opt into prereleases unless the user explicitly requests one. A prerelease request overrides only target selection, not the preservation and validation rules.

## Release-note-driven upgrade

1. Fetch every GitHub release after the recorded version through the target version, ordered oldest to newest. Exclude drafts and, unless explicitly requested, prereleases. Read each release body and linked migration notes completely.
2. Build a change plan that maps every relevant release-note item to component groups, shared helpers, runtime dependencies, and registry relationships. Include renamed or newly introduced groups. If notes describe a broad styling, Reka, Tailwind, or registry migration, inspect every upstream group affected by that migration even when the notes do not enumerate them.
3. Download both the recorded and target releases to separate temporary directories:

   ```bash
   python3 .codex/skills/update-shadcn-vue-components/scripts/download_latest_release.py --tag <recorded-tag> --output /private/tmp --name shadcn-vue-recorded
   python3 .codex/skills/update-shadcn-vue-components/scripts/download_latest_release.py --tag <target-tag> --output /private/tmp --name shadcn-vue-target
   ```

   Use `apps/v4/registry/new-york-v4/ui` inside each unpacked release. If upstream moves it, locate the current `new-york-v4` UI registry and update the helper instead of assuming the old path.
4. Inventory local, recorded, and target groups before editing:

   ```bash
   find components -mindepth 1 -maxdepth 1 -type d | sort
   find <recorded-root>/apps/v4/registry/new-york-v4/ui -mindepth 1 -maxdepth 1 -type d | sort
   find <target-root>/apps/v4/registry/new-york-v4/ui -mindepth 1 -maxdepth 1 -type d | sort
   ```

5. Add target-only groups directly when they are genuinely new upstream components. Convert kebab-case group names to the repository's PascalCase convention, adapt imports and SFC layout, and add a `CUSTOMIZATIONS` entry only when the new local version intentionally diverges from upstream.
6. For every existing group selected by the release notes or broad-migration analysis:

   - Diff recorded upstream against target upstream first. Treat this delta as the upstream change to backport.
   - Compare the local group against both upstream versions and read its entry in `CUSTOMIZATIONS` again.
   - Apply only the required upstream delta to the local files. Preserve or reapply every documented customization and compatible undocumented local code.
   - Resolve changed local APIs deliberately. Never replace, copy, or rsync an overlapping local directory wholesale.
   - Leave unrelated overlapping groups untouched. Preserve local-only groups even when no similarly named upstream group exists.

7. Review the final component diff against the change plan and release notes. Ensure every planned upstream change is present, every customization remains present, and no unrelated local behavior disappeared.

## Adaptation rules

- Keep Vue SFCs template-first, then script.
- Use PascalCase component folders and existing file naming conventions.
- Use `@/Components/<Group>` for cross-component imports, `@/Utils` for `cn`, and `@lucide/vue` for Lucide icons inside `components/`.
- Never use `@/Components/Base` inside `components/`; it is a docs-only consumer alias.
- Rewrite upstream registry imports such as `@/registry/new-york-v4/ui/sheet` to `@/Components/Sheet`.
- Prefer single-quoted TypeScript imports and string literals where surrounding files do.
- Adopt intentional upstream Tailwind changes when release notes or the recorded-to-target diff requires them.
- Do not edit generated `registry/` or `docs/public/r` JSON by hand. Fix canonical source or `scripts/generate-registry.mjs`, then regenerate.
- Do not update documentation examples merely to mirror a release. Fix them only when an intentional component API change breaks the consumer or the user asks.

## Dependencies and registry metadata

Add new runtime packages to `docs/package.json` and `docs/package-lock.json`, because the docs/workbench app compiles the canonical parent source. Update root `package.json` only when `resources/js` imports the package or the user explicitly asks to mirror package metadata.

The registry generator discovers package dependencies and cross-component relationships from imports. Keep `@/Components/<Group>` and `@/Utils` imports statically discoverable. Inspect affected generated JSON to verify both `dependencies` and `registryDependencies`.

Do not run `npm audit fix` during an upgrade unless the user asks for dependency remediation.

## Validation and version commit

Run:

```bash
rg -n "@/lib/utils|@/registry|new-york-v4|ring-\\[3px\\]|lucide-vue-next" components
npm run registry:generate
npm --prefix docs run type-check
npm run docs:build
git diff --check
```

The first search should normally return no matches. Inspect affected registry JSON after generation. Treat successful-build Rolldown pure-annotation and bundle-size warnings as non-failing warnings and report them.

After all validation passes, update `CUSTOMIZATIONS` to reflect any intentionally added, changed, upstream-superseded, or removed local behavior. Then update `VERSION` to the exact target tag as the final source change. If the merge or validation is incomplete, leave `VERSION` at the recorded tag so a later run does not mistake a partial upgrade for a completed one.
