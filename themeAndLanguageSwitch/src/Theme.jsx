// Theme.jsx
import React, { createContext, useState } from "react";
import i18n from "./i18n";

export const ThemeContext = createContext();

 const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // 👈 this is key! updates i18next language globally
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider