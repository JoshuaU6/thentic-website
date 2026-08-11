import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add js-ready class after mount so scroll animations only run when JS is active
// Without this class, all content is visible by default (no blank pages)
document.body.classList.add('js-ready');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
