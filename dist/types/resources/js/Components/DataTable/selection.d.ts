import { ComputedRef, MaybeRefOrGetter, Ref } from 'vue';
import { DataTableResourceKey } from './types';
export interface DataTableSelectionState<ResourceKey extends DataTableResourceKey = DataTableResourceKey> {
    selection: Ref<Array<ResourceKey>>;
    availableRows: ComputedRef<Array<ResourceKey>>;
    disabledRows: ComputedRef<Array<ResourceKey>>;
    selectableRows: ComputedRef<Array<ResourceKey>>;
    selectedCount: ComputedRef<number>;
    totalCount: ComputedRef<number>;
    somethingSelected: ComputedRef<boolean>;
    everythingSelected: ComputedRef<boolean>;
    clearSelection: () => void;
    selectEverything: () => void;
    toggleEverything: () => void;
    toggleRow: (value: ResourceKey) => void;
    isRowSelected: (value: ResourceKey) => boolean;
    isRowDisabled: (value: ResourceKey) => boolean;
    withSelection: (callback: (selection: Array<ResourceKey>) => void) => void;
}
/**
 * Selection primitives shared by DataTableRoot and standalone consumers.
 * The writable selection ref may be backed by either controlled or local state.
 */
export declare function useDataTableSelection<ResourceKey extends DataTableResourceKey>(selection: Ref<Array<ResourceKey>>, available: MaybeRefOrGetter<Array<ResourceKey>>, disabled?: MaybeRefOrGetter<Array<ResourceKey>>): DataTableSelectionState<ResourceKey>;
