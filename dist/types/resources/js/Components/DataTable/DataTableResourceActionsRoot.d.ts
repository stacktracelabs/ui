import { PrimitiveProps } from 'reka-ui';
import { DataTableActionRunnerOptions } from './actions';
import { DataTableEventPayload, DataTableResourceActionsValue, DataTableResourceKey } from './types';
declare const _default: <ResourceKey extends DataTableResourceKey = DataTableResourceKey, ResourceValue = object, EventName extends string = string>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly onEvent?: ((payload: DataTableEventPayload<ResourceKey, EventName>) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, "onEvent"> & (PrimitiveProps & {
        value: DataTableResourceActionsValue<ResourceKey, ResourceValue, EventName>;
        forceMount?: boolean;
        actionEndpoint?: DataTableActionRunnerOptions["endpoint"];
    }) & Partial<{}>> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{
        controller: import('./actions').DataTableActionController<ResourceKey, EventName>;
    }>): void;
    attrs: any;
    slots: {
        default?(_: {
            value: DataTableResourceActionsValue<ResourceKey, ResourceValue, EventName>;
            resource: import('./types').DataTableResource<ResourceKey, ResourceValue>;
            actions: import('./types').DataTableAction<EventName>[];
            isRunning: boolean;
        }): any;
    };
    emit: (evt: "event", payload: DataTableEventPayload<ResourceKey, EventName>) => void;
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
