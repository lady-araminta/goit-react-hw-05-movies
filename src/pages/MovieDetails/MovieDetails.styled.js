import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DetailsSection = styled.section`
  padding: 16px;
`;
export const BackLink = styled(Link)`
  display: block;
  margin-bottom: 16px;
  color: #fff;
  background-color: navy;
  padding: 8px;
  border-radius: 4px;
  width: 96px;
  text-align: center;
  &:hover,
  &:focus {
    color: navy;
    background-color: #fff;
  }
`;
export const FilmCard = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
export const Description = styled.div`
  padding-left: 24px;
`;
export const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const Additionally = styled.ul`
  display: flex;
  gap: 16px;
`;
export const AdditLink = styled(Link)`
  display: block;
  color: #fff;
  background-color: navy;
  padding: 8px;
  border-radius: 4px;
  width: 96px;
  text-align: center;
  &:hover,
  &:focus {
    color: navy;
    background-color: #fff;
  }
`;
