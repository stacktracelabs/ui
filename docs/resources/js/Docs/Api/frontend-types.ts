export type ApiReferenceEntry = {
    name: string
    type: string
    description: string
    required?: boolean
    default?: string
}

export type ApiReturnValue = {
    type: string
    description: string
}
