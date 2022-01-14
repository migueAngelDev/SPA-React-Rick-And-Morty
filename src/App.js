import React, { useState } from "react";
import ApiAjax from "./Components/Api/ApiFetch";
import {
  LightTheme,
  DarkTheme,
  GlobalStyles,
} from "./Components/styles/Themes";
import { ThemeProvider } from "styled-components";
import { StyleApp } from "./Components/styles/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./Components/routes/Character";
import FooterSection from "./Components/Footer/Footer";
import BtnScroll from "./Components/Scroll/BtnScroll";
import {
  BtnTheme,
  Header,
  HeaderDiv,
  BtnImg,
  ImgHome,
  BtnHome,
} from "./Components/styles/CardAndStyles";

function App() {
  const [theme, setTheme] = useState(true);

  const ThemeToggler = () => {
    theme === false ? setTheme(true) : setTheme(false);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === true ? LightTheme : DarkTheme}>
        <GlobalStyles />
        <Header>
          <HeaderDiv>
            <BtnScroll />
          </HeaderDiv>
          <HeaderDiv>
            <BtnHome href="/">
              <ImgHome src="https://www.velky.store/wp-content/uploads/2020/05/home-button.png" />
              Home
            </BtnHome>
          </HeaderDiv>
          <HeaderDiv>
            <BtnTheme onClick={() => ThemeToggler()}>
              <BtnImg src="https://cdn-icons-png.flaticon.com/512/5262/5262027.png" />
            </BtnTheme>
          </HeaderDiv>
        </Header>
        <StyleApp>
          <Routes>
            <Route path="/" element={<ApiAjax />} />
            <Route path="/character/:id" element={<Character />} />
            <Route path="*" element={<div>404 - Not Found</div>} />
          </Routes>
          <FooterSection />
        </StyleApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
