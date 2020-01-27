import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  cursor: pointer;
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;

  &:hover {
    color: #808080;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
  }
`;
