<script setup lang="ts">
import { useId } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<{
  for?: string
  label?: string | null | undefined
  help?: string | null | undefined
  error?: string | null | undefined
  required?: boolean
}>()
</script>

<template>
  <FormItem>
    <FormLabel v-if="label" :for="props.for || undefined" :error="props.error || ''">{{ label }} <span v-if="required" class="text-destructive">*</span></FormLabel>
    <slot />
    <FormDescription v-if="help">{{ help }}</FormDescription>
    <FormMessage v-if="error" :message="error" />
  </FormItem>
</template>
