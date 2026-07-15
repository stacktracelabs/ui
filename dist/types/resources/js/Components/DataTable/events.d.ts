import { DataTableEventPayload, DataTableResourceKey } from './types';
export type DataTableEventHandler<ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string> = (selection: Array<ResourceKey>, event: DataTableEventPayload<ResourceKey, EventName>) => void;
export type DataTableEventHandlerMap<ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string> = Partial<Record<EventName, DataTableEventHandler<ResourceKey, EventName>>>;
/**
 * Adapt DataTableRoot's single typed event envelope to handlers named after
 * backend Event actions.
 */
export declare function bindDataTableEvents<ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string>(handlers: DataTableEventHandlerMap<ResourceKey, EventName>): (event: DataTableEventPayload<ResourceKey, EventName>) => void;
