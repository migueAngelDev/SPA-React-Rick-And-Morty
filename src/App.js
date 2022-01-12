import React, { useState } from "react";
import ApiAjax from "./Components/Api/ApiFetch";
import {
  LightTheme,
  DarkTheme,
  GlobalStyles,
} from "./Components/styles/Themes";
import { ThemeProvider } from "styled-components";
import { StyleApp } from "./Components/styles/StyleApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./Components/routes/Character";
import FooterSection from "./Components/Footer/Footer";
import {
  CardWrapper,
  BtnTheme,
  Header,
  HeaderA,
  HeaderDiv,
  BtnImg,
  ImgHome,
  BtnHome,
  WrapperFilter,
  FieldSetFilter,
  FilterInput,
  IconSearch,
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
            <HeaderA href="#">Rick And Morty API React</HeaderA>
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
        <WrapperFilter>
          <FieldSetFilter>
            <IconSearch src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" />
            <FilterInput type="search" placeholder="Search..." />
          </FieldSetFilter>
        </WrapperFilter>
        <StyleApp>
          <Routes>
            <Route
              path="/"
              element={
                <CardWrapper>
                  <ApiAjax />
                </CardWrapper>
              }
            />
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
