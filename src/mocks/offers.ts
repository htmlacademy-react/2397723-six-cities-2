import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 'ae43a3b6-5f57-4ada-8023-1c1f0781232c',
    title: 'Tile House',
    type: 'apartment',
    price: 131,
    previewImage: 'https://13.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.7
  },
  {
    id: 'b312baee-786b-43bd-9fba-c19f0da74abc',
    title: 'Waterfront with extraordinary view',
    type: 'room',
    price: 178,
    previewImage: 'https://13.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.916361,
      longitude: 6.944974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.7
  },
  {
    id: '40761631-ecb4-4f09-a7f9-610bd3b19689',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 281,
    previewImage: 'https://13.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.867557,
      longitude: 4.371696999999999,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.4
  },
  {
    id: '31775939-9267-4776-b3b3-6a5d097c5871',
    title: 'Tile House',
    type: 'hotel',
    price: 339,
    previewImage: 'https://13.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.5
  },
];
