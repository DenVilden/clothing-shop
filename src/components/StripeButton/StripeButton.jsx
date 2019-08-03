import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import image from '../../assets/CUz.svg';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Htdm0Mcd18IgI0qJfYco6stX00ZwuoWXfv';

  const onToken = token => {
    // eslint-disable-next-line no-console
    console.log(token);
    // eslint-disable-next-line no-alert
    alert('Payment Successful');
  };

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
