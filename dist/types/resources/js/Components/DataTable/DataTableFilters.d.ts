import { PrimitiveProps } from 'reka-ui';
import { Filter } from '../../Composables/useFilter';
export type DataTableFiltersProps = PrimitiveProps;
export interface DataTableFiltersSlotProps {
    filter: Filter<Record<string, unknown>>;
    applied: boolean;
    reset: VoidFunction;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<PrimitiveProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<PrimitiveProps> & Readonly<{}>, {
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableFiltersSlotProps) => unknown;
}> & {
    default?: (props: DataTableFiltersSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
