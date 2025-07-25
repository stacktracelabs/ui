import './bootstrap';
import '../css/app.css';

import { createApp, h, type DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { DataTablePlugin } from "@/Components/DataTable";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue')),
  setup({el, App, props, plugin}) {
    createApp({render: () => h(App, props)})
      .use(plugin)
      .use(DataTablePlugin)
      .use(ZiggyVue)
      .mount(el);
  },
  progress: {
    color: '#4B5563',
  },
});
