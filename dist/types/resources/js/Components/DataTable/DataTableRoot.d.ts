import { PrimitiveProps } from 'reka-ui';
import { DataTableActionRunnerOptions } from './actions';
import { DataTableEventPayload, DataTableResourceKey, DataTableValue } from './types';
declare const _default: <ResourceValue = object, ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly onEvent?: ((payload: DataTableEventPayload<ResourceKey, EventName>) => any) | undefined;
        readonly "onUpdate:selection"?: ((selection: ResourceKey[]) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, "onEvent" | "onUpdate:selection"> & (PrimitiveProps & {
        table: DataTableValue<ResourceValue, ResourceKey, EventName>;
        /** Controlled selection. Omit to let the root own its selection state. */
        selection?: Array<ResourceKey>;
        defaultSelection?: Array<ResourceKey>;
        actionEndpoint?: DataTableActionRunnerOptions["endpoint"];
    }) & Partial<{}>> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{
        context: import('./context').DataTableContext<ResourceValue, ResourceKey, EventName>;
    }>): void;
    attrs: any;
    slots: {
        default?(_: {
            context: import('./context').DataTableContext<ResourceValue, ResourceKey, EventName>;
            selection: ResourceKey[];
        }): any;
    };
    emit: ((evt: "event", payload: DataTableEventPayload<ResourceKey, EventName>) => void) & ((evt: "update:selection", selection: ResourceKey[]) => void);
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
