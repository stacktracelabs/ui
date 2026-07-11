<template>
  <ScrollArea class="h-64 w-72 rounded-md border">
    <div class="p-4">
      <h4 class="mb-4 text-sm font-medium">Release tags</h4>
      <div v-for="tag in tags" :key="tag" class="text-sm">
        {{ tag }}
        <Separator class="my-2" />
      </div>
    </div>
  </ScrollArea>
</template>

<script setup lang="ts">
import { ScrollArea } from '@/Components/Base/ScrollArea'
import { Separator } from '@/Components/Base/Separator'

const tags = Array.from({ length: 18 }, (_, index) => `v0.${18 - index}.0`)
</script>
