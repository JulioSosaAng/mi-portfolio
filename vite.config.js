import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mi-portfolio/", // ¡Asegúrate de que el nombre coincida exactamente!
  plugins: [react()],
});
