import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;

  /* eslint-disable no-alert */
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: { amount: priceForStripe, token },
    })
      .then(() => {
        alert('Payment successful');
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log('Payment error:', error.message);
        alert('There was an issue with your payment');
      });
  };

  return (
    <StripeCheckout
      amount={priceForStripe}
      billingAddress
      description={`Your total is $${price}`}
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
};

export default StripeButton;
