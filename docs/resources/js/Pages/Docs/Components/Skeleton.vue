<template>
  <ComponentReferencePage
    title="Skeleton"
    description="A placeholder used while content is loading."
    registry-name="skeleton"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Match skeleton dimensions to the content they replace so the layout remains stable. Group related shapes and replace the entire placeholder when data arrives."
    :features="['Theme-aware muted surface.', 'Built-in pulse animation.', 'Works with arbitrary dimensions and radius.']"
    api="Skeleton renders a div and accepts standard HTML attributes plus additional classes."
    source-url="https://shadcn-vue.com/docs/components/skeleton"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Skeleton/Default.vue'
import exampleSource from '@/Docs/Examples/Skeleton/Default.vue?raw'
</script>
