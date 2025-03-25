import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react-swc"


export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Asegúrate de que sea 'dist'
  },
  test: {
    globals: true, 
    enviroment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"]
    }
  }
});
