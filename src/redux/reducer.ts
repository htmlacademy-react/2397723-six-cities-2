import { createReducer } from '@reduxjs/toolkit';
import { changeActiveCity, fetchOffer, fetchOffers } from './action';
import { offers } from '../mocks/offers';
import { City, OfferData } from '../types/offer';
import { Review } from '../types/reviews';
import { Cities, CityName } from '../const/const';

const initialState: {
  offers: OfferData[];
  nearPlaces: OfferData[];
  favorites: OfferData[];
  reviews: Review[];
  offer: OfferData | null | undefined;
  activeCity: City | undefined;
} = {
  offers,
  nearPlaces: [],
  favorites: [],
  reviews: [],
  offer: null,
  activeCity: Cities.find((city) => city.name === CityName.Amsterdam)
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = offers.find((offer) => offer.id === action.payload);
    })
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = Cities.find((city) => city.name === action.payload);
    });
});
