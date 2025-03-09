<template>
  <SidebarMenuItem>
    <component :is="button" :as-child="action ? action.type === 'link' : false" :is-active="item.isActive">
      <SidebarNavigationItemContent :item="item" />
    </component>
  </SidebarMenuItem>
</template>

<script setup lang="ts">
import { type Component, computed } from 'vue'
import { type NavigationItem } from '.'
import { SidebarMenuItem, SidebarMenuButton, SidebarMenuSubButton } from '@/Components/Sidebar'
import SidebarNavigationItemContent from './SidebarNavigationItemContent.vue'

const props = withDefaults(defineProps<{
  item: NavigationItem
  sub?: boolean
}>(), {
  sub: false,
})

const button = computed(() => props.sub ? SidebarMenuSubButton : SidebarMenuButton)
const action = computed(() => props.item.menuItem.action)
</script>
