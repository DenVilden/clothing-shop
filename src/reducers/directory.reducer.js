import hats from '../assets/img/hats.webp';
import jackets from '../assets/img/jackets.webp';
import sneakers from '../assets/img/sneakers.webp';
import womens from '../assets/img/womens.webp';
import men from '../assets/img/men.webp';

const initialState = {
  sections: [
    {
      title: 'hats',
      imageUrl: hats,
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: jackets,
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: sneakers,
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: womens,
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: men,
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

export default (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
