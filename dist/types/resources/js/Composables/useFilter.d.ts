export type FilterData = object;
export interface FilterProps<TFilter extends FilterData> {
    data(): TFilter;
    reset(): void;
    applied: boolean;
    appliedOnly(keys: Array<keyof TFilter>): boolean;
}
export type Filter<TFilter extends FilterData> = TFilter & FilterProps<TFilter>;
export interface FilterOptions {
    onSuccess: VoidFunction;
}
export declare function useFilter<TFilter extends FilterData>(state: TFilter | (() => TFilter), options?: Partial<FilterOptions>): Filter<TFilter>;
