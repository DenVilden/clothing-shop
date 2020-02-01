import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './HomePage';
import {
  selectDirectorySections,
  selectIsDirectoryFetching,
} from '../../store/selectors/directory.selectors';
import WithSpinner from '../WithSpinner';

const mapStateToProps = createStructuredSelector({
  loading: selectIsDirectoryFetching,
  sections: selectDirectorySections,
});

export default compose(connect(mapStateToProps), WithSpinner)(HomePage);
