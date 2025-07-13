<template>
  <div class="px-4">
    <h1 class="text-xl font-semibold">{{ action || 'Home' }}</h1>

    <TabsNavigation class="mt-4" :menu="tabs" orientation="vertical" />

    <div class="grid grid-cols-2 mt-4 gap-4">
      <Skeleton class="h-[400px] animate-none" />
      <Skeleton class="h-[400px] animate-none" />
    </div>

    <Skeleton class="h-[400px] mt-4 animate-none" />
  </div>
</template>

<script setup lang="ts">
import SidebarLayout from './SidebarLayout.vue'
import { Skeleton } from '@/components/ui/skeleton'
import { TabsNavigation } from '@/components/ui/tabs'
import type { Menu } from '@stacktrace/ui'

defineOptions({
  layout: SidebarLayout,
})

defineProps<{
  action: string | null
  tabs: Menu
}>()
</script>
