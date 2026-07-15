import type { AppPageProps } from '@/Types'

declare module '@inertiajs/core' {
    interface PageProps extends AppPageProps {}

    export interface InertiaConfig {
        flashDataType: {
            toast?: {
                title: string
                content: string | null
                variant: 'default' | 'destructive'
            }
        }
    }
}

export {}
