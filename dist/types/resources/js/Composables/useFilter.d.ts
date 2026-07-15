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
    /**
     * Query keys removed whenever this filter changes. Defaults to the
     * unqualified Laravel paginator keys for backwards compatibility.
     */
    resetQuery?: Array<string>;
}
export declare function useFilter<TFilter extends FilterData>(state: TFilter | (() => TFilter), options?: Partial<FilterOptions>): Filter<TFilter>;
