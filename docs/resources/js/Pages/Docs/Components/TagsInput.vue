<template>
  <ComponentReferencePage
    title="Tags Input"
    description="Collects multiple short values as removable tags."
    registry-name="tags-input"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Render each model value as a TagsInputItem with text and delete controls, followed by TagsInputInput. Validate duplicates and allowed values in the surrounding form when necessary."
    :features="['Keyboard creation and deletion.', 'Controlled array model value.', 'Editable item and delete primitives.']"
    api="Exports TagsInput, TagsInputItem, TagsInputItemText, TagsInputItemDelete, and TagsInputInput."
    source-url="https://shadcn-vue.com/docs/components/tags-input"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/TagsInput/Default.vue'
import exampleSource from '@/Docs/Examples/TagsInput/Default.vue?raw'
</script>
