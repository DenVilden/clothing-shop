import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price, currentUser }) => {
  if (!currentUser) return null;

  const amount = price * 100;

  /* eslint-disable no-alert */
  const onToken = async token => {
    try {
      await axios({ url: 'payment', method: 'post', data: { amount, token } });
      alert('Payment successful');
    } catch (error) {
      alert('There was an issue with your payment');
    }
  };

  return (
    <StripeCheckout
      allowRememberMe={false}
      amount={amount}
      billingAddress
      description={`Your total is $${price}`}
      email={currentUser.email}
      label="Pay Now"
      name="Clothing Shop"
      panelLabel="Pay Now"
      shippingAddress
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      token={onToken}
    />
  );
};

StripeButton.propTypes = {
  price: PropTypes.number.isRequired,
  currentUser: PropTypes.shape({
    createdAt: PropTypes.shape({
      nanoseconds: PropTypes.number,
      seconds: PropTypes.number,
    }),
    displayName: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default StripeButton;
