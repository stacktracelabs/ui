import { cva, type VariantProps } from 'class-variance-authority'

export { default as AlertDialog } from './AlertDialog.vue'
export { default as AlertDialogAction } from './AlertDialogAction.vue'
export { default as AlertDialogCancel } from './AlertDialogCancel.vue'
export { default as AlertDialogContent } from './AlertDialogContent.vue'
export { default as AlertDialogDescription } from './AlertDialogDescription.vue'
export { default as AlertDialogFooter } from './AlertDialogFooter.vue'
export { default as AlertDialogHeader } from './AlertDialogHeader.vue'
export { default as AlertDialogOverlay } from './AlertDialogOverlay.vue'
export { default as AlertDialogTitle } from './AlertDialogTitle.vue'
export { default as AlertDialogTrigger } from './AlertDialogTrigger.vue'

export const alertDialogContentVariants = cva('border', {
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

export const alertDialogOverlayVariants = cva(
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

export type AlertDialogContentVariants = VariantProps<typeof alertDialogContentVariants>
export type AlertDialogOverlayVariants = VariantProps<typeof alertDialogOverlayVariants>
