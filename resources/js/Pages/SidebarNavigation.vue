<template>
  <SidebarGroup v-for="group in navigation">
    <SidebarGroupLabel v-if="group.menuGroup.title">{{ group.menuGroup.title }}</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <template v-for="groupOrItem in group.items">
            <template v-if="groupOrItem.type === 'group'">
              <Collapsible :default-open="groupOrItem.group.isActive" class="group/collapsible">
                <SidebarNavigationGroup :group="groupOrItem.group" />
              </Collapsible>
            </template>
            <template v-else-if="groupOrItem.type === 'item'">
              <SidebarNavigationItem :item="groupOrItem.item" />
            </template>
        </template>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>

<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/Components/Sidebar'
import { Collapsible } from '@/Components/Collapsible'
import SidebarNavigationItem from './SidebarNavigationItem.vue'
import SidebarNavigationGroup from './SidebarNavigationGroup.vue'
import { type Navigation } from '.'

defineProps<{
  navigation: Navigation
}>()
</script>
