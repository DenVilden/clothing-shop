import { connect } from 'react-redux';
import HomePage from './HomePage';
import { fetchDirectoryStartAction } from '../../actions/directory.actions';

const mapDispatchToProps = {
  fetchDirectoryStart: () => fetchDirectoryStartAction(),
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
