import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  // optimizeDeps: {
  //   include: ['react-pdf'],
  // },
  // build: {
  //   commonjsOptions: {
  //     include: [/react-pdf/, /pdfjs-dist/],
  //   },
  // },
});