import { PrimitiveProps } from 'reka-ui';
import { DataTableRowValue } from './types';
export interface DataTableRowProps extends PrimitiveProps {
    row: DataTableRowValue;
    index?: number;
}
export interface DataTableRowSlotProps {
    row: DataTableRowValue;
    index: number;
    isSelectable: boolean;
    isSelected: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<DataTableRowProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DataTableRowProps> & Readonly<{}>, {
    index: number;
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableRowSlotProps) => unknown;
}> & {
    default?: (props: DataTableRowSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
