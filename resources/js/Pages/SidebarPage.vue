<template>
  <p>{{ action || 'NONE' }}</p>
</template>

<script setup lang="ts">
import SidebarLayout from './SidebarLayout.vue'

defineOptions({
  layout: SidebarLayout,
})

const props = defineProps<{
  action: string | null
}>()
</script>
