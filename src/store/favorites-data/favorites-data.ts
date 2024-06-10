import { createSlice } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const/const';
import { OfferData } from '../../types/offer';
import { fetchNearPlaces, setFavoriteStatus } from '../api-actions';
import { store } from '..';

const initialState: {
  favorites: OfferData[];
  isFavoritesLoading: boolean;
  isStatusSanding: boolean;
  hasError: boolean;
} = {
  favorites: [],
  isFavoritesLoading: false,
  isStatusSanding: false,
  hasError: false
};


export const favoritesData = createSlice({
  name: NameSpaces.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearPlaces.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchNearPlaces.rejected, (state) => {
        state.isFavoritesLoading = false;
        state.hasError = true;
      })
      .addCase(setFavoriteStatus.pending, (state) => {
        state.isStatusSanding = true;
      })
      .addCase(setFavoriteStatus.fulfilled, (state, action) => {
        if (action.meta.arg.status === 0) {
          state.favorites = state.favorites.filter((offer) => offer.id !== action.payload.id);
        }
        if (action.meta.arg.status === 1) {
          state.favorites.push(action.payload);
        }
        store.getState().OFFERS.offers = store.getState().OFFERS.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
        store.getState().NEAR_PLACES.nearPlaces = store.getState().NEAR_PLACES.nearPlaces.map((offer) => offer.id === action.payload.id ? action.payload : offer);
        state.isStatusSanding = false;
      });
  }
});
