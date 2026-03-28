import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg:  { quality: 82 },
      jpeg: { quality: 82 },
      png:  { quality: 82, compressionLevel: 9 },
      webp: { lossless: false, quality: 82 },
      svg: {
        multipass: true,
        plugins: [
          { name: 'preset-default' },
          { name: 'removeViewBox', active: false },
        ],
      },
    }),
  ],
})
