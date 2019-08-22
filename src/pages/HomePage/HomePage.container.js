import { connect } from 'react-redux';
import HomePage from './HomePage';
import { fetchSectionsStartAction } from '../../actions/directory.actions';

const mapDispatchToProps = {
  fetchDirectoryStart: () => fetchSectionsStartAction(),
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
