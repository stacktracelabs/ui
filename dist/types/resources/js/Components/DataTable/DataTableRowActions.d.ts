import { DataTableAction as DataTableActionValue, DataTableActionPlacement, DataTableResourceKey, DataTableRowValue } from './types';
export interface DataTableRowActionsProps<ResourceKey extends DataTableResourceKey = DataTableResourceKey, ResourceValue = object, EventName extends string = string> {
    placement?: DataTableActionPlacement;
    row?: DataTableRowValue<ResourceKey, ResourceValue, EventName>;
}
export interface DataTableRowActionsSlotProps<ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string> {
    action: DataTableActionValue<EventName>;
    selection: Array<ResourceKey>;
    index: number;
}
declare const _default: <ResourceKey extends DataTableResourceKey = DataTableResourceKey, ResourceValue = object, EventName extends string = string>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, never> & DataTableRowActionsProps<ResourceKey, ResourceValue, EventName> & Partial<{}>> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Readonly<{
        default?: (props: DataTableRowActionsSlotProps<ResourceKey, EventName>) => unknown;
    }> & {
        default?: (props: DataTableRowActionsSlotProps<ResourceKey, EventName>) => unknown;
    };
    emit: {};
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
