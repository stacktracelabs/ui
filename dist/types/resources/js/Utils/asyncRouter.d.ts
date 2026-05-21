import { VisitOptions, GlobalEventParameters, RequestPayload } from '@inertiajs/core';
export interface AsyncRouter {
    visit: (href: string | URL, options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel'>) => Promise<GlobalEventParameters<'success'>>;
    post: (url: URL | string, data?: RequestPayload, options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel' | 'method' | 'data'>) => Promise<GlobalEventParameters<'success'>>;
    patch: (url: URL | string, data?: RequestPayload, options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel' | 'method' | 'data'>) => Promise<GlobalEventParameters<'success'>>;
    delete: (url: URL | string, options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel' | 'method' | 'data'>) => Promise<GlobalEventParameters<'success'>>;
}
export declare const asyncRouter: AsyncRouter;
