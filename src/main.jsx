import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from 'App.jsx'
import Rotas from 'Rotas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rotas />
  </StrictMode>,
)
