import { PrimitiveProps } from 'reka-ui';
import { DataTableCellValue } from './types';
export interface DataTableCellProps extends PrimitiveProps {
    cell: DataTableCellValue;
    index?: number;
}
export interface DataTableCellSlotProps {
    cell: DataTableCellValue;
    index: number;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<DataTableCellProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DataTableCellProps> & Readonly<{}>, {
    index: number;
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableCellSlotProps) => unknown;
}> & {
    default?: (props: DataTableCellSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
