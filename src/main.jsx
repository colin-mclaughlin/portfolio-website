import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Filter out non-critical THREE.js warnings in development
if (import.meta.env.DEV) {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    const message = args.join(' ');
    
    // Filter out known non-critical THREE.js warnings
    if (
      message.includes('KHR_materials_pbrSpecularGlossiness') ||
      message.includes('PropertyBinding: No target node found') ||
      message.includes('Armature.quaternion')
    ) {
      return; // Suppress these warnings
    }
    
    // Allow other warnings through
    originalWarn.apply(console, args);
  };
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
