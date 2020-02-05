import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './Header.styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../store/selectors/cart.selectors';
import { selectCurrentUser } from '../../store/selectors/user.selectors';
import { signOutStartAction } from '../../store/actions/user.actions';

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        {currentUser ? (
          <>
            <OptionLink onClick={() => dispatch(signOutStartAction())} to="#">
              SIGN OUT
            </OptionLink>
            <OptionLink to="#">{currentUser.displayName}</OptionLink>
          </>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
