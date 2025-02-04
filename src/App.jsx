import './App.css'
import Header from './components/Header'
import HeroSection from './components/HomePage/Hero'

function App() {
  

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header/>
        <HeroSection/>
    </div>
  )
}

export default App
