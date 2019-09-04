import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import { signUpStartAction } from '../actions/user.actions';

const mapDispatchToProps = {
  signUpStart: (email, password, displayName) => {
    return signUpStartAction({ email, password, displayName });
  },
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
