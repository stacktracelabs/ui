<template>
  <BaseButton v-bind="forwardedProps" as-child>
    <Link :as="props.as || undefined">
      <slot />
    </Link>
  </BaseButton>
</template>

<script setup lang="ts">
import { type InertiaLinkProps } from '@inertiajs/vue3'
import type { ButtonProps } from '@/Components/Button'
import { useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<ButtonProps & InertiaLinkProps & {
  as?: string
}>()

const delegatedProps = computed(() => {
  const { as: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>
