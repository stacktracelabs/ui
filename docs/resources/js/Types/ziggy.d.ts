import { route } from 'ziggy-js'

declare global {
    const route: typeof route
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        route: typeof route
    }
}

export {}
