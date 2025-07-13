import type { SVGSource } from '@/types'
import { usePage } from '@inertiajs/vue3'
import { type MaybeRefOrGetter, type Component, type ComputedRef, toValue } from 'vue'
import { computed } from 'vue'
import { useBrowserLocation } from '@vueuse/core'

export type LinkAction = { url: string, external?: boolean, preserveScroll?: boolean, preserveState?: boolean, progress?: boolean }
export type RouteAction = { route: string, params?: any, preserveScroll?: boolean, preserveState?: boolean, progress?: boolean }
export type LinkPathAction = { path: string, preserveScroll?: boolean, preserveState?: boolean, progress?: boolean }
export type EventAction<Event = any> = (event?: Event) => void

export type MenuItemAction<Event = any> = string
  | RouteAction
  | LinkAction
  | LinkPathAction
  | EventAction<Event>

export type MenuItemActivation = LinkAction
  | RouteAction
  | LinkPathAction
  | (() => boolean)

export type MenuItemIcon = Component | SVGSource

export interface MenuItem<Event = any> {
  title: string
  action?: MenuItemAction<Event> | null
  badge?: string | null
  active?: Array<MenuItemActivation> | MenuItemActivation
  icon?: MenuItemIcon | null
  children?: Array<MenuItem>
}

export interface NavigationItem extends Omit<MenuItem, 'children'> {
  isActive: boolean
  isChildActive: boolean
  hasChildren: boolean
  children?: Array<NavigationItem>
}

export type Navigation = Array<NavigationItem>
export type Menu = Array<MenuItem>

export function isRouteAction(action: MenuItemAction): action is RouteAction {
  return typeof action === 'object' && action !== null && 'route' in action
}

export function isLinkAction(action: MenuItemAction): action is LinkAction {
  return typeof action === 'object' && action !== null && 'url' in action
}

export function isLinkPathAction(action: MenuItemAction): action is LinkPathAction {
  return typeof action === 'object' && action !== null && 'path' in action
}

export function isEventAction(action: MenuItemAction): action is EventAction {
  return typeof action === 'function'
}

export function useActiveLink(link: MaybeRefOrGetter<MenuItemActivation>): ComputedRef<boolean> {
  const page = usePage()
  const location = useBrowserLocation()

  return computed(() => {
    const value = toValue(link)
    const href = location.value.href

    return isActivated(value, page.url, href ? new URL(href) : null)
  })
}

export function isActivated(
  activation: Array<MenuItemActivation> | MenuItemActivation,
  currentPath: string,
  currentUrl: URL | null
): boolean {
  if (Array.isArray(activation)) {
    return activation.some(it => isActivated(it, currentPath, currentUrl))
  }

  if (isLinkPathAction(activation)) {
    return activation.path === currentPath
  } else if (isLinkAction(activation)) {
    if (currentUrl) {
      if (activation.url.startsWith('/')) {
        return activation.url === currentUrl.pathname
      }

      const url = new URL(activation.url)
      return `${url.host}${url.pathname}` === `${currentUrl.host}${currentUrl.pathname}`
    }

    return false
  } else if (isRouteAction(activation)) {
    return route().current(activation.route, activation.params)
  } else if (typeof activation === 'function') {
    return activation()
  }

  return false
}

export function useNavigation(menu: MaybeRefOrGetter<Menu>): ComputedRef<Navigation> {
  const page = usePage()
  const location = useBrowserLocation()
  const currentPath = computed(() => page.url)
  const currentUrl = computed(() => {
    const href = location.value.href

    return href ? new URL(href) : null
  })

  const isActive = (item: MenuItem) => {
    if (item.active) {
      return isActivated(item.active, currentPath.value, currentUrl.value)
    }

    const action = item.action
    if (action) {
      if (typeof action === 'string') {
        return isActivated({ url: action }, currentPath.value, currentUrl.value)
      } else if (isRouteAction(action) || isLinkAction(action) || isLinkPathAction(action)) {
        return isActivated(action, currentPath.value, currentUrl.value)
      }
    }

    return false
  }

  const isChildActive = (item: MenuItem, deep: boolean = false): boolean => {
    if (item.children && item.children.some(child => isActive(child))) {
      return true
    }

    if (deep && item.children) {
      return item.children.some(child => isChildActive(child, true))
    }

    return false
  }

  const createNavigationItem: (item: MenuItem) => NavigationItem = item => {
    const definedChildren = item.children
    const children = definedChildren ? definedChildren.map(it => createNavigationItem(it)) : []

    return {
      ...item,
      isActive: isActive(item),
      isChildActive: isChildActive(item, true),
      children,
      hasChildren: definedChildren ? definedChildren.length > 0 : false,
    }
  }

  const source = computed(() => toValue(menu))
  return computed(() => source.value.map(it => createNavigationItem(it)))
}
