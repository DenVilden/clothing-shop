import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './CheckoutPage.styles';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.container';
import StripeButton from '../../components/StripeButton/StripeButton';

const CheckoutPage = ({ cartInfo, cartItems, total, currentUser }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      {cartInfo.map(info => (
        <HeaderBlockContainer key={info}>
          <span>{info}</span>
        </HeaderBlockContainer>
      ))}
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>
    {total ? (
      <>
        <WarningContainer>
          *Please use the following test credit card for payments*
          <br /> 4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </WarningContainer>
        <StripeButton email={currentUser.email} price={total} />
      </>
    ) : null}
  </CheckoutPageContainer>
);

CheckoutPage.defaultProps = {
  cartInfo: ['Product', 'Description', 'Quantity', 'Price', 'Remove'],
  currentUser: null,
};

CheckoutPage.propTypes = {
  cartInfo: PropTypes.arrayOf(PropTypes.string),
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      imageUrl: PropTypes.string,
      price: PropTypes.number,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
  currentUser: PropTypes.shape({
    createdAt: PropTypes.shape({
      nanoseconds: PropTypes.number,
      seconds: PropTypes.number,
    }),
    displayName: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default CheckoutPage;
