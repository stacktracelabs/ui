<template>
  <SidebarMenuItem>
    <component :is="button" :as-child="action ? action.type === 'link' : false" :is-active="item.isActive" :tooltip="title">
      <SidebarNavigationItemContent :item="item" />
    </component>
  </SidebarMenuItem>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type NavigationItem } from '.'
import SidebarMenuItem from './SidebarMenuItem.vue'
import SidebarMenuButton from './SidebarMenuButton.vue'
import SidebarMenuSubButton from './SidebarMenuSubButton.vue'
import SidebarNavigationItemContent from './SidebarNavigationItemContent.vue'

const props = withDefaults(defineProps<{
  item: NavigationItem
  sub?: boolean
}>(), {
  sub: false,
})

const button = computed(() => props.sub ? SidebarMenuSubButton : SidebarMenuButton)
const action = computed(() => props.item.menuItem.action)
const title = computed(() => props.item.menuItem.title)
</script>
