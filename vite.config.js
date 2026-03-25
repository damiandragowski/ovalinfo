import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    watch: {
      usePolling: true,
      interval: 100,
      binaryInterval: 300,
      ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**']
    }
  }
})
