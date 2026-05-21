import { FlashData } from '@inertiajs/core';
export declare function useFlash<T extends keyof FlashData>(key: T, callback: (value: NonNullable<FlashData[T]>) => void): void;
