import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { GlobalEventParameters } from '@inertiajs/core';
import { MaybeRefOrGetter } from 'vue';
import { ParsedQuery } from 'query-string';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { RequestPayload } from '@inertiajs/core';
import { VisitOptions } from '@inertiajs/core';
import { VNode } from 'vue';

export declare type Action = LinkAction;

export declare type ActivePath = string;

export declare type ActiveRoute = {
    name: string;
    params: any | null;
};

export declare interface AsyncRouter {
    visit: (href: string | URL, options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel'>) => Promise<GlobalEventParameters<'success'>>;
    post: (url: URL | string, data?: RequestPayload, options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel' | 'method' | 'data'>) => Promise<GlobalEventParameters<'success'>>;
    patch: (url: URL | string, data?: RequestPayload, options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel' | 'method' | 'data'>) => Promise<GlobalEventParameters<'success'>>;
    delete: (url: URL | string, options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel' | 'method' | 'data'>) => Promise<GlobalEventParameters<'success'>>;
}

export declare const asyncRouter: AsyncRouter;

export declare interface BreadcrumbNavigationItem {
    title: string;
    action: Action | null;
}

export declare type BreadcrumbNavigationList = Array<BreadcrumbNavigationItem>;

export declare type Filter<TFilter extends FilterData> = TFilter & FilterProps<TFilter>;

export declare type FilterData = object;

export declare interface FilterOptions {
    onSuccess: VoidFunction;
}

export declare interface FilterProps<TFilter extends FilterData> {
    data(): TFilter;
    reset(): void;
    applied: boolean;
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

export declare interface IconSource {
    src: string;
}

export declare interface Link {
    url: string;
    external: boolean;
}

export declare interface LinkAction {
    type: 'link';
    link: Link;
}

export declare interface Menu {
    items: Array<MenuItem>;
}

export declare interface MenuItem {
    title?: string | null;
    action?: Action | null;
    badge?: string | null;
    active?: Array<{
        type: 'route';
        route: ActiveRoute;
    } | {
        type: 'path';
        path: ActivePath;
    }>;
    icon?: IconSource | null;
    children?: Array<MenuItem>;
}

export declare type Navigation = Array<NavigationItem>;

export declare interface NavigationItem {
    isActive: boolean;
    isChildActive: boolean;
    hasChildren: boolean;
    item: Omit<MenuItem, 'children'>;
    children: Array<NavigationItem>;
}

export declare function onActivated(toggle: Toggle, callback: () => void): void;

export declare function onDeactivated(toggle: Toggle, callback: () => void): void;

export declare function parseQuery(): ParsedQuery<string | number>;

export declare function registerNamespacedComponents(app: App, components: Record<string, DefineComponent>, namespace: string): void;

export declare type SelectOption<T = {}, V = string> = {
    label: string;
    value: V;
} & T;

export declare interface Toggle {
    active: Ref<boolean>;
    activate: () => void;
    deactivate: () => void;
}

export declare function urlWithQuery(query: ParsedQuery<string | number>): string;

export declare function useFilter<TFilter extends FilterData>(state: TFilter | (() => TFilter), options?: Partial<FilterOptions>): Filter<TFilter>;

export declare function useNavigation(source: MaybeRefOrGetter<Menu>): ComputedRef<Navigation>;

export declare function useToggle(initiallyActive?: boolean): Toggle;

export { }
