import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HeaderContainer from './components/Header/Header.container';
import HomePage from './pages/HomePage/HomePage';
import ShopPageContainer from './pages/ShopPage/ShopPage.container';
import CheckoutPageContainer from './pages/CheckoutPage/CheckoutPage.container';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import { selectCurrentUser } from './selectors/user.selectors';
import { checkUserSessionAction } from './actions/user.actions';

class App extends Component {
  static defaultProps = {
    currentUser: null
  };

  static propTypes = {
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

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    const { currentUser } = this.props;

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
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {
  checkUserSession: () => checkUserSessionAction()
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
