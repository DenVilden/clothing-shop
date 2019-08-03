import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  min-height: 90vh;
  width: 55%;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  border-bottom: 1px solid darkgrey;
  display: flex;
  height: 40px;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  font-size: 36px;
  margin-left: auto;
  margin-top: 30px;
`;

export const WarningContainer = styled.div`
  color: red;
  font-size: 24px;
  margin-top: 40px;
  text-align: center;
`;
