# StackTrace UI Installation

This guide describes the expected setup for using the StackTrace UI shadcn-vue registry in a Laravel application that already uses Inertia, Vue, TypeScript, Tailwind, and shadcn-vue.

It does not assume that the project already has any shadcn-vue components installed. The registry can be added to an existing application and components can be installed one by one through `shadcn-vue add`.

## 1. Requirements

Start with a Laravel project that already has:

- Inertia and Vue
- TypeScript
- Tailwind CSS
- shadcn-vue initialized with a `components.json` file
- the `@` alias pointing to `resources/js`

StackTrace UI components use PascalCase folder names and are installed through the shadcn-vue `ui` alias. The examples below use this default target:

```text
resources/js/Components
```

You can choose a different target, for example `resources/js/Components/Base`, by changing `aliases.ui` in `components.json`.

If your project was created from the Laravel Vue starter kit, apply the starter-kit section before adding StackTrace components.

## 2. Laravel Vue Starter Kit

If you start from the Laravel Vue starter kit, rename its default lowercase frontend directories before continuing with the StackTrace setup:

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

The starter kit also imports its bundled shadcn-vue components from `@/components/ui/...`. After the rename those imports become `@/Components/ui/...` and still point to the starter copies, not to the StackTrace PascalCase components installed by the registry.

After installing the relevant StackTrace components, update the starter imports you use. If your `aliases.ui` is `@/Components`, use:

```bash
rg -l '@/Components/ui' resources/js | xargs perl -pi -e 's#@/Components/ui/button#@/Components/Button#g; s#@/Components/ui/dialog#@/Components/Dialog#g; s#@/Components/ui/card#@/Components/Card#g; s#@/Components/ui/label#@/Components/Label#g; s#@/Components/ui/input-otp#@/Components/InputOTP#g; s#@/Components/ui/input#@/Components/Input#g; s#@/Components/ui/spinner#@/Components/Spinner#g; s#@/Components/ui/checkbox#@/Components/Checkbox#g; s#@/Components/ui/separator#@/Components/Separator#g; s#@/Components/ui/sonner#@/Components/Sonner#g; s#@/Components/ui/dropdown-menu#@/Components/DropdownMenu#g; s#@/Components/ui/sidebar#@/Components/Sidebar#g; s#@/Components/ui/alert#@/Components/Alert#g; s#@/Components/ui/avatar#@/Components/Avatar#g; s#@/Components/ui/breadcrumb#@/Components/Breadcrumb#g; s#@/Components/ui/navigation-menu#@/Components/NavigationMenu#g; s#@/Components/ui/sheet#@/Components/Sheet#g; s#@/Components/ui/tooltip#@/Components/Tooltip#g; s#@/Components/ui/skeleton#@/Components/Skeleton#g; s#@/Components/ui/collapsible#@/Components/Collapsible#g'
```

Then check whether any starter imports remain:

```bash
rg -F '@/Components/ui' resources/js
```

If there is no output, the old starter `resources/js/Components/ui` directory is no longer referenced and can be removed if you want to keep only the PascalCase component tree.

If your `aliases.ui` points somewhere else, for example `@/Components/Base`, replace the right-hand side with that alias for every starter component you use:

```bash
rg -l '@/Components/ui' resources/js | xargs perl -pi -e 's#@/Components/ui/button#@/Components/Base/Button#g; s#@/Components/ui/dialog#@/Components/Base/Dialog#g; s#@/Components/ui/card#@/Components/Base/Card#g; s#@/Components/ui/label#@/Components/Base/Label#g; s#@/Components/ui/input-otp#@/Components/Base/InputOTP#g; s#@/Components/ui/input#@/Components/Base/Input#g; s#@/Components/ui/spinner#@/Components/Base/Spinner#g; s#@/Components/ui/checkbox#@/Components/Base/Checkbox#g; s#@/Components/ui/separator#@/Components/Base/Separator#g; s#@/Components/ui/sonner#@/Components/Base/Sonner#g; s#@/Components/ui/dropdown-menu#@/Components/Base/DropdownMenu#g; s#@/Components/ui/sidebar#@/Components/Base/Sidebar#g; s#@/Components/ui/alert#@/Components/Base/Alert#g; s#@/Components/ui/avatar#@/Components/Base/Avatar#g; s#@/Components/ui/breadcrumb#@/Components/Base/Breadcrumb#g; s#@/Components/ui/navigation-menu#@/Components/Base/NavigationMenu#g; s#@/Components/ui/sheet#@/Components/Base/Sheet#g; s#@/Components/ui/tooltip#@/Components/Base/Tooltip#g; s#@/Components/ui/skeleton#@/Components/Base/Skeleton#g; s#@/Components/ui/collapsible#@/Components/Base/Collapsible#g'
```

## 3. Install Composer Packages

Install the StackTrace UI composer package and Ziggy:

```bash
composer require stacktrace/ui tightenco/ziggy
```

`stacktrace/ui` provides the PHP integration and the JavaScript source under `vendor/stacktrace/ui/resources/js`. Do not install `@stacktrace/ui` from npm; the `@stacktrace/ui` import must be resolved to the composer package source.

Ziggy is required because some StackTrace UI utilities and components use the global `route()` helper.

## 4. NPM Packages

Do not install `@stacktrace/ui` from npm.

The frontend Ziggy package is required:

```bash
npm install ziggy-js
```

The StackTrace registry also declares it for components that import `@stacktrace/ui`, so `shadcn-vue add` can install it automatically. Other dependencies stay component-specific: for example, `Input/DebouncedInput` adds `lodash` and `@types/lodash`, carousel adds `embla-carousel-vue`, drawer adds `vaul-vue`, and chart adds `@unovis/vue`.

## 5. Expose Ziggy Routes

Add `@routes` to your main Blade view before the Vite entry:

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

## 6. Configure App Type Declarations

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

## 7. Configure Vite Aliases

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

## 8. Configure TypeScript Paths

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

## 9. Configure shadcn-vue

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
    "lib": "@/Utils"
  },
  "registries": {
    "@stacktrace": "https://ui.stacktrace.sk/registry/{name}.json"
  },
  "iconLibrary": "lucide"
}
```

The `ui` alias controls where StackTrace components are installed. To install them under `resources/js/Components/Base`, use:

```json
{
  "aliases": {
    "components": "@/Components",
    "composables": "@/Composables",
    "utils": "@/Utils",
    "ui": "@/Components/Base",
    "lib": "@/Utils"
  }
}
```

Keep `utils` and `lib` pointed at the same directory unless you intentionally move the generated `cn` helper. shadcn-vue installs `registry:lib` files through `aliases.lib` and rewrites `cn` imports through `aliases.utils`.

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
