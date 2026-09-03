export * from './ToastNotification'

export type SelectOption<V = string> = {
  label: string
  value: V
}

export interface SVGSource {
  src: string
}
