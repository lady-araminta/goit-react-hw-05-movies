import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
`;
export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 50px) / 6);
  justify-content: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const StarName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 12px;
`;
