
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageProvider.jsx'


createRoot(document.getElementById('root')).render(
    <LanguageProvider>
    <App />
    </LanguageProvider>
  
)
