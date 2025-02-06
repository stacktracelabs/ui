<template>
  <div>
    <DataTableProvider :context="context">
      <!-- Empty Table -->
      <template v-if="table.isEmpty">
        <div class="overflow-hidden flex items-center flex-col">
          <div class="flex flex-col max-w-sm items-center relative pt-14 pb-28">
            <EmptyPattern class="text-foreground/10 h-[520px] -translate-y-2/3 absolute" />

            <div class="w-16 h-16 rounded-full bg-muted text-foreground inline-flex items-center justify-center mb-8">
              <TableIcon class="w-6 h-6" />
            </div>

            <p class="font-semibold text-center">{{ emptyTableMessage || messages.emptyTableTitle }}</p>
            <p class="max-w-lg text-center text-muted-foreground text-sm mt-1">{{ emptyTableDescription || messages.emptyTableDescription }}</p>

            <slot name="empty-table" />
          </div>
        </div>
      </template>

      <!-- Data Table -->
      <template v-else>
        <div
          class="flex flex-row justify-between"
          :class="cn(insetLeft || 'pl-2', insetRight || 'pr-2', { 'border-b py-2': ! borderless, 'pb-3': borderless })"
        >
          <div class="inline-flex items-center gap-4">
            <slot name="search" />
            <template v-if="table.isSearchable">
              <div class="relative">
                <SearchIcon class="w-4 h-4 absolute left-2 top-2 text-muted-foreground" />
                <DebouncedInput :debounce="50" v-model="searchFilter.search" class="h-8 w-[250px] pl-8 pr-8" :placeholder="messages.searchPlaceholder" />
                <button v-if="searchFilter.applied" @click.prevent="searchFilter.reset()" class="absolute right-2 top-2.5 text-muted-foreground hover:text-destructive transition-colors">
                  <CircleXIcon class="w-3 h-3" />
                </button>
              </div>
            </template>
          </div>

          <div>
            <div class="flex flex-row items-center gap-2">
              <div v-if="somethingSelected" class="text-sm font-medium mr-4">{{ messages.selectedRows(selectableRows.selectedCount.value, selectableRows.totalCount.value) }}</div>

              <ActionRow bulk
                v-if="inlineBulkActions.length > 0"
                :actions="inlineBulkActions"
                :selection="selectableRows.selection.value"
                @event="onEvent($event, toRaw(selectableRows.selection.value))"
              />

              <DropdownMenu v-if="showBulkActions && bulkActions.length > 0">
                <DropdownMenuTrigger as-child>
                  <Button size="sm"><ChevronDownIcon class="w-4 h-4 mr-1" /> {{ messages.actions }}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <ActionList
                    :actions="bulkActions"
                    @event="onEvent($event, toRaw(selectableRows.selection.value))"
                    @exec="onExecAction($event, selectableRows.selection.value)"
                  />
                </DropdownMenuContent>
              </DropdownMenu>

              <Button v-if="somethingSelected" @click="selectableRows.clearSelection()" size="sm" variant="outline">
                <XIcon class="w-4 h-4 mr-1" />
                {{ messages.cancelSelection }}
              </Button>

              <slot name="actions" />

              <DropdownMenu v-if="hasPerPageSettings">
                <DropdownMenuTrigger as-child>
                  <Button variant="outline" size="sm"><SlidersHorizontalIcon class="w-4 h-4 mr-2" /> {{ messages.viewOptions }}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <template v-if="table.perPageOptions.length > 0">
                    <DropdownMenuLabel>{{ messages.perPage }}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      v-for="option in table.perPageOptions"
                      @select="setPerPage(option)"
                      :checked="`${paginationFilter.limit}` == `${option}` || (option == table.defaultPerPage && !paginationFilter.limit)"
                    >{{ messages.perPageOption(option) }}</DropdownMenuCheckboxItem>
                  </template>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div
          v-if="table.filter"
          class="flex flex-row flex-wrap gap-2 items-center"
          :class="cn(insetLeft || 'pl-2', insetRight || 'pr-2', { 'border-b py-2': ! borderless, 'pb-4': borderless })"
        >
          <template v-for="widget in table.filter.widgets">
            <component
              :is="widget.component"
              v-bind="widget.props"
              :filter="filter"
            />
          </template>

          <FilterResetButton :filter="filter" />
        </div>

        <template v-if="table.rows.length">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="w-10 text-center" :class="cn(insetLeft || '')">
                  <BulkSelect :disabled="! hasBulkActions" :selectable="selectableRows" />
                </TableHead>
                <template v-for="(heading, idx) in headings">
                  <TableHead
                    :class="cn({
                      'text-left': heading.align == 'left',
                      'text-center': heading.align == 'center',
                      'text-right': heading.align == 'right',
                      'whitespace-nowrap': heading.noWrap,
                      'px-0': !!heading.sortableAs,
                    }, !hasRowActions && idx + 1 == headings.length ? (insetRight || '') : '')"
                    :style="{
                      width: heading.width || undefined,
                      minWidth: heading.minWidth || undefined,
                      maxWidth: heading.maxWidth || undefined,
                    }"
                  >
                    <Sorting v-if="heading.sortableAs" :value="heading.sortableAs" v-model:column="sortFilter.sort_by" v-model:direction="sortFilter.sort_direction">{{ heading.name }}</Sorting>
                    <template v-else>{{ heading.name }}</template>
                  </TableHead>
                </template>
                <TableHead class="w-10" v-if="hasRowActions" :class="cn(insetRight || '')"/>
              </TableRow>
            </TableHeader>
            <TableBody>
              <SelectableTableRow v-for="row in rows" :class="cn(tableRowHighlightVariants({ highlight: row.highlightAs || 'default' }))" :value="row.key" v-model="selectableRows.selection.value" :disabled="! shouldShowCheckboxForRow(row)">
                <TableCell class="text-center" :class="cn(insetLeft || '')">
                  <RowSelect />
                </TableCell>

                <template v-for="(cell, idx) in row.cells">
                  <DataTableCell :cell="cell" :class="!hasRowActions && idx + 1 == row.cells.length ? (insetRight || '') : ''" />
                </template>
                <TableCell v-if="hasRowActions" class="py-0.5" :class="cn(insetRight || '')">
                  <div class="inline-flex flex-row gap-1">
                    <ActionRow
                      v-if="row.inlineActions.length > 0"
                      :actions="row.inlineActions"
                      :selection="[row.key]"
                      @event="onEvent($event, [row.key])"
                    />

                    <DropdownMenu v-if="row.actions.filter(it => it.canRun).length > 0">
                      <DropdownMenuTrigger as-child>
                        <Button variant="ghost" class="px-2 data-[state=open]:bg-muted" size="sm"><EllipsisIcon class="w-4 h-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <ActionList
                          :actions="row.actions"
                          @event="onEvent($event, [row.key])"
                          @exec="onExecAction($event, [row.key])"
                        />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </SelectableTableRow>
            </TableBody>
            <TableFooter v-if="table.footerCells.length > 0">
              <TableRow>
                <TableCell />
                <template v-for="cell in table.footerCells">
                  <DataTableCell v-if="cell" :cell="cell" />
                  <TableCell v-else />
                </template>
                <TableCell v-if="hasRowActions" />
              </TableRow>
            </TableFooter>
          </Table>

          <div v-if="table.pagination" class="border-t py-2 flex justify-between items-center w-full" :class="cn(insetLeft || 'pl-4', insetRight || 'pr-4')">
            <span class="pr-2 text-sm font-semibold"><span class="text-foreground/60 font-normal">{{ messages.paginatorTotal }}</span> {{ table.pagination.total }}</span>

            <div class="flex flex-row gap-2 items-center">
              <Button class="px-2" :as="table.pagination.firstPageUrl ? Link : undefined" :disabled="!table.pagination.firstPageUrl" :href="table.pagination.firstPageUrl || undefined" variant="outline">
                <ChevronsLeftIcon class="w-4 h-4" />
              </Button>
              <Button class="px-2" :as="table.pagination.prevPageUrl ? Link : undefined" :disabled="!table.pagination.prevPageUrl" :href="table.pagination.prevPageUrl || undefined" variant="outline">
                <ChevronLeftIcon class="w-4 h-4" />
              </Button>
              <span class="px-2 text-sm font-semibold">{{ table.pagination.currentPage }} <span class="text-foreground/60 font-normal">{{ messages.paginatorOf }}</span> {{ table.pagination.lastPage }}</span>
              <Button class="px-2" :as="table.pagination.nextPageUrl ? Link : undefined" :disabled="!table.pagination.nextPageUrl" :href="table.pagination.nextPageUrl || undefined" variant="outline">
                <ChevronRightIcon class="w-4 h-4" />
              </Button>
              <Button class="px-2" :as="table.pagination.lastPageUrl ? Link : undefined" :disabled="!table.pagination.lastPageUrl" :href="table.pagination.lastPageUrl || undefined" variant="outline">
                <ChevronsRightIcon class="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div v-else-if="table.cursorPagination" class="border-t py-2 flex justify-end items-center w-full" :class="cn(insetLeft || 'pl-4', insetRight || 'pr-4')">
            <div class="flex flex-row gap-2 items-center">
              <Button class="px-2 inline-flex gap-2" :as="table.cursorPagination.prevPageUrl ? Link : undefined" :disabled="!table.cursorPagination.prevPageUrl" :href="table.cursorPagination.prevPageUrl || undefined" variant="outline">
                <ChevronLeftIcon class="w-4 h-4" />
                {{ messages.paginatorPrevious }}
              </Button>
              <Button class="px-2 inline-flex gap-2" :as="table.cursorPagination.nextPageUrl ? Link : undefined" :disabled="!table.cursorPagination.nextPageUrl" :href="table.cursorPagination.nextPageUrl || undefined" variant="outline">
                {{ messages.paginatorNext }}
                <ChevronRightIcon class="w-4 h-4" />
              </Button>
            </div>
          </div>
        </template>

        <!-- No filter results -->
        <div v-else class="overflow-hidden flex items-center flex-col">
          <div class="flex flex-col max-w-sm items-center relative pt-12 pb-12">
            <EmptyPattern class="text-foreground/10 h-[520px] -translate-y-2/3 absolute" />

            <div class="w-16 h-16 rounded-full bg-muted text-foreground inline-flex items-center justify-center mb-8">
              <SearchIcon class="w-6 h-6" />
            </div>

            <p class="font-semibold text-center">{{ emptyResultsMessage || messages.searchEmptyTitle }}</p>
            <p class="max-w-lg text-center text-muted-foreground text-sm mt-1">{{ emptyResultsDescription || messages.searchEmptyDescription }}</p>

            <Button class="mt-6" @click="clearSearch"><XIcon class="w-4 h-4 mr-2" /> {{ messages.clearSearch }}</Button>

            <slot name="empty-results" />
          </div>
        </div>
      </template>

      <Dialog :control="execActionDialog">
        <DialogContent v-if="execAction && execActionSelection">
          <DialogHeader>
            <DialogTitle>{{ execAction.title }}</DialogTitle>
            <DialogDescription>{{ execAction.description }}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button @click="execActionDialog.deactivate" variant="outline">{{ execAction.cancelLabel }}</Button>
            <ActionButton :processing="execActionFormProcessing" @click="runExecAction(execAction, execActionSelection)" :variant="execAction.isDestructive ? 'destructive' : 'default'">{{ execAction.confirmLabel }}</ActionButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DataTableProvider>
  </div>
</template>

<script setup lang="ts">
import { DataTableValue, tableRowHighlightVariants } from "./";
import { createContext } from './internal'
import { DataTableCell } from '.'
import { computed, toRaw } from "vue";
import { cn } from "@/Utils";
import {
  EllipsisIcon,
  SlidersHorizontalIcon,
  ChevronDownIcon,
  ChevronsRightIcon,
  ChevronsLeftIcon,
  SearchIcon,
  CircleXIcon,
  XIcon,
  TableIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-vue-next'
import { Link } from "@inertiajs/vue3";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/Components/Dialog";
import { Button, ActionButton } from '@/Components/Button'
import { Table, TableBody, TableCell, TableRow, TableHead, SelectableTableRow, RowSelect, Sorting, TableHeader, TableFooter, BulkSelect } from '@/Components/Table'
import { DebouncedInput } from "@/Components/Input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/Components/DropdownMenu";
import ActionList from "./ActionList.vue";
import ActionRow from './ActionRow.vue'
import EmptyPattern from './EmptyPattern.vue'
import DataTableProvider from './DataTableProvider.vue'
import { FilterResetButton } from "@/Components/Filter";
import messages from './messages'

const emit = defineEmits()

const props = defineProps<{
  table: DataTableValue
  emptyTableMessage?: string | null | undefined
  emptyTableDescription?: string | null | undefined
  emptyResultsMessage?: string | null | undefined
  emptyResultsDescription?: string | null | undefined
  borderless?: boolean
  insetLeft?: string | undefined
  insetRight?: string | undefined
}>()

const context = createContext(computed(() => props.table))

const {
  rows,
  headings,

  clearSearch,
  searchFilter,
  filter,
  sortFilter,
  paginationFilter,
  setPerPage,
  hasPerPageSettings,

  shouldShowCheckboxForRow,
  selectableRows,
  somethingSelected,

  hasRowActions,
  hasBulkActions,
  showBulkActions,
  inlineBulkActions,
  bulkActions,

  execActionDialog,
  execAction,
  execActionFormProcessing,
  execActionSelection,
  runExecAction,
  onExecAction,
} = context

// Called when either row action or bulk action is triggered.
const onEvent = (name: string, selection: Array<number | string>) => {
  emit(name, selection)
}
</script>
