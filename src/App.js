import React from "react";
import MultipleCharacters from "./container/Characters/MultipleCharacters";
import SingleCharacter from "./container/Characters/SingleCharacter";
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";
import NotFound from "./messages/NotFound";
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
            <Route path="/" element={<MultipleCharacters />} />
            <Route path="/character/:id" element={<SingleCharacter />} />
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
