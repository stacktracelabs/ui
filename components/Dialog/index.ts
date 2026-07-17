import { cva, type VariantProps } from 'class-variance-authority'

export { default as Dialog } from './Dialog.vue'
export { default as DialogClose } from './DialogClose.vue'
export { default as DialogContent } from './DialogContent.vue'
export { default as DialogDescription } from './DialogDescription.vue'
export { default as DialogFooter } from './DialogFooter.vue'
export { default as DialogHeader } from './DialogHeader.vue'
export { default as DialogOverlay } from './DialogOverlay.vue'
export { default as DialogScrollContent } from './DialogScrollContent.vue'
export { default as DialogTitle } from './DialogTitle.vue'
export { default as DialogTrigger } from './DialogTrigger.vue'

export const dialogContentVariants = cva('border', {
  variants: {
    variant: {
      default: 'shadow-lg',
      elevated:
        "isolate rounded-lg border-foreground/20 shadow-xl before:pointer-events-none before:absolute before:-inset-2 before:-z-10 before:rounded-[calc(var(--radius-lg)+8px)] before:border before:border-foreground/15 before:bg-background/50 before:content-['']",
    },
  },
  defaultVariants: {
    variant: 'elevated',
  },
})

export const dialogOverlayVariants = cva(
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

export type DialogContentVariants = VariantProps<typeof dialogContentVariants>
export type DialogOverlayVariants = VariantProps<typeof dialogOverlayVariants>
