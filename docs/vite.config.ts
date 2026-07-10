import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import { bunny } from 'laravel-vite-plugin/fonts'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.ts',
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600, 700],
                }),
            ],
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        vueDevTools(),
        tailwindcss(),
    ],
    resolve: {
        alias: [
            {
                find: '@/Components/Base',
                replacement: fileURLToPath(new URL('../components', import.meta.url)),
            },
            {
                find: '@/Components',
                replacement: fileURLToPath(new URL('../components', import.meta.url)),
            },
            {
                find: '@/Composables/Base',
                replacement: fileURLToPath(new URL('../resources/js/Composables', import.meta.url)),
            },
            {
                find: '@/Composables',
                replacement: fileURLToPath(new URL('../resources/js/Composables', import.meta.url)),
            },
            {
                find: '@',
                replacement: fileURLToPath(new URL('./resources/js', import.meta.url)),
            },
        ],
        dedupe: [
            '@internationalized/date',
            '@inertiajs/vue3',
            '@lucide/vue',
            '@unovis/vue',
            '@vueuse/core',
            'class-variance-authority',
            'clsx',
            'embla-carousel-vue',
            'lodash',
            'reka-ui',
            'tailwind-merge',
            'vaul-vue',
            'vue',
            'vue-input-otp',
            'vue-sonner',
        ],
    },
    server: {
        fs: {
            allow: [fileURLToPath(new URL('..', import.meta.url))],
        },
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
})
