import { ComputedRef, Ref } from 'vue';
import { DataTableAction, DataTableEventPayload, DataTableExecutableAction, DataTablePendingAction, DataTableResourceKey } from './types';
export interface DataTableActionRunOptions {
    onSuccess: VoidFunction;
    onError: VoidFunction;
    onFinish: VoidFunction;
}
export interface DataTableActionRunnerOptions {
    endpoint: string | (() => string);
}
export interface DataTableActionRunner<ResourceKey extends DataTableResourceKey = DataTableResourceKey> {
    isRunning: ComputedRef<boolean>;
    run: (action: DataTableExecutableAction, selection: Array<ResourceKey>, options?: Partial<DataTableActionRunOptions>) => void;
}
export declare function useDataTableActionRunner<ResourceKey extends DataTableResourceKey = DataTableResourceKey>(options?: Partial<DataTableActionRunnerOptions>): DataTableActionRunner<ResourceKey>;
export interface DataTableActionController<ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string> extends DataTableActionRunner<ResourceKey> {
    pendingAction: Ref<DataTablePendingAction<ResourceKey> | null>;
    runningAction: Ref<DataTablePendingAction<ResourceKey> | null>;
    isConfirmingAction: ComputedRef<boolean>;
    isActionRunning: (action: DataTableAction<EventName>, selection: Array<ResourceKey>) => boolean;
    activateAction: (action: DataTableAction<EventName>, selection: Array<ResourceKey>) => void;
    cancelAction: VoidFunction;
    confirmAction: VoidFunction;
}
export declare function useDataTableActionController<ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string>(emitEvent: (event: DataTableEventPayload<ResourceKey, EventName>) => void, runner?: DataTableActionRunner<ResourceKey>): DataTableActionController<ResourceKey, EventName>;
