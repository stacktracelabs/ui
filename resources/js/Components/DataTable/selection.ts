import { computed, toValue, watch, type ComputedRef, type MaybeRefOrGetter, type Ref } from 'vue'
import type { DataTableResourceKey } from './types'

export interface DataTableSelectionState<ResourceKey extends DataTableResourceKey = DataTableResourceKey> {
  selection: Ref<Array<ResourceKey>>
  availableRows: ComputedRef<Array<ResourceKey>>
  disabledRows: ComputedRef<Array<ResourceKey>>
  selectableRows: ComputedRef<Array<ResourceKey>>
  selectedCount: ComputedRef<number>
  totalCount: ComputedRef<number>
  somethingSelected: ComputedRef<boolean>
  everythingSelected: ComputedRef<boolean>
  clearSelection: () => void
  selectEverything: () => void
  toggleEverything: () => void
  toggleRow: (value: ResourceKey) => void
  isRowSelected: (value: ResourceKey) => boolean
  isRowDisabled: (value: ResourceKey) => boolean
  withSelection: (callback: (selection: Array<ResourceKey>) => void) => void
}

/**
 * Selection primitives shared by DataTableRoot and standalone consumers.
 * The writable selection ref may be backed by either controlled or local state.
 */
export function useDataTableSelection<ResourceKey extends DataTableResourceKey>(
  selection: Ref<Array<ResourceKey>>,
  available: MaybeRefOrGetter<Array<ResourceKey>>,
  disabled: MaybeRefOrGetter<Array<ResourceKey>> = () => [],
): DataTableSelectionState<ResourceKey> {
  const availableRows = computed(() => [...toValue(available)])
  const disabledRows = computed(() => [...toValue(disabled)])
  const selectableRows = computed(() => availableRows.value.filter(value => !disabledRows.value.includes(value)))

  const selectedCount = computed(() => selection.value.filter(value => selectableRows.value.includes(value)).length)
  const totalCount = computed(() => selectableRows.value.length)
  const somethingSelected = computed(() => selectedCount.value > 0)
  const everythingSelected = computed(() => totalCount.value > 0 && selectedCount.value === totalCount.value)

  const clearSelection = () => {
    selection.value = []
  }

  const selectEverything = () => {
    selection.value = [...selectableRows.value]
  }

  const toggleEverything = () => {
    if (everythingSelected.value) {
      clearSelection()
    } else {
      selectEverything()
    }
  }

  const isRowSelected = (value: ResourceKey) => selection.value.includes(value)
  const isRowDisabled = (value: ResourceKey) => disabledRows.value.includes(value)

  const toggleRow = (value: ResourceKey) => {
    if (isRowDisabled(value) || !availableRows.value.includes(value)) {
      return
    }

    if (isRowSelected(value)) {
      selection.value = selection.value.filter(selected => selected !== value)
    } else {
      selection.value = [...selection.value, value]
    }
  }

  const withSelection = (callback: (selected: Array<ResourceKey>) => void) => {
    if (somethingSelected.value) {
      callback([...selection.value])
    }
  }

  watch(availableRows, (current, previous) => {
    if (previous && (current.length !== previous.length || current.some((value, index) => value !== previous[index]))) {
      clearSelection()
    }
  })

  return {
    selection,
    availableRows,
    disabledRows,
    selectableRows,
    selectedCount,
    totalCount,
    somethingSelected,
    everythingSelected,
    clearSelection,
    selectEverything,
    toggleEverything,
    toggleRow,
    isRowSelected,
    isRowDisabled,
    withSelection,
  }
}

