import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import image from '../../assets/CUz.svg';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Htdm0Mcd18IgI0qJfYco6stX00ZwuoWXfv';

  /* eslint-disable no-alert */
  const onToken = useCallback(
    token => {
      axios({
        url: 'payment',
        method: 'post',
        data: { amount: priceForStripe, token }
      })
        .then(() => {
          alert('Payment successful');
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log('Payment error:', error.message);
          alert('There was an issue with your payment');
        });
    },
    [priceForStripe]
  );

  return (
    <StripeCheckout
      amount={priceForStripe}
      billingAddress
      description={`Your total is $${price}`}
      image={image}
      label="Pay Now"
      name="Clothing Shop"
      panelLabel="Pay Now"
      shippingAddress
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

StripeButton.propTypes = {
  price: PropTypes.number.isRequired
};

export default StripeButton;
