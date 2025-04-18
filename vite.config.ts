/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 8080,
    open: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
  }
})
