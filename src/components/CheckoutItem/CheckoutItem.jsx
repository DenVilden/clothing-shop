import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div
          onClick={() => removeItem(cartItem)}
          onKeyPress={() => removeItem(cartItem)}
          role="button"
          tabIndex="0"
        >
          &#10094;
        </div>
        <span>{quantity}</span>
        <div
          onClick={() => addItem(cartItem)}
          onKeyPress={() => addItem(cartItem)}
          role="button"
          tabIndex="0"
        >
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer
        onClick={() => clearItemFromCart(cartItem)}
        onKeyPress={() => clearItemFromCart(cartItem)}
        role="button"
        tabIndex="0"
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  }).isRequired,
  clearItemFromCart: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default CheckoutItem;
