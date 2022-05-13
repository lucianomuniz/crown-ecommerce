import styled from 'styled-components';

import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
  height: 24px;
  width: 24px;
`;

export const CartIconContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 45px;
  justify-content: center;
  position: relative;
  width: 45px;
`;

export const ItemCount = styled.span`
  bottom: 12px;
  font-size: 10px;
  font-weight: bold;
  position: absolute;
`;
