import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../components/CheckoutItem/CheckoutItem.container';
import StripeButton from '../components/StripeButton';
import { selectCartItems, selectCartTotal } from '../selectors/cart.selectors';
import { selectCurrentUser } from '../selectors/user.selectors';

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
    {total && currentUser ? (
      <>
        <WarningContainer>
          *Please use the following test credit card for payments*
          <br /> 4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </WarningContainer>
        <StripeButton
          email={currentUser ? currentUser.email : null}
          price={total}
        />
      </>
    ) : null}
    {total && !currentUser ? (
      <WarningContainer>Please sign in to proceed</WarningContainer>
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);

/* STYLES */
const CheckoutPageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  min-height: 90vh;
  width: 55%;

  @media (max-width: 800px) {
    width: 100%;
  }

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

const CheckoutHeaderContainer = styled.div`
  border-bottom: 1px solid darkgrey;
  display: flex;
  height: 40px;
  justify-content: space-between;
  width: 100%;
`;

const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const TotalContainer = styled.div`
  font-size: 36px;
  margin-left: auto;
  margin-top: 30px;
`;

const WarningContainer = styled.div`
  color: red;
  font-size: 24px;
  margin-top: 40px;
  text-align: center;
`;
