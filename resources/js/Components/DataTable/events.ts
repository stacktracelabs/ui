import type { DataTableEventPayload, DataTableResourceKey } from './types'

export type DataTableEventHandler<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> = (selection: Array<ResourceKey>, event: DataTableEventPayload<ResourceKey, EventName>) => void

export type DataTableEventHandlerMap<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> = Partial<Record<EventName, DataTableEventHandler<ResourceKey, EventName>>>

export interface DataTableEventListenerProps<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> {
  onEvent: (event: DataTableEventPayload<ResourceKey, EventName>) => void
}

/**
 * Create Vue listener props that dispatch DataTableRoot's single typed event
 * envelope to handlers named after backend Event actions.
 */
export function bindDataTableEvents<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
>(handlers: DataTableEventHandlerMap<ResourceKey, EventName>): DataTableEventListenerProps<ResourceKey, EventName> {
  return {
    onEvent(event): void {
      handlers[event.name]?.([...event.selection], event)
    },
  }
}
