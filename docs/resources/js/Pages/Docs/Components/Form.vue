<template>
  <ComponentReferencePage
    title="Form"
    description="StackTrace form helpers for labels, help text, validation messages, selects, and comboboxes."
    registry-name="form"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="This is the repository's layout-oriented Form API, not shadcn-vue's vee-validate integration. Use FormControl for application forms that already receive validation errors from Laravel; prefer Field for new framework-neutral compositions."
    :features="['Vertical and horizontal control layouts.', 'Laravel-friendly error and help text props.', 'Select and searchable combobox helpers.']"
    api="Exports FormControl, FormItem, FormLabel, FormDescription, FormMessage, FormSelect, and FormCombobox."
    source-url="https://shadcn-vue.com/docs/components/form"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Form/Default.vue'
import exampleSource from '@/Docs/Examples/Form/Default.vue?raw'
</script>
