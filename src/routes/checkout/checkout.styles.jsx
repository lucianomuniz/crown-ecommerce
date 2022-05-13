import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  min-height: 90vh;
  width: 55%;
`;

export const CheckoutHeader = styled.div`
  border-bottom: 1px solid darkgrey;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
`;

export const Total = styled.span`
  font-size: 36px;
  margin-left: auto;
  margin-top: 30px;
`;
