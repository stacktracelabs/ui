import { PrimitiveProps } from 'reka-ui';
import { DataTablePaginationValue } from './types';
export type DataTablePaginationStatusProps = PrimitiveProps;
export interface DataTablePaginationStatusSlotProps {
    currentPage: number;
    lastPage: number;
    total: number;
    pagination: DataTablePaginationValue;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<PrimitiveProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<PrimitiveProps> & Readonly<{}>, {
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTablePaginationStatusSlotProps) => unknown;
}> & {
    default?: (props: DataTablePaginationStatusSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
