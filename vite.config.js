import { defineConfig } from 'vite';
import {viteStaticCopy} from 'vite-plugin-static-copy';


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
