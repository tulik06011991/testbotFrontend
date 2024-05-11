import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // Ishlab chiqarilgan fayllar katalogi (masalan, 'dist')
  },
  server: {
    port: 3000, // Server port
  },
  base: '/', // Brauzer uchun manba manzili
  optimizeDeps: {
    include: ['react', 'react-dom'], // So'rov qilishni optimallashtirish
  },
})
