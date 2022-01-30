import React from "react";
import { IconRick } from "../../../assets/images/icons/index";
import { AnchorBtn } from "../../atoms/Button/Btns/Btns";
import { dataFooter } from "../../../assets/data";
import {
  Anchor,
  Container,
  FooterContainer,
  Icon,
  Paragraph,
} from "./Footer.style";

export default function FooterSection() {
  return (
    <>
      <FooterContainer>
        <div>
          <Container>
            <Icon src={IconRick} />
          </Container>
          <Container>
            <AnchorBtn target="_blank" href={dataFooter.project}>
              Repository
            </AnchorBtn>
          </Container>
          <Container>
            <Paragraph>
              by {""}
              <Anchor target="_blank" href={dataFooter.repository}>
                Miguel Ángel {""}
              </Anchor>
              2022
            </Paragraph>
          </Container>
        </div>
      </FooterContainer>
    </>
  );
}
