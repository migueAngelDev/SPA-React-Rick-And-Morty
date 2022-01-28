import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const onToggleTheme = () => setDarkTheme(!isDarkTheme);

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        onToggleTheme,
        theme: isDarkTheme ? "dark" : "light",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  return context;
};
