<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { PaginationListItem, type PaginationListItemProps } from 'reka-ui'
import { cn } from '@/Utils'
import { buttonVariants, type ButtonVariants } from '@/Components/Button'

const props = withDefaults(defineProps<PaginationListItemProps & {
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  isActive?: boolean
}>(), {
  size: 'icon',
})

const delegatedProps = reactiveOmit(props, 'class', 'size', 'isActive')
</script>

<template>
  <PaginationListItem
    data-slot="pagination-item"
    v-bind="delegatedProps"
    :class="cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
      }),
      props.class)"
  >
    <slot />
  </PaginationListItem>
</template>
