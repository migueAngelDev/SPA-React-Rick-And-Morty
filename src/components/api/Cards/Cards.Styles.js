import styled from "styled-components";

export const CardsFieldSet = styled.div`
  border: ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.background};
  width: 500px;
  height: 200px;
  margin: 10px auto;
  border-radius: 10px;
  display: flex;
`;

export const CardsBody = styled.div`
  margin: 10px 10px;
`;

export const CardsImg = styled.img`
  width: 200px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const CardsA = styled.a`
  font-size: 1.7rem;
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #38ad24;
  }
`;

export const CardsParagraph = styled.p`
  color: ${(props) => props.theme.fontColor};
  margin: 1.5rem 0;
`;
