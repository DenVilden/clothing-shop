import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => (
  <CheckoutItemContainer>
    <ImageContainer>
      <img alt="item" src={cartItem.imageUrl} />
    </ImageContainer>
    <TextContainer>{cartItem.name}</TextContainer>
    <QuantityContainer>
      <div
        onClick={() => removeItem(cartItem)}
        onKeyPress={() => removeItem(cartItem)}
        role="button"
        tabIndex="0"
      >
        &#10094;
      </div>
      <span>{cartItem.quantity}</span>
      <div
        onClick={() => addItem(cartItem)}
        onKeyPress={() => addItem(cartItem)}
        role="button"
        tabIndex="0"
      >
        &#10095;
      </div>
    </QuantityContainer>
    <TextContainer>${cartItem.price}</TextContainer>
    <RemoveButtonContainer
      onClick={() => clearItemFromCart(cartItem)}
      role="button"
      tabIndex="0"
    >
      &#10005;
    </RemoveButtonContainer>
  </CheckoutItemContainer>
);

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  clearItemFromCart: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CheckoutItem;

/* STYLES */
const CheckoutItemContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid darkgrey;
  display: flex;
  font-size: 20px;
  min-height: 100px;
  padding: 15px 0;
  width: 100%;
`;

const ImageContainer = styled.div`
  padding-right: 15px;
  width: 23%;
  img {
    height: 100%;
    width: 100%;
  }
`;

const TextContainer = styled.span`
  width: 23%;
`;

const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

const RemoveButtonContainer = styled.div`
  cursor: pointer;
  padding-left: 12px;
`;
