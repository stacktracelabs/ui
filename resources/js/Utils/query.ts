import queryString from "query-string";
import type { ParsedQuery } from 'query-string'

export function parseQuery(): ParsedQuery<string | number> {
  return queryString.parse(location.search, {
    arrayFormat: 'index',
    parseNumbers: true,
  })
}

export function formatQuery(query: ParsedQuery<string | number>) {
  return queryString.stringify(query, {
    arrayFormat: 'index',
  })
}

export function getValueFromQuery(param: string) {
  const parsed = parseQuery()

  if (param in parsed) {
    return parsed[param]
  }

  return null
}

export function urlWithQuery(query: ParsedQuery<string | number>): string {
  const base = window.location.href.split('?')[0]

  return Object.keys(query).length > 0 ? `${base}?${formatQuery(query)}` : base
}
