import { DataTableRowValue } from './types';
export interface DataTableRowsSlotProps {
    row: DataTableRowValue;
    index: number;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, Readonly<{
    default?: (props: DataTableRowsSlotProps) => unknown;
}> & {
    default?: (props: DataTableRowsSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
