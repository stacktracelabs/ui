import type { NavigationItem } from '@/composables'
import { computed, type ComputedRef, inject, type MaybeRefOrGetter, provide, toValue } from 'vue'

const NavigationItemSymbol = Symbol()

export function provideNavigationItemContext(item: MaybeRefOrGetter<NavigationItem>) {
  provide(NavigationItemSymbol, item)
}

export function injectNavigationItemContext(): ComputedRef<NavigationItem | null> {
  const value = inject<MaybeRefOrGetter<NavigationItem>>(NavigationItemSymbol)

  return computed(() => {
    if (value) {
      return toValue(value)
    }

    return null
  })
}
