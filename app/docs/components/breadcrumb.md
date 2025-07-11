# Breadcrumb

Displays the path to the current resource using a hierarchy of links.

<ComponentSource
  source="components/breadcrumb"
  ui="https://www.shadcn-vue.com/docs/components/breadcrumb.html"
/>

<ComponentPreview name="Breadcrumb" />

## Installation

```shell
php artisan ui:add breadcrumb
```

## Usage

```vue
<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">
          Components
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>

<script setup lang="ts">
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/Components/Breadcrumb'
</script>
```

## Examples

### Non-Inertia link

By default, the `BreadcrumbLink` component is rendered as `Link` component from `@inertiajs/vue3` package. If you want to render a non-Inertia link,
you should set custom element with `as` property.

```vue
<BreadcrumbLink as="a" href="/">Link outside Inertia app</BreadcrumbLink>
```

### Collapsed

We provide a `<BreadcrumbEllipsis />` component to show a collapsed state when the breadcrumb is too long.

<ComponentPreview name="BreadcrumbCollapsed" />

### Custom Separator

Use a custom component as `slot` for `<BreadcrumbSeparator />` to create a custom separator.

<ComponentPreview name="BreadcrumbCustomSeparator" />

### Dropdown

You can compose `<BreadcrumbItem />` with a `<DropdownMenu />` to create a dropdown in the breadcrumb.

<ComponentPreview name="BreadcrumbDropdown" />

### Responsive

Here's an example of a responsive breadcrumb that composes `<BreadcrumbItem />` with `<BreadcrumbEllipsis />`, `<DropdownMenu />`, and `<Drawer />`.

It displays a dropdown on desktop and a drawer on mobile.

<ComponentPreview name="BreadcrumbResponsive" />
