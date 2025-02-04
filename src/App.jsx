import './App.css'
import Header from './components/Header'
import HeroSection from './components/HomePage/Hero'
import Skills from './components/HomePage/Skills'

function App() {
  

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header/>
        <HeroSection/>
        <Skills/>
    </div>
  )
}

export default App
