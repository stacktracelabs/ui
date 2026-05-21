import { SVGSource } from '../Types';
import { MaybeRefOrGetter, Component, ComputedRef } from 'vue';
export type LinkAction = {
    url: string;
    external?: boolean;
    preserveScroll?: boolean;
    preserveState?: boolean;
    progress?: boolean;
};
export type RouteAction = {
    route: string;
    params?: any;
    preserveScroll?: boolean;
    preserveState?: boolean;
    progress?: boolean;
};
export type LinkPathAction = {
    path: string;
    preserveScroll?: boolean;
    preserveState?: boolean;
    progress?: boolean;
};
export type EventAction<Event = any> = (event?: Event) => void;
export type MenuItemAction<Event = any> = string | RouteAction | LinkAction | LinkPathAction | EventAction<Event>;
export type MenuItemActivation = LinkAction | RouteAction | LinkPathAction | (() => boolean);
export type MenuItemIcon = Component | SVGSource;
export interface MenuItem<Event = any> {
    title: string;
    action?: MenuItemAction<Event> | null;
    badge?: string | null;
    active?: Array<MenuItemActivation> | MenuItemActivation;
    icon?: MenuItemIcon | null;
    children?: Array<MenuItem>;
}
export interface NavigationItem extends Omit<MenuItem, 'children'> {
    isActive: boolean;
    isChildActive: boolean;
    hasChildren: boolean;
    hasBadge: boolean;
    hasChildBadge: boolean;
    children?: Array<NavigationItem>;
}
export type Navigation = Array<NavigationItem>;
export type Menu = Array<MenuItem>;
export declare function isRouteAction(action: MenuItemAction): action is RouteAction;
export declare function isLinkAction(action: MenuItemAction): action is LinkAction;
export declare function isLinkPathAction(action: MenuItemAction): action is LinkPathAction;
export declare function isEventAction(action: MenuItemAction): action is EventAction;
export declare function useActiveLink(link: MaybeRefOrGetter<MenuItemActivation>): ComputedRef<boolean>;
export declare function isActivated(activation: Array<MenuItemActivation> | MenuItemActivation, currentPath: string, currentUrl: URL | null): boolean;
export declare function useNavigation(menu: MaybeRefOrGetter<Menu>): ComputedRef<Navigation>;
