import { Review } from '../types/reviews';

export const reviews: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'John',
      avatarUrl: 'https://robohash.org/fb85bfaa96a7beabc79d2c098cd662e9?set=set2&bgset=bg1&size=400x400',
      isPro: false
    },
    comment: 'Hey Jude, goo goo g\' joob',
    rating: 3
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62b',
    date: '2019-05-09T14:13:56.569Z',
    user: {
      name: 'Paul',
      avatarUrl: 'https://robohash.org/16c0ec190d73e6b28c6ac02ab01f8980?set=set2&bgset=bg1&size=400x400',
      isPro: false
    },
    comment: 'Baby, you can drive my Helter Skelter!',
    rating: 4
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62c',
    date: '2019-05-10T14:13:56.569Z',
    user: {
      name: 'George',
      avatarUrl: 'https://robohash.org/7934e93a57f9426fe1ed7dd9b8d55de7?set=set2&bgset=bg1&size=400x400',
      isPro: true
    },
    comment: 'O, my sweet Lord gently weeps',
    rating: 5
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62d',
    date: '2019-05-11T14:13:56.569Z',
    user: {
      name: 'Ringo',
      avatarUrl: 'https://robohash.org/40e617529d43fec81f856e307fd5e70d?set=set2&bgset=bg2&size=400x400',
      isPro: false
    },
    comment: 'Zzz...',
    rating: 2
  },
] as const;
