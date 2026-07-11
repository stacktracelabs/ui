<template>
  <Stepper :default-value="1" class="w-full max-w-xl items-start">
    <StepperItem v-for="step in steps" :key="step.step" :step="step.step" class="flex-1">
      <StepperTrigger>
        <StepperIndicator>{{ step.step }}</StepperIndicator>
        <StepperTitle>{{ step.title }}</StepperTitle>
        <StepperDescription>{{ step.description }}</StepperDescription>
      </StepperTrigger>
      <StepperSeparator v-if="step.step !== steps.length" class="h-px flex-1" />
    </StepperItem>
  </Stepper>
</template>

<script setup lang="ts">
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@/Components/Base/Stepper'

const steps = [
  { step: 1, title: 'Account', description: 'Your details' },
  { step: 2, title: 'Workspace', description: 'Team settings' },
  { step: 3, title: 'Finish', description: 'Review changes' },
]
</script>
