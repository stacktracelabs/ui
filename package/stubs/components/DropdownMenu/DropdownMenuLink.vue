<template>
  <DropdownMenuItem v-bind="forwardedProps" as-child>
    <Link :as="props.as || undefined" class="w-full">
      <slot />
    </Link>
  </DropdownMenuItem>
</template>

<script setup lang="ts">
import { DropdownMenuItemProps, useForwardProps } from 'radix-vue'
import { computed, HTMLAttributes } from 'vue'
import type { InertiaLinkProps } from '@inertiajs/vue3'

const props = defineProps<DropdownMenuItemProps & InertiaLinkProps & {
  class?: HTMLAttributes['class']
  inset?: boolean
  as?: string
}>()

const delegatedProps = computed(() => {
  const { as: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>
