import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import PropTypes from 'prop-types';

const getBrowserTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || getBrowserTheme()
    });

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        
        localStorage.setItem("theme", theme);
        
        document.body.style.backgroundColor = theme === 'dark' ? 'rgb(17 24 39)' : 'white';
        document.getElementById('root').style.backgroundColor = theme === 'dark' ? 'rgb(17 24 39)' : 'white';
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};