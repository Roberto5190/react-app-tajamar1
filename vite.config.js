import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Habilitar variables globales para pruebas (si las necesitas)
    environment: 'jsdom', // Para pruebas de DOM
  },
});
