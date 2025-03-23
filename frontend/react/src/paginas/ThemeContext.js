import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'claro');
    const [isDyslexic, setIsDyslexic] = useState(() => localStorage.getItem('fontPreference') === 'dyslexic');

    // Función para cambiar la fuente
    const setFont = (font) => {
        const isDyslexic = font === 'dyslexic';
        setIsDyslexic(isDyslexic);
        localStorage.setItem('fontPreference', isDyslexic ? 'dyslexic' : 'inter');
    };

    // Función para cambiar el tema
    // Almacena en el local storage el valor del tema y lo aplica al body
    const setThemePreference = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    // Aplicar el tema al bosy cargar la página, CSS gestionará los colores
    useEffect(() => {
        document.body.classList.toggle('dyslexic', isDyslexic);
        document.body.setAttribute('data-theme', theme);
    }, [isDyslexic, theme]);

    return (
        <ThemeContext.Provider value={{ theme, isDyslexic, setFont, setThemePreference }}>
        {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
