<template>
  <ComponentReferencePage
    title="Stepper"
    description="Guides users through a sequence of ordered steps."
    registry-name="stepper"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Give every StepperItem a unique numeric step and place its indicator, title, and description inside StepperTrigger. Use separators only between adjacent items."
    :features="['Horizontal and vertical sequences.', 'Active, completed, and disabled states.', 'Controlled and uncontrolled current step.']"
    api="Exports Stepper, StepperItem, StepperTrigger, StepperIndicator, StepperTitle, StepperDescription, and StepperSeparator."
    source-url="https://shadcn-vue.com/docs/components/stepper"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Stepper/Default.vue'
import exampleSource from '@/Docs/Examples/Stepper/Default.vue?raw'
</script>
