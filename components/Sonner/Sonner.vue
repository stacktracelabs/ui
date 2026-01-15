<template>
  <Sonner
    class="toaster group"
    v-bind="props"
    :style="{
      '--normal-bg': 'var(--popover)',
      '--normal-text': 'var(--popover-foreground)',
      '--normal-border': 'var(--border)',

    }"
  />
</template>

<script lang="ts" setup>
import { toast, Toaster as Sonner, type ToasterProps } from 'vue-sonner'
import { useFlash } from '@stacktrace/ui'

const props = defineProps<ToasterProps>()

useFlash('toast', event => {
  toast(event.title, {
    description: event.content || undefined,
  })
})
</script>
