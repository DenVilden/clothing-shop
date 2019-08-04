import { connect } from 'react-redux';
import CollectionItem from './CollectionItem';
import { addItemAction } from '../../actions/cart.actions';

const mapDispatchToProps = {
  addItem: item => addItemAction(item)
};

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
