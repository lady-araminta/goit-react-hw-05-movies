import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 30px) / 4);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const FilmInfo = styled.span`
  display: flex;
  align-items: center;
  padding-left: 8px;
  height: 50px;
  color: #000;
  font-size: 16px;
  font-weight: 700;
`;
