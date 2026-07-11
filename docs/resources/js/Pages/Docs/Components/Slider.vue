<template>
  <ComponentReferencePage
    title="Slider"
    description="Selects one or more values from a continuous range."
    registry-name="slider"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Bind an array model value, even for a single thumb. Provide a visible label and textual value when precision matters."
    :features="['Single and multiple thumbs.', 'Horizontal and vertical orientation.', 'Minimum, maximum, and step constraints.']"
    api="Slider forwards Reka SliderRoot props and emits model-value updates as an array of numbers."
    source-url="https://shadcn-vue.com/docs/components/slider"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Slider/Default.vue'
import exampleSource from '@/Docs/Examples/Slider/Default.vue?raw'
</script>
