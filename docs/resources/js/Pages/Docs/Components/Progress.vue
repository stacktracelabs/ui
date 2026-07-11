<template>
  <ComponentReferencePage
    title="Progress"
    description="Displays completion progress for a task or workflow."
    registry-name="progress"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Pass a value between zero and one hundred and pair the visual bar with text when the exact percentage or task name matters."
    :features="['Accessible progress semantics.', 'Smooth indicator transitions.', 'Theme-aware foreground and track colors.']"
    api="Progress forwards Reka ProgressRoot props. Set model-value to the current percentage."
    source-url="https://shadcn-vue.com/docs/components/progress"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Progress/Default.vue'
import exampleSource from '@/Docs/Examples/Progress/Default.vue?raw'
</script>
