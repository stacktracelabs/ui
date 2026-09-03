import type { AppPageProps } from '@/Types'

declare module '@inertiajs/core' {
    interface PageProps extends AppPageProps {}
}

export {}
