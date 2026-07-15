<template>
  <DataTablePerPage>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline" size="sm">
          <SlidersHorizontalIcon class="mr-2 size-4" />
          {{ messages.viewOptions }}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{{ messages.perPage }}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DataTablePerPageOptions v-slot="{ option, selected, select }">
          <DropdownMenuCheckboxItem :model-value="selected" @select="select">
            {{ messages.perPageOption(option) }}
          </DropdownMenuCheckboxItem>
        </DataTablePerPageOptions>
      </DropdownMenuContent>
    </DropdownMenu>
  </DataTablePerPage>
</template>

<script setup lang="ts">
import {
  DataTablePerPage,
  DataTablePerPageOptions,
} from '@stacktrace/ui'
import { SlidersHorizontalIcon } from '@lucide/vue'
import { Button } from '@/Components/Button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/Components/DropdownMenu'
import messages from './messages'
</script>
