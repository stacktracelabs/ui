import type { App, DefineComponent } from "vue";

type ComponentModule = DefineComponent | { default: DefineComponent }

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceAll(str: string, find: string, replace: string) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

export function registerNamespacedComponents(app: App, components: Record<string, ComponentModule>, namespace: string) {
  Object.keys(components).forEach(name => {
    const component = components[name]
    if (!component) {
      return
    }

    const componentName = `${namespace}${replaceAll(replaceAll(replaceAll(name, './', ''), '/', ''), '.vue', '')}`

    app.component(componentName, 'default' in component ? component.default : component)
  })
}
