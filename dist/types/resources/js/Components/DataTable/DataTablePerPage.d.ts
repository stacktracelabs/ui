import { PrimitiveProps } from 'reka-ui';
export type DataTablePerPageProps = PrimitiveProps;
export interface DataTablePerPageSlotProps {
    modelValue: number;
    options: Array<number>;
    update: (value: number) => void;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<PrimitiveProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<PrimitiveProps> & Readonly<{}>, {
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTablePerPageSlotProps) => unknown;
}> & {
    default?: (props: DataTablePerPageSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
