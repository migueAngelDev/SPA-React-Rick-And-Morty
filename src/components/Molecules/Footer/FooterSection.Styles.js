import styled from "styled-components";

export const Anchor = styled.a`
  color: white;
  font-size: 0.85rem;
  text-decoration: none;
  border-bottom: 1px solid orange;

  &:hover {
    color: orange;
    border: none;
  }
`;

export const AnchorBtn = styled.a`
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

export const Paragraph = styled.p`
  color: white;
  font-size: 0.85rem;
`;

export const FooterContainer = styled.footer`
  border-top: 1px solid #fff;
  background-color: #04111d;
  height: 400px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  margin: 40px 0;
`;

export const Icon = styled.img`
  width: 35px;
  border-radius: 50px;
`;
