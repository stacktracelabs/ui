<template>
  <DrawerRoot
    data-slot="drawer"
    v-bind="forwarded"
  >
    <slot />
  </DrawerRoot>
</template>

<script setup lang="ts">
import type { DrawerRootEmits, DrawerRootProps } from 'vaul-vue'
import type { ComputedRef } from 'vue'
import { useForwardPropsEmits } from 'reka-ui'
import { DrawerRoot } from 'vaul-vue'

const props = withDefaults(defineProps<DrawerRootProps>(), {
  shouldScaleBackground: true,
})

const emits = defineEmits<DrawerRootEmits>()

const forwarded = useForwardPropsEmits(props, emits) as ComputedRef<Record<string, unknown>>
</script>
