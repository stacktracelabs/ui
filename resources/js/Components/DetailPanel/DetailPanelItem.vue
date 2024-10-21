<template>
  <div class="flex flex-row py-4">
    <div class="w-2/5 text-muted-foreground font-medium text-sm">
      {{ label }}
    </div>
    <div class="w-3/5 text-foreground font-medium text-sm">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
