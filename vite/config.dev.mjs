// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    chunkSizeWarningLimit: 1600, // Aumentei um pouco mais
    rollupOptions: {
      output: {
        manualChunks: {
          phaser: ["phaser"],
          // Cria chunks específicos para organizar melhor
        },
      },
    },
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  optimizeDeps: {
    include: ["phaser"],
    force: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
  },
});
