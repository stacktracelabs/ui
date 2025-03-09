export interface MenuItemLink {
  url: string
  external: boolean
}

export interface MenuItem {
  title: string
  action: { type: 'link', link: MenuItemLink } | null
  badge: string | null
  activePaths?: Array<string>
  icon?: { src: string }
}

export type MenuItemNode = { type: 'group', item: MenuGroup }
export type MenuGroupNode = { type: 'item', item: MenuItem }

export type MenuNode = MenuItemNode | MenuGroupNode

export interface MenuGroup {
  title: string | null
  items: Array<MenuNode>
  icon?: { src: string }
}

export interface Menu {
  navigations: Array<MenuGroup>
}
