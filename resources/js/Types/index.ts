export type SelectOption<T = {}, V = string> = {
  label: string
  value: V
} & T

export interface Link {
  url: string
  external: boolean
}

export interface IconSource {
  src: string
}

export interface LinkAction {
  type: 'link',
  link: Link
}

export type Action = LinkAction

export type ActivePath = string
export type ActiveRoute = { name: string, params: any | null }

export interface MenuItem {
  title?: string | null
  action?: Action | null
  badge?: string | null
  active?: Array<{ type: 'route', route: ActiveRoute } | { type: 'path', path: ActivePath }>
  icon?: IconSource | null
  children?: Array<MenuItem>
}

export interface Menu {
  items: Array<MenuItem>
}

export interface BreadcrumbNavigationItem {
  title: string
  action: Action | null
}

export type BreadcrumbNavigationList = Array<BreadcrumbNavigationItem>
