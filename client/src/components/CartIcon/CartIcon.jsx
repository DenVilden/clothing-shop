import React from 'react';
import PropTypes from 'prop-types';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './CartIcon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer
    onClick={toggleCartHidden}
    onKeyPress={toggleCartHidden}
    role="button"
    tabIndex="0"
  >
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired
};

export default CartIcon;