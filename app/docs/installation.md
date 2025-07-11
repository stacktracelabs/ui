# Installation

Either new or existing application, `stacktrace/ui` can be easily installed to both. While we recommend starting with our skeleton,
you can install `stacktrace/ui` to existing Laravel application as well. You can also combine this library with `shadcn-vue`, if it is already
used in your application.

## New applications

When starting a new application, we recommend using our Laravel [starter kit](https://github.com/stacktracelabs/laravel-starter-kit) to quickly scaffold
a project with `stacktrace/ui` already installed. The starter kit is based on official Laravel Vue starter kit. To create a new application, use the Laravel installer:

```shell
laravel new my-app --using=stacktrace/laravel-starter-kit
```

You get fresh Laravel 12 application with following features:

- `stacktrace/ui` component library
- Typescript configuration from a Vue project template
- [Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar) to easy debug your application
- latest Inertia, Tailwind and Vue libraries

If you do not want to use our starter kit, use a [Laravel Vue starter kit](https://laravel.com/docs/12.x/starter-kits#vue) and continue with steps as described in Existing applications section.  

## Existing applications

When installing to an existing application, following requirements needs to be met before adding a `stacktrace/ui`:

- your application must be running on Laravel 10, 11 or 12
- [Inertia 2.0](https://inertiajs.com/server-side-setup) or higher must be installed
- Vue 3.5 or higher must be installed
- [Tailwind v4](https://tailwindcss.com/docs/installation/using-vite) must be installed

If your application meets given criteria, you can proceed with installation:

### 1. Install `stacktrace/ui`

Install the component library from your command line.

```shell
composer require stacktrace/ui
```

### 2. Install `reka-ui`

Use npm to install `reka-ui`.

```shell
npm add reka-ui
```

### 3. Configure Tailwind CSS

Update your `app.css` with following styles:

```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

@theme inline {
    --radius-sm: calc(var(--radius) - 4px);
    --radius-md: calc(var(--radius) - 2px);
    --radius-lg: var(--radius);
    --radius-xl: calc(var(--radius) + 4px);

    --color-background: var(--background);
    --color-foreground: var(--foreground);

    --color-card: var(--card);
    --color-card-foreground: var(--card-foreground);

    --color-popover: var(--popover);
    --color-popover-foreground: var(--popover-foreground);

    --color-primary: var(--primary);
    --color-primary-foreground: var(--primary-foreground);

    --color-secondary: var(--secondary);
    --color-secondary-foreground: var(--secondary-foreground);

    --color-muted: var(--muted);
    --color-muted-foreground: var(--muted-foreground);

    --color-accent: var(--accent);
    --color-accent-foreground: var(--accent-foreground);

    --color-destructive: var(--destructive);
    --color-destructive-foreground: var(--destructive-foreground);

    --color-border: var(--border);
    --color-input: var(--input);
    --color-ring: var(--ring);

    --color-chart-1: var(--chart-1);
    --color-chart-2: var(--chart-2);
    --color-chart-3: var(--chart-3);
    --color-chart-4: var(--chart-4);
    --color-chart-5: var(--chart-5);

    --color-sidebar: var(--sidebar-background);
    --color-sidebar-foreground: var(--sidebar-foreground);
    --color-sidebar-primary: var(--sidebar-primary);
    --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
    --color-sidebar-accent: var(--sidebar-accent);
    --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
    --color-sidebar-border: var(--sidebar-border);
    --color-sidebar-ring: var(--sidebar-ring);
}

:root {
    --background: hsl(0 0% 100%);
    --foreground: hsl(0 0% 3.9%);
    --card: hsl(0 0% 100%);
    --card-foreground: hsl(0 0% 3.9%);
    --popover: hsl(0 0% 100%);
    --popover-foreground: hsl(0 0% 3.9%);
    --primary: hsl(0 0% 9%);
    --primary-foreground: hsl(0 0% 98%);
    --secondary: hsl(0 0% 92.1%);
    --secondary-foreground: hsl(0 0% 9%);
    --muted: hsl(0 0% 96.1%);
    --muted-foreground: hsl(0 0% 45.1%);
    --accent: hsl(0 0% 96.1%);
    --accent-foreground: hsl(0 0% 9%);
    --destructive: hsl(0 84.2% 60.2%);
    --destructive-foreground: hsl(0 0% 98%);
    --border: hsl(0 0% 92.8%);
    --input: hsl(0 0% 89.8%);
    --ring: hsl(0 0% 3.9%);
    --chart-1: hsl(12 76% 61%);
    --chart-2: hsl(173 58% 39%);
    --chart-3: hsl(197 37% 24%);
    --chart-4: hsl(43 74% 66%);
    --chart-5: hsl(27 87% 67%);
    --radius: 0.625rem;
    --sidebar-background: hsl(0 0% 98%);
    --sidebar-foreground: hsl(240 5.3% 26.1%);
    --sidebar-primary: hsl(0 0% 10%);
    --sidebar-primary-foreground: hsl(0 0% 98%);
    --sidebar-accent: hsl(0 0% 94%);
    --sidebar-accent-foreground: hsl(0 0% 30%);
    --sidebar-border: hsl(0 0% 91%);
    --sidebar-ring: hsl(217.2 91.2% 59.8%);
    --sidebar: hsl(0 0% 98%);
}

.dark {
    --background: hsl(0 0% 3.9%);
    --foreground: hsl(0 0% 98%);
    --card: hsl(0 0% 3.9%);
    --card-foreground: hsl(0 0% 98%);
    --popover: hsl(0 0% 3.9%);
    --popover-foreground: 0 0% 98%;
    --primary: hsl(0 0% 98%);
    --primary-foreground: hsl(0 0% 9%);
    --secondary: hsl(0 0% 14.9%);
    --secondary-foreground: hsl(0 0% 98%);
    --muted: hsl(0 0% 16.08%);
    --muted-foreground: hsl(0 0% 63.9%);
    --accent: hsl(0 0% 14.9%);
    --accent-foreground: hsl(0 0% 98%);
    --destructive: hsl(0 84% 60%);
    --destructive-foreground: hsl(0 0% 98%);
    --border: hsl(0 0% 14.9%);
    --input: hsl(0 0% 14.9%);
    --ring: hsl(0 0% 83.1%);
    --chart-1: hsl(220 70% 50%);
    --chart-2: hsl(160 60% 45%);
    --chart-3: hsl(30 80% 55%);
    --chart-4: hsl(280 65% 60%);
    --chart-5: hsl(340 75% 55%);
    --sidebar-background: hsl(0 0% 7%);
    --sidebar-foreground: hsl(0 0% 95.9%);
    --sidebar-primary: hsl(360, 100%, 100%);
    --sidebar-primary-foreground: hsl(0 0% 100%);
    --sidebar-accent: hsl(0 0% 15.9%);
    --sidebar-accent-foreground: hsl(240 4.8% 95.9%);
    --sidebar-border: hsl(0 0% 15.9%);
    --sidebar-ring: hsl(217.2 91.2% 59.8%);
    --sidebar: hsl(240 5.9% 10%);
}

@layer base {
    * {
        @apply border-border outline-ring/50;
    }

    body {
        @apply bg-background text-foreground;
    }
}
```

### 4. Configure aliases

The `@stacktrace/ui` is not distributed through npm but included in a composer package. Hence, you have to tell Vite and Typescript,
where to find this library. The library is also using `@` alias to reference components, so this alias needs to be configured as well.

First, update your `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
  // ... rest of the config
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
      '@stacktrace/ui': path.resolve(__dirname, './vendor/stacktrace/ui')
    },
  },
})
```

Then update `compilerOptions` in your `tsconfig.json`:

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
