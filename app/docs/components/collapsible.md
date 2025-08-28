# Collapsible

An interactive component which expands/collapses a panel.

<ComponentSource
  source="components/collapsible"
  primitive="https://www.reka-ui.com/docs/components/collapsible"
  ui="https://www.shadcn-vue.com/docs/components/collapsible.html"
/>

<ComponentPreview name="Collapsible" />

## Installation

#### Run the following command

```shell
php artisan ui:add collapsible
```

#### Update `tailwind.config.js`

Add the following animations to your `tailwind.config.js` file:

```js title="tailwind.config.js" {5-18}
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
    },
  },
}
```

## Usage

```vue
<template>
  <Collapsible v-model:open="isOpen">
    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    <CollapsibleContent>
      Yes. Free to use for personal and commercial projects. No attribution
      required.
    </CollapsibleContent>
  </Collapsible>
</template>

<script setup lang="ts">
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/Components/Collapsible'
import { ref } from 'vue'

const isOpen = ref(false)
</script>
```
