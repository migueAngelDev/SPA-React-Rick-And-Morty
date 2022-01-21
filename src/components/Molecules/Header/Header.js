import React from "react";
import ParagraphHeader from "../../Atoms/ParagraphHeader/ParagraphHeader";
import { Container, ContainerHeader } from "./Header.Styles";

export default function Header() {
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
