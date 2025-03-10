<template>
  <SidebarMenuItem>
    <CollapsibleTrigger as-child>
      <SidebarMenuButton v-if="title" :tooltip="title">
        <Icon v-if="icon" v-bind="icon" class="size-4" />

        {{ title }}

        <ChevronRightIcon class="size-4 ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
      </SidebarMenuButton>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub v-if="items.length > 0">
        <template v-for="subItemOrGroup in items">
          <SidebarNavigationItem v-if="subItemOrGroup.type === 'item'" :item="subItemOrGroup.item" sub />
        </template>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</template>

<script setup lang="ts">
import SidebarMenuItem from './SidebarMenuItem.vue'
import SidebarMenuButton from './SidebarMenuButton.vue'
import SidebarMenuSub from './SidebarMenuSub.vue'
import SidebarNavigationItem from './SidebarNavigationItem.vue'
import { computed } from 'vue'
import { type NavigationGroup } from '@stacktrace/ui'
import { CollapsibleTrigger, CollapsibleContent } from '@/Components/Collapsible'
import { ChevronRightIcon } from 'lucide-vue-next'
import { Icon } from '@/Components/Icon'

const props = defineProps<{
  group: NavigationGroup
}>()

const title = computed(() => props.group.menuGroup.title)
const items = computed(() => props.group.items)
const icon = computed(() => props.group.menuGroup.icon)
</script>
