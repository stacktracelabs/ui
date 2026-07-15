import { DataTableCellValue } from './types';
export interface DataTableFooterCellsSlotProps {
    cell: DataTableCellValue | null;
    index: number;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, Readonly<{
    default?: (props: DataTableFooterCellsSlotProps) => unknown;
}> & {
    default?: (props: DataTableFooterCellsSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
