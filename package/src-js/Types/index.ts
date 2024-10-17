export type SelectOption<T = {}, V = string> = {
  label: string
  value: V
} & T
