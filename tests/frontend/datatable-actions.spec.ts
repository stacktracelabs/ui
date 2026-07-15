import { mount } from '@vue/test-utils'
import { router as inertiaRouter } from '@inertiajs/vue3'
import { h, nextTick } from 'vue'
import { describe, expect, it, vi } from 'vitest'
import {
  bindDataTableEvents,
  DataTableActionActivation,
  DataTableActionConfirmation,
  DataTableBulkActions,
  DataTableResourceActions,
  DataTableResourceActionsRoot,
  DataTableRoot,
  DataTableRowActions,
  DataTableRows,
  useDataTableActionController,
  type DataTableAction,
  type DataTableEventPayload,
} from '@/Components/DataTable'
import { executableAction, row, tableValue } from './fixtures'

const mountAction = (action: DataTableAction) => mount(DataTableRoot, {
  props: { table: tableValue({ rows: [row(1, [action])] }) },
  slots: {
    default: () => [
      h(DataTableRows, null, {
        default: () => h(DataTableRowActions, { placement: 'all' }, {
          default: () => h(DataTableActionActivation, { 'data-test': 'activate' }),
        }),
      }),
      h(DataTableActionConfirmation, { as: 'section', 'data-test': 'confirmation' }, {
        default: ({ action: pending, confirm, cancel, isRunning }: any) => [
          h('span', pending.name),
          h('button', { 'data-test': 'confirm', disabled: isRunning, onClick: confirm }, 'Confirm'),
          h('button', { 'data-test': 'cancel', onClick: cancel }, 'Cancel'),
        ],
      }),
    ],
  },
})

const renderActivation = () => h(DataTableActionActivation, { 'data-test': 'activate' }, {
  default: ({ isRunning }: any) => isRunning ? 'Running' : 'Idle',
})

const renderConfirmation = () => h(DataTableActionConfirmation, { as: 'section', 'data-test': 'confirmation' }, {
  default: ({ action: pending, confirm, cancel, isRunning }: any) => [
    h('span', pending.name),
    h('button', { 'data-test': 'confirm', disabled: isRunning, onClick: confirm }, 'Confirm'),
    h('button', { 'data-test': 'cancel', onClick: cancel }, 'Cancel'),
  ],
})

const mountConfirmableAction = (composition: 'row' | 'bulk' | 'resource') => {
  const action = executableAction({ isInline: false, confirmable: true })

  if (composition === 'resource') {
    return mount(DataTableResourceActionsRoot, {
      props: {
        value: {
          actions: [action],
          resource: { key: 1, value: null },
        },
      },
      slots: {
        default: () => [
          h(DataTableResourceActions, { placement: 'menu' }, { default: renderActivation }),
          renderConfirmation(),
        ],
      },
    })
  }

  return mount(DataTableRoot, {
    props: {
      table: tableValue({ rows: [row(1, [action])] }),
      defaultSelection: composition === 'bulk' ? [1] : [],
    },
    slots: {
      default: () => [
        composition === 'bulk'
          ? h(DataTableBulkActions, { placement: 'menu' }, { default: renderActivation })
          : h(DataTableRows, null, {
              default: () => h(DataTableRowActions, { placement: 'menu' }, { default: renderActivation }),
            }),
        renderConfirmation(),
      ],
    },
  })
}

describe('DataTable actions and events', () => {
  it('binds the single event envelope to a backend-named handler', () => {
    const handler = vi.fn()
    const eventProps = bindDataTableEvents<number, 'update-plan'>({
      'update-plan': handler,
    })
    const event = {
      name: 'update-plan',
      selection: [4, 7],
      action: {
        type: 'Event',
        event: 'update-plan',
        name: 'update-plan',
        label: 'Update',
        canRun: true,
        isBulk: true,
        icon: null,
        isInline: true,
      },
    } satisfies DataTableEventPayload<number, 'update-plan'>

    eventProps.onEvent(event)

    expect(handler).toHaveBeenCalledWith([4, 7], event)
    expect(Object.keys(eventProps)).toEqual(['onEvent'])
  })

  it('emits Event actions through the root event envelope', async () => {
    const wrapper = mountAction({
      type: 'Event',
      event: 'update-plan',
      name: 'update-plan',
      label: 'Update',
      canRun: true,
      isBulk: false,
      icon: null,
      isInline: true,
    })

    await wrapper.get('[data-test="activate"]').trigger('click')

    expect(wrapper.emitted('event')?.[0]?.[0]).toMatchObject({
      name: 'update-plan',
      selection: [1],
      action: { type: 'Event', event: 'update-plan' },
    })
  })

  it('clears selection after emitting a bulk Event action', async () => {
    const action = {
      type: 'Event',
      event: 'update-plan',
      name: 'update-plan',
      label: 'Update',
      canRun: true,
      isBulk: true,
      icon: null,
      isInline: true,
    } satisfies DataTableAction<'update-plan'>
    const wrapper = mount(DataTableRoot, {
      props: {
        table: tableValue({ rows: [row(1, [action]), row(2, [action])] }),
        defaultSelection: [1, 2],
      },
      slots: {
        default: () => h(DataTableBulkActions, null, {
          default: () => h(DataTableActionActivation, { 'data-test': 'activate' }),
        }),
      },
    })

    await wrapper.get('[data-test="activate"]').trigger('click')

    expect(wrapper.emitted('event')?.[0]?.[0]).toMatchObject({
      name: 'update-plan',
      selection: [1, 2],
    })
    expect(wrapper.emitted('update:selection')?.at(-1)).toEqual([[]])
  })

  it('clears only the successfully executed bulk selection', async () => {
    const action = executableAction({ isInline: true })
    const wrapper = mount(DataTableRoot, {
      props: {
        table: tableValue({ rows: [row(1, [action]), row(2, [action]), row(3, [action])] }),
        defaultSelection: [1, 2],
      },
      slots: {
        default: () => h(DataTableBulkActions, null, {
          default: () => h(DataTableActionActivation, { 'data-test': 'activate' }),
        }),
      },
    })
    const context = (wrapper.vm as unknown as {
      context: { selectionState: { toggleRow: (key: number) => void } }
    }).context

    await wrapper.get('[data-test="activate"]').trigger('click')
    context.selectionState.toggleRow(3)

    const visit = vi.mocked(inertiaRouter.post).mock.calls[0]?.[2] as unknown as {
      onSuccess: VoidFunction
      onFinish: VoidFunction
    }
    visit.onSuccess()
    visit.onFinish()
    await nextTick()

    expect(wrapper.emitted('update:selection')?.at(-1)).toEqual([[3]])
  })

  it('retains selection when a bulk Executable action fails', async () => {
    const action = executableAction({ isInline: true })
    const wrapper = mount(DataTableRoot, {
      props: {
        table: tableValue({ rows: [row(1, [action]), row(2, [action])] }),
        defaultSelection: [1, 2],
      },
      slots: {
        default: () => h(DataTableBulkActions, null, {
          default: () => h(DataTableActionActivation, { 'data-test': 'activate' }),
        }),
      },
    })

    await wrapper.get('[data-test="activate"]').trigger('click')

    const visit = vi.mocked(inertiaRouter.post).mock.calls[0]?.[2] as unknown as {
      onError: VoidFunction
      onFinish: VoidFunction
    }
    visit.onError()
    visit.onFinish()
    await nextTick()

    expect(wrapper.emitted('update:selection')).toBeUndefined()
  })

  it.each([
    ['row menu', 'row'],
    ['bulk menu', 'bulk'],
    ['standalone resource', 'resource'],
  ] as const)('queues and renders a confirmable %s action, then runs it only after confirmation', async (_, composition) => {
    const wrapper = mountConfirmableAction(composition)

    await wrapper.get('[data-test="activate"]').trigger('click')

    const post = vi.mocked(inertiaRouter.post)
    expect(post).not.toHaveBeenCalled()
    expect(wrapper.get('[data-test="confirmation"]').text()).toContain('archive')
    expect(wrapper.get('[data-test="activate"]').text()).toBe('Idle')

    await wrapper.get('[data-test="confirm"]').trigger('click')
    expect(post).toHaveBeenCalledWith(
      '/ui/data-table-action',
      { selection: [1], action: 'archive', args: '{}' },
      expect.objectContaining({
        async: true,
        optimistic: expect.any(Function),
        preserveScroll: true,
      }),
    )
    expect(wrapper.get('[data-test="activate"]').text()).toBe('Running')
    expect(wrapper.get('[data-test="confirm"]').attributes('disabled')).toBeDefined()

    const visitOptions = post.mock.calls[0]?.[2] as unknown as {
      onSuccess: VoidFunction
      onFinish: VoidFunction
    }
    visitOptions.onSuccess()
    visitOptions.onFinish()
    await nextTick()
    expect(wrapper.find('[data-test="confirmation"]').exists()).toBe(false)
    if (composition === 'bulk') {
      expect(wrapper.emitted('update:selection')?.at(-1)).toEqual([[]])
    }
  })

  it('retains bulk selection when a confirmation is cancelled', async () => {
    const wrapper = mountConfirmableAction('bulk')

    await wrapper.get('[data-test="activate"]').trigger('click')
    await wrapper.get('[data-test="cancel"]').trigger('click')

    expect(wrapper.find('[data-test="confirmation"]').exists()).toBe(false)
    expect(wrapper.emitted('update:selection')).toBeUndefined()
  })

  it('runs distinct row executions concurrently with independent progress and cleanup', async () => {
    const action = executableAction({
      name: 'sync',
      label: 'Sync',
      action: 'sync',
      isBulk: false,
      isInline: true,
    })
    const wrapper = mount(DataTableRoot, {
      props: { table: tableValue({ rows: [row(1, [action]), row(2, [action])] }) },
      slots: {
        default: () => h(DataTableRows, null, {
          default: ({ row: currentRow }: any) => h(DataTableRowActions, { placement: 'inline' }, {
            default: () => h(DataTableActionActivation, { 'data-test': `activate-${currentRow.key}` }, {
              default: ({ isRunning }: any) => isRunning ? 'Running' : 'Idle',
            }),
          }),
        }),
      },
    })
    const post = vi.mocked(inertiaRouter.post)

    await wrapper.get('[data-test="activate-1"]').trigger('click')

    expect(wrapper.get('[data-test="activate-1"]').text()).toBe('Running')
    expect(wrapper.get('[data-test="activate-2"]').text()).toBe('Idle')
    expect(wrapper.get('[data-test="activate-1"]').attributes('disabled')).toBeDefined()
    expect(wrapper.get('[data-test="activate-2"]').attributes('disabled')).toBeUndefined()

    await wrapper.get('[data-test="activate-2"]').trigger('click')

    expect(post).toHaveBeenCalledTimes(2)
    expect(wrapper.get('[data-test="activate-1"]').text()).toBe('Running')
    expect(wrapper.get('[data-test="activate-2"]').text()).toBe('Running')
    expect(wrapper.get('[data-test="activate-1"]').attributes('disabled')).toBeDefined()
    expect(wrapper.get('[data-test="activate-2"]').attributes('disabled')).toBeDefined()

    const firstVisit = post.mock.calls[0]?.[2] as unknown as { onFinish: VoidFunction }
    firstVisit.onFinish()
    await nextTick()

    expect(wrapper.get('[data-test="activate-1"]').text()).toBe('Idle')
    expect(wrapper.get('[data-test="activate-2"]').text()).toBe('Running')
    expect(wrapper.get('[data-test="activate-1"]').attributes('disabled')).toBeUndefined()
    expect(wrapper.get('[data-test="activate-2"]').attributes('disabled')).toBeDefined()

    const secondVisit = post.mock.calls[1]?.[2] as unknown as {
      onError: VoidFunction
      onFinish: VoidFunction
    }
    secondVisit.onError()
    await nextTick()

    expect(wrapper.get('[data-test="activate-1"]').text()).toBe('Idle')
    expect(wrapper.get('[data-test="activate-2"]').text()).toBe('Idle')
    expect(wrapper.get('[data-test="activate-1"]').attributes('disabled')).toBeUndefined()
    expect(wrapper.get('[data-test="activate-2"]').attributes('disabled')).toBeUndefined()

    secondVisit.onFinish()
    await nextTick()
    expect(wrapper.get('[data-test="activate-2"]').text()).toBe('Idle')
  })

  it('retains aggregate running state until every concurrent execution finishes', () => {
    const firstAction = executableAction({ name: 'first', action: 'first', confirmable: false })
    const secondAction = executableAction({ name: 'second', action: 'second', confirmable: false })
    const controller = useDataTableActionController<number>(() => {})
    const post = vi.mocked(inertiaRouter.post)

    controller.activateAction(firstAction, [1, 2])
    controller.activateAction(secondAction, [2, 1])

    expect(controller.isRunning.value).toBe(true)
    expect(controller.isActionRunning(firstAction, [1, 2])).toBe(true)
    expect(controller.isActionRunning(firstAction, [2, 1])).toBe(false)
    expect(controller.isActionRunning(secondAction, [2, 1])).toBe(true)

    const firstVisit = post.mock.calls[0]?.[2] as unknown as { onFinish: VoidFunction }
    const secondVisit = post.mock.calls[1]?.[2] as unknown as {
      onError: VoidFunction
      onFinish: VoidFunction
    }
    secondVisit.onError()

    expect(controller.isRunning.value).toBe(true)
    expect(controller.isActionRunning(firstAction, [1, 2])).toBe(true)
    expect(controller.isActionRunning(secondAction, [2, 1])).toBe(false)

    secondVisit.onFinish()
    expect(controller.isRunning.value).toBe(true)

    firstVisit.onFinish()
    expect(controller.isRunning.value).toBe(false)
    expect(controller.runningAction.value).toBeNull()
  })

  it('preserves a newer confirmation when an earlier confirmed execution succeeds', async () => {
    const firstAction = executableAction({
      name: 'archive-first',
      label: 'Archive first',
      action: 'archive-first',
      isBulk: false,
      isInline: false,
      confirmable: true,
    })
    const secondAction = executableAction({
      name: 'archive-second',
      label: 'Archive second',
      action: 'archive-second',
      isBulk: false,
      isInline: false,
      confirmable: true,
    })
    const wrapper = mount(DataTableRoot, {
      props: { table: tableValue({ rows: [row(1, [firstAction]), row(2, [secondAction])] }) },
      slots: {
        default: () => [
          h(DataTableRows, null, {
            default: ({ row: currentRow }: any) => h(DataTableRowActions, { placement: 'menu' }, {
              default: () => h(DataTableActionActivation, { 'data-test': `activate-${currentRow.key}` }),
            }),
          }),
          renderConfirmation(),
        ],
      },
    })
    const post = vi.mocked(inertiaRouter.post)

    await wrapper.get('[data-test="activate-1"]').trigger('click')
    await wrapper.get('[data-test="confirm"]').trigger('click')
    await wrapper.get('[data-test="activate-2"]').trigger('click')

    expect(wrapper.get('[data-test="confirmation"]').text()).toContain('archive-second')
    expect(wrapper.get('[data-test="confirm"]').attributes('disabled')).toBeUndefined()

    const firstVisit = post.mock.calls[0]?.[2] as unknown as {
      onSuccess: VoidFunction
      onFinish: VoidFunction
    }
    firstVisit.onSuccess()
    firstVisit.onFinish()
    await nextTick()

    expect(wrapper.get('[data-test="confirmation"]').text()).toContain('archive-second')

    await wrapper.get('[data-test="confirm"]').trigger('click')
    expect(post).toHaveBeenCalledTimes(2)
  })

  it('cleans up scoped and global execution state when posting throws', () => {
    const action = executableAction({ confirmable: false })
    const controller = useDataTableActionController<number>(() => {})
    const error = new Error('post failed')
    vi.mocked(inertiaRouter.post).mockImplementationOnce(() => { throw error })

    expect(() => controller.activateAction(action, [1])).toThrow(error)
    expect(controller.isRunning.value).toBe(false)
    expect(controller.runningAction.value).toBeNull()
    expect(controller.isActionRunning(action, [1])).toBe(false)
  })

  it('posts a non-confirmable menu action immediately', async () => {
    const wrapper = mountAction(executableAction({ isInline: false, confirmable: false }))

    await wrapper.get('[data-test="activate"]').trigger('click')

    expect(vi.mocked(inertiaRouter.post)).toHaveBeenCalledOnce()
    expect(wrapper.find('[data-test="confirmation"]').exists()).toBe(false)
  })
})
