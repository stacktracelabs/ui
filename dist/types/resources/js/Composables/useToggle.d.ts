import { Ref } from 'vue';
export interface Toggle {
    active: Ref<boolean>;
    activate: () => void;
    deactivate: () => void;
}
export declare function useToggle(initiallyActive?: boolean): Toggle;
export declare function onActivated(toggle: Toggle, callback: () => void): void;
export declare function onDeactivated(toggle: Toggle, callback: () => void): void;
