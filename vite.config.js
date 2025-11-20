import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })  
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@a': path.resolve(__dirname, './src/assets'),
      '@c': path.resolve(__dirname, './src/components'),
      '@l': path.resolve(__dirname, './src/layouts'),
      '@p': path.resolve(__dirname, './src/plugins'),
      '@r': path.resolve(__dirname, './src/router'),
      '@s': path.resolve(__dirname, './src/stores'),
      '@u': path.resolve(__dirname, './src/utils'),
      '@v': path.resolve(__dirname, './src/views'),
      '@st': path.resolve(__dirname, './src/styles'),
      '@@': path.resolve(__dirname, './src/composables')
    }
  }
})
