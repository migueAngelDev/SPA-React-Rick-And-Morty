import React from "react";
import { AnchorBtn } from "../../atoms/Button/Btns/Btns";

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
            <Icon src="https://cutewallpaper.org/21/rick-and-morty-silhouette/Details-about-Silhouette-Car-Sticker-Cartoon-Vinyl-LaptopWindowWall-Decal.jpg" />
          </Container>
          <Container>
            <AnchorBtn
              target="_blank"
              href="https://github.com/migueAngelDev/SPA-React-Rick-And-Morty"
            >
              Repository
            </AnchorBtn>
          </Container>
          <Container>
            <Paragraph>
              by {""}
              <Anchor target="_blank" href="https://github.com/migueAngelDev">
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
