<template>
  <DialogOverlay
    data-slot="dialog-overlay"
    :data-variant="props.variant ?? 'elevated'"
    v-bind="delegatedProps"
    :class="cn(dialogOverlayVariants({ variant: props.variant }), props.class)"
  >
    <slot />
  </DialogOverlay>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { DialogOverlay, type DialogOverlayProps } from 'reka-ui'
import { cn } from '@/Utils'
import { type DialogOverlayVariants, dialogOverlayVariants } from '.'

const props = defineProps<DialogOverlayProps & {
  class?: HTMLAttributes['class']
  variant?: DialogOverlayVariants['variant']
}>()

const delegatedProps = reactiveOmit(props, 'class', 'variant')
</script>
