import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: { port: 3000, open: true },
  resolve: {
    alias: {
      '@': 'src',
      '@assets': 'src/assets',
      '@components': 'src/components',
      '@hooks': 'src/hooks',
      '@providers': 'src/providers'
    }
  }
})
