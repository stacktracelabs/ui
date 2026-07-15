import { DataTableCellValue, DataTableRowValue } from './types';
export interface DataTableCellsSlotProps {
    cell: DataTableCellValue;
    index: number;
    row: DataTableRowValue;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, Readonly<{
    default?: (props: DataTableCellsSlotProps) => unknown;
}> & {
    default?: (props: DataTableCellsSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
