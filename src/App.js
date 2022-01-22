import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { BtnImg, BtnTheme } from "./components/themes/BtnApp.styles";
import Footer from "./components/molecules/Footer";
import Header from "./components/molecules/Header";
import NotFound from "./components/molecules/NotFound";
import Character from "./components/services/Character";
import Characters from "./components/services/Characters";
import {
  DarkTheme,
  GlobalStyles,
  LightTheme,
  StyleApp,
} from "./components/themes/Themes";
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
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
