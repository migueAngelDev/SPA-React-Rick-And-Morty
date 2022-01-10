import "./App.css";
import React, { useState } from "react";
import ApiAjax from "./Components/ApiAjax";
import { LightTheme, DarkTheme, GlobalStyles } from "./Components/Themes";
import styled, { ThemeProvider } from "styled-components";
import { StyleApp } from "./Components/StyleApp";

// const StyleApp = styled.div`
//   color: ${(props) => props.theme.fontColor};
// `;

function App() {
  const [theme, setTheme] = useState(true);

  const ThemeToggler = () => {
    theme === false ? setTheme(true) : setTheme(false);
  };

  return (
    <ThemeProvider theme={theme === true ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <StyleApp>
        <button onClick={() => ThemeToggler()}>Mode Dark</button>
        <ApiAjax />
      </StyleApp>
    </ThemeProvider>
  );
}

export default App;
