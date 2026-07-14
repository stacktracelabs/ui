---
name: stacktrace-ui-development
description: Build and modify Laravel, Inertia, and Vue interfaces with StackTrace UI. Use when creating or changing Vue pages, forms, navigation, dialogs, tables, frontend interactions, @stacktrace/ui composables, utilities, or TypeScript types, or PHP controllers and application code that prepare rendered UI with StackTrace\Ui classes such as Table, Menu, Breadcrumbs, Link, Icon, SelectOption, and Toast. Covers choosing, installing, composing, and consistently reusing StackTrace registry components and its Composer-shipped frontend package. Do not use for backend work unrelated to the rendered interface.
---

# StackTrace UI Development

Use StackTrace UI as the application's shared language across Laravel controllers and its Inertia Vue frontend.

## Working rules

1. Inspect the surrounding page, controller, `components.json`, and existing imports before changing UI.
2. Choose a StackTrace component or PHP UI value object when one fits. Prefer composing library primitives over reproducing their behavior or styling locally.
3. Check whether the required registry component is already installed in the application's configured UI directory. Install it when missing; do not copy an approximation into the page.
4. Preserve local component customizations. Never overwrite installed registry source merely to make it match the current registry unless the task explicitly calls for an update.
5. Use a custom component only when the catalog has no suitable primitive or composition. Build it from existing StackTrace primitives where practical, and follow the composition contract.
6. Reuse the same component and variant for the same semantic role across the application. Choose variants by meaning and hierarchy, not by color preference.
7. Verify both sides of an Inertia feature: the PHP data shape and the Vue component consuming it. Exercise interaction, pending, validation, empty, and disabled states that apply.

## Reference routing

- Read [installation](references/installation.md) before adding a missing component or changing registry configuration.
- Read the generated [component catalog](references/components.md) to choose among available components, then load only that component's detailed reference.
- Read [frontend package setup](references/frontend-package.md) before configuring its Vite or TypeScript alias or changing how `@stacktrace/ui` is imported.
- Read the generated [frontend API catalog](references/frontend-api.md) when using package composables, utilities, or types, then load only the relevant detailed reference.
- Read [Button](references/button.md) whenever using `Button`, `ButtonLink`, `ButtonState`, button variants, icons, destructive actions, or processing feedback.
- Read [composition](references/composition.md) when using `as`, `as-child`, Reka triggers, nested primitives, or when authoring/wrapping a component.
- Read the [PHP UI API](references/php-api.md) when a controller, table class, action, filter, menu, breadcrumb, toast, or other backend code prepares UI data.

Load only the references relevant to the task.

## Available components at a glance

- Actions and selection: Button, Button Group, Toggle, Toggle Group, Checkbox, Radio Group, Switch, Slider, Stepper.
- Forms and inputs: Field, Form, Input, Input Group, Textarea, Label, Native Select, Select, Combobox, Number Field, Pin Input, Input OTP, Tags Input, Date Input, Date Time Input, Date Picker, Date Range Picker, Calendar, Range Calendar.
- Navigation and commands: Breadcrumb, Navigation Menu, Menubar, Dropdown Menu, Context Menu, Command, Pagination, Sidebar, Tabs.
- Disclosure and overlays: Accordion, Collapsible, Dialog, Alert Dialog, Confirmation Dialog, Drawer, Sheet, Popover, Hover Card, Tooltip.
- Content and layout: Aspect Ratio, Card, Item, Empty, Separator, Scroll Area, Resizable, Carousel, Panel, Table, Data Table, Chart.
- Feedback and identity: Alert, Avatar, Badge, Progress, Skeleton, Spinner, Sonner, Marker, Kbd, Logo.
- Application helpers: Filter.

The registry also exposes the aggregate `all` item and shared `utils`; these are installation artifacts, not UI components.

## Frontend package API at a glance

- Composables: `useFilter`, `useFlash`, `useNavigation`, `useActiveLink`, `useToggle`, `onActivated`, and `onDeactivated`.
- Utility: `asyncRouter` for promise-based imperative Inertia visits.
- Shared types: filter and navigation contracts, `Toggle`, `SelectOption`, `SVGSource`, and `AsyncRouter`.

The frontend package ships inside the Composer package. Import its public API from `@stacktrace/ui`; do not add a separate npm dependency for it.

## Implementation workflow

### Frontend work

1. Find the semantic component in the catalog.
2. Confirm it is installed using the alias paths in `components.json`; do not assume a path if the application changed its aliases.
3. Install the registry item if absent.
4. Import from the application's configured component alias, normally `@/Components/<Component>`.
5. Follow the component-specific guidance and nearby project conventions.

### Frontend package work

1. Read the frontend API catalog and the reference for the export being used.
2. Confirm the Vite and TypeScript aliases resolve `@stacktrace/ui` to `vendor/stacktrace/ui`.
3. Import runtime helpers from `@stacktrace/ui` and use `import type` for type-only exports.
4. Prefer the package's composables, utilities, and contracts over application-local equivalents when their behavior fits.
5. Keep application-specific state and domain behavior outside generic package helpers.

### Controller and backend-rendered UI work

1. Check `vendor/stacktrace/ui/src` for a matching PHP type before returning bespoke arrays.
2. Build tables, menus, breadcrumbs, links, icons, selections, and toast feedback with the package API where applicable.
3. Pass those serializable objects as Inertia props without duplicating their frontend data contract in the controller.
4. Confirm the corresponding Vue renderer is installed and used.

## Verification

- Run the smallest relevant PHP and frontend checks already used by the application.
- Confirm imports resolve through the application's aliases.
- Confirm registry-installed dependencies are present.
- Test an Inertia request end to end when PHP-generated props or `ButtonLink` request behavior changes.
