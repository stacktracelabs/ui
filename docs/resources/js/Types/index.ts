export type DocumentationNavigationItem = {
    title: string
    href: string
    component: string
}

export type DocumentationNavigationSection = {
    title: string
    items: DocumentationNavigationItem[]
}

export type AppPageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    appName: string
    documentation: {
        githubUrl: string
        registryUrl: string
        navigation: DocumentationNavigationSection[]
    }
    ziggy: Record<string, unknown> & {
        location: string
    }
}
