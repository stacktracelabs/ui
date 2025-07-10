# Sheet

Extends the Dialog component to display content that complements the main content of the screen.

<ComponentPreview name="Sheet" />

## Installation

```shell
php artisan ui:add sheet
```

## Usage

```vue
<template>
  <Sheet>
    <SheetTrigger>Open</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/Components/Sheet'
</script>
```

## Examples

### Side

Use the `side` property to `<SheetContent />` to indicate the edge of the screen where the component will appear. The values can be `top`, `right`, `bottom` or `left`.

<ComponentPreview name="SheetSides" />

### Size

You can adjust the size of the sheet using CSS classes:

```vue {4}
<template>
  <Sheet>
    <SheetTrigger>Open</SheetTrigger>
    <SheetContent class="w-[400px] sm:w-[540px]">
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
```

### Toggle

You can also use [Toggle](/composables/toggle) to control Sheet appearance.

<ComponentPreview name="SheetToggle" />
