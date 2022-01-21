import React from "react";
import {
  Anchor,
  Container,
  FooterContainer,
  Icon,
  Paragraph,
  AnchorBtn,
} from "./FooterSection.Styles";

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
