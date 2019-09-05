import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as ShoppingBagIcon } from '../assets/shopping-bag.svg';

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
  itemCount: PropTypes.number.isRequired,
};

export default CartIcon;

/* STYLES */
const CartContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 45px;
  justify-content: center;
  position: relative;
  width: 45px;
`;

const ShoppingIcon = styled(ShoppingBagIcon)`
  height: 24px;
  width: 24px;
`;

const ItemCountContainer = styled.span`
  bottom: 12px;
  font-size: 10px;
  font-weight: bold;
  position: absolute;
`;
