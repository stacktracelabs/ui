<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Button } from '@/Components/Button'
import { cn } from '@/Utils'
import { PanelLeft } from 'lucide-vue-next'
import { useSidebar } from './utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar"
  >
    <PanelLeft class="size-4" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
