# StackTrace UI Installation

This guide describes the expected setup for using the StackTrace UI shadcn-vue registry in a Laravel, Inertia, and Vue application.

## 1. Create Or Prepare A Laravel App

For a new Laravel 13 app, start with the Vue starter kit:

```bash
laravel new my-app --vue
cd my-app
```

The starter kit already includes Inertia, Vue, Tailwind, and shadcn-vue. StackTrace UI adds its own PascalCase component tree and a composer-provided JavaScript entrypoint.

## 2. Install Composer Packages

Install the StackTrace UI composer package and Ziggy:

```bash
composer require stacktrace/ui tightenco/ziggy
```

`stacktrace/ui` provides the PHP integration and the JavaScript source under `vendor/stacktrace/ui/resources/js`. Do not install `@stacktrace/ui` from npm; the `@stacktrace/ui` import must be resolved to the composer package source.

Ziggy is required because some StackTrace UI utilities and components use the global `route()` helper.

## 3. NPM Packages

The Laravel Vue starter kit already includes the normal Inertia, Vue, Tailwind, and shadcn-vue runtime packages. Do not install `@stacktrace/ui` from npm.

The frontend Ziggy package is required:

```bash
npm install ziggy-js
```

The StackTrace registry also declares it for components that import `@stacktrace/ui`, so `shadcn-vue add` can install it automatically. Other dependencies stay component-specific: for example, `Input/DebouncedInput` adds `lodash` and `@types/lodash`, carousel adds `embla-carousel-vue`, drawer adds `vaul-vue`, and chart adds `@unovis/vue`.

## 4. Expose Ziggy Routes

Add `@routes` to your main Blade view before the Vite entry. In a Laravel starter kit this is usually `resources/views/app.blade.php`:

```blade
@routes
@vite(['resources/js/app.ts'])
```

Add the global `route()` type to a dedicated `resources/js/Types/ziggy.d.ts` file:

```ts
import { route } from 'ziggy-js';

declare global {
  let route: typeof route;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    route: typeof route;
  }
}
```

If your app already extends `ComponentCustomProperties`, keep those declarations under `@vue/runtime-core` as well.

## 5. Configure App Type Declarations

Create `resources/js/Types/globals.d.ts` for the common Vite, Inertia, and Vue type augmentations:

```ts
import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { AppPageProps } from '@/Types';

// Extend ImportMeta interface for Vite...
declare module 'vite/client' {
  interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;

    [key: string]: string | boolean | undefined;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
    readonly glob: <T>(pattern: string) => Record<string, () => Promise<T>>;
  }
}

declare module '@inertiajs/core' {
  interface PageProps extends InertiaPageProps, AppPageProps {
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $inertia: typeof Router;
    $page: Page;
    $headManager: ReturnType<typeof createHeadManager>;
  }
}
```

## 6. Configure Vite Aliases

Alias `@stacktrace/ui` to the composer package source in `vite.config.ts`:

```ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
      '@stacktrace/ui': fileURLToPath(new URL('./vendor/stacktrace/ui', import.meta.url)),
    },
  },
})
```

Keep your existing Laravel, Inertia, Tailwind, Vue, and Wayfinder plugins in the same config; only add or update the `resolve.alias` entries.

## 7. Configure TypeScript Paths

Add matching aliases to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./resources/js/*"],
      "@stacktrace/ui": ["./vendor/stacktrace/ui"]
    }
  }
}
```

## 8. Configure shadcn-vue

Update `components.json` so StackTrace UI installs to PascalCase paths and can resolve the `@stacktrace` registry namespace:

```json
{
  "$schema": "https://shadcn-vue.com/schema.json",
  "style": "new-york-v4",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "resources/css/app.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/Components",
    "composables": "@/Composables",
    "utils": "@/Utils",
    "ui": "@/Components",
    "lib": "@/lib"
  },
  "registries": {
    "@stacktrace": "https://ui.stacktrace.sk/registry/{name}.json"
  },
  "iconLibrary": "lucide"
}
```

## 9. Use PascalCase Application Paths

StackTrace UI components are installed to:

```text
resources/js/Components
resources/js/Composables
resources/js/Types
resources/js/Utils
```

If you want the Laravel starter kit itself to follow the same convention, rename the starter directories and update imports:

```bash
mv resources/js/components resources/js/components-tmp
mv resources/js/components-tmp resources/js/Components
mv resources/js/composables resources/js/composables-tmp
mv resources/js/composables-tmp resources/js/Composables
mv resources/js/types resources/js/types-tmp
mv resources/js/types-tmp resources/js/Types
rg -l '@/components|@/composables|@/types' resources/js | xargs perl -pi -e "s#@/components#@/Components#g; s#@/composables#@/Composables#g; s#@/types#@/Types#g"
```

On case-sensitive filesystems, direct one-step renames are enough. The two-step rename above is safer on macOS.

## 10. Add Components

Add individual components through shadcn-vue:

```bash
npx shadcn-vue@latest add @stacktrace/button
npx shadcn-vue@latest add @stacktrace/data-table
```

Or add everything:

```bash
npx shadcn-vue@latest add @stacktrace/all
```

You can also use direct URLs:

```bash
npx shadcn-vue@latest add https://ui.stacktrace.sk/registry/button.json
```

For direct URLs, `components.json` must still include the `registries.@stacktrace` entry so nested registry dependencies like `@stacktrace/spinner` can resolve.

## 11. Configure Sonner Flash Types

If you install the `sonner` component, add the Inertia flash payload type to the `@inertiajs/core` declaration in `resources/js/Types/globals.d.ts`:

```ts
declare module '@inertiajs/core' {
  export interface InertiaConfig {
    flashDataType: {
      toast?: {
        title: string
        content: string | null
        variant: 'default' | 'destructive'
      }
    }
  }
}
```

## 12. Verify

Run:

```bash
npm run types:check
npm run build
```
