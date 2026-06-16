export type AppPageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    appName: string
    ziggy: Record<string, unknown> & {
        location: string
    }
}
