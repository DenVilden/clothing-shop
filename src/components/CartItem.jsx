import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;

/* STYLES */
const CartItemContainer = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  width: 100%;
`;

const CartItemImage = styled.img`
  width: 30%;
`;

const ItemDetailsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  width: 70%;
`;
