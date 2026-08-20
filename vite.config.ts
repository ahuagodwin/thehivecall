import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
      '@components': path.resolve(rootDir, './src/components'),
      '@constants': path.resolve(rootDir, './src/constants'),
      '@common': path.resolve(rootDir, './src/common'),
      '@lib': path.resolve(rootDir, './src/lib'),
      '@config': path.resolve(rootDir, './src/config'),
      '@api': path.resolve(rootDir, './src/api'),
      '@data': path.resolve(rootDir, './src/data'),
      '@services': path.resolve(rootDir, './src/services'),
      '@store': path.resolve(rootDir, './src/store'),
      '@app-types': path.resolve(rootDir, './src/types'),
      '@assets': path.resolve(rootDir, './src/assets'),
    },
  },
  build: {
    chunkSizeWarningLimit: 900,
  },
})
