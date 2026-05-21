import { App, DefineComponent } from 'vue';
type ComponentModule = DefineComponent | {
    default: DefineComponent;
};
export declare function registerNamespacedComponents(app: App, components: Record<string, ComponentModule>, namespace: string): void;
export {};
