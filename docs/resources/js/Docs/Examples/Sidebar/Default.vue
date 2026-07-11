<template>
  <SidebarProvider class="h-72 min-h-0 overflow-hidden rounded-lg border">
    <div class="w-64 bg-sidebar p-3 text-sidebar-foreground">
      <SidebarGroup>
        <SidebarGroupLabel>Workspace</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.label">
              <SidebarMenuButton as-child :is-active="item.active">
                <Link :href="item.href">
                  <component :is="item.icon" />
                  <span>{{ item.label }}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </div>
    <div class="flex flex-1 items-center justify-center bg-background text-sm text-muted-foreground">
      Main content
    </div>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { FileTextIcon, LayoutDashboardIcon, SettingsIcon } from '@lucide/vue'
import { Link } from '@inertiajs/vue3'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/Components/Base/Sidebar'

const items = [
  { label: 'Overview', href: '/docs', icon: LayoutDashboardIcon, active: true },
  { label: 'Documents', href: '/docs/components/card', icon: FileTextIcon, active: false },
  { label: 'Settings', href: '/docs/installation', icon: SettingsIcon, active: false },
]
</script>
