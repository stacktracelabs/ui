<template>
  <Accordion
    type="single"
    class="w-full max-w-xl"
    collapsible
    :default-value="defaultValue"
  >
    <AccordionItem
      v-for="item in accordionItems"
      :key="item.value"
      :value="item.value"
    >
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/Components/Base/Accordion'

const defaultValue = 'item-1'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It follows the WAI-ARIA accordion design pattern.',
  },
  {
    value: 'item-2',
    title: 'Can it be collapsed?',
    content: 'Yes. Use the collapsible prop with a single-value accordion.',
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes. The content uses the accordion animation utilities.',
  },
]
</script>
