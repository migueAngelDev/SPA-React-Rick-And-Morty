import styled, { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: " #131033",
  fontColor: "#fff",
  background: "#00000073",
  border: "none",
  headerColor: "#333",
  headerBackground: "#fff",
};

export const lightTheme = {
  body: " #ffffff",
  fontColor: "#000",
  background: "#fff",
  headerColor: "#fff",
  headerBackground: "#333390",
  border: "solid 1px #000",
};

export const GlobalStyles = createGlobalStyle`
body{ 
  background-color:${(props) => props.theme.body}
}
`;

export const StyleApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
