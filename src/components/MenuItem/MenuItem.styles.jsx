import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  align-items: center;
  border: 1px solid #000;
  display: flex;
  flex: 1 1 auto;
  height: ${({ size }) => (size ? '380px' : '240px')};
  justify-content: center;
  margin: 0 7.5px 15px;
  min-width: 30%;
  overflow: hidden;

  @media (max-width: 800px) {
    height: 200px;
  }

  &:hover {
    cursor: pointer;

    .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImageContainer = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const ContentContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  height: 90px;
  justify-content: center;
  opacity: 0.7;
  padding: 0 25px;
  position: absolute;
`;

export const ContentTitle = styled.span`
  color: #4a4a4a;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
  text-transform: uppercase;
`;

export const ContentSubtitle = styled.span`
  font-size: 16px;
  font-weight: lighter;
`;
