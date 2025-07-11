import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()],
  server:{
    port: 4001,
    // proxy: {
    //   '/api': {
    //     target: 'https://backend-chatapp-dkmp.onrender.com',
    //     changeOrigin: true,
    //   },
    // },
  }
})
