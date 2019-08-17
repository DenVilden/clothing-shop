import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Directory from './Directory';
import { selectDirectorySections } from '../../selectors/directory.selectors';

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
