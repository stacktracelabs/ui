import { PrimitiveProps } from 'reka-ui';
import { DataTableCursorPaginationValue, DataTablePaginationValue } from './types';
export type DataTablePaginationProps = PrimitiveProps;
export interface DataTablePaginationSlotProps {
    pagination: DataTablePaginationValue | null;
    cursorPagination: DataTableCursorPaginationValue | null;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<PrimitiveProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<PrimitiveProps> & Readonly<{}>, {
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTablePaginationSlotProps) => unknown;
}> & {
    default?: (props: DataTablePaginationSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
