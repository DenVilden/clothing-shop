import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import GlobalStyle from './App.styles';
import Header from '../../components/Header/Header.container';
import Spinner from '../../components/Spinner/Spinner';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.container'));
const Shop = lazy(() => import('../Shop/Shop.container'));
const CheckoutPage = lazy(() =>
  import('../../pages/CheckoutPage/CheckoutPage.container')
);
const SignInAndSignUpPage = lazy(() =>
  import('../../pages/SignInAndSignUpPage/SignInAndSignUpPage')
);

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route component={HomePage} exact path="/" />
            <Route component={Shop} path="/shop" />
            <Route component={CheckoutPage} exact path="/checkout" />
            <Route
              exact
              path="/signin"
              render={() => {
                return currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                );
              }}
            />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

App.defaultProps = {
  currentUser: null,
};

App.propTypes = {
  currentUser: PropTypes.shape({
    createdAt: PropTypes.shape({
      nanoseconds: PropTypes.number,
      seconds: PropTypes.number,
    }),
    displayName: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
  }),
  checkUserSession: PropTypes.func.isRequired,
};

export default App;
