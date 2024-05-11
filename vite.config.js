import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  index:{
    proxy:{
      '/' :{
        target: "http://localhost:3000"  || "https://testbotbackend-10.onrender.com ",
        changeOrigin: true
      }
    }
  }
})
