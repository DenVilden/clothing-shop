import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './CartIcon.styles';
import { toggleCartHiddenAction } from '../../store/actions/cart.actions';
import { selectCartItemsCount } from '../../store/selectors/cart.selectors';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <CartContainer
      onClick={() => dispatch(toggleCartHiddenAction())}
      onKeyPress={() => dispatch(toggleCartHiddenAction())}
      role="button"
      tabIndex="0"
    >
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
