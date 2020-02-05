import React from 'react';
import PropTypes from 'prop-types';
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from './CartItem.styles';

const propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage alt="item" src={imageUrl} />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

CartItem.propTypes = propTypes;

export default CartItem;
