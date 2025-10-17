import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting for better performance
    rollupOptions: {
      output: {
        // Remove manual chunks to prevent cross-chunk cycles
        manualChunks: undefined,
        // Optional safer split - all node_modules go to vendor chunk
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return 'vendor';
        //   }
        // }
      }
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Use esbuild with esnext target as recommended
    minify: 'esbuild',
    
    // Esbuild options with esnext target
    esbuild: {
      // Use modern target for better optimization
      target: 'esnext',
      // Keep essential settings
      keepNames: true,
      // Preserve legal comments
      legalComments: 'eof'
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'gsap'
    ],
    // Exclude problematic libraries from pre-bundling
    exclude: [
      'react-globe.gl'
    ]
  }
})
