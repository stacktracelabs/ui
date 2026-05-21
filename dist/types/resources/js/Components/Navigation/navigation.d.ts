import { NavigationItem } from '../../Composables';
import { ComputedRef, MaybeRefOrGetter } from 'vue';
export declare function provideNavigationItemContext(item: MaybeRefOrGetter<NavigationItem>): void;
export declare function injectNavigationItemContext(): ComputedRef<NavigationItem | null>;
