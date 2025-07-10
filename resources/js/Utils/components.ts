import type { App, DefineComponent } from "vue";

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceAll(str: string, find: string, replace: string) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

export function registerNamespacedComponents(app: App, components: Record<string, DefineComponent>, namespace: string) {
  Object.keys(components).forEach(name => {
    const componentName = `${namespace}${replaceAll(replaceAll(replaceAll(name, './', ''), '/', ''), '.vue', '')}`

    app.component(componentName, components[name].default)
  })
}
