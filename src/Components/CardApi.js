import styled from "styled-components";

export const Header = styled.header`
  height: 100px;
  border-bottom: 2px solid #fff;
  display: flex;
  justify-content: space-around;
  position: sticky;
  background-color: #24282f;
  top: 0;
  margin: 0;
`;

export const HeaderHome = styled.a`
  color: #39ff18;
  text-decoration: none;
  font-size: 2rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardFieldSet = styled.div`
  background-color: #3c3e44;
  width: 500px;
  height: 200px;
  margin: 10px auto;
  border-radius: 10px;
  display: flex;
  border: 1px solid #000;
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
  color: white;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #39ff18;
  }
`;

export const CardParagraph = styled.p`
  color: white;
  margin: 1.5rem 0;
`;

export const Footer = styled.footer`
  border-top: 1px solid #fff;
  background-color: #24282f;
  height: 200px;
`;

export const FooterIcon = styled.img`
  width: 40px;
  border-radius: 50px;
`;
