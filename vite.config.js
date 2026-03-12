import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Permet au site de fonctionner dans n'importe quel sous-dossier (comme sur WAMP)
})
