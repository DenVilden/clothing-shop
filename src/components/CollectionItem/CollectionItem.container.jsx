import { connect } from 'react-redux';
import { compose } from 'redux';
import CollectionItem from './CollectionItem';
import { addItemAction } from '../../actions/cart.actions';

const mapDispatchToProps = {
  addItem: item => addItemAction(item)
};

const CollectionItemContainer = compose(
  connect(
    null,
    mapDispatchToProps
  )
)(CollectionItem);

export default CollectionItemContainer;
