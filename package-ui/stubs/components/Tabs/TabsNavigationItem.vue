<template>
  <component
    :is="action && action.type === 'link' ? ( action.link.external ? 'a' : Link ) : 'span'"
    :href="action && action.type === 'link' ? action.link.url : undefined"
    :data-state="item.isActive || item.isChildActive ? 'active' : 'inactive'"
    :class="
      cn(
        'inline-flex items-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
        !action ? 'pointer-events-none opacity-50' : '',
        props.class,
      )
    "
  >
    {{ item.item.title }}
  </component>
</template>

<script setup lang="ts">
import { cn } from '@/Utils'
import { type NavigationItem } from '@stacktrace/ui'
import { computed, type HTMLAttributes } from 'vue'
import { Link } from '@inertiajs/vue3'

const props = defineProps<{
  item: NavigationItem
  class?: HTMLAttributes['class']
}>()

const action = computed(() => props.item.item.action)
</script>
