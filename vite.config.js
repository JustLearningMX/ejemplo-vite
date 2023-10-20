import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ejemplo-vite/',
  build: {
    outDir: 'docs', // Configura la carpeta de salida como 'docs'
  },
  plugins: [react()],
})