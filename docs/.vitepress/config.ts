import { defineConfig } from 'vitepress'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
// @ts-ignore
import path from 'node:path'
import { postcssIsolateStyles } from 'vitepress'

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
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Alert', link: '/components/alert' },
          { text: 'Alert Dialog', link: '/components/alert-dialog' },
          { text: 'Aspect Ratio', link: '/components/aspect-ratio' },
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'Breadcrumb', link: '/components/breadcrumb' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Command', link: '/components/command' },
          { text: 'Date Input', link: '/components/date-input' },
          { text: 'Date Range Input', link: '/components/date-range-input' },
          { text: 'Date Time Input', link: '/components/date-time-input' },
          { text: 'Panel', link: '/components/panel' },
          { text: 'Popover', link: '/components/popover' },
          { text: 'Radio Group', link: '/components/radio-group' },
          { text: 'Select', link: '/components/select' },
          { text: 'Separator', link: '/components/separator' },
          { text: 'Sheet', link: '/components/sheet' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Text Area', link: '/components/textarea' },
          { text: 'Tooltip', link: '/components/tooltip' },
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
          postcssIsolateStyles({
            includeFiles: [/vp-doc\.css/, /base\.css/],
          }),
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
