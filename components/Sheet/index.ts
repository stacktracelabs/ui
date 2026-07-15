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
        right: 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
        bottom: 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
        left: 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
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
    ],
    defaultVariants: {
      side: 'right',
      variant: 'default',
    },
  },
)

export type SheetContentVariants = VariantProps<typeof sheetContentVariants>
