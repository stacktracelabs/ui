<template>
  <Primitive
    data-slot="sidebar-menu-button"
    data-sidebar="menu-button"
    :data-size="size"
    :data-active="isActive"
    :class="cn(sidebarMenuButtonVariants({ variant, size }), props.class)"
    :as="as"
    :as-child="asChild"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/Utils'
import { type SidebarMenuButtonVariants, sidebarMenuButtonVariants } from '.'

export interface SidebarMenuButtonProps extends PrimitiveProps {
  variant?: SidebarMenuButtonVariants['variant']
  size?: SidebarMenuButtonVariants['size']
  isActive?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<SidebarMenuButtonProps>(), {
  as: 'button',
  variant: 'default',
  size: 'default',
})
</script>
