<template>
  <ComponentReferencePage
    title="Number Field"
    description="A numeric input with accessible increment and decrement controls."
    registry-name="number-field"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Set minimum, maximum, and step constraints on NumberField. Compose its input and buttons inside NumberFieldContent and provide a visible label."
    :features="['Keyboard and button stepping.', 'Minimum, maximum, step, and formatting options.', 'Controlled and uncontrolled values.']"
    api="Exports NumberField, NumberFieldContent, NumberFieldInput, NumberFieldIncrement, and NumberFieldDecrement."
    source-url="https://shadcn-vue.com/docs/components/number-field"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/NumberField/Default.vue'
import exampleSource from '@/Docs/Examples/NumberField/Default.vue?raw'
</script>
