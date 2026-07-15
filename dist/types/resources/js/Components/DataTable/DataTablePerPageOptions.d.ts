export interface DataTablePerPageOptionsProps {
}
export interface DataTablePerPageOptionsSlotProps {
    option: number;
    selected: boolean;
    select: VoidFunction;
    index: number;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<DataTablePerPageOptionsProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DataTablePerPageOptionsProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTablePerPageOptionsSlotProps) => unknown;
}> & {
    default?: (props: DataTablePerPageOptionsSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
