import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['leaf.svg'],
      manifest: {
        name: 'LeafLens',
        short_name: 'LeafLens',
        description: 'AI plant disease detection with bilingual results (English / Urdu).',
        theme_color: '#347d44',
        background_color: '#f3faf3',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/leaf.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: '/leaf.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/index.html',
      },
    }),
  ],
})
