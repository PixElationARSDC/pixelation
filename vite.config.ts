import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths"
import sitemap from 'vite-plugin-sitemap'
import compression from "vite-plugin-compression"
import viteCompression from 'vite-plugin-compression2'
import { visualizer } from 'rollup-plugin-visualizer'
import postcssPresetEnv from 'postcss-preset-env'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    sitemap({
      hostname: "https://pixelation.live",
      dynamicRoutes: ["/", "/events", "/about-us", "/our-work", "/our-team"],
    }),
    compression(),
    viteCompression({
      algorithm: 'brotliCompress'
    }),
    visualizer({
      filename: './dist/stats.html',
      open: true
    })
  ],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 0,
          autoprefixer: { grid: true }
        })
      ]
    }
  },
  build: {
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['some-large-dependency']
  }
});