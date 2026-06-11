---
name: update-shadcn-vue-components
description: Update this repository's internal Vue UI component package from the latest unovue/shadcn-vue release. Use when syncing app/resources/js/Components with shadcn-vue apps/v4/registry/new-york-v4/ui, adding newly released shadcn components, adapting upstream Reka/shadcn components to this repo's PascalCase folders, template-first Vue SFC style, @/Utils alias, and lucide-vue-next imports, while preserving local custom components and avoiding upstream vee-validate Form helpers and TanStack Table helpers.
---

# Update shadcn-vue Components

## Overview

Sync the workbench components in `app/resources/js/Components` from the latest `unovue/shadcn-vue` release, then verify the app. Do not update `components/` or run `bin/update-components` unless the user explicitly asks.

## Workflow

1. Start by checking `git status --short`. Treat existing changes as user work and do not revert them.
2. Find the latest upstream release every run. Use GitHub releases at `https://github.com/unovue/shadcn-vue/releases`, the GitHub API, or the bundled helper:

   ```bash
   python3 .codex/skills/update-shadcn-vue-components/scripts/download_latest_release.py --output /private/tmp
   ```

   The source component tree is `apps/v4/registry/new-york-v4/ui` inside the unpacked release.
3. Inventory both trees before editing:

   ```bash
   find app/resources/js/Components -mindepth 1 -maxdepth 1 -type d | sort
   find <release-root>/apps/v4/registry/new-york-v4/ui -mindepth 1 -maxdepth 1 -type d | sort
   ```

4. Add upstream-only component groups to `app/resources/js/Components` using PascalCase folder names, for example `button-group` -> `ButtonGroup`, `input-otp` -> `InputOTP`, `native-select` -> `NativeSelect`.
5. For overlapping groups, compare upstream and local files and merge deliberately. Do not blind-copy over local files.
6. Install new app-side dependencies when newly added components require them. For the 2.7.4 sync, `Chart` required `@unovis/vue` and `InputOTP` required `vue-input-otp`.
7. Run validation:

   ```bash
   rg -n "@/lib/utils|@lucide/vue|@/registry|new-york-v4|ring-\[3px\]" app/resources/js/Components app/package.json
   cd app
   npm run types
   npm run build
   ```

   `npm run build` may emit non-failing Rolldown pure-annotation warnings from nested `@vueuse/core`; report them, but do not treat them as failures if the build exits successfully.

## Adaptation Rules

- Keep Vue SFCs template-first, then script.
- Use PascalCase component folders and existing upstream component file names.
- Use `@/Utils` instead of `@/lib/utils`.
- Use `lucide-vue-next` instead of `@lucide/vue`.
- Rewrite upstream registry imports such as `@/registry/new-york-v4/ui/sheet` to local imports such as `@/Components/Sheet`.
- Prefer single-quoted TypeScript imports and string literals where the repo already does.
- Use latest Tailwind class spellings from upstream, such as `ring-3` rather than `ring-[3px]`.
- Preserve repo-local components and helpers that are not in shadcn-vue, including `ConfirmationDialog`, `DataTable`, date input/picker components, `Filter`, `Logo`, and `Panel`.
- Keep `components/` untouched during review-focused syncs. It is the package copy created by `bin/update-components`.

## Local Divergences to Preserve

- `Button` has `processing`, `recentlySuccessful`, `recentlySuccessfulLabel`, `label`, `icon`, `contentClass`, `plain`, and `LinkButton`. Merge upstream data attributes and variant changes without deleting those APIs.
- `Checkbox` is a native input with local styling and `CheckboxControl`. Do not replace it with upstream Reka `CheckboxRoot` unless the user explicitly requests that behavioral change.
- `Form` is custom and layout-oriented. Do not copy upstream `FormControl`, `useFormField.ts`, `injectionKeys.ts`, or `vee-validate` exports. The upstream `Field` component group can be added separately because it does not replace this repo's `Form`.
- `Table` has local selectable-row helpers used by `DataTable`. Do not copy upstream `table/utils.ts` or add `@tanstack/vue-table` just for shadcn's `valueUpdater`; that pattern does not fit this package.
- `Sonner` listens for `useFlash('toast', ...)`. Keep that integration while merging upstream icon slots, `cn('toaster group', props.class)`, and CSS variables.
- `Sidebar` has local navigation exports. Preserve them while merging upstream variant classes.
- `Tabs` has local link/navigation variants and context helpers. Preserve them.

## Dependency Notes

When syncing only the workbench, update `app/package.json` and `app/package-lock.json`. If the user asks to publish/copy components into `components/`, also evaluate the root package's runtime dependencies before running `bin/update-components`; distributed components must not import packages absent from the package manifest.

Do not run `npm audit fix` as part of a component sync unless the user asks for dependency remediation.
