<template>
  <DataTableFilters v-slot="{ filter, applied, reset }" as-child>
    <div
      :class="cn(
        'flex flex-row flex-wrap items-center gap-2',
        insetLeft || 'pl-2',
        insetRight || 'pr-2',
        borderless ? 'pb-4' : 'border-b py-2',
        props.class,
      )"
    >
      <slot :filter="filter" :applied="applied" :reset="reset">
        <DataTableFilterWidgets v-slot="{ widget, filter: widgetFilter }">
          <component :is="widget.component" v-bind="widget.props" :filter="widgetFilter" />
        </DataTableFilterWidgets>

        <Button v-if="applied" class="h-8" variant="ghost" @click="reset">
          {{ messages.resetFilters }}
          <XIcon class="ml-2 size-4" />
        </Button>
      </slot>
    </div>
  </DataTableFilters>
</template>

<script setup lang="ts">
import { DataTableFilters, DataTableFilterWidgets } from '@stacktrace/ui'
import { XIcon } from '@lucide/vue'
import type { HTMLAttributes } from 'vue'
import { Button } from '@/Components/Button'
import { cn } from '@/Utils'
import messages from './messages'

const props = defineProps<{
  borderless?: boolean
  insetLeft?: string
  insetRight?: string
  class?: HTMLAttributes['class']
}>()
</script>
