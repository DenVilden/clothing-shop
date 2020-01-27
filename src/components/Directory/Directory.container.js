import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Directory from './Directory';
import {
  selectDirectorySections,
  selectIsDirectoryFetching,
} from '../../selectors/directory.selectors';
import WithSpinner from '../../containers/WithSpinner';

const mapStateToProps = createStructuredSelector({
  loading: selectIsDirectoryFetching,
  sections: selectDirectorySections,
});

export default compose(connect(mapStateToProps), WithSpinner)(Directory);
