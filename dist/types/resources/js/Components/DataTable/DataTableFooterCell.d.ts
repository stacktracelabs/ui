import { PrimitiveProps } from 'reka-ui';
import { DataTableCellValue } from './types';
export interface DataTableFooterCellProps extends PrimitiveProps {
    cell?: DataTableCellValue | null;
    index?: number;
}
export interface DataTableFooterCellSlotProps {
    cell: DataTableCellValue | null;
    index: number;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<DataTableFooterCellProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DataTableFooterCellProps> & Readonly<{}>, {
    index: number;
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
    cell: DataTableCellValue | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableFooterCellSlotProps) => unknown;
}> & {
    default?: (props: DataTableFooterCellSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
