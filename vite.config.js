import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vercel 部署通常不需要配 base，或者配成 '/'
  base: '/',
})