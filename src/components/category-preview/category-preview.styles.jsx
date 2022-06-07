import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const Title = styled(Link)`
  cursor: pointer;
  font-size: 28px;
  margin-bottom: 25px;
`;

export const Preview = styled.div`
  column-gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
