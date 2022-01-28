import styled from "styled-components";
import { DarkTheme, LightTheme } from "../../../theme/Theme";

export const Home = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.headerColor};
`;
