import React, { useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyle from './styles';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import { selectCurrentUser } from './store/selectors/user.selectors';
import { checkUserSessionAction } from './store/actions/user.actions';

const HomePage = lazy(() => import('./containers/HomePage/HomePage'));
const Shop = lazy(() => import('./containers/ShopPage/ShopPage'));
const CheckoutPage = lazy(() =>
  import('./containers/CheckoutPage/CheckoutPage')
);
const SignInAndSignUpPage = lazy(() =>
  import('./containers/SignInAndSignUpPage/SignInAndSignUpPage')
);

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSessionAction());
  }, [dispatch]);

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
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
