import { PrimitiveProps } from 'reka-ui';
import { DataTableHeadingValue } from './types';
export interface DataTableHeadingProps extends PrimitiveProps {
    heading: DataTableHeadingValue;
    index?: number;
}
export interface DataTableHeadingSlotProps {
    heading: DataTableHeadingValue;
    index: number;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<DataTableHeadingProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DataTableHeadingProps> & Readonly<{}>, {
    index: number;
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableHeadingSlotProps) => unknown;
}> & {
    default?: (props: DataTableHeadingSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
