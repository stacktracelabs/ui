<template>
  <DialogPortal>
    <DialogOverlay
      :variant="props.variant"
      class="grid place-items-center overflow-y-auto"
    >
      <DialogContent
        data-slot="dialog-content"
        :data-variant="props.variant ?? 'default'"
        :class="
          cn(
            'bg-background relative z-50 my-8 grid w-full max-w-lg gap-4 p-6 duration-200 sm:rounded-lg md:w-full',
            dialogContentVariants({ variant: props.variant }),
            props.class,
          )
        "
        v-bind="forwarded"
        @pointer-down-outside="(event) => {
          const originalEvent = event.detail.originalEvent;
          const target = originalEvent.target as HTMLElement;
          if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
            event.preventDefault();
          }
        }"
      >
        <slot />

        <DialogClose
          class="absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary"
        >
          <X class="w-4 h-4" />
          <span class="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogOverlay>
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
import { type DialogContentVariants, dialogContentVariants } from '.'
import DialogOverlay from './DialogOverlay.vue'

const props = defineProps<DialogContentProps & {
  class?: HTMLAttributes['class']
  variant?: DialogContentVariants['variant']
}>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, 'class', 'variant')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
