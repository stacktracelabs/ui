import { PrimitiveProps } from 'reka-ui';
import { DataTableResourceKey } from './types';
export type DataTableClearSelectionProps = PrimitiveProps;
export interface DataTableClearSelectionSlotProps {
    selection: Array<DataTableResourceKey>;
    clear: VoidFunction;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<PrimitiveProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<PrimitiveProps> & Readonly<{}>, {
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableClearSelectionSlotProps) => unknown;
}> & {
    default?: (props: DataTableClearSelectionSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
