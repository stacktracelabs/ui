<template>
  <FieldGroup
    :class="[
      'form-control gap-0',
      { 'has-error': !!error },
    ]"
  >
    <Field
      :orientation="variant === 'horizontal' ? 'responsive' : 'vertical'"
      :data-invalid="error ? true : undefined"
    >
      <FieldContent v-if="variant === 'horizontal' && (label || help)">
        <FieldLabel v-if="label" :for="props.for || undefined">
          {{ label }}
          <span v-if="required" aria-hidden="true" class="text-destructive">*</span>
        </FieldLabel>
        <FieldDescription v-if="help">
          {{ help }}
        </FieldDescription>
      </FieldContent>

      <FieldLabel v-else-if="label" :for="props.for || undefined">
        {{ label }}
        <span v-if="required" aria-hidden="true" class="text-destructive">*</span>
      </FieldLabel>

      <div class="flex w-full flex-1 flex-col gap-1.5">
        <slot />
        <FieldDescription v-if="variant === 'vertical' && help">
          {{ help }}
        </FieldDescription>
        <FieldError v-if="error">
          {{ error }}
        </FieldError>
      </div>
    </Field>
  </FieldGroup>
</template>

<script setup lang="ts">
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/Components/Field'

const props = withDefaults(defineProps<{
  variant?: 'vertical' | 'horizontal'
  for?: string
  label?: string | null | undefined
  help?: string | null | undefined
  error?: string | null | undefined
  required?: boolean
}>(), {
  variant: 'vertical',
})
</script>
