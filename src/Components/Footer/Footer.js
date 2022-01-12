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
        <FooterBody>
          <FooterIcon src="https://cutewallpaper.org/21/rick-and-morty-silhouette/Details-about-Silhouette-Car-Sticker-Cartoon-Vinyl-LaptopWindowWall-Decal.jpg" />
        </FooterBody>
        <FooterBody>
          <BtnFooter>View repository</BtnFooter>
        </FooterBody>
        <FooterBody>
          <ParagraphFooter>
            by <FooterA href="#">Miguel Ángel</FooterA> 2022
          </ParagraphFooter>
        </FooterBody>
      </Footer>
    </>
  );
}
