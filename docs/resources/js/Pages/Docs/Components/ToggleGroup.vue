<template>
  <ComponentReferencePage
    title="Toggle Group"
    description="Groups related toggles for single or multiple selection."
    registry-name="toggle-group"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Use single selection for mutually exclusive choices and multiple selection when options may be combined. Every icon-only item needs its own accessible label."
    :features="['Single and multiple selection modes.', 'Shared size and variant context.', 'Keyboard navigation between items.']"
    api="Compose ToggleGroupItem components inside ToggleGroup and bind the selected string or string array with v-model."
    source-url="https://shadcn-vue.com/docs/components/toggle-group"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/ToggleGroup/Default.vue'
import exampleSource from '@/Docs/Examples/ToggleGroup/Default.vue?raw'
</script>
