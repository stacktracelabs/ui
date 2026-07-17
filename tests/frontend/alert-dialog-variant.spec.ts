import { describe, expect, it } from 'vitest'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import alertDialogContentSource from '../../components/AlertDialog/AlertDialogContent.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import alertDialogOverlaySource from '../../components/AlertDialog/AlertDialogOverlay.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import alertDialogVariantsSource from '../../components/AlertDialog/index.ts?raw'

describe('AlertDialog variants', () => {
  it('uses the elevated surface by default', () => {
    expect(alertDialogVariantsSource).toContain("variant: 'elevated'")
    expect(alertDialogVariantsSource).toContain('before:-inset-2')
    expect(alertDialogVariantsSource).toContain('before:bg-background/50')
  })

  it('pairs the elevated surface with the lighter blurred backdrop', () => {
    expect(alertDialogVariantsSource).toContain("elevated: 'bg-black/20 backdrop-blur-[1px]'")
  })

  it('preserves the classic surface and dark backdrop', () => {
    expect(alertDialogVariantsSource).toContain("default: 'shadow-lg'")
    expect(alertDialogVariantsSource).toContain("default: 'bg-black/80'")
  })

  it('forwards the content variant to its overlay', () => {
    expect(alertDialogContentSource).toContain('<AlertDialogOverlay :variant="props.variant" />')
    expect(alertDialogContentSource).toContain("variant?: AlertDialogContentVariants['variant']")
    expect(alertDialogContentSource).toContain("'class', 'to', 'variant'")
  })

  it('does not forward the overlay variant to Reka UI', () => {
    expect(alertDialogOverlaySource).toContain("variant?: AlertDialogOverlayVariants['variant']")
    expect(alertDialogOverlaySource).toContain("reactiveOmit(props, 'class', 'variant')")
  })
})
