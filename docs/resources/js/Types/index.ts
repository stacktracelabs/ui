export type DocumentationNavigationItem = {
    title: string
    href: string
    component: string
}

export type DocumentationNavigationSection = {
    title: string
    items: DocumentationNavigationItem[]
}

export type WorkbenchNavigationItem = {
    title: string
    description: string
    href: string
}

export type WorkbenchNavigationSection = {
    title: string
    items: WorkbenchNavigationItem[]
}

export type AppPageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    appName: string
    documentation: {
        githubUrl: string
        registryUrl: string
        navigation: DocumentationNavigationSection[]
    }
    workbench: {
        enabled: boolean
        navigation: WorkbenchNavigationSection[]
    }
    ziggy: Record<string, unknown> & {
        location: string
    }
}
