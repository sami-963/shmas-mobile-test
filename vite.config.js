import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shmas-mobile-test/', // هذا اسم المشروع على GitHub
  plugins: [react()],
})
