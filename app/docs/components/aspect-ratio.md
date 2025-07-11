# Aspect Ratio

Displays content within a desired ratio.

<ComponentSource
  source="components/AspectRatio"
  primitive="https://www.reka-ui.com/docs/components/aspect-ratio"
  ui="https://www.shadcn-vue.com/docs/components/aspect-ratio.html"
/>

<ComponentPreview name="AspectRatio" />

## Installation

```shell
php artisan ui:add aspect-ratio
```

## Usage

```vue
<template>
  <div class="w-[450px]">
    <AspectRatio :ratio="16 / 9">
      <img src="..." alt="Image" class="rounded-md object-cover w-full h-full">
    </AspectRatio>
  </div>
</template>

<script setup lang="ts">
import { AspectRatio } from '@/Components/AspectRatio'
</script>
```
