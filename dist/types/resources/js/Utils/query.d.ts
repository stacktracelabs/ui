import { ParsedQuery } from 'query-string';
export declare function parseQuery(): ParsedQuery<string | number>;
export declare function formatQuery(query: ParsedQuery<string | number>): string;
export declare function getValueFromQuery(param: string): string | number | (string | number | null)[] | null | undefined;
export declare function urlWithQuery(query: ParsedQuery<string | number>): string;
