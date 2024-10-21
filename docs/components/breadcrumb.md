# Breadcrumb

Displays the path to the current resource using a hierarchy of links.

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
<BreadcrumbLink as="a" href="/">
    Link outside Inertia app
</BreadcrumbLink>
```
