import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
  text-transform: uppercase;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 800px) {
    align-self: center;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }

  & > div {
    margin-bottom: 30px;
  }
`;
