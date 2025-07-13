<template>
  <component
    :is="as"
    :as-child="action ? isLinkAction(action) : false"
    :tooltip="title || undefined"
    v-bind="$attrs"
  >
    <template v-if="action && isLinkAction(action)">
      <component :is="action.external ? 'a' : Link" :href="action.url">
        <template v-if="icon">
          <Icon v-if="'src' in icon" :src="icon.src" class="size-4" />
          <component v-else :is="icon" class="size-4" />
        </template>

        <span>{{ title }}</span>
        <SidebarMenuBadge v-if="badge">{{ badge }}</SidebarMenuBadge>
        <slot />
      </component>
    </template>
    <template v-else>
      <template v-if="icon">
        <Icon v-if="'src' in icon" :src="icon.src" class="size-4" />
        <component v-else :is="icon" class="size-4" />
      </template>
      <span>{{ title }}</span>
      <SidebarMenuBadge v-if="badge">{{ badge }}</SidebarMenuBadge>
      <slot />
    </template>
  </component>
</template>

<script setup lang="ts">
import SidebarMenuBadge from './SidebarMenuBadge.vue'
import { Link } from '@inertiajs/vue3'
import { computed, type Component } from 'vue'
import { type NavigationItem, Icon, isLinkAction } from '@stacktrace/ui'

const props = defineProps<{
  item: NavigationItem
  as: Component
}>()

const action = computed(() => props.item.action)
const title = computed(() => props.item.title)
const icon = computed(() => props.item.icon)
const badge = computed(() => props.item.badge)
</script>
