import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import CartIcon from '../containers/CartIcon';

const CartDropdown = lazy(() => import('../containers/CartDropdown'));

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      {currentUser ? (
        <>
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
          <OptionLink as="div">
            {currentUser.displayName.toUpperCase()}
          </OptionLink>
        </>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    <Suspense fallback={<></>}>{!hidden && <CartDropdown />}</Suspense>
  </HeaderContainer>
);

Header.defaultProps = {
  currentUser: null,
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

/* STYLES */
const HeaderContainer = styled.header`
  display: flex;
  height: 70px;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;

  @media (max-width: 800px) {
    height: 60px;
    margin-bottom: 20px;
    padding: 10px;
  }
`;

const LogoContainer = styled(Link)`
  height: 100%;
  padding: 15px;
  width: 70px;

  @media (max-width: 800px) {
    padding: 0;
    width: 50px;
  }
`;

const OptionsContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 50%;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

const OptionLink = styled(Link)`
  cursor: pointer;
  padding: 10px 15px;
`;
