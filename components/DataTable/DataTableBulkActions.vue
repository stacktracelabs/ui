<template>
  <template v-if="showBulkActions">
    <DataTableBulkActions placement="inline">
      <DataTableActionButton bulk />
    </DataTableBulkActions>

    <DropdownMenu v-if="menuActions.length > 0">
      <DropdownMenuTrigger as-child>
        <Button size="sm">
          <ChevronDownIcon />
          {{ messages.actions }}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" class="min-w-48">
        <DataTableBulkActions placement="menu">
          <DataTableActionDropdownMenuItem />
        </DataTableBulkActions>
      </DropdownMenuContent>
    </DropdownMenu>
  </template>
</template>

<script setup lang="ts">
import { DataTableBulkActions, useDataTableContext } from '@stacktrace/ui'
import { ChevronDownIcon } from '@lucide/vue'
import { computed } from 'vue'
import { Button } from '@/Components/Button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/Components/DropdownMenu'
import DataTableActionButton from './DataTableActionButton.vue'
import DataTableActionDropdownMenuItem from './DataTableActionDropdownMenuItem.vue'
import messages from './messages'

const { showBulkActions, placedBulkActions } = useDataTableContext()
const menuActions = computed(() => placedBulkActions('menu'))
</script>
