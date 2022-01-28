import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/molecules/Footer";
import Header from "./components/molecules/Header";
import NotFound from "./components/molecules/NotFound";
import { darkTheme, GlobalStyles, lightTheme, StyleApp } from "./themes/Themes";
import Character from "./services/Character";
import Characters from "./services/Characters";
import { useTheme } from "./context/ThemeProvider";
import {
  BtnImg,
  BtnTheme,
} from "./components/atoms/Buttons/BtnTheme/BtnTheme.styles";
function App() {
  const themeContext = useTheme();

  const THEME_OPTIONS = {
    light: lightTheme,
    dark: darkTheme,
  };

  return (
    <ThemeProvider theme={THEME_OPTIONS[themeContext.theme]}>
      <GlobalStyles />
      <BrowserRouter>
        <Header onClick={themeContext.onToggleTheme} />
        <StyleApp>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/character/:id" element={<Character />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StyleApp>
        <BtnTheme onClick={themeContext.onToggleTheme}>
          {!themeContext.isDarkTheme ? (
            <BtnImg src="https://www.freeiconspng.com/uploads/moon-icon-32.png" />
          ) : (
            <BtnImg src="https://cdn-icons-png.flaticon.com/512/97/97199.png" />
          )}
        </BtnTheme>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
