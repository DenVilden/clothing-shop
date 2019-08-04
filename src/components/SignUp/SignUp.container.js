import { connect } from 'react-redux';
import SignUp from './SignUp';
import { signUpStartAction } from '../../actions/user.actions';

const mapDispatchToProps = {
  signUpStart: (email, password, displayName) =>
    signUpStartAction({ email, password, displayName })
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
