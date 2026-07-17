<template>
  <DialogOverlay
    data-slot="sheet-overlay"
    :data-variant="props.variant ?? 'elevated'"
    :class="cn(sheetOverlayVariants({ variant: props.variant }), props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogOverlay>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { DialogOverlay, type DialogOverlayProps } from 'reka-ui'
import { cn } from '@/Utils'
import { type SheetOverlayVariants, sheetOverlayVariants } from '.'

const props = defineProps<DialogOverlayProps & {
  class?: HTMLAttributes['class']
  variant?: SheetOverlayVariants['variant']
}>()

const delegatedProps = reactiveOmit(props, 'class', 'variant')
</script>
