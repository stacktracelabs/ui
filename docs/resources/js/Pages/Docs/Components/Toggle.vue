<template>
  <ComponentReferencePage
    title="Toggle"
    description="A two-state button that can be switched on or off."
    registry-name="toggle"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Use Toggle for a single independent state such as bold formatting. Provide an accessible label when the visible content is icon-only."
    :features="['Default and outline variants.', 'Small, default, and large sizes.', 'Controlled and uncontrolled pressed state.']"
    api="Toggle forwards Reka Toggle props and adds variant, size, and class options."
    source-url="https://shadcn-vue.com/docs/components/toggle"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Toggle/Default.vue'
import exampleSource from '@/Docs/Examples/Toggle/Default.vue?raw'
</script>
