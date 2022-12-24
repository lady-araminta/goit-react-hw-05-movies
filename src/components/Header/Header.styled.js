import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  outline: 1px solid red;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
export const HeaderStyled = styled.header`
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
export const HeaderLink = styled(NavLink)`
  display: block;
  color: #fff;
  background-color: navy;
  padding: 8px;
  border-radius: 4px;
  min-width: 96px;
  text-align: center;
  &:hover,
  &:focus {
    color: navy;
    background-color: #fff;
  }
`;
