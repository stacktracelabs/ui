<template>
  <div v-if="inlineActions.length > 0 || menuActions.length > 0" class="flex flex-row justify-end gap-1">
    <DataTableRowActions placement="inline">
      <DataTableActionButton />
    </DataTableRowActions>

    <DropdownMenu v-if="menuActions.length > 0">
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="px-2 data-[state=open]:bg-muted" size="sm">
          <EllipsisIcon class="size-4" />
          <span class="sr-only">{{ messages.actions }}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" class="min-w-48">
        <DataTableRowActions placement="menu">
          <DataTableActionDropdownMenuItem />
        </DataTableRowActions>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<script setup lang="ts">
import {
  DataTableRowActions,
  useDataTableContext,
  useDataTableRowContext,
} from '@stacktrace/ui'
import { EllipsisIcon } from '@lucide/vue'
import { computed } from 'vue'
import { Button } from '@/Components/Button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/Components/DropdownMenu'
import DataTableActionButton from './DataTableActionButton.vue'
import DataTableActionDropdownMenuItem from './DataTableActionDropdownMenuItem.vue'
import messages from './messages'

const { row } = useDataTableRowContext()
const { rowActions } = useDataTableContext()
const inlineActions = computed(() => rowActions(row, 'inline'))
const menuActions = computed(() => rowActions(row, 'menu'))
</script>
