import React, { useState } from "react";
import {
  LightTheme,
  DarkTheme,
  GlobalStyles,
} from "./components/Themes/Themes";
import { ThemeProvider } from "styled-components";
import { StyleApp } from "./components/Themes/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./components/api/Characters/Characters";
import Character from "./components/api/Character/Character";
import FooterSection from "./components/Molecules/Footer/FooterSection";
import NotFound from "./components/Molecules/NotFound/Notfound";
import Header from "./components/Molecules/Header/Header";
import { BtnImg, BtnTheme } from "./components/Themes/BtnApp.Styles";

function App() {
  const [theme, setTheme] = useState(true);

  const ThemeToggler = () => {
    !theme ? setTheme(true) : setTheme(false);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
        <GlobalStyles />
        <Header />
        {/* <div style={{ height: 100, backgroundColor: "#333" }}>
          <BtnTheme onClick={ThemeToggler}>
            <BtnImg src="https://icons-for-free.com/iconfiles/png/512/forecast+moon+sun+icon+weather+icon-1320196360010861658.png" />
          </BtnTheme>
        </div> */}
        <StyleApp>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/character/:id" element={<Character />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StyleApp>
        <FooterSection />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
