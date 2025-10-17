import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js and related libraries into their own chunk
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          // Separate React and related libraries
          'react-vendor': ['react', 'react-dom'],
          // Separate other large libraries
          'vendor': ['gsap', 'emailjs-com', 'react-globe.gl', 'maath']
        }
      }
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'gsap',
      'react-globe.gl'
    ]
  }
})
