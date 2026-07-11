<template>
  <ComponentReferencePage
    title="Pin Input"
    description="A segmented input for PINs, verification codes, and short sequences."
    registry-name="pin-input"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Use indexed PinInputSlot components inside one or more groups. Choose Input OTP instead when copy-and-paste behavior and one-time-password semantics are the primary requirement."
    :features="['Keyboard navigation between slots.', 'Grouped segments and separators.', 'Masked and numeric input options.']"
    api="Exports PinInput, PinInputGroup, PinInputSlot, and PinInputSeparator. The model value is an array of strings."
    source-url="https://shadcn-vue.com/docs/components/pin-input"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/PinInput/Default.vue'
import exampleSource from '@/Docs/Examples/PinInput/Default.vue?raw'
</script>
