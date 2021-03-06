import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import logo from '../assets/logo.svg';

const propTypes = {
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

const StripeButton = ({ price, email }) => {
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
      email={email}
      image={logo}
      label="Pay Now"
      name="Clothing Shop"
      panelLabel="Pay Now"
      shippingAddress
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      token={onToken}
    />
  );
};

StripeButton.propTypes = propTypes;

export default StripeButton;
