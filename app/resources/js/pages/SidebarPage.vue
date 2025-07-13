<template>
  <div class="px-4">
    <h1 class="text-xl font-semibold">{{ action || 'Home' }}</h1>

    <TabsLinkList>
      <TabsLink href="/sidebar/actions">Actions</TabsLink>
      <TabsLink href="/sidebar/repository">Repository</TabsLink>
    </TabsLinkList>

    <TabsLinkList orientation="vertical" class="max-w-sm mt-4">
      <TabsLink href="/sidebar/actions">Actions</TabsLink>
      <TabsLink href="/sidebar/repository">Repository</TabsLink>
    </TabsLinkList>

    <TabsLinkList class="mt-4" variant="ghost">
      <TabsLink href="/sidebar/actions">Actions</TabsLink>
      <TabsLink href="/sidebar/repository">Repository</TabsLink>
    </TabsLinkList>

    <TabsLinkList orientation="vertical" class="max-w-sm mt-4" variant="ghost">
      <TabsLink href="/sidebar/actions">Actions</TabsLink>
      <TabsLink href="/sidebar/repository">Repository</TabsLink>
    </TabsLinkList>

    <Tabs class="mt-4" default-value="content">
      <TabsList>
        <TabsTrigger value="content">Content</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="content">content</TabsContent>
      <TabsContent value="preview">preview</TabsContent>
    </Tabs>

    <Tabs class="mt-4" default-value="content">
      <TabsList>
        <TabsTrigger value="content">Content</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="content">content</TabsContent>
      <TabsContent value="preview">preview</TabsContent>
    </Tabs>

    <TabsNavigation class="mt-4" :menu="tabs" />

    <TabsNavigation class="mt-4 max-w-sm" :menu="tabs" orientation="vertical" variant="ghost" />

    <div class="grid grid-cols-2 mt-4 gap-4">
      <Skeleton class="h-[400px] animate-none opacity-50" />
      <Skeleton class="h-[400px] animate-none opacity-50" />
    </div>

    <Skeleton class="h-[400px] mt-4 animate-none opacity-50" />
  </div>
</template>

<script setup lang="ts">
import SidebarLayout from './SidebarLayout.vue'
import { Skeleton } from '@/components/ui/skeleton'
import { TabsNavigation, TabsLinkList, TabsLink, Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import type { Menu } from '@stacktrace/ui'

defineOptions({
  layout: SidebarLayout,
})

defineProps<{
  action: string | null
  tabs: Menu
}>()
</script>
