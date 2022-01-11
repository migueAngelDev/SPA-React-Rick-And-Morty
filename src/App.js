import React, { useState } from "react";
import ApiAjax from "./Components/ApiAjax";
import { LightTheme, DarkTheme, GlobalStyles } from "./Components/Themes";
import { ThemeProvider } from "styled-components";
import { StyleApp } from "./Components/StyleApp";
import { CardWrapper, Header } from "./Components/CardApi";

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
      <Header>
        <button onClick={() => ThemeToggler()}>Mode Dark</button>
      </Header>
      <StyleApp>
        <CardWrapper>
          <ApiAjax />
        </CardWrapper>
      </StyleApp>
    </ThemeProvider>
  );
}

export default App;
