import styled from "styled-components";
import { DarkTheme, LightTheme } from "../../../theme/Theme";

export const ContainerHeader = styled.header`
  height: 80px;
  position: sticky;
  background-color: ${(props) => props.theme.headerBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  border-bottom: 1px solid #000;
`;

export const Container = styled.div`
  margin: 20px;
`;
