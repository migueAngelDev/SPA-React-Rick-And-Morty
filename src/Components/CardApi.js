import styled from "styled-components";

export const Header = styled.header`
  height: 100px;
  background-color: #dc103e;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardFieldSet = styled.div`
  background-color: #3c3e44;
  width: 500px;
  height: 200px;
  min-width: 500px;
  margin: 10px auto;
  border-radius: 10px;
  display: flex;
`;

export const CardBody = styled.div`
  margin: 0 10px;
`;

export const CardImg = styled.img`
  width: 200px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Cardh1 = styled.h1`
  color: white;
`;

export const CardParagraph = styled.p`
  color: white;
`;
