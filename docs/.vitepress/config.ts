import { defineConfig } from 'vitepress'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
// @ts-ignore
import path from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "stacktrace/ui",
  description: "Component library for Laravel, Vue and Inertia based on shadcn/ui.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/introduction' },
      { text: 'Components', link: '/components/alert' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Installation', link: '/installation' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Alert', link: '/components/alert' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stacktrace/ui' }
    ],

    outline: {
      level: [2, 3],
    }
  },

  vite: {
    css: {
      postcss: {
        plugins: [
          tailwind() as any,
          autoprefixer(),
        ],
      },
    },
    resolve: {
      alias: {
        // @ts-ignore
        '@': path.resolve(__dirname, '../../resources/js'),
      },
    },
  }
})
