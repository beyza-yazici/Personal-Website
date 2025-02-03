
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageProvider.jsx'
import { ThemeProvider } from './context/ThemeProvider.jsx'


createRoot(document.getElementById('root')).render(
    <ThemeProvider>
    <LanguageProvider>
    <App />
    </LanguageProvider>
    </ThemeProvider>
  
)
