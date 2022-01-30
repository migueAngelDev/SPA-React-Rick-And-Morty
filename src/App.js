import React from "react";
import Header from "./components/molecules/Header";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Footer from "./components/molecules/Footer";
import NotFound from "./Messages/NotFound";
import { darkTheme, GlobalStyles, lightTheme, StyleApp } from "./theme/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./context/ThemeProvider";
import {
  BtnImg,
  BtnTheme,
} from "./components/atoms/Button/BtnTheme/BtnTheme.styles";
import { IconMoon, IconSun } from "./assets/images/icons";

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
            <BtnImg src={IconMoon} />
          ) : (
            <BtnImg src={IconSun} />
          )}
        </BtnTheme>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
