import styled from "styled-components";

export const WrapperFilter = styled.div`
  height: 6rem;
  background-color: #15adcf;
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
  padding: 0.9rem;
  outline: none;
  width: 400px;
  font-size: 1rem;
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
