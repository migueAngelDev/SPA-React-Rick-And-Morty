import React, { useState } from "react";
import ApiAjax from "./Components/ApiAjax";
import { LightTheme, DarkTheme, GlobalStyles } from "./Components/Themes";
import { ThemeProvider } from "styled-components";
import { StyleApp } from "./Components/StyleApp";
import {
  CardWrapper,
  Footer,
  FooterIcon,
  Header,
  HeaderHome,
} from "./Components/CardApi";

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
        <HeaderHome href="#">Rick And Morty API React</HeaderHome>
        <button onClick={() => ThemeToggler()}>Mode Dark</button>
      </Header>
      <StyleApp>
        <CardWrapper>
          <ApiAjax />
        </CardWrapper>
        <Footer>
          {/* <FooterIcon src="https://cutewallpaper.org/21/rick-and-morty-silhouette/Details-about-Silhouette-Car-Sticker-Cartoon-Vinyl-LaptopWindowWall-Decal.jpg" /> */}
        </Footer>
      </StyleApp>
    </ThemeProvider>
  );
}

export default App;
