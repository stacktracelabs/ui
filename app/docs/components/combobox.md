# Combobox

A select with input for option search.

<ComponentSource
  source="components/combobox"
/>

<ComponentPreview name="Combobox" />

## Installation

```shell
php artisan ui:add combobox
```

## Usage

```vue
<template>
  <Combobox :options="[
    { value: 'next.js', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt', label: 'Nuxt' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
  ]" placeholder="Select a framework…" v-model="value" />
</template>

<script setup lang="ts">
import { Combobox } from '@/Components/Combobox'
import { ref } from 'vue'
  
const value = ref()
</script>
```

## Advanced usage

You may use `Combobox` in more advanced usages such as in `Popover` or in `DropdownMenu`. 
However, you have to build the `Combobox` yourself using `Command` component.
See original [documentation](https://www.shadcn-vue.com/docs/components/combobox.html) on how to achieve that.
