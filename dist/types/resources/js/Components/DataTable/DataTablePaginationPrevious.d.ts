import { PrimitiveProps } from 'reka-ui';
import { DataTableCursorPaginationValue, DataTablePaginationValue } from './types';
export type DataTablePaginationPreviousProps = PrimitiveProps;
export interface DataTablePaginationPreviousSlotProps {
    href: string | null;
    disabled: boolean;
    pagination: DataTablePaginationValue | null;
    cursorPagination: DataTableCursorPaginationValue | null;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<PrimitiveProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<PrimitiveProps> & Readonly<{}>, {
    asChild: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTablePaginationPreviousSlotProps) => unknown;
}> & {
    default?: (props: DataTablePaginationPreviousSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
