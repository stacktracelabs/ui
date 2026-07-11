<template>
  <Link
    data-slot="button-link"
    :data-variant="variant"
    :data-size="size"
    v-bind="delegatedProps"
    :class="cn('group/button', buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Link>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { reactiveOmit } from '@vueuse/core'
import { cn } from '@/Utils'
import { type ButtonLinkProps, buttonVariants } from '.'

const props = defineProps<ButtonLinkProps>()

const delegatedProps = reactiveOmit(props, 'class', 'variant', 'size')
</script>
