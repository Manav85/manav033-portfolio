import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
=======
  base: "/manav033-portfolio/",

  plugins: [react()],

>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
<<<<<<< HEAD
  esbuild: {
    // Allow JSX in .js files (needed for apps/*/index.js factory functions)
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
=======

>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
  build: {
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          gsap: ['gsap'],
          rnd: ['react-rnd'],
        },
      },
    },
  },
<<<<<<< HEAD
})
=======
})
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
