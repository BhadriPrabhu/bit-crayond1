import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Screen from './screens/screen5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Screen/>
  </StrictMode>,
)
