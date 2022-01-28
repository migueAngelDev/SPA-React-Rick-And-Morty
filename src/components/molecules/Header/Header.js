import React from "react";
import ParagraphHeader from "../../atoms/ParagraphHeader";
import { Container, ContainerHeader } from "./Header.styles";

export default function Header({ themeContext }) {
  return (
    <ContainerHeader>
      <Container>
        <div>
          <ParagraphHeader />
        </div>
      </Container>
    </ContainerHeader>
  );
}
