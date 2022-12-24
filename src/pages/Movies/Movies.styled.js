import styled from 'styled-components';

export const MoviesSection = styled.section`
  padding: 16px;
`;
export const SearchBar = styled.form`
  display: flex;
  margin: 32px auto;
  justify-content: center;
`;
export const SearchInput = styled.input`
  width: 240px;
  margin-right: 16px;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
`;
export const Btn = styled.button`
  cursor: pointer;
  border: 1px solid gray;
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 16px;
  &:hover,
  &:focus {
    color: #fff;
    background-color: navy;
  }
`;
