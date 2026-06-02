// vite.config.js
import { defineConfig } from "file:///C:/Users/intel/Downloads/PlantMedic_Frontend/plantmedic/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/intel/Downloads/PlantMedic_Frontend/plantmedic/frontend/node_modules/@vitejs/plugin-react/dist/index.js";
import { VitePWA } from "file:///C:/Users/intel/Downloads/PlantMedic_Frontend/plantmedic/frontend/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["leaf.svg"],
      manifest: {
        name: "LeafLens",
        short_name: "LeafLens",
        description: "AI plant disease detection with bilingual results (English / Urdu).",
        theme_color: "#347d44",
        background_color: "#f3faf3",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/leaf.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any"
          },
          {
            src: "/leaf.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "maskable"
          }
        ]
      },
      workbox: {
        navigateFallback: "/index.html"
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpbnRlbFxcXFxEb3dubG9hZHNcXFxcUGxhbnRNZWRpY19Gcm9udGVuZFxcXFxwbGFudG1lZGljXFxcXGZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpbnRlbFxcXFxEb3dubG9hZHNcXFxcUGxhbnRNZWRpY19Gcm9udGVuZFxcXFxwbGFudG1lZGljXFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9pbnRlbC9Eb3dubG9hZHMvUGxhbnRNZWRpY19Gcm9udGVuZC9wbGFudG1lZGljL2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2xlYWYuc3ZnJ10sXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgbmFtZTogJ0xlYWZMZW5zJyxcclxuICAgICAgICBzaG9ydF9uYW1lOiAnTGVhZkxlbnMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQUkgcGxhbnQgZGlzZWFzZSBkZXRlY3Rpb24gd2l0aCBiaWxpbmd1YWwgcmVzdWx0cyAoRW5nbGlzaCAvIFVyZHUpLicsXHJcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjMzQ3ZDQ0JyxcclxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnI2YzZmFmMycsXHJcbiAgICAgICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLFxyXG4gICAgICAgIHN0YXJ0X3VybDogJy8nLFxyXG4gICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy9sZWFmLnN2ZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnYW55JyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3N2Zyt4bWwnLFxyXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy9sZWFmLnN2ZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnYW55JyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3N2Zyt4bWwnLFxyXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB3b3JrYm94OiB7XHJcbiAgICAgICAgbmF2aWdhdGVGYWxsYmFjazogJy9pbmRleC5odG1sJyxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1ksU0FBUyxvQkFBb0I7QUFDN1osT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUV4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsVUFBVTtBQUFBLE1BQzFCLFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLFFBQ2xCLFNBQVM7QUFBQSxRQUNULFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLGtCQUFrQjtBQUFBLE1BQ3BCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
