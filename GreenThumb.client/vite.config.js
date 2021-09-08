import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../bcw-green-thumb/client',
    sourcemap: false
  },
  server: {
    port: 8080
  }
})
