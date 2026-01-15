import { App } from 'vue';
import { Component } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { FlashData } from '@inertiajs/core';
import { GlobalEventParameters } from '@inertiajs/core';
import { MaybeRefOrGetter } from 'vue';
import { ParsedQuery } from 'query-string';
import { PrimitiveProps } from 'reka-ui';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { RequestPayload } from '@inertiajs/core';
import { VisitOptions } from '@inertiajs/core';
import { VNode } from 'vue';

declare const __VLS_component: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (...args: any[]) => void;
}, string, PublicProps, Readonly<Props> & Readonly<{
onClick?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare interface AsyncRouter {
    visit: (href: string | URL, options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel'>) => Promise<GlobalEventParameters<'success'>>;
    post: (url: URL | string, data?: RequestPayload, options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel' | 'method' | 'data'>) => Promise<GlobalEventParameters<'success'>>;
    patch: (url: URL | string, data?: RequestPayload, options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel' | 'method' | 'data'>) => Promise<GlobalEventParameters<'success'>>;
    delete: (url: URL | string, options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel' | 'method' | 'data'>) => Promise<GlobalEventParameters<'success'>>;
}

export declare const asyncRouter: AsyncRouter;

export declare type EventAction<Event = any> = (event?: Event) => void;

export declare type Filter<TFilter extends FilterData> = TFilter & FilterProps<TFilter>;

export declare type FilterData = object;

export declare interface FilterOptions {
    onSuccess: VoidFunction;
}

export declare interface FilterProps<TFilter extends FilterData> {
    data(): TFilter;
    reset(): void;
    applied: boolean;
    appliedOnly(keys: Array<keyof TFilter>): boolean;
}

export declare function formatQuery(query: ParsedQuery<string | number>): string;

export declare function getValueFromQuery(param: string): string | number | (string | number | null)[] | null;

export declare const Icon: DefineComponent<ExtractPropTypes<    {
src: {
type: StringConstructor;
required: true;
};
}>, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
src: {
type: StringConstructor;
required: true;
};
}>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare function isActivated(activation: Array<MenuItemActivation> | MenuItemActivation, currentPath: string, currentUrl: URL | null): boolean;

export declare function isEventAction(action: MenuItemAction): action is EventAction;

export declare function isLinkAction(action: MenuItemAction): action is LinkAction;

export declare function isLinkPathAction(action: MenuItemAction): action is LinkPathAction;

export declare function isRouteAction(action: MenuItemAction): action is RouteAction;

export declare type LinkAction = {
    url: string;
    external?: boolean;
    preserveScroll?: boolean;
    preserveState?: boolean;
    progress?: boolean;
};

export declare type LinkPathAction = {
    path: string;
    preserveScroll?: boolean;
    preserveState?: boolean;
    progress?: boolean;
};

export declare type Menu = Array<MenuItem>;

export declare interface MenuItem<Event = any> {
    title: string;
    action?: MenuItemAction<Event> | null;
    badge?: string | null;
    active?: Array<MenuItemActivation> | MenuItemActivation;
    icon?: MenuItemIcon | null;
    children?: Array<MenuItem>;
}

export declare type MenuItemAction<Event = any> = string | RouteAction | LinkAction | LinkPathAction | EventAction<Event>;

export declare type MenuItemActivation = LinkAction | RouteAction | LinkPathAction | (() => boolean);

export declare type MenuItemIcon = Component | SVGSource;

export declare type Navigation = Array<NavigationItem>;

export declare const NavigationButton: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare const NavigationButtonIcon: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare interface NavigationItem extends Omit<MenuItem, 'children'> {
    isActive: boolean;
    isChildActive: boolean;
    hasChildren: boolean;
    children?: Array<NavigationItem>;
}

export declare function onActivated(toggle: Toggle, callback: () => void): void;

export declare function onDeactivated(toggle: Toggle, callback: () => void): void;

export declare function parseQuery(): ParsedQuery<string | number>;

declare interface Props extends PrimitiveProps {
    item: NavigationItem;
}

export declare function registerNamespacedComponents(app: App, components: Record<string, DefineComponent>, namespace: string): void;

export declare type RouteAction = {
    route: string;
    params?: any;
    preserveScroll?: boolean;
    preserveState?: boolean;
    progress?: boolean;
};

export declare type SelectOption<V = string> = {
    label: string;
    value: V;
};

export declare interface SVGSource {
    src: string;
}

export declare interface Toggle {
    active: Ref<boolean>;
    activate: () => void;
    deactivate: () => void;
}

export declare function urlWithQuery(query: ParsedQuery<string | number>): string;

export declare function useActiveLink(link: MaybeRefOrGetter<MenuItemActivation>): ComputedRef<boolean>;

export declare function useFilter<TFilter extends FilterData>(state: TFilter | (() => TFilter), options?: Partial<FilterOptions>): Filter<TFilter>;

export declare function useFlash<T extends keyof FlashData>(key: T, callback: (value: NonNullable<FlashData[T]>) => void): void;

export declare function useNavigation(menu: MaybeRefOrGetter<Menu>): ComputedRef<Navigation>;

export declare function useToggle(initiallyActive?: boolean): Toggle;

export { }
