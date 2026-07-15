import { PrimitiveProps } from 'reka-ui';
import { DataTableResourceKey } from './types';
export type DataTableSelectionStatusProps = PrimitiveProps;
export interface DataTableSelectionStatusSlotProps {
    selection: Array<DataTableResourceKey>;
    selectedCount: number;
    totalCount: number;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<PrimitiveProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<PrimitiveProps> & Readonly<{}>, {
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableSelectionStatusSlotProps) => unknown;
}> & {
    default?: (props: DataTableSelectionStatusSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
