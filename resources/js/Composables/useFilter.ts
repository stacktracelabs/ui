import { reactive, watch } from "vue"
import isEqual from "lodash/isEqual"
import cloneDeep from "lodash/cloneDeep"
import type { ParsedQuery } from 'query-string'
import { router } from "@inertiajs/vue3"
import { useDebounceFn } from "@vueuse/core"
import { parseQuery, urlWithQuery } from "@/Utils"

const isEmptyArray = (value: any) => Array.isArray(value) && value.length === 0

const isSame = (first: any, second: any) => {
  // Empty string, undefined, false, null and empty array are considered to be same.
  if (second === '' || second === undefined || second === null || isEmptyArray(second) || second === false) {
    return first === '' || first === undefined || first === null || isEmptyArray(first) || first === false;
  }

  return isEqual(first, second)
}

export type FilterData = object
export interface FilterProps<TFilter extends FilterData> {
  data(): TFilter
  reset(): void
  applied: boolean
  appliedOnly(keys: Array<keyof TFilter>): boolean
}
export type Filter<TFilter extends FilterData> = TFilter & FilterProps<TFilter>

export interface FilterOptions {
  tableId?: string
  onSuccess: VoidFunction
}

const prefixParameter = (name: string, tableId?: string) => {
  if (!tableId) {
    return name
  }
  return `table_${tableId}_${name}`
}

const filterQueryByTableId = (query: ParsedQuery, tableId?: string) => {
  if (!tableId) {
    return query
  }

  const prefix = `table_${tableId}_`
  const filtered: ParsedQuery = {}

  Object.keys(query).forEach(key => {
    if (key.startsWith(prefix)) {
      const unprefixedKey = key.substring(prefix.length)
      filtered[unprefixedKey] = query[key]
    }
  })

  return filtered
}

export function useFilter<TFilter extends FilterData>(state: TFilter | (() => TFilter), options?: Partial<FilterOptions>): Filter<TFilter> {
  const defaults = typeof state === 'object' ? cloneDeep(state) : cloneDeep(state())
  const tableId = options?.tableId

  const getInitialValue = () => {
    const fullQuery = parseQuery() as ParsedQuery
    const query = filterQueryByTableId(fullQuery, tableId) as TFilter

    return (Object.keys(defaults) as Array<keyof TFilter>).reduce((carry, key) => {
      if (isSame(query[key], defaults[key]) || query[key] === undefined) {
        carry[key] = defaults[key]
      } else {
        carry[key] = query[key]
      }
      return carry
    }, {} as Partial<TFilter>) as TFilter
  }

  const isApplied = (value: TFilter) => (Object.keys(defaults) as Array<keyof TFilter>).some(key => ! isSame(value[key], defaults[key]))

  const initialValue = getInitialValue()

  const filter = reactive({
    ...initialValue,
    applied: isApplied(initialValue),
    appliedOnly(keys: Array<keyof TFilter>): boolean {
      const value = this.data()
      return keys.some(key => !isSame(value[key], defaults[key]))
    },
    data() {
      return (Object.keys(defaults) as Array<keyof TFilter>).reduce((carry, key) => {
        carry[key] = (this as TFilter)[key]
        return carry
      }, {} as Partial<TFilter>) as TFilter
    },
    reset() {
      (Object.keys(defaults) as Array<keyof TFilter>).forEach(key => {
        (this as TFilter)[key] = defaults[key]
      })
      this.applied = false
    },
  })

  const toUrl = (data: TFilter) => {
    const fullQuery = parseQuery() as ParsedQuery
    const query = tableId 
      ? fullQuery 
      : fullQuery as ParsedQuery & TFilter

    (Object.keys(data) as Array<keyof TFilter>).forEach(key => {
      const currentValue = data[key]
      const defaultValue = defaults[key]
      const prefixedKey = prefixParameter(key as string, tableId)

      if (isSame(currentValue, defaultValue) || !currentValue) {
        delete query[prefixedKey]
      } else {
        query[prefixedKey] = currentValue as any
      }
    });

    delete query[prefixParameter('page', tableId)]
    delete query[prefixParameter('cursor', tableId)]

    return urlWithQuery(query)
  }

  let cancelToken: { cancel: () => void } | null = null

  const visit = useDebounceFn((filterUrl: string) => {
    if (cancelToken) {
      cancelToken.cancel()
      cancelToken = null
    }

    router.visit(filterUrl, {
      preserveState: true,
      preserveScroll: true,
      onCancelToken: (token) => {
        cancelToken = token
      },
      onSuccess: () => {
        filter.applied = isApplied(filter.data())

        if (options?.onSuccess) {
          options.onSuccess()
        }
      }
    })
  }, 50)

  watch(filter, () => {
    const currentUrl = window.location.href
    const filterUrl = toUrl(filter.data())

    if (currentUrl != filterUrl) {
      filter.applied = isApplied(filter.data())

      visit(filterUrl)
    }
  })

  return filter as Filter<TFilter>
}
