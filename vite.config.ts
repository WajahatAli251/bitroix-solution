import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
    cssCodeSplit: true,
    minify: 'esbuild',
    target: 'es2020',
    reportCompressedSize: false,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler')) return 'react-vendor';
            if (id.includes('@radix-ui')) return 'radix-vendor';
            if (id.includes('framer-motion')) return 'motion-vendor';
            if (id.includes('lucide-react') || id.includes('react-icons')) return 'icons-vendor';
            if (id.includes('@supabase')) return 'supabase-vendor';
            if (id.includes('react-helmet')) return 'seo-vendor';
            return 'vendor';
          }
        },
      },
    },
  },
}));
