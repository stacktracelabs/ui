<template>
  <Button
    data-slot="attachment-action"
    :variant="variant"
    :size="size"
  >
    <slot />
  </Button>
</template>

<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { ButtonVariants } from '@/Components/Button'
import { Button } from '@/Components/Button'

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class']
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'ghost',
  size: 'icon-xs',
})
</script>
