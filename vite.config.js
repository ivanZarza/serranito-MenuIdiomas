import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: process.env.PUBLIC_HTML || '/',
  plugins: [
    vue(),
  ],
  build: {
    outDir: path.join(__dirname, "docs"),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
