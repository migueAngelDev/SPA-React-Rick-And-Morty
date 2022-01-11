import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

export const DarkTheme = {
  body: " #24282f",
  fontColor: "#fff",
  background: "#cd9b26",
};

export const LightTheme = {
  body: " #f2f2f2",
  fontColor: "#202329",
  background: "transparent",
};

export const GlobalStyles = createGlobalStyle`
body{ 
  background-color:${(props) => props.theme.body}
}
`;
