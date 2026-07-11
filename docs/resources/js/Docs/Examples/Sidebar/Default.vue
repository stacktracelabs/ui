<template>
  <SidebarProvider class="h-72 min-h-0 overflow-hidden rounded-lg border">
    <div class="w-64 bg-sidebar p-3 text-sidebar-foreground">
      <SidebarGroup>
        <SidebarGroupLabel>Workspace</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.label">
              <SidebarMenuButton :is-active="item.active">
                <component :is="item.icon" />
                <span>{{ item.label }}</span>
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
  { label: 'Overview', icon: LayoutDashboardIcon, active: true },
  { label: 'Documents', icon: FileTextIcon, active: false },
  { label: 'Settings', icon: SettingsIcon, active: false },
]
</script>
