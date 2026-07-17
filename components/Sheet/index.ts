import { cva, type VariantProps } from 'class-variance-authority'

export { default as Sheet } from './Sheet.vue'
export { default as SheetClose } from './SheetClose.vue'
export { default as SheetContent } from './SheetContent.vue'
export { default as SheetDescription } from './SheetDescription.vue'
export { default as SheetFooter } from './SheetFooter.vue'
export { default as SheetHeader } from './SheetHeader.vue'
export { default as SheetTitle } from './SheetTitle.vue'
export { default as SheetTrigger } from './SheetTrigger.vue'

export const sheetContentVariants = cva(
  'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
        right: 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full border-l',
        bottom: 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
        left: 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full border-r',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
        full: '',
      },
      variant: {
        default: '',
        elevated:
          "isolate rounded-lg border border-foreground/20 shadow-xl before:pointer-events-none before:absolute before:-inset-2 before:-z-10 before:rounded-[calc(var(--radius-lg)+8px)] before:border before:border-foreground/15 before:bg-background/50 before:content-['']",
      },
    },
    compoundVariants: [
      {
        side: 'top',
        variant: 'elevated',
        class: 'inset-x-4 top-4',
      },
      {
        side: 'right',
        variant: 'elevated',
        class: 'inset-y-4 right-4 h-auto',
      },
      {
        side: 'bottom',
        variant: 'elevated',
        class: 'inset-x-4 bottom-4',
      },
      {
        side: 'left',
        variant: 'elevated',
        class: 'inset-y-4 left-4 h-auto',
      },
      {
        side: ['left', 'right'],
        size: 'sm',
        class: 'w-3/4 sm:max-w-sm',
      },
      {
        side: ['left', 'right'],
        size: 'md',
        class: 'w-3/4 sm:max-w-lg',
      },
      {
        side: ['left', 'right'],
        size: 'lg',
        class: 'w-[calc(100%-2rem)] max-w-none sm:w-1/2',
      },
      {
        side: ['top', 'bottom'],
        size: 'md',
        class: 'h-[40dvh]',
      },
      {
        side: ['top', 'bottom'],
        size: 'lg',
        class: 'h-1/2',
      },
      {
        side: ['left', 'right'],
        size: 'full',
        variant: 'default',
        class: 'w-full max-w-none',
      },
      {
        side: ['left', 'right'],
        size: 'full',
        variant: 'elevated',
        class: 'w-[calc(100%-2rem)] max-w-none',
      },
      {
        side: ['top', 'bottom'],
        size: 'full',
        variant: 'default',
        class: 'h-dvh max-h-none',
      },
      {
        side: ['top', 'bottom'],
        size: 'full',
        variant: 'elevated',
        class: 'h-[calc(100dvh-2rem)] max-h-none',
      },
    ],
    defaultVariants: {
      side: 'right',
      size: 'sm',
      variant: 'elevated',
    },
  },
)

export const sheetOverlayVariants = cva(
  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50',
  {
    variants: {
      variant: {
        default: 'bg-black/80',
        elevated: 'bg-black/20 backdrop-blur-[1px]',
      },
    },
    defaultVariants: {
      variant: 'elevated',
    },
  },
)

export type SheetContentVariants = VariantProps<typeof sheetContentVariants>
export type SheetOverlayVariants = VariantProps<typeof sheetOverlayVariants>
