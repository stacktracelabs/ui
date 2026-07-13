export type ComponentApiProp = {
  name: string
  description: string
  type: string
  required: boolean
  default?: string
}

export type ComponentApiPart = {
  name: string
  description: string
  props: ComponentApiProp[]
  source: 'reka-ui' | 'stacktrace-ui'
}

export type ComponentApiReference = {
  name: string
  components: ComponentApiPart[]
}

export type ComponentApiData = {
  source: {
    repository: string
    commit: string
  }
  references: Record<string, ComponentApiReference>
}
