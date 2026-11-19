
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true, // This will open the browser automatically
  },
  css: {
    devSourcemap: true
  },

  build: {
    root: 'src',
    outDir: './dist',
    emptyOutDir: true, // also necessary
    sourcemap: false
  }

});