import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

function Header() {
    const { toggleLanguage, language } = useLanguage();
    const { toggleTheme, theme } = useTheme();

    return (
        <header className='flex items-center justify-end gap-3 font-semibold text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200'>
            <div className='flex justify-center items-center gap-2'>
                <label
                    htmlFor="language-switch"
                    className="relative inline-block w-8 h-4"
                    aria-label="Dil değiştirme"
                >
                    <input
                        id="language-switch"
                        type="checkbox"
                        className="opacity-0 w-0 h-0 peer"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                    />
                    <span
                        className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 dark:bg-gray-600 transition-all duration-400 ease-in-out peer-checked:bg-blue-500 rounded-full"
                        aria-hidden="true"
                    ></span>
                    <span
                        className="absolute w-3 h-3 left-0.5 bottom-0.5 bg-white dark:bg-gray-200 transition-all duration-400 ease-in-out transform peer-checked:translate-x-4 rounded-full"
                    ></span>
                </label>
                <p className="dark:text-gray-300">Dark Mode</p>
            </div>
            <p className="dark:text-gray-400">|</p>

            {language === "tr" ? (
                <p 
                    onClick={() => toggleLanguage("en")}
                    className="cursor-pointer dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors duration-200"
                    role="button"
                    aria-label="Switch to English"
                > 
                    SWITCH TO <span className="text-[#e92577] dark:text-[#ff4d8d] font-bold">ENGLISH</span>
                </p>
            ) : (
                <p 
                    onClick={() => toggleLanguage("tr")}
                    className="cursor-pointer dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors duration-200"
                    role="button"
                    aria-label="Türkçe'ye geçiş yap"
                >
                    <span className="text-[#e92577] dark:text-[#ff4d8d] font-bold">TÜRKÇE</span>&apos;YE GEÇ
                </p>
            )}
        </header>
    )
}

export default Header;