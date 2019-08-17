import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../selectors/user.selectors';
import { checkUserSessionAction } from '../../actions/user.actions';
import App from './App';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = {
  checkUserSession: () => checkUserSessionAction(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
