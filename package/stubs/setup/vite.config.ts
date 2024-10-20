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
    components({
      dirs: ['resources/js/Components', 'resources/js/Layouts'],
      resolvers: [
        componentName => {
          if (['Link', 'Head'].includes(componentName)) {
            return { name: componentName, from: '@inertiajs/vue3' }
          }
        }
      ]
    })
  ]
})
