import styled from "styled-components";
import { DarkTheme, LightTheme } from "../../../themes/Themes";

export const Home = styled.p`
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.headerColor};
`;
