import styled from "styled-components";

/************Header***************/

export const Header = styled.header`
  height: 100px;
  border-bottom: 1px solid #fff;
  position: sticky;
  background-color: #04111d;
  display: flex;
  justify-content: space-between;
  top: 0px;
`;

export const HeaderDiv = styled.div`
  margin: 20px;
`;

export const HeaderA = styled.a`
  color: #39ff18;
  text-decoration: none;
  font-size: 2rem;
  &:hover {
    color: #9dff00;
  }
`;

/*******************Cards**********************/

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardFieldSet = styled.div`
  border: ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.background};
  width: 500px;
  height: 200px;
  margin: 10px auto;
  border-radius: 10px;
  display: flex;
`;

export const CardBody = styled.div`
  margin: 10px 10px;
`;

export const CardImg = styled.img`
  width: 200px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const CardA = styled.a`
  font-size: 1.7rem;
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #38ad24;
  }
`;

export const CardParagraph = styled.p`
  color: ${(props) => props.theme.fontColor};
  margin: 1.5rem 0;
`;
/**********Buttons************/

export const BtnTheme = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const BtnImg = styled.img`
  width: 50px;
  border-radius: 1rem;
`;

/******************Footer******************/

export const FooterA = styled.a`
  color: white;
  font-size: 0.85rem;
  text-decoration: none;
  border-bottom: 1px solid orange;

  &:hover {
    color: orange;
    border: none;
  }
`;

export const BtnFooter = styled.button`
  color: white;
  background-color: #995a5a;
  cursor: pointer;
  font-size: 0.85rem;
  border: none;
  padding: 15px 10px;
  border-radius: 5px;

  &:hover {
    color: green;
  }
`;

export const ParagraphFooter = styled.p`
  color: white;
  font-size: 0.85rem;
`;

export const Footer = styled.footer`
  border-top: 1px solid #fff;
  background-color: #04111d;
  height: 400px;
  display: inherit;
  text-align-last: center;
`;

export const FooterBody = styled.div`
  margin: 40px 0;
`;

export const FooterIcon = styled.img`
  width: 35px;
  border-radius: 50px;
`;

/****************Characters*************/

export const CharacterFieldSet = styled.div`
  background-color: #202225;
  max-width: 450px;
  width: 90vw;
  height: 750px;
  min-height: 70vh;
  margin: 10px auto;
  border-radius: 10px;
`;
export const CharacterCardBody = styled.div`
  margin: 10px 10px;
  text-align-last: center;
`;

export const CharacterCardImg = styled.img`
  width: 300px;
  margin: 10px auto;
  border-radius: 10px;
  border: 1px solid black;
`;

export const CharacterCardP = styled.p`
  color: white;
  font-size: 2rem;
  margin: 10px auto;
`;

export const CharacterCardParagraph = styled.p`
  color: white;
  margin: 1.5rem 0;
`;
