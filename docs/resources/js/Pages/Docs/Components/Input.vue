<template>
  <ComponentReferencePage
    title="Input"
    description="A styled native input for text, email, password, file, and other form values."
    registry-name="input"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Pair Input with FieldLabel and FieldDescription, and set aria-invalid when validation fails. DebouncedInput is available when a value should update after the user pauses typing."
    :features="['Native input attributes and browser behavior.', 'Invalid and disabled states.', 'Debounced model updates.']"
    api="Exports Input and DebouncedInput. Both accept native input attributes and additional classes."
    source-url="https://shadcn-vue.com/docs/components/input"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Input/Default.vue'
import exampleSource from '@/Docs/Examples/Input/Default.vue?raw'
</script>
