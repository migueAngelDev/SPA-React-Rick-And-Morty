import styled from "styled-components";

export const Btn = styled.button`
  border-radius: 0.5rem;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.background};
  padding: 0.5rem 1rem;
  border: 1px solid #cd9b26;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.background + 90};
    transition: all 0.5s ease-in-out;
  }
`;
