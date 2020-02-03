import React from 'react';
import { useSelector } from 'react-redux';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './CheckoutPage.styles';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/selectors/cart.selectors';
import { selectCurrentUser } from '../../store/selectors/user.selectors';

const CART_INFO = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        {CART_INFO.map(info => (
          <HeaderBlockContainer key={info}>
            <span>{info}</span>
          </HeaderBlockContainer>
        ))}
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      {total && currentUser ? (
        <>
          <WarningContainer>
            *Please use the following test credit card for payments*
            <br /> 4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
          </WarningContainer>
          <StripeButton email={currentUser.email} price={total} />
        </>
      ) : (
        !currentUser && (
          <WarningContainer>Please sign in to proceed</WarningContainer>
        )
      )}
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
