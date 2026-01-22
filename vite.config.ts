import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts'
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    vue(),
    dts({ rollupTypes: true }),
  ],
  optimizeDeps: {
    exclude: ['vue', '@inertiajs/vue3', '@inertiajs/core'],
  },
  build: {
    manifest: true,
    sourcemap: true,
    outDir: 'dist',
    copyPublicDir: false,
    lib: {
      entry: fileURLToPath(new URL('./src-js/main.ts', import.meta.url)),
      formats: ['es'],
      fileName: () => `ui.js`,
    },
    rollupOptions: {
      external: ['vue', '@inertiajs/vue3', '@inertiajs/core'],
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src-js', import.meta.url)),
    }
  }
});
