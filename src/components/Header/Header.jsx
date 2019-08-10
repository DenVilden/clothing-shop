import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './Header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIconContainer from '../CartIcon/CartIcon.container';
import CartDropdownContainer from '../CartDropdown/CartDropdown.container';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      {currentUser ? (
        <OptionLink
          as="div"
          onClick={signOutStart}
          onKeyPress={signOutStart}
          role="button"
          tabIndex="0"
        >
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIconContainer />
    </OptionsContainer>
    {!hidden && <CartDropdownContainer />}
  </HeaderContainer>
);

Header.defaultProps = {
  currentUser: undefined
};

Header.propTypes = {
  currentUser: PropTypes.shape({
    createdAt: PropTypes.shape({
      nanoseconds: PropTypes.number,
      seconds: PropTypes.number
    }),
    displayName: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string
  }),
  hidden: PropTypes.bool.isRequired,
  signOutStart: PropTypes.func.isRequired
};

export default Header;
