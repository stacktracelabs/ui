import type { Theme } from 'vitepress'
import './style.css'
import DefaultTheme from 'vitepress/theme'
import Layout from './layouts/Layout.vue'
import ComponentPreview from "./components/ComponentPreview.vue";
import ComponentSource from "./components/ComponentSource.vue";

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.component('ComponentPreview', ComponentPreview)
    app.component('ComponentSource', ComponentSource)
  }
} satisfies Theme
