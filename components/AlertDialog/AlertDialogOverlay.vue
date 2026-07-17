<template>
  <AlertDialogOverlay
    data-slot="alert-dialog-overlay"
    :data-variant="props.variant ?? 'elevated'"
    v-bind="delegatedProps"
    :class="cn(alertDialogOverlayVariants({ variant: props.variant }), props.class)"
  >
    <slot />
  </AlertDialogOverlay>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogOverlay, type AlertDialogOverlayProps } from 'reka-ui'
import { cn } from '@/Utils'
import { type AlertDialogOverlayVariants, alertDialogOverlayVariants } from '.'

const props = defineProps<AlertDialogOverlayProps & {
  class?: HTMLAttributes['class']
  variant?: AlertDialogOverlayVariants['variant']
}>()

const delegatedProps = reactiveOmit(props, 'class', 'variant')
</script>
