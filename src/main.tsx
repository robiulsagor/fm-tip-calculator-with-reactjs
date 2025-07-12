import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TipContextProvider from './context/TipContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TipContextProvider>
      <App />
    </TipContextProvider>
  </StrictMode>,
)
