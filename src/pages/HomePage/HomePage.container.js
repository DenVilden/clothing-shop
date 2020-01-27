import { connect } from 'react-redux';
import { fetchSectionsStartAction } from '../../actions/directory.actions';
import HomePage from './HomePage';

const mapDispatchToProps = {
  fetchSectionsStart: () => fetchSectionsStartAction(),
};

export default connect(null, mapDispatchToProps)(HomePage);
