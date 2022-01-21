import styled from "styled-components";
import { DarkTheme, LightTheme } from "../../Themes/Themes";

export const Home = styled.p`
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.headerColor};
`;
