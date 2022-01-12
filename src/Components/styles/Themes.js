import { createGlobalStyle } from "styled-components";

export const DarkTheme = {
  body: " #04111d",
  fontColor: "#fff",
  background: "#202225",
  border: "none",
};

export const LightTheme = {
  body: " #ffffff",
  fontColor: "#000",
  background: "#fff",
  border: "solid 1px #000",
};

export const GlobalStyles = createGlobalStyle`
body{ 
  background-color:${(props) => props.theme.body}
}
`;
