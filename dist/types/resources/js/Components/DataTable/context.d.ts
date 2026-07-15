import { Component, ComputedRef, Ref, WritableComputedRef } from 'vue';
import { Filter } from '../../Composables/useFilter';
import { DataTableActionController, DataTableActionRunnerOptions } from './actions';
import { DataTableSelectionState } from './selection';
import { DataTableAction, DataTableActionPlacement, DataTableCellValue, DataTableEventPayload, DataTableFilterWidgetValue, DataTableHeadingValue, DataTableResourceActionsValue, DataTableResourceKey, DataTableRowValue, DataTableValue } from './types';
type AnyDataTableContext = DataTableContext<object, DataTableResourceKey, string>;
type AnyDataTableRowContext = DataTableRowContext<DataTableResourceKey, object, string>;
type AnyDataTableActionScopeContext = DataTableActionScopeContext<DataTableResourceKey, string>;
type AnyDataTableActionController = DataTableActionController<DataTableResourceKey, string>;
type AnyDataTableResourceActionsContext = DataTableResourceActionsContext<DataTableResourceKey, object, string>;
export interface DataTableHeadingContext {
    heading: ComputedRef<DataTableHeadingValue>;
}
export interface DataTableCellContext {
    cell: ComputedRef<DataTableCellValue>;
}
export interface DataTableFooterCellContext {
    cell: ComputedRef<DataTableCellValue | null>;
}
export interface DataTableFilterWidgetContext {
    widget: ComputedRef<DataTableFilterWidgetValue>;
}
declare const provideDataTableContext: (contextValue: AnyDataTableContext) => AnyDataTableContext;
declare const provideDataTableRowContext: (contextValue: AnyDataTableRowContext) => AnyDataTableRowContext;
declare const provideDataTableHeadingContext: (contextValue: DataTableHeadingContext) => DataTableHeadingContext;
declare const provideDataTableCellContext: (contextValue: DataTableCellContext) => DataTableCellContext;
declare const provideDataTableFooterCellContext: (contextValue: DataTableFooterCellContext) => DataTableFooterCellContext;
declare const provideDataTableFilterWidgetContext: (contextValue: DataTableFilterWidgetContext) => DataTableFilterWidgetContext;
declare const provideDataTableActionScopeContext: (contextValue: AnyDataTableActionScopeContext) => AnyDataTableActionScopeContext;
declare const provideDataTableActionController: (contextValue: AnyDataTableActionController) => AnyDataTableActionController;
declare const provideDataTableResourceActionsContext: (contextValue: AnyDataTableResourceActionsContext) => AnyDataTableResourceActionsContext;
export declare const useDataTableContext: <ResourceValue = object, ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string>() => DataTableContext<ResourceValue, ResourceKey, EventName>;
export declare const useDataTableRowContext: <ResourceKey extends DataTableResourceKey = DataTableResourceKey, ResourceValue = object, EventName extends string = string>() => DataTableRowContext<ResourceKey, ResourceValue, EventName>;
export declare const useDataTableHeadingContext: () => DataTableHeadingContext;
export declare const useDataTableCellContext: () => DataTableCellContext;
export declare const useDataTableFooterCellContext: () => DataTableFooterCellContext;
export declare const useDataTableFilterWidgetContext: () => DataTableFilterWidgetContext;
export declare const useDataTableActionScopeContext: <ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string>() => DataTableActionScopeContext<ResourceKey, EventName>;
export declare const useDataTableActionControllerContext: <ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string>() => DataTableActionController<ResourceKey, EventName>;
export declare const useDataTableResourceActionsContext: <ResourceKey extends DataTableResourceKey = DataTableResourceKey, ResourceValue = object, EventName extends string = string>() => DataTableResourceActionsContext<ResourceKey, ResourceValue, EventName>;
export { provideDataTableContext, provideDataTableRowContext, provideDataTableHeadingContext, provideDataTableCellContext, provideDataTableFooterCellContext, provideDataTableFilterWidgetContext, provideDataTableActionScopeContext, provideDataTableActionController, provideDataTableResourceActionsContext, };
export declare function qualifyDataTableQueryKey(prefix: string | null | undefined, key: string): string;
export declare function configureDataTableStyle<T extends Record<string, string | null>>(style: T, mapping: Record<keyof T, Record<string, string>>): string;
export interface DataTableRowContext<ResourceKey extends DataTableResourceKey = DataTableResourceKey, ResourceValue = object, EventName extends string = string> {
    row: DataTableRowValue<ResourceKey, ResourceValue, EventName>;
    index: number;
    isSelectable: ComputedRef<boolean>;
    isSelected: ComputedRef<boolean>;
}
export interface DataTableActionScopeContext<ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string> {
    action: DataTableAction<EventName>;
    selection: Array<ResourceKey>;
    index: number;
}
export interface DataTableResourceActionsContext<ResourceKey extends DataTableResourceKey = DataTableResourceKey, ResourceValue = object, EventName extends string = string> {
    value: ComputedRef<DataTableResourceActionsValue<ResourceKey, ResourceValue, EventName>>;
    runnableActions: ComputedRef<Array<DataTableAction<EventName>>>;
}
export interface DataTableContext<ResourceValue = object, ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string> extends DataTableActionController<ResourceKey, EventName> {
    table: ComputedRef<DataTableValue<ResourceValue, ResourceKey, EventName>>;
    rows: ComputedRef<Array<DataTableRowValue<ResourceKey, ResourceValue, EventName>>>;
    headings: ComputedRef<Array<DataTableHeadingValue>>;
    selectionState: DataTableSelectionState<ResourceKey>;
    selectedRows: ComputedRef<Array<DataTableRowValue<ResourceKey, ResourceValue, EventName>>>;
    bulkActions: ComputedRef<Array<DataTableAction<EventName>>>;
    hasRowActions: ComputedRef<boolean>;
    hasBulkActions: ComputedRef<boolean>;
    showBulkActions: ComputedRef<boolean>;
    isContentApplicable: ComputedRef<boolean>;
    isEmptyTableApplicable: ComputedRef<boolean>;
    isEmptyResultsApplicable: ComputedRef<boolean>;
    isSearchApplicable: ComputedRef<boolean>;
    isFiltersApplicable: ComputedRef<boolean>;
    isFooterApplicable: ComputedRef<boolean>;
    isPaginationApplicable: ComputedRef<boolean>;
    hasPerPageSettings: ComputedRef<boolean>;
    searchFilter: Filter<Record<string, unknown>>;
    filter: Filter<Record<string, unknown>>;
    sortFilter: Filter<Record<string, unknown>>;
    paginationFilter: Filter<Record<string, unknown>>;
    search: WritableComputedRef<string>;
    sortBy: WritableComputedRef<string | null>;
    sortDirection: WritableComputedRef<'asc' | 'desc' | null>;
    perPage: WritableComputedRef<number>;
    clearSearch: VoidFunction;
    setPerPage: (limit: number) => void;
    toggleSorting: (column: string) => void;
    isRowSelectable: (row: DataTableRowValue<ResourceKey, ResourceValue, EventName>) => boolean;
    rowActions: (row: DataTableRowValue<ResourceKey, ResourceValue, EventName>, placement?: DataTableActionPlacement) => Array<DataTableAction<EventName>>;
    placedBulkActions: (placement?: DataTableActionPlacement) => Array<DataTableAction<EventName>>;
    queryKey: (key: string) => string;
    internalLinkComponent: Component;
}
export declare function createDataTableContext<ResourceValue = object, ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string>(table: ComputedRef<DataTableValue<ResourceValue, ResourceKey, EventName>>, selection: Ref<Array<ResourceKey>>, emitEvent: (event: DataTableEventPayload<ResourceKey, EventName>) => void, actionRunnerOptions?: Partial<DataTableActionRunnerOptions>): DataTableContext<ResourceValue, ResourceKey, EventName>;
