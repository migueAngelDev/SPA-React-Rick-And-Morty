import React, { useState } from "react";
import ApiAjax from "./Api/ApiFetch";
import { LightTheme, DarkTheme, GlobalStyles } from "./Assets/Styles/Themes";
import { ThemeProvider } from "styled-components";
import { StyleApp } from "./Assets/Styles/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterSection from "./Layouts/Footer/Footer";
import BtnScroll from "./Components/utilities/Scroll /BtnScroll";
import Character from "./Router/routes/Character";
import {
  BtnTheme,
  Header,
  HeaderDiv,
  BtnImg,
  ImgHome,
  BtnHome,
  NotFound,
} from "./Assets/Styles/CardAndStyles";

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
            <Route
              path="*"
              element={
                <NotFound>
                  <h3>Error 404 - Not Found :(</h3>
                </NotFound>
              }
            />
          </Routes>
          <FooterSection />
        </StyleApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
