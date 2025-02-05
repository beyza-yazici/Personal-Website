import './App.css'
import Header from './components/Header'
import HeroSection from './components/HomePage/Hero'
import Profile from './components/HomePage/Profile'
import Projects from './components/HomePage/Projects'
import Skills from './components/HomePage/Skills'

function App() {
  

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header/>
        <HeroSection/>
        <Skills/>
        <Profile/>
        <Projects/>
    </div>
  )
}

export default App
