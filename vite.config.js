import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base:"/ecommerce/",//"for github pages"
  plugins: [react(),
    tailwindcss(),
  ],
})
