<template>
  <DialogPortal :to="to">
    <SheetOverlay :variant="props.variant" />
    <DialogContent
      data-slot="sheet-content"
      :data-variant="props.variant"
      :data-size="props.size"
      :class="cn(sheetContentVariants({ side: props.side, size: props.size, variant: props.variant }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <DialogClose
        class="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
      >
        <X class="size-4" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { X } from '@lucide/vue'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/Utils'
import { type SheetContentVariants, sheetContentVariants } from '.'
import SheetOverlay from './SheetOverlay.vue'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: 'top' | 'right' | 'bottom' | 'left'
  size?: SheetContentVariants['size']
  to?: string | HTMLElement
  variant?: SheetContentVariants['variant']
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SheetContentProps>(), {
  side: 'right',
  size: 'sm',
  variant: 'elevated',
})
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, 'class', 'side', 'size', 'to', 'variant')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
