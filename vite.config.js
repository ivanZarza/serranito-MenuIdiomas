import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path"

const {
  PUBLIC_DIR = 'dist',
} = process.env

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: process.env.PUBLIC_HTML || '/',
  plugins: [
    vue(),
  ],
  build: {
    outDir: path.join(__dirname, PUBLIC_DIR),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
