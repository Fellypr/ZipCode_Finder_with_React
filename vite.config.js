import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ZipCode_Finder_with_React/',
  plugins: [react()],
})
