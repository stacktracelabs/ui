<template>
  <Primitive v-bind="props">
    <slot />
  </Primitive>
</template>
<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'

const props = defineProps<PrimitiveProps>()
</script>
