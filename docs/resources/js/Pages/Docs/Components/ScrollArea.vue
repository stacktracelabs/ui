<template>
  <ComponentReferencePage
    title="Scroll Area"
    description="Augments native scrolling with consistently styled scrollbars."
    registry-name="scroll-area"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Give ScrollArea an explicit height or width so overflow can occur. Content remains natively scrollable while ScrollBar controls visual orientation."
    :features="['Native scrolling behavior.', 'Vertical and horizontal scrollbars.', 'Theme-aware scrollbar styling.']"
    api="Exports ScrollArea and ScrollBar. Add a horizontal ScrollBar when content overflows on the inline axis."
    source-url="https://shadcn-vue.com/docs/components/scroll-area"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/ScrollArea/Default.vue'
import exampleSource from '@/Docs/Examples/ScrollArea/Default.vue?raw'
</script>
