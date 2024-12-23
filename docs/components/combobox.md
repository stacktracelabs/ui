# Combobox

Autocomplete input and command palette with a list of suggestions.

<ComponentSource
  source="components/Combobox"
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
