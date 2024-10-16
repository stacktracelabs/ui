<script setup lang="ts">
import { type AlertDialogEmits, type AlertDialogProps, AlertDialogRoot, useForwardPropsEmits } from 'radix-vue'
import type { Toggle } from '@/Composables'
import { computed } from 'vue'

const props = defineProps<AlertDialogProps & {
  control?: Toggle
}>()
const emits = defineEmits<AlertDialogEmits>()

const delegatedProps = computed(() => {
  const { control: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <AlertDialogRoot v-if="control" v-bind="forwarded" v-model:open="control.active.value">
    <slot />
  </AlertDialogRoot>
  <AlertDialogRoot v-else v-bind="forwarded">
    <slot />
  </AlertDialogRoot>
</template>
