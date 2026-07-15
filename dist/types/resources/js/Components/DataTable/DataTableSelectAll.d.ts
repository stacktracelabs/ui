import { PrimitiveProps } from 'reka-ui';
export type DataTableSelectAllProps = PrimitiveProps;
export interface DataTableSelectAllSlotProps {
    selected: boolean;
    indeterminate: boolean;
    toggle: VoidFunction;
    totalCount: number;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<PrimitiveProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<PrimitiveProps> & Readonly<{}>, {
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableSelectAllSlotProps) => unknown;
}> & {
    default?: (props: DataTableSelectAllSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
