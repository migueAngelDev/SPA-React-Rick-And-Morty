import React from "react";
import {
  BtnFooter,
  FooterA,
  ParagraphFooter,
  Footer,
  FooterIcon,
  FooterBody,
} from "../styles/CardAndStyles";

export default function FooterSection() {
  return (
    <>
      <Footer>
        <div>
          <FooterBody>
            <FooterIcon src="https://cutewallpaper.org/21/rick-and-morty-silhouette/Details-about-Silhouette-Car-Sticker-Cartoon-Vinyl-LaptopWindowWall-Decal.jpg" />
          </FooterBody>
          <FooterBody>
            <BtnFooter
              target="_blank"
              href="https://github.com/migueAngelDev/SPA-React-Rick-And-Morty"
            >
              Repository
            </BtnFooter>
          </FooterBody>
          <FooterBody>
            <ParagraphFooter>
              by{" "}
              <FooterA target="_blank" href="https://github.com/migueAngelDev">
                Miguel Ángel
              </FooterA>{" "}
              2022
            </ParagraphFooter>
          </FooterBody>
        </div>
      </Footer>
    </>
  );
}
