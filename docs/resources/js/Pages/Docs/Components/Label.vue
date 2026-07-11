<template>
  <ComponentReferencePage
    title="Label"
    description="Renders an accessible label associated with a form control."
    registry-name="label"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Match the label's for attribute to the control id. Use FieldLabel when the control is already composed inside a Field."
    :features="['Native label semantics.', 'Disabled-state styling through peer controls.', 'Compatible with native and Reka controls.']"
    api="Label forwards Reka Label props and accepts additional classes."
    source-url="https://shadcn-vue.com/docs/components/label"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Label/Default.vue'
import exampleSource from '@/Docs/Examples/Label/Default.vue?raw'
</script>
