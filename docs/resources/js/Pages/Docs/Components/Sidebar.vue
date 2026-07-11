<template>
  <ComponentReferencePage
    title="Sidebar"
    description="A composable, responsive application sidebar with collapsible navigation."
    registry-name="sidebar"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Wrap the application sidebar and content with SidebarProvider. Compose groups and menu items inside SidebarContent, then use SidebarInset for the main layout. This repository also includes navigation helpers for backend-provided links."
    :features="['Off-canvas, icon-only, and non-collapsible modes.', 'Desktop and mobile state management.', 'Menus, groups, badges, actions, submenus, and skeletons.']"
    api="Sidebar exports provider, root, content regions, trigger, rail, groups, menus, navigation helpers, useSidebar, and SidebarProps."
    source-url="https://shadcn-vue.com/docs/components/sidebar"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Sidebar/Default.vue'
import exampleSource from '@/Docs/Examples/Sidebar/Default.vue?raw'
</script>
