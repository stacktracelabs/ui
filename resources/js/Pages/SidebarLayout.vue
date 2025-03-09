<template>
  <SidebarProvider>
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarNavigation :navigation="navigation" />
      </SidebarContent>

      <SidebarFooter>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>

    <main>
      <SidebarTrigger />

      <slot />
    </main>
  </SidebarProvider>
</template>

<script setup lang="ts">
import {
  SidebarProvider, Sidebar, SidebarContent, SidebarTrigger, SidebarFooter, SidebarRail,
  createNavigation, SidebarNavigation
} from '@/Components/Sidebar'
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { type Menu } from '@/Components/Menu'
import { type PageProps } from '@/Types'

const page = usePage<PageProps & {
  menu: Menu
}>()

const navigation = createNavigation(computed(() => page.props.menu))
</script>
