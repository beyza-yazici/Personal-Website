import { useLanguage } from "../hooks/useLanguage";


function Header() {

    const {localizedData, toggleLanguage, language} = useLanguage();
    const { heroSection } = localizedData;



  return (
    <header className="container mx-auto px-4 py-8 relative">
    
    <div className="absolute top-4 right-4 flex items-center gap-2">
        <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-sm rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors"
        >
            {language === 'tr' ? 'EN' : 'TR'}
        </button>
    </div>

   
    <div className="max-w-3xl">
        
        <h1 className="text-4xl font-bold mb-4">
            {heroSection.greeting}
        </h1>

        
        <div className="space-y-4">
            <p className="text-xl">
                {heroSection.title}
            </p>
            <p className="text-lg text-gray-600">
                {heroSection.description}
            </p>
        </div>

        
        <div className="mt-6 text-sm text-gray-500">
            <p>{heroSection.currentStatus}</p>
            <a 
                href={`mailto:${heroSection.email}`}
                className="text-pink-500 hover:text-pink-600 transition-colors"
            >
                {heroSection.email}
            </a>
        </div>

        
        <div className="mt-6 flex gap-4">
            <a 
                href={heroSection.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors"
            >
                LinkedIn
            </a>
            <a 
                href={heroSection.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors"
            >
                GitHub
            </a>
        </div>
    </div>
</header>
  )
}

export default Header