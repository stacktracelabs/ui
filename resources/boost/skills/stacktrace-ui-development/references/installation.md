# Installation and registry workflow

Use this reference when a required StackTrace Vue component is not yet present in the application.

## Requirements

The frontend expects:

- Laravel with an Inertia Vue frontend
- Vue 3.5 or newer
- Tailwind CSS v4
- a shadcn-vue `components.json`

The Composer package is normally already installed when this Boost skill is available. Do not reinstall it just to add a frontend component.

## Inspect first

1. Locate `components.json`.
2. Read `aliases.ui`, `aliases.components`, and `registries`.
3. Check the configured UI directory for the component's existing source.
4. Reuse the installed source when present.

Do not infer that `@/Components` is correct if the local aliases say otherwise.

## Initialize shadcn-vue

If the project does not have `components.json`, initialize it and select the Laravel template when prompted:

```bash
npx shadcn-vue@latest init
```

## Configure the StackTrace registry

Add this namespace without discarding other local registry configuration:

```json
{
  "registries": {
    "@stacktrace": "https://ui.stacktrace.sk/r/{name}.json"
  }
}
```

## Install missing components

Install only what the feature needs:

```bash
npx shadcn-vue@latest add @stacktrace/button
```

Several items may be installed together:

```bash
npx shadcn-vue@latest add @stacktrace/button @stacktrace/card @stacktrace/dialog
```

Use the aggregate item only when the application deliberately wants the complete library:

```bash
npx shadcn-vue@latest add @stacktrace/all
```

Registry names use kebab case, such as `button-group`, `date-range-picker`, and `data-table`.

## Import installed source

Follow the aliases in `components.json`. With the recommended configuration:

```vue
<template>
  <Button>Save changes</Button>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Button'
</script>
```

## Updating is different from installing

Registry files belong to the consuming application after installation. They may contain intentional local changes. Use `--overwrite` only when an update is explicitly requested and after reviewing the local diff:

```bash
npx shadcn-vue@latest add @stacktrace/button --overwrite
```

After installation or update, inspect the generated diff and run the application's frontend type/build check.
