import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HeaderContainer from '../components/Header/Header.container';
import HomePage from '../pages/HomePage/HomePage';
import ShopPageContainer from '../pages/ShopPage/ShopPage.container';
import CheckoutPageContainer from '../pages/CheckoutPage/CheckoutPage.container';
import SignInAndSignUpPage from '../pages/SignInAndSignUpPage/SignInAndSignUpPage';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <Router>
      <HeaderContainer />
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={ShopPageContainer} path="/shop" />
        <Route component={CheckoutPageContainer} exact path="/checkout" />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

App.defaultProps = {
  currentUser: undefined
};

App.propTypes = {
  currentUser: PropTypes.shape({
    createdAt: PropTypes.shape({
      nanoseconds: PropTypes.number,
      seconds: PropTypes.number
    }),
    displayName: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string
  }),
  checkUserSession: PropTypes.func.isRequired
};

export default App;
