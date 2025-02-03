import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

function Header() {
    const { localizedData, toggleLanguage, language } = useLanguage();
    const { theme, setTheme } = useTheme();
    const { heroSection } = localizedData;

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header className={`container mx-auto px-4 py-8 relative ${theme === 'dark' ? 'dark' : ''}`}>
            
            <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                    onClick={toggleTheme}
                    className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
                <button
                    onClick={toggleLanguage}
                    className="px-3 py-1 text-sm rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors"
                >
                    {language === 'tr' ? 'EN' : 'TR'}
                </button>
            </div>

            <div className="max-w-3xl">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">
                    {heroSection.greeting}
                </h1>

                <div className="space-y-4">
                    <p className="text-xl dark:text-gray-200">
                        {heroSection.title}
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        {heroSection.description}
                    </p>
                </div>

                <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
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
                        className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href={heroSection.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;