import type { Menu, MenuGroup, MenuItem, MenuNode } from '@/Components/Menu'
import { usePage } from '@inertiajs/vue3'
import { computed, type ComputedRef, type MaybeRefOrGetter, unref } from 'vue'

export interface NavigationItem {
  isActive: boolean
  menuItem: MenuItem
}

type NavigationGroupNode = { type: 'group', group: NavigationGroup }
type NavigationItemNode = { type: 'item', item: NavigationItem }

export interface NavigationGroup {
  items: Array<NavigationItemNode | NavigationGroupNode>
  isActive: boolean
  menuGroup: Omit<MenuGroup, 'items'>
}

export type Navigation = Array<NavigationGroup>

export function createNavigation(source: MaybeRefOrGetter<Menu>): ComputedRef<Navigation> {
  const menu = computed(() => unref(source) as Menu)
  const page = usePage()
  const url = computed(() => page.url)

  const isItemActive: (item: MenuItem) => boolean = item => {
    if (item.activePaths) {
      return item.activePaths.includes(url.value)
    }

    return false
  }

  const createGroupOrItem: (groupOrItem: MenuNode) => NavigationItemNode | NavigationGroupNode = groupOrItem => {
    if (groupOrItem.type === 'item') {
      return {
        type: 'item',
        item: {
          isActive: isItemActive(groupOrItem.item),
          menuItem: groupOrItem.item,
        }
      }
    } else {
      return {
        type: 'group',
        group: {
          isActive: false,
          items: groupOrItem.item.items.map(it => createGroupOrItem(it)),
          menuGroup: { ...groupOrItem.item, items: undefined },
        }
      }
    }
  }

  const isGroupActive: (group: NavigationGroup) => boolean = group => {
    return group.items.some(groupOrItem => {
      if (groupOrItem.type === 'item') {
        return groupOrItem.item.isActive
      } else {
        return isGroupActive(groupOrItem.group)
      }
    })
  }

  const resolveGroupActivation = (group: NavigationGroup) => {
    if (isGroupActive(group)) {
      group.isActive = true
    }

    group.items.forEach(it => {
      if (it.type === 'group') {
        resolveGroupActivation(it.group)
      }
    })
  }

  return computed<Navigation>(() => {
    const groups = menu.value.navigations.map((group: MenuGroup) => {
      return {
        items: group.items.map(it => createGroupOrItem(it)),
        menuGroup: { ...group, items: undefined },
        isActive: false,
      }
    })

    groups.forEach(group => resolveGroupActivation(group))

    return groups
  })
}
