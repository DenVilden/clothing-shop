import { connect } from 'react-redux';
import SignIn from './SignIn';
import {
  googleSignInStartAction,
  emailSignInStartAction
} from '../../actions/user.actions';

const mapDispatchToProps = {
  googleSignInStart: () => googleSignInStartAction(),
  emailSignInStart: (email, password) =>
    emailSignInStartAction({ email, password })
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);