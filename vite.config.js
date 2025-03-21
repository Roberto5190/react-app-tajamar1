import { defineConfig } from 'vite';
import viteStaticCopy from 'vite-plugin-static-copy';

// Usar `require` para importar el plugin en lugar de `import`
const viteStaticCopy = require('vite-plugin-static-copy');

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/assets/*',
          dest: 'dist/assets/',
        },
      ],
    }),
  ],
});
