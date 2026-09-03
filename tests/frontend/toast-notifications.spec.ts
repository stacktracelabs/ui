import { router } from '@inertiajs/vue3'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { describe, expect, expectTypeOf, it, vi } from 'vitest'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import sonnerSource from '../../components/Sonner/Sonner.vue?raw'
import { useToastNotifications } from '../../resources/js/Composables/useToastNotifications'
import type { ToastNotification } from '../../resources/js/Types'

type FlashEvent = {
  detail: {
    flash: {
      toast?: ToastNotification
    }
  }
}

function mountToastNotifications(callback: (notification: ToastNotification) => void) {
  return mount(defineComponent({
    setup() {
      useToastNotifications(callback)

      return () => h('div')
    },
  }))
}

function emitToastNotification(notification: ToastNotification): void {
  const listener = vi.mocked(router.on).mock.calls.at(-1)?.[1] as ((event: FlashEvent) => void) | undefined

  expect(listener).toBeTypeOf('function')
  listener?.({ detail: { flash: { toast: notification } } })
}

function notification(id: string): ToastNotification {
  return {
    id,
    title: 'Project saved',
    content: 'The project is ready.',
    variant: 'default',
  }
}

describe('useToastNotifications', () => {
  it('requires every notification to have an identifier', () => {
    expectTypeOf<ToastNotification['id']>().toEqualTypeOf<string>()
  })

  it('delivers a backend notification identifier only once', () => {
    const callback = vi.fn()

    mountToastNotifications(callback)
    emitToastNotification(notification('toast-notifications-duplicate'))
    emitToastNotification(notification('toast-notifications-duplicate'))

    expect(callback).toHaveBeenCalledOnce()
  })

  it('allows separate notifications with identical content', () => {
    const callback = vi.fn()

    mountToastNotifications(callback)
    emitToastNotification(notification('toast-notifications-first'))
    emitToastNotification(notification('toast-notifications-second'))

    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('keeps identifiers deduplicated across component remounts', () => {
    const callback = vi.fn()
    const firstWrapper = mountToastNotifications(callback)

    emitToastNotification(notification('toast-notifications-remount'))
    firstWrapper.unmount()

    mountToastNotifications(callback)
    emitToastNotification(notification('toast-notifications-remount'))

    expect(callback).toHaveBeenCalledOnce()
  })

  it('forgets old identifiers after the bounded cache is filled', () => {
    const callback = vi.fn()

    mountToastNotifications(callback)

    for (let index = 0; index < 1000; index += 1) {
      emitToastNotification(notification(`toast-notifications-capacity-${index}`))
    }

    emitToastNotification(notification('toast-notifications-capacity-0'))

    expect(callback).toHaveBeenCalledTimes(1001)
  })

  it('keeps deduplication out of the registry component', () => {
    expect(sonnerSource).toContain('useToastNotifications(notification =>')
    expect(sonnerSource).not.toContain("from './dedupe'")
  })
})
