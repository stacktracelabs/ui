import { PrimitiveProps } from 'reka-ui';
export interface DataTableSortingProps extends PrimitiveProps {
    column?: string;
}
export interface DataTableSortingSlotProps {
    column: string;
    direction: 'asc' | 'desc' | null;
    isApplied: boolean;
    isAscending: boolean;
    toggle: VoidFunction;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<DataTableSortingProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DataTableSortingProps> & Readonly<{}>, {
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableSortingSlotProps) => unknown;
}> & {
    default?: (props: DataTableSortingSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
