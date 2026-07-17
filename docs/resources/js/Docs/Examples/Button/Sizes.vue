<template>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <Button size="xs">Extra small</Button>
    <Button size="sm">Small</Button>
    <Button>Default</Button>
    <Button size="lg">Large</Button>
    <Button size="icon-xs" aria-label="Add item"><PlusIcon /></Button>
    <Button size="icon-sm" aria-label="Add item"><PlusIcon /></Button>
    <Button size="icon" aria-label="Add item"><PlusIcon /></Button>
    <Button size="icon-lg" aria-label="Add item"><PlusIcon /></Button>
  </div>
</template>

<script setup lang="ts">
import { PlusIcon } from '@lucide/vue'
import { Button } from '@/Components/Base/Button'
</script>
