import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  width: 100%;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  width: 70%;

  span {
    font-size: 16px;
  }
`;
