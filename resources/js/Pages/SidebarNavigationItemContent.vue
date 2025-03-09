<template>
  <template v-if="action && action.type === 'link'">
    <Link :href="action.link.url" :as="action.link.external ? 'a' : undefined">
      <span>{{ title }}</span>
    </Link>
  </template>
  <template v-else>
    <span>{{ title }}</span>
  </template>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'
import { type NavigationItem } from '.'

const props = defineProps<{
  item: NavigationItem
}>()

const action = computed(() => props.item.menuItem.action)
const title = computed(() => props.item.menuItem.title)
</script>
