import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './Header.styles';
import { ReactComponent as Logo } from '../../logo.svg';
import CartIcon from '../CartIcon/CartIcon.container';

const CartDropdown = lazy(() =>
  import('../CartDropdown/CartDropdown.container')
);

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    <Suspense fallback={<></>}>{!hidden && <CartDropdown />}</Suspense>
  </HeaderContainer>
);

Header.defaultProps = {
  currentUser: undefined,
};

Header.propTypes = {
  currentUser: PropTypes.shape({
    createdAt: PropTypes.shape({
      nanoseconds: PropTypes.number,
      seconds: PropTypes.number,
    }),
    displayName: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
  }),
  hidden: PropTypes.bool.isRequired,
  signOutStart: PropTypes.func.isRequired,
};

export default Header;
