export type SelectOption<T = {}, V = string> = {
  label: string
  value: V
} & T

export interface Link {
  url: string
  external: boolean
}

export interface Icon {
  src: string
}

export interface LinkAction {
  type: 'link',
  link: Link
}

export type Action = LinkAction

export interface MenuItem {
  title: string
  action: Action | null
  badge: string | null
  activePaths?: Array<string>
  icon?: Icon | null
}

export type MenuItemNode = { type: 'group', item: MenuGroup }
export type MenuGroupNode = { type: 'item', item: MenuItem }

export type MenuNode = MenuItemNode | MenuGroupNode

export interface MenuGroup {
  title: string | null
  items: Array<MenuNode>
  icon?: Icon | null
}

export interface Menu {
  navigations: Array<MenuGroup>
}

export interface BreadcrumbNavigationItem {
  title: string
  action: Action | null
}

export type BreadcrumbNavigationList = Array<BreadcrumbNavigationItem>
