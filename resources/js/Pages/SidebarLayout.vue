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
  SidebarProvider, Sidebar, SidebarContent, SidebarTrigger, SidebarFooter, SidebarRail
} from '@/Components/Sidebar'
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import SidebarNavigation from './SidebarNavigation.vue'
import { createNavigation, type Menu } from '.'
import { type PageProps } from '@/Types'

const page = usePage<PageProps & {
  menu: Menu
}>()

const navigation = createNavigation(computed(() => page.props.menu))
</script>
