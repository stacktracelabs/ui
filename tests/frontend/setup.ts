import { beforeEach, vi } from 'vitest'

const inertiaRouter = vi.hoisted(() => ({
  visit: vi.fn(),
  post: vi.fn(),
}))

vi.mock('@inertiajs/vue3', async () => {
  const { defineComponent, h } = await import('vue')

  return {
    router: inertiaRouter,
    Link: defineComponent({
      name: 'InertiaLinkStub',
      inheritAttrs: false,
      props: { href: { type: String, required: false } },
      setup(props, { attrs, slots }) {
        return () => h('a', { ...attrs, href: props.href }, slots.default?.())
      },
    }),
  }
})

beforeEach(() => {
  vi.stubGlobal('route', vi.fn(() => '/ui/data-table-action'))
  window.history.replaceState({}, '', '/')
})
