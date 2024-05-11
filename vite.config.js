import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  index:{
    proxy:{
      '/' :{
        target: 'https://testbotbackend-8.onrender.com',
        changeOrigin: true
      }
    }
  }
})
