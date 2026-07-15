import { PrimitiveProps } from 'reka-ui';
import { DataTableCellValue } from './types';
export type DataTableFooterProps = PrimitiveProps;
export interface DataTableFooterSlotProps {
    cells: Array<DataTableCellValue | null>;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<PrimitiveProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<PrimitiveProps> & Readonly<{}>, {
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableFooterSlotProps) => unknown;
}> & {
    default?: (props: DataTableFooterSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
