import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';

export const CollectionItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 350px;
  position: relative;
  width: 22vw;

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

export const AddButton = styled(CustomButton)`
  display: none;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  width: 80%;
`;

export const BackgroundImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  height: 95%;
  margin-bottom: 5px;
  width: 100%;
`;

export const CollectionFooterContainer = styled.div`
  display: flex;
  font-size: 18px;
  height: 5%;
  justify-content: space-between;
  width: 100%;
`;

export const NameContainer = styled.span`
  margin-bottom: 15px;
  width: 90%;
`;

export const PriceContainer = styled.span`
  text-align: right;
  width: 10%;
`;
