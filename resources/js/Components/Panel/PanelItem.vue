<template>
  <div class="py-4">
    <div v-if="label" class="flex flex-col sm:flex-row">
      <div class="sm:w-2/5 text-muted-foreground font-medium text-sm">
        {{ label }}
      </div>
      <div class="mt-0.5 sm:mt-0 sm:w-3/5 text-foreground font-medium text-sm">
        <slot />
      </div>
    </div>

    <slot v-else />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string | undefined
}>()
</script>
