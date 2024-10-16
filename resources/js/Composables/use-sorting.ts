import { reactive, watch } from "vue";
import { parseQuery, urlWithQuery } from "@/Utils";
import { useDebounceFn } from "@vueuse/core";
import { router } from "@inertiajs/vue3";

export type SortDirection = 'asc' | 'desc'

export type SortingData = {
  column: string | null
  direction: SortDirection | null
}
export interface SortingProps {
  //
}
export type SortingForm = SortingData & SortingProps

export function useSorting(): SortingForm {
  const getInitialValue = () => {
    const query = parseQuery()

    return {
      column: query.sort_by || null,
      direction: query.sort_direction || null
    }
  }

  const initialValue = getInitialValue()

  const sorting = reactive({
    column: initialValue.column,
    direction: initialValue.direction,
  })

  const toUrl = () => {
    const query = parseQuery()

    if (sorting.column) {
      query.sort_by = sorting.column
    } else {
      delete query['sort_by']
    }

    if (sorting.direction) {
      query.sort_direction = sorting.direction
    } else {
      delete query['sort_direction']
    }

    return urlWithQuery(query)
  }

  let cancelToken: { cancel: () => void } | null = null

  const visit = useDebounceFn((url: string) => {
    if (cancelToken) {
      cancelToken.cancel()
      cancelToken = null
    }

    router.visit(url, {
      preserveState: true,
      preserveScroll: true,
      onCancelToken: (token) => {
        cancelToken = token
      },
      onSuccess: () => {
        //
      }
    })
  }, 50)

  watch(sorting, () => {
    const currentUrl = window.location.href
    const sortUrl = toUrl()

    if (currentUrl != sortUrl) {
      visit(sortUrl)
    }
  })

  return sorting as SortingForm
}
