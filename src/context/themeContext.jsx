import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('currentTheme')) || false);

  const handleThemeChange = () => {
    setTheme(!theme);
    localStorage.setItem('currentTheme', !theme)
  }

  return (
    <GlobalContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </GlobalContext.Provider>
  )

}