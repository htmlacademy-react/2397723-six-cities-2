import { createReducer } from '@reduxjs/toolkit';
import { changeActiveCity, changeSortOption, fetchFavorites, fetchNearPlaces, fetchOffer, loadOffers, fetchReviews, setLoading } from './action';
import { offers } from '../mocks/offers';
import { City, OfferData } from '../types/offer';
import { Review } from '../types/reviews';
import { Cities, CityName, SortOption } from '../const/const';
import { reviews } from '../mocks/reviews';

const initialState: {
  offers: OfferData[];
  nearPlaces: OfferData[];
  favorites: OfferData[];
  reviews: Review[];
  offer: OfferData | null | undefined;
  activeCity: City | undefined;
  activeSort: string;
  isLoading: boolean;
} = {
  offers,
  nearPlaces: [],
  favorites: [],
  reviews: [],
  offer: null,
  activeCity: Cities.find((city) => city.name === CityName.Paris),
  activeSort: SortOption[0],
  isLoading: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = offers.find((offer) => offer.id === action.payload);
    })
    .addCase(fetchNearPlaces, (state) => {
      state.nearPlaces = offers;
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = offers;
    })
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = Cities.find((city) => city.name === action.payload);
    })
    .addCase(changeSortOption, (state, action) => {
      state.activeSort = action.payload;
    });
});
