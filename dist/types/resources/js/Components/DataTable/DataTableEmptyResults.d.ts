import { PrimitiveProps } from 'reka-ui';
import { DataTableValue } from './types';
export type DataTableEmptyResultsProps = PrimitiveProps;
export interface DataTableEmptyResultsSlotProps {
    table: DataTableValue;
    clear: VoidFunction;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<PrimitiveProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<PrimitiveProps> & Readonly<{}>, {
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableEmptyResultsSlotProps) => unknown;
}> & {
    default?: (props: DataTableEmptyResultsSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
