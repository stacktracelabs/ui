<template>
  <Button
    :data-size="props.size"
    :variant="props.variant"
    :class="cn(inputGroupButtonVariants({ size: props.size }), props.class)"
  >
    <slot />
  </Button>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import type { InputGroupButtonVariants } from '.'
import type { ButtonVariants } from '@/Components/Button'
import { cn } from '@/Utils'
import { Button } from '@/Components/Button'
import { inputGroupButtonVariants } from '.'

interface InputGroupButtonProps {
  variant?: ButtonVariants['variant']
  size?: InputGroupButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<InputGroupButtonProps>(), {
  size: 'xs',
  variant: 'ghost',
})
</script>
