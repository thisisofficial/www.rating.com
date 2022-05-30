import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://github.com/thisisofficial/www.rating.com
export default defineConfig({
  base:"/www.rating.com/",
  plugins: [react()]
})
