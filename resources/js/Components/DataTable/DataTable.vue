<template>
  <div>
    <!-- Empty Table -->
    <template v-if="table.isEmpty">
      <div class="overflow-hidden flex items-center flex-col">
        <div class="flex flex-col max-w-sm items-center relative pt-14 pb-28">
          <EmptyPattern class="text-foreground/10 h-[520px] -translate-y-2/3 absolute" />

          <div class="w-16 h-16 rounded-full bg-muted text-foreground inline-flex items-center justify-center mb-8">
            <TableIcon class="w-6 h-6" />
          </div>

          <p class="font-semibold text-center" v-if="emptyTableMessage">{{ emptyTableMessage }}</p>
          <p class="max-w-lg text-center text-muted-foreground text-sm mt-1" v-if="emptyTableDescription">{{ emptyTableDescription }}</p>

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
          <template v-if="table.isSearchable">
            <div class="relative">
              <SearchIcon class="w-4 h-4 absolute left-2 top-2 text-muted-foreground" />
              <DebouncedInput :debounce="50" v-model="searchFilter.search" class="h-8 w-[250px] pl-8 pr-8" placeholder="Search…" />
              <button v-if="searchFilter.applied" @click.prevent="searchFilter.reset()" class="absolute right-2 top-2.5 text-muted-foreground hover:text-destructive transition-colors">
                <CircleXIcon class="w-3 h-3" />
              </button>
            </div>
          </template>
        </div>

        <div>
          <div class="flex flex-row items-center gap-2">
            <div v-if="somethingSelected" class="text-sm font-medium mr-4">
              Selected {{ selectableRows.selectedCount.value }} of {{ selectableRows.totalCount.value }}
            </div>

            <DropdownMenu v-if="showBulkActions && bulkActions.length > 0">
              <DropdownMenuTrigger as-child>
                <Button size="sm"><ChevronDownIcon class="w-4 h-4 mr-1" /> Actions</Button>
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
              Cancel selection
            </Button>

            <DropdownMenu v-if="hasPerPageSettings">
              <DropdownMenuTrigger as-child>
                <Button variant="outline" size="sm"><SlidersHorizontalIcon class="w-4 h-4 mr-2" /> View options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <template v-if="table.perPageOptions.length > 0">
                  <DropdownMenuLabel>Per page</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                      v-for="option in table.perPageOptions"
                      @select="setPerPage(option)"
                      :checked="`${paginationFilter.limit}` == `${option}` || (option == table.defaultPerPage && !paginationFilter.limit)"
                  >{{ option }} results</DropdownMenuCheckboxItem>
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
            <SelectableTableRow v-for="row in rows" :value="row.key" v-model="selectableRows.selection.value" :disabled="! shouldShowCheckboxForRow(row)">
              <TableCell class="text-center" :class="cn(insetLeft || '')">
                <RowSelect />
              </TableCell>
              <template v-for="(cell, idx) in row.cells">
                <Primitive
                    :as="TableCell"
                    :as-child="cell.asChild"
                    :class="cn({
                      'text-left': cell.align == 'left',
                      'text-center': cell.align == 'center',
                      'text-right': cell.align == 'right',
                      'align-top': cell.verticalAlign == 'top',
                      'align-middle': cell.verticalAlign == 'middle',
                      'align-bottom': cell.verticalAlign == 'bottom',
                    }, !hasRowActions && idx + 1 == row.cells.length ? (insetRight || '') : '')"
                    :style="{
                      width: cell.width || undefined,
                      minWidth: cell.minWidth || undefined,
                      maxWidth: cell.maxWidth || undefined,
                    }"
                >
                  <component
                      :is="cell.component"
                      v-bind="cell.props"
                  />
                </Primitive>
              </template>
              <TableCell v-if="hasRowActions" class="py-1" :class="cn(insetRight || '')">
                <DropdownMenu v-if="row.actions.length > 0">
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
              </TableCell>
            </SelectableTableRow>
          </TableBody>
        </Table>

        <div v-if="table.pagination" class="border-t py-2 flex justify-between items-center w-full" :class="cn(insetLeft || 'pl-4', insetRight || 'pr-4')">
          <span class="pr-2 text-sm font-semibold"><span class="text-foreground/60 font-normal">Total</span> {{ table.pagination.total }}</span>

          <div class="flex flex-row gap-2 items-center">
            <Button class="px-2" :as="table.pagination.firstPageUrl ? Link : undefined" :disabled="!table.pagination.firstPageUrl" :href="table.pagination.firstPageUrl || undefined" variant="outline">
              <ChevronsLeftIcon class="w-4 h-4" />
            </Button>
            <Button class="px-2" :as="table.pagination.prevPageUrl ? Link : undefined" :disabled="!table.pagination.prevPageUrl" :href="table.pagination.prevPageUrl || undefined" variant="outline">
              <ChevronLeftIcon class="w-4 h-4" />
            </Button>
            <span class="px-2 text-sm font-semibold">{{ table.pagination.currentPage }} <span class="text-foreground/60 font-normal">of</span> {{ table.pagination.lastPage }}</span>
            <Button class="px-2" :as="table.pagination.nextPageUrl ? Link : undefined" :disabled="!table.pagination.nextPageUrl" :href="table.pagination.nextPageUrl || undefined" variant="outline">
              <ChevronRightIcon class="w-4 h-4" />
            </Button>
            <Button class="px-2" :as="table.pagination.lastPageUrl ? Link : undefined" :disabled="!table.pagination.lastPageUrl" :href="table.pagination.lastPageUrl || undefined" variant="outline">
              <ChevronsRightIcon class="w-4 h-4" />
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

          <p class="font-semibold text-center">{{ emptyResultsMessage || 'No records found.' }}</p>
          <p class="max-w-lg text-center text-muted-foreground text-sm mt-1">{{ emptyResultsDescription || 'Try to adjust your search criteria.' }}</p>

          <Button class="mt-6" @click="clearSearch"><XIcon class="w-4 h-4 mr-2" /> Clear Search</Button>

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
          <ActionButton :processing="execActionForm.processing" @click="runExecAction(execAction, execActionSelection)" :variant="execAction.isDestructive ? 'destructive' : 'default'">{{ execAction.confirmLabel }}</ActionButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import type { DataTableValue, DataTableRow, DataTableAction, ExecutableAction } from "./";
import { Primitive } from "radix-vue";
import { computed, ref, toRaw } from "vue";
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
import { onDeactivated, useFilter, useToggle } from "@stacktrace/ui";
import { router, useForm, usePage, Link } from "@inertiajs/vue3";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/Components/Dialog";
import { Button, ActionButton } from '@/Components/Button'
import { Table, TableBody, TableCell, TableRow, TableHead, SelectableTableRow, RowSelect, Sorting, TableHeader, BulkSelect, useSelectableRows } from '@/Components/Table'
import { DebouncedInput } from "@/Components/Input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/Components/DropdownMenu";
import ActionList from "./ActionList.vue";
import EmptyPattern from './EmptyPattern.vue'
import { FilterResetButton } from "@/Components/Filter";

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

const page = usePage()

const clearSearch = () => {
  router.visit(page.url.split('?')[0])
}

const searchFilter = useFilter(() => ({
  search: '',
}))

const filter = useFilter(() => props.table.filter?.defaultValue || {})

const sortFilter = useFilter(() => ({
  sort_by: null,
  sort_direction: null,
}))

const rows = computed(() => props.table.rows)
const headings = computed(() => props.table.headings)

const shouldShowCheckboxForRow = (row: DataTableRow) => row.actions.some(it => it.isBulk && it.canRun)

const selectableRows = useSelectableRows(
    computed(() => rows.value.map(it => it.key)),
    computed(() => rows.value.filter(row => !shouldShowCheckboxForRow(row)).map(it => it.key))
)
const somethingSelected = computed(() => selectableRows.somethingSelected.value)

// Determine whether some row with actions is in the table.
const hasRowActions = computed(() => props.table.rows.some(it => it.actions.filter(it => it.canRun).length > 0))

// Determine whether some row has bulk actions.
const hasBulkActions = computed(() => props.table.rows.some(it => it.actions.filter(it => it.canRun && it.isBulk).length > 0))

const showBulkActions = computed(() => somethingSelected.value)

const selectedRows = computed(() => props.table.rows.filter(row => selectableRows.selection.value.includes(row.key)))

const bulkActions = computed<Array<DataTableAction>>(() => {
  const actions: Record<string, DataTableAction> = {}

  selectedRows.value.flatMap(it => it.actions.filter(action => action.canRun && action.isBulk)).forEach(action => {
    if (!actions.hasOwnProperty(action.name)) {
      actions[action.name] = action
    }
  })

  return Object.keys(actions).map(it => actions[it])
})

const totalSelectable = computed(() => props.table.rows.filter(it => shouldShowCheckboxForRow(it)).length)

// Called when either row action or bulk action is triggered.
const onEvent = (name: string, selection: Array<number | string>) => {
  emit(name, selection)
}

const hasPerPageSettings = computed(() => props.table.pagination && props.table.perPageOptions.length > 0)

const paginationFilter = useFilter(() => ({
  limit: props.table.defaultPerPage,
}))

const setPerPage = (limit: number) => {
  paginationFilter.limit = limit
}

const execAction = ref<ExecutableAction>()
const execActionSelection = ref<Array<number | string>>()
const execActionDialog = useToggle()

const onExecAction = (action: ExecutableAction, selection: Array<number | string>) => {
  execAction.value = action
  execActionSelection.value = selection
  execActionDialog.activate()
}

onDeactivated(execActionDialog, () => {
  setTimeout(() => {
    execAction.value = undefined
    execActionSelection.value = undefined
  }, 300)
})

const execActionForm = useForm({})
const runExecAction = (action: ExecutableAction, selection: Array<number | string>) => {
  execActionForm.transform(() => ({
    selection: toRaw(selection),
    action: action.action,
  // @ts-ignore
  })).post(route('hub.actions.run'), {
    preserveScroll: true,
    onFinish: () => {
      execActionDialog.deactivate()
    }
  })
}
</script>
