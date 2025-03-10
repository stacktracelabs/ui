import type { Menu, MenuItem } from '@/Types'
import { usePage } from '@inertiajs/vue3'
import { computed, type ComputedRef, type MaybeRefOrGetter, unref } from 'vue'

export interface NavigationItem {
  isActive: boolean
  isChildActive: boolean
  hasChildren: boolean
  item: Omit<MenuItem, 'children'>
  children: Array<NavigationItem>
}

export type Navigation = Array<NavigationItem>

export function useNavigation(source: MaybeRefOrGetter<Menu>): ComputedRef<Navigation> {
  const menu = computed(() => unref(source) as Menu)
  const page = usePage()
  const url = computed(() => page.url)

  function isItemChildActive(item: MenuItem, deep: boolean = false): boolean {
    if (item.children && item.children.some(child => isItemActive(child))) {
      return true
    }

    if (deep && item.children) {
      return item.children.some(child => isItemChildActive(child, true))
    }

    return false
  }

  function isItemActive(item: MenuItem, deep: boolean = false): boolean {
    if (
      item.active && item.active.some(activation => {
        if (activation.type === 'path') {
          return activation.path === url.value
        } else {
          if (activation.route.params) {
            return route().current(activation.route.name, activation.route.params)
          } else {
            return route().current(activation.route.name)
          }
        }
      })
    ) {
      return true
    }

    return false
  }

  const createItem: (item: MenuItem) => NavigationItem = item => {
    return {
      isActive: isItemActive(item),
      isChildActive: isItemChildActive(item, true),
      item: { ...item, children: undefined },
      children: item.children ? item.children.map(child => createItem(child)) : [],
      hasChildren: item.children ? item.children.length > 0 : false,
    }
  }

  return computed<Navigation>(() => menu.value.items.map(it => createItem(it)))
}
