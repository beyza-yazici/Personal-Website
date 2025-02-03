import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import PropTypes from 'prop-types';

const getInitialTheme = () => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
        return JSON.parse(savedTheme);
    }
    return "light";
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || getInitialTheme()
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme;
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};