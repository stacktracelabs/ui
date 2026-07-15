<template>
  <DataTableFilters v-bind="$attrs">
    <slot />
  </DataTableFilters>
</template>

<script setup lang="ts">
import DataTableFilters from './DataTableFilters.vue'
</script>
