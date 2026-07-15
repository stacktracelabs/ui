import { PrimitiveProps } from 'reka-ui';
import { Filter } from '../../Composables/useFilter';
import { DataTableFilterWidgetValue } from './types';
export interface DataTableFilterWidgetProps extends PrimitiveProps {
    widget: DataTableFilterWidgetValue;
    index?: number;
}
export interface DataTableFilterWidgetSlotProps {
    widget: DataTableFilterWidgetValue;
    index: number;
    filter: Filter<Record<string, unknown>>;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<DataTableFilterWidgetProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DataTableFilterWidgetProps> & Readonly<{}>, {
    index: number;
    asChild: boolean;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Readonly<{
    default?: (props: DataTableFilterWidgetSlotProps) => unknown;
}> & {
    default?: (props: DataTableFilterWidgetSlotProps) => unknown;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
