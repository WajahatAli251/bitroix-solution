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
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui-core': ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          'ui-forms': ['@radix-ui/react-select', '@radix-ui/react-checkbox', '@radix-ui/react-label'],
          'emailjs': ['@emailjs/browser'],
          'carousel': ['embla-carousel-react'],
          'charts': ['recharts'],
          'query': ['@tanstack/react-query'],
          'forms': ['react-hook-form', 'zod', '@hookform/resolvers'],
          'elevenlabs': ['@elevenlabs/react'],
          'animations': ['lucide-react'],
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          if (/mp4|webm|ogg|mov/i.test(ext)) {
            return 'assets/videos/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: 600,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn', 'console.trace'],
        passes: 4,
        dead_code: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        keep_fargs: false,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        side_effects: true,
        reduce_vars: true,
        collapse_vars: true,
        pure_getters: true,
        unsafe_math: true,
        unsafe_methods: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
        properties: {
          regex: /^_/,
        },
      },
      format: {
        comments: false,
        ascii_only: true,
        ecma: 2020,
      },
    },
    cssCodeSplit: true,
    cssMinify: 'lightningcss',
    reportCompressedSize: false,
    target: 'esnext',
    sourcemap: false,
    modulePreload: {
      polyfill: false,
    },
    assetsInlineLimit: 8192, // Inline assets < 8KB as base64
  },
  // Optimize deps with aggressive pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react', 'clsx', 'tailwind-merge'],
    exclude: ['@elevenlabs/react'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  // Enable experimental features for faster builds
  esbuild: {
    legalComments: 'none',
    target: 'esnext',
    treeShaking: true,
  },
}));
