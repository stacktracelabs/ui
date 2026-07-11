<template>
  <Primitive
    data-slot="button"
    :data-variant="variant"
    :data-size="size"
    :as="as"
    :as-child="asChild"
    :class="cn('group/button', buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { type ButtonProps, buttonVariants } from './'
import { cn } from '@/Utils'

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
})
</script>
