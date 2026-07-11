---
name: update-shadcn-vue-components
description: Update this repository's canonical Vue registry components in components/ from the latest unovue/shadcn-vue release. Use when syncing components/ with apps/v4/registry/new-york-v4/ui, adding newly released shadcn-vue components, adapting upstream Reka/shadcn components to this repo's PascalCase folders, template-first Vue SFC style, @/Utils and @/Components aliases, and @lucide/vue imports, while preserving local APIs and validating the generated registry plus the Laravel docs/workbench consumer.
---

# Update shadcn-vue Components

## Repository Model

`components/` is the single source of truth for registry components. The Laravel app in `docs/` consumes that source directly through the `@/Components/Base/*` Vite and TypeScript alias, and generates the deployable registry in `docs/public/r`.

Do not recreate the deleted `app/` tree, copy components into `docs/resources/js/Components/Base`, or restore `bin/update-components`. `docs/resources/js/Docs` contains documentation pages and examples, not a second component source. `resources/js/Components` contains separate package helpers and is not the shadcn-vue sync target.

## Workflow

1. Start with `git status --short`. Existing edits belong to the user or other agents; do not revert them. Pay particular attention to already-modified files under `components/`.
2. Find the latest upstream release every run. Use GitHub releases at `https://github.com/unovue/shadcn-vue/releases`, the GitHub API, or the bundled helper:

   ```bash
   python3 .codex/skills/update-shadcn-vue-components/scripts/download_latest_release.py --output /private/tmp
   ```

   The expected source tree is `apps/v4/registry/new-york-v4/ui` inside the unpacked release. If upstream moves it, locate the current `new-york-v4` UI registry and update the helper rather than assuming the old path still works.
3. Inventory both trees before editing:

   ```bash
   find components -mindepth 1 -maxdepth 1 -type d | sort
   find <release-root>/apps/v4/registry/new-york-v4/ui -mindepth 1 -maxdepth 1 -type d | sort
   ```

4. Add upstream-only component groups directly to `components/` using PascalCase folder names, for example `button-group` -> `ButtonGroup`, `input-otp` -> `InputOTP`, and `native-select` -> `NativeSelect`.
5. For overlapping groups, compare upstream and local files and merge deliberately. Never blind-copy an upstream group over the local directory.
6. If a component introduces a runtime package, add it to `docs/package.json` and `docs/package-lock.json` because the docs/workbench app compiles the canonical parent source. The registry generator discovers imported packages and writes them into each registry item's `dependencies`; inspect the generated item to confirm this. Update the root `package.json` only when code under `resources/js` also imports the dependency or the user explicitly wants the npm package metadata mirrored.
7. Validate the canonical source, generated registry, and its real consumer:

   ```bash
   rg -n "@/lib/utils|@/registry|new-york-v4|ring-\\[3px\\]|lucide-vue-next" components
   npm run registry:generate
   npm --prefix docs run type-check
   npm run docs:build
   git diff --check
   ```

   The first search should normally return no matches. `npm run registry:generate` writes an ignored inspection build to `registry/`; `npm run docs:build` regenerates the ignored deployable registry at `docs/public/r` before compiling the Laravel app. Inspect relevant JSON files in either output when component or dependency relationships changed.

   The docs build may emit non-failing Rolldown pure-annotation warnings from nested `@vueuse/core` and bundle-size warnings. Report them, but do not treat them as failures when the command exits successfully.

## Adaptation Rules

- Keep Vue SFCs template-first, then script.
- Use PascalCase component folders and preserve the repository's component file naming conventions.
- Inside `components/`, use `@/Components/<Group>` for cross-component imports and `@/Utils` for `cn`; the registry generator rewrites these to shadcn registry and `@/lib/utils` imports.
- Do not use `@/Components/Base` inside `components/`. That is a docs-only alias used by pages and examples to consume the parent source without colliding with the docs app's own `@` alias.
- Use `@lucide/vue` for Lucide icons.
- Rewrite upstream imports such as `@/registry/new-york-v4/ui/sheet` to canonical source imports such as `@/Components/Sheet`.
- Prefer single-quoted TypeScript imports and string literals where the surrounding files do.
- Use current Tailwind class spellings from upstream, such as `ring-3` rather than `ring-[3px]`.
- Preserve local components and helpers that are not in shadcn-vue, including `ConfirmationDialog`, `DataTable`, the date input/picker components, `Filter`, `Form`, `Logo`, `Panel`, and local table/navigation helpers.
- Do not edit generated `registry/` or `docs/public/r` JSON by hand. Fix canonical source or `scripts/generate-registry.mjs`, then regenerate.
- Do not update documentation pages or examples merely to mirror an upstream release unless the user asks, but do fix them when an intentional component API change breaks the docs consumer.

## Local Divergences to Preserve

- `Button` has `processing`, `recentlySuccessful`, `recentlySuccessfulLabel`, `label`, `icon`, `contentClass`, `plain`, and `LinkButton`. Merge upstream data attributes and variant changes without deleting those APIs.
- `Checkbox` is a native input with local styling and `CheckboxControl`. Do not replace it with upstream Reka `CheckboxRoot` unless the user explicitly requests that behavioral change.
- `Form` is custom and layout-oriented. Do not copy upstream `FormControl`, `useFormField.ts`, `injectionKeys.ts`, or `vee-validate` exports. The upstream `Field` group is separate and does not replace this repo's `Form`.
- `Table` has local selectable-row helpers used by `DataTable`. Do not copy upstream `table/utils.ts` or add `@tanstack/vue-table` solely for shadcn's `valueUpdater`; that pattern does not fit this package.
- `Sonner` listens for `useFlash('toast', ...)`. Keep that integration while merging upstream icon slots, `cn('toaster group', props.class)`, and CSS variables.
- `Sidebar` has local navigation exports. Preserve them while merging upstream variant classes.
- `Tabs` has local link/navigation variants and context helpers. Preserve them.

## Dependency and Registry Notes

The public installation path is the generated shadcn registry, not `ui:add` and not an npm copy step. Registry items are generated by `scripts/generate-registry.mjs`, served by the deployed docs app under `/r`, and installed with commands such as `npx shadcn-vue@latest add @stacktrace/button`.

When imports change, verify both package dependencies and `registryDependencies` in the affected generated item. Cross-component imports must remain statically discoverable through `@/Components/<Group>`, and utility imports must use `@/Utils`, so the generator can emit correct registry metadata and rewrites.

Do not run `npm audit fix` as part of a component sync unless the user asks for dependency remediation.
