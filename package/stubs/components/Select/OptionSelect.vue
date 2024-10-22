<template>
  <Select v-bind="forwarded">
    <SelectTrigger :class="props.class">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="option in options" :value="option.value">{{ option.label }}</SelectItem>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
import { type SelectOption } from '@stacktrace/ui'
import type { SelectRootEmits, SelectRootProps } from 'radix-vue'
import { useForwardPropsEmits } from 'radix-vue'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '.'
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<SelectRootProps & {
  options: Array<SelectOption>
  placeholder?: string | undefined
  class?: HTMLAttributes['class']
  modelValue?: string | number | undefined
}>()
const emits = defineEmits<SelectRootEmits>()

const delegatedProps = computed(() => {
  const { options, placeholder, class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
