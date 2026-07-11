<template>
  <ScrollArea class="w-full max-w-md whitespace-nowrap rounded-md border">
    <div class="flex w-max gap-4 p-4">
      <div
        v-for="project in projects"
        :key="project"
        class="w-40 rounded-md bg-muted p-4 text-sm font-medium"
      >
        {{ project }}
      </div>
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
</template>

<script setup lang="ts">
import { ScrollArea, ScrollBar } from '@/Components/Base/ScrollArea'

const projects = ['Storefront', 'Documentation', 'Design system', 'Admin']
</script>
