import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import GlobalStyle from '../styles';
import Header from '../components/Header/Header.container';
import Spinner from '../components/Spinner/Spinner';
import ErrorBoundary from '../containers/ErrorBoundary/ErrorBoundary';
import { selectCurrentUser } from '../store/selectors/user.selectors';
import { checkUserSessionAction } from '../store/actions/user.actions';

const HomePage = lazy(() =>
  import('../containers/HomePage/HomePage.container')
);
const Shop = lazy(() => import('./Shop'));
const CheckoutPage = lazy(() =>
  import('../containers/CheckoutPage/CheckoutPage.container')
);
const SignInAndSignUpPage = lazy(() =>
  import('../containers/SignInAndSignUpPage/SignInAndSignUpPage')
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = {
  checkUserSession: () => checkUserSessionAction(),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
