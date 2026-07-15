import { mount } from '@vue/test-utils'
import { router as inertiaRouter } from '@inertiajs/vue3'
import { h, nextTick } from 'vue'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  DataTableEmptyResults,
  DataTableRoot,
  type DataTableContext,
  type DataTableEmptyResultsSlotProps,
} from '@/Components/DataTable'
import { tableValue } from './fixtures'

const getContext = (wrapper: ReturnType<typeof mount>) =>
  (wrapper.vm as unknown as { context: DataTableContext<object, number> }).context

const visitedQuery = () => {
  const target = vi.mocked(inertiaRouter.visit).mock.calls.at(-1)?.[0] as string
  return new URL(target, window.location.href).searchParams
}

afterEach(() => {
  vi.useRealTimers()
})

describe('DataTable query isolation', () => {
  it('qualifies table controls and resets only this table page/cursor keys', async () => {
    vi.useFakeTimers()
    window.history.replaceState({}, '', '/customers?orders_search=old&orders_page=3&orders_cursor=abc&customers_page=4&customers_search=jane&tab=active')

    const wrapper = mount(DataTableRoot, {
      props: {
        table: tableValue({
          queryPrefix: 'orders_',
          filter: {
            defaultValue: { orders_status: null },
            widgets: [],
          },
        }),
      },
    })
    const context = getContext(wrapper)

    expect(context.queryKey('search')).toBe('orders_search')
    expect(context.sortFilter.data()).toEqual({
      orders_sort_by: null,
      orders_sort_direction: null,
    })
    expect(context.paginationFilter.data()).toEqual({ orders_limit: 10 })

    context.search.value = 'new order'
    await nextTick()
    await vi.advanceTimersByTimeAsync(60)

    const query = visitedQuery()
    expect(query.get('orders_search')).toBe('new order')
    expect(query.has('orders_page')).toBe(false)
    expect(query.has('orders_cursor')).toBe(false)
    expect(query.get('customers_page')).toBe('4')
    expect(query.get('customers_search')).toBe('jane')
    expect(query.get('tab')).toBe('active')
  })

  it('clears only the qualified search while preserving unrelated query state', async () => {
    vi.useFakeTimers()
    window.history.replaceState({}, '', '/customers?orders_search=old&orders_page=3&customers_page=4&customers_search=jane&tab=active')

    const wrapper = mount(DataTableRoot, {
      props: { table: tableValue({ queryPrefix: 'orders_' }) },
    })
    const context = getContext(wrapper)

    context.clearSearch()
    await nextTick()
    await vi.advanceTimersByTimeAsync(60)

    const query = visitedQuery()
    expect(query.has('orders_search')).toBe(false)
    expect(query.has('orders_page')).toBe(false)
    expect(query.get('customers_page')).toBe('4')
    expect(query.get('customers_search')).toBe('jane')
    expect(query.get('tab')).toBe('active')
  })

  it('resets filters from the contextual empty-results clear action', async () => {
    vi.useFakeTimers()
    window.history.replaceState({}, '', '/customers?employees=lt%3A0&page=3&tab=active')

    const wrapper = mount(DataTableRoot, {
      props: {
        table: tableValue({
          rows: [],
          filter: {
            defaultValue: { employees: null },
            widgets: [],
          },
        }),
      },
      slots: {
        default: () => h(DataTableEmptyResults, { as: 'div' }, {
          default: ({ clear, searchApplied, filtersApplied }: DataTableEmptyResultsSlotProps) =>
            h('button', {
              'data-test': 'clear-empty-results',
              onClick: clear,
            }, `${searchApplied}:${filtersApplied}`),
        }),
      },
    })

    expect(wrapper.get('[data-test="clear-empty-results"]').text()).toBe('false:true')

    await wrapper.get('[data-test="clear-empty-results"]').trigger('click')
    await nextTick()
    await vi.advanceTimersByTimeAsync(60)

    const query = visitedQuery()
    expect(query.has('employees')).toBe(false)
    expect(query.has('page')).toBe(false)
    expect(query.get('tab')).toBe('active')
  })

  it('supports a destructured filter reset and preserves unrelated query state', async () => {
    vi.useFakeTimers()
    window.history.replaceState({}, '', '/customers?orders_status=active&orders_owner=me&orders_page=3&orders_cursor=abc&customers_status=active&tab=archived')

    const wrapper = mount(DataTableRoot, {
      props: {
        table: tableValue({
          queryPrefix: 'orders_',
          filter: {
            defaultValue: {
              orders_status: null,
              orders_owner: null,
            },
            widgets: [],
          },
        }),
      },
    })
    const context = getContext(wrapper)
    const { reset } = context.filter

    expect(context.filter.applied).toBe(true)
    expect(() => reset()).not.toThrow()
    await nextTick()
    await vi.advanceTimersByTimeAsync(60)

    const query = visitedQuery()
    expect(query.has('orders_status')).toBe(false)
    expect(query.has('orders_owner')).toBe(false)
    expect(query.has('orders_page')).toBe(false)
    expect(query.has('orders_cursor')).toBe(false)
    expect(query.get('customers_status')).toBe('active')
    expect(query.get('tab')).toBe('archived')
  })
})
