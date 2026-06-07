import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      manifest: {
        name: "Urban Harvest Hub",
        short_name: "Urban Harvest",
        description:
          "Sustainable lifestyle platform for eco-conscious communities",
        theme_color: "#2E7D32",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait-primary",
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot}",
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\./i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 3600, // 1 hour
              },
            },
          },
          {
            urlPattern: /^https:\/\/images\.unsplash\.com\//i,
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 86400 * 30, // 30 days
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\//i,
            handler: "CacheFirst",
            options: {
              cacheName: "font-cache",
              expiration: {
                maxAgeSeconds: 86400 * 365, // 1 year
              },
            },
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-router": ["react-router-dom"],
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
