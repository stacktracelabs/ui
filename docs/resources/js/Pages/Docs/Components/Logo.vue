<template>
  <ComponentReferencePage
    title="Logo"
    description="The StackTrace mark as a lightweight, current-color SVG component."
    registry-name="logo"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Size the logo from its consumer and let it inherit the surrounding text color. Provide an accessible label when it communicates the product identity without adjacent text."
    :features="['Scales without raster assets.', 'Inherits currentColor.', 'Works in light and dark themes.']"
    api="Logo renders an SVG with a 24 by 24 view box and forwards standard SVG attributes."
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Logo/Default.vue'
import exampleSource from '@/Docs/Examples/Logo/Default.vue?raw'
</script>
