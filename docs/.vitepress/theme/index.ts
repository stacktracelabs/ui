// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ComponentPreview from "./components/ComponentPreview.vue";
import ComponentSource from "./components/ComponentSource.vue";
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: DefaultTheme.Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('ComponentPreview', ComponentPreview)
    app.component('ComponentSource', ComponentSource)
  }
} satisfies Theme
