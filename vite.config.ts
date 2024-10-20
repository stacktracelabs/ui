import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.ts',
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    }),
    // components({
    //   globs: [
    //     'resources/js/Components/**/*.vue',
    //     'resources/js/Layouts/**/*.vue',
    //
    //     '!resources/js/Components/DataTable/Columns/*.vue',
    //     '!resources/js/Components/DataTable/Filters/*.vue',
    //     '!resources/js/Components/DataTable/ActionList.vue',
    //     '!resources/js/Components/DataTable/EmptyPattern.vue',
    //   ],
    //   resolvers: [
    //     componentName => {
    //       if (['Link', 'Head'].includes(componentName)) {
    //         return { name: componentName, from: '@inertiajs/vue3' }
    //       }
    //     }
    //   ]
    // })
  ]
})
