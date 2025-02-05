import { useEffect, useState } from "react";
import dataJSON from "../data.json"
import PropTypes from 'prop-types';
import { LanguageContext } from "./LanguageContext";



const getBrowserLanguage = () => {
    const browserLanguage = navigator.language.slice(0, 2);
    return browserLanguage === "tr" || browserLanguage === "en" ? browserLanguage : "en"
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || getBrowserLanguage()
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language])

    const toggleLanguage = () => {
        setLanguage(language === "tr" ? "en" : "tr");
    };

    const localizedData = dataJSON[language]

    return (
        <LanguageContext.Provider value={{ setLanguage, language, toggleLanguage, localizedData }}>
            {children}
        </LanguageContext.Provider>
    )
}

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired
};

