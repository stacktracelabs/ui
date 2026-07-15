import { Filter } from '../../Composables/useFilter';
import { DataTableFilterWidgetValue } from './types';
export interface DataTableFilterWidgetsSlotProps {
    widget: DataTableFilterWidgetValue;
    index: number;
    filter: Filter<Record<string, unknown>>;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, Readonly<{
    default?: (props: DataTableFilterWidgetsSlotProps) => unknown;
}> & {
    default?: (props: DataTableFilterWidgetsSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
