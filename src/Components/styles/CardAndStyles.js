import styled from "styled-components";

/*************Loading****************/

export const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/************Header***************/

export const Header = styled.header`
  height: 100px;
  position: sticky;
  background-color: #04111d;
  display: flex;
  justify-content: space-between;
  top: 0px;
  border-bottom: 1px solid #fff;
`;

export const HeaderDiv = styled.div`
  margin: 20px;
`;

export const BtnHeader = styled.a`
  color: #39ff18;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  &:hover {
    color: #9dff00;
  }
`;
/***************Filter**************/

export const WrapperFilter = styled.div`
  height: 3.5rem;
  background-color: #04111d;
  margin: 0;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FieldSetFilter = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 11px;
`;

export const SearchInput = styled.input`
  border: 1px solid #fff;
  padding: 0.7rem;
  outline: none;
  width: 300px;
  font-size: 0.8rem;
  text-shadow: 0 0 1px black;
  letter-spacing: 2px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const IconSearch = styled.img`
  width: 2rem;
  background-color: #fff;
  border: 1px solid #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
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
  width: 40px;
  border-radius: 1rem;
`;

export const ImgHome = styled(BtnImg)`
  border-radius: 0;
  margin: 0 10px 0 0;
`;

export const BtnHome = styled.a`
  cursor: pointer;
  display: flex;
  color: white;
  text-decoration: none;
  align-items: center;

  &:hover {
    color: #38ad24;
  }
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

export const BtnFooter = styled.a`
  color: #000;
  background-color: #47631b;
  cursor: pointer;
  font-size: 0.9rem;
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background-color: #608d1a;
  }
`;

export const ParagraphFooter = styled.p`
  color: white;
  font-size: 0.85rem;
`;

/**********Fi**********/
export const Footer = styled.footer`
  border-top: 1px solid #fff;
  background-color: #04111d;
  height: 400px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
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
