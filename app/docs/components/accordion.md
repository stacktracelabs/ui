# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

<ComponentSource
  source="components/Accordion"
  primitive="https://www.reka-ui.com/docs/components/accordion"
  ui="https://www.shadcn-vue.com/docs/components/accordion.html"
/>

<ComponentPreview name="Accordion" />

## Installation

#### Run the following command

```shell
php artisan ui:add accordion
```

#### Update `tailwind.config.js`

Add the following animations to your `tailwind.config.js` file:

```js title="tailwind.config.js" {5-18}
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
}
```

## Usage

```vue
<template>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/Accordion'
</script>
```
