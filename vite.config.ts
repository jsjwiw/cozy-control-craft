import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'  // oder was du nutzt

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/cozy-control-craft/' : './',   // ← das ist smart: lokal ./, Prod den Repo-Pfad

  plugins: [react()],

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  // Optional: wenn du noch mehr Kontrolle willst
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}))
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
