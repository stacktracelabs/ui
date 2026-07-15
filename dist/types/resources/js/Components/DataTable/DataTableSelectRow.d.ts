import { PrimitiveProps } from 'reka-ui';
import { DataTableRowValue } from './types';
export interface DataTableSelectRowProps extends PrimitiveProps {
    row?: DataTableRowValue;
}
export interface DataTableSelectRowSlotProps {
    row: DataTableRowValue;
    selected: boolean;
    toggle: VoidFunction;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<DataTableSelectRowProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DataTableSelectRowProps> & Readonly<{}>, {
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableSelectRowSlotProps) => unknown;
}> & {
    default?: (props: DataTableSelectRowSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
