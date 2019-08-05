import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './CheckoutPage.styles';
import CheckoutItemContainer from '../../components/CheckoutItem/CheckoutItem.container';
import StripeButton from '../../components/StripeButton/StripeButton';

const CheckoutPage = ({ cartItems, total }) => {
  const cartInfo = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        {cartInfo.map(info => (
          <HeaderBlockContainer key={info}>
            <span>{info}</span>
          </HeaderBlockContainer>
        ))}
      </CheckoutHeaderContainer>

      {cartItems.map(cartItem => (
        <CheckoutItemContainer key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br /> 4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
      <StripeButton price={total} />
    </CheckoutPageContainer>
  );
};

CheckoutPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      imageUrl: PropTypes.string,
      price: PropTypes.number
    })
  ).isRequired,
  total: PropTypes.number.isRequired
};

export default CheckoutPage;
