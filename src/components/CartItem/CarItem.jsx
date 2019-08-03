import React from 'react';
import PropTypes from 'prop-types';
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer
} from './CartItem.styles';

const CarItem = ({ item: { imageUrl, price, name, quantity } }) => (
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

CarItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  }).isRequired
};

export default CarItem;
