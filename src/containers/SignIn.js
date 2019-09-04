import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import {
  googleSignInStartAction,
  emailSignInStartAction,
} from '../actions/user.actions';

const mapDispatchToProps = {
  googleSignInStart: () => googleSignInStartAction(),
  emailSignInStart: (email, password) => {
    return emailSignInStartAction({ email, password });
  },
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
