import { describe, expect, it } from 'vitest'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import sheetContentSource from '../../components/Sheet/SheetContent.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import sheetVariantsSource from '../../components/Sheet/index.ts?raw'

describe('Sheet sizes', () => {
  it('preserves the compact default size', () => {
    expect(sheetVariantsSource).toContain("size: 'sm'")
    expect(sheetVariantsSource).toContain('sm:max-w-sm')
    expect(sheetVariantsSource).toContain('before:-inset-2')
  })

  it('provides wider horizontal presets', () => {
    expect(sheetVariantsSource).toContain('sm:max-w-lg')
    expect(sheetVariantsSource).toContain('sm:w-1/2')
  })

  it('maps the larger presets to height for vertical sheets', () => {
    expect(sheetVariantsSource).toContain('h-[40dvh]')
    expect(sheetVariantsSource).toContain('h-1/2')
  })

  it('keeps full sheets inside the elevated viewport gutter', () => {
    expect(sheetVariantsSource).toContain('w-[calc(100%-2rem)]')
    expect(sheetVariantsSource).toContain('h-[calc(100dvh-2rem)]')
  })

  it('allows the classic variant to reach the viewport edge', () => {
    expect(sheetVariantsSource).toContain("variant: 'default'")
    expect(sheetVariantsSource).toContain("class: 'w-full max-w-none'")
    expect(sheetVariantsSource).toContain("class: 'h-dvh max-h-none'")
  })

  it('exposes size on SheetContent without forwarding it to Reka UI', () => {
    expect(sheetContentSource).toContain("size?: SheetContentVariants['size']")
    expect(sheetContentSource).toContain("size: 'sm'")
    expect(sheetContentSource).toContain("'class', 'side', 'size', 'to', 'variant'")
  })
})
