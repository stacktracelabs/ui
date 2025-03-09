<template>
  <template v-if="action && action.type === 'link'">
    <Link :href="action.link.url" :as="action.link.external ? 'a' : undefined">
      <Icon v-if="icon" :src="icon.src" class="size-4" />
      <span>{{ title }}</span>
      <SidebarMenuBadge v-if="badge">{{ badge }}</SidebarMenuBadge>
    </Link>
  </template>
  <template v-else>
    <Icon v-if="icon" :src="icon.src" class="size-4" />
    <span>{{ title }}</span>
    <SidebarMenuBadge v-if="badge">{{ badge }}</SidebarMenuBadge>
  </template>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'
import { type NavigationItem } from '@stacktrace/ui'
import { Icon } from '@/Components/Icon'
import SidebarMenuBadge from './SidebarMenuBadge.vue'

const props = defineProps<{
  item: NavigationItem
}>()

const action = computed(() => props.item.menuItem.action)
const title = computed(() => props.item.menuItem.title)
const icon = computed(() => props.item.menuItem.icon)
const badge = computed(() => props.item.menuItem.badge)
</script>
