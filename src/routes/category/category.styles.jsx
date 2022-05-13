import styled from 'styled-components';

export const CategoryContainer = styled.div`
  column-gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
