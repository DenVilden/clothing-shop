import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CustomButton from './CustomButton';

const CollectionItem = ({ item, addItem }) => (
  <CollectionItemContainer>
    <BackgroundImage imageUrl={item.imageUrl} />
    <CollectionFooterContainer>
      <NameContainer>{item.name}</NameContainer>
      <PriceContainer>${item.price}</PriceContainer>
    </CollectionFooterContainer>
    <AddButton inverted onClick={() => addItem(item)}>
      Add to cart
    </AddButton>
  </CollectionItemContainer>
);

CollectionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};

export default CollectionItem;

// STYLES
const CollectionItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 350px;
  position: relative;
  width: 22vw;

  @media (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const AddButton = styled(CustomButton)`
  display: none;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  width: 80%;

  @media (max-width: 800px) {
    display: block;
    min-width: unset;
    opacity: 0.9;
    padding: 0 10px;
  }
`;

const BackgroundImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  height: 95%;
  margin-bottom: 5px;
  width: 100%;
`;

const CollectionFooterContainer = styled.div`
  display: flex;
  font-size: 18px;
  height: 5%;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const NameContainer = styled.span`
  margin-bottom: 15px;
  width: 90%;
`;

const PriceContainer = styled.span`
  text-align: right;
  width: 10%;
`;
