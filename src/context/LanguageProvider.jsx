import { useEffect, useState } from "react";
import dataJSON from "../data.json"
import PropTypes from 'prop-types';
import { LanguageContext } from "./LanguageContext";



const getInitialLanguage = () => {
    const language = localStorage.getItem('language');
    return language || 'tr';
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || getInitialLanguage()
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

