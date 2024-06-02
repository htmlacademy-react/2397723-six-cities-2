import { createSlice } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const/const';
import { OfferData } from '../../types/offer';
import { fetchFavorites, setFavoriteStatus } from '../api-actions';

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
      .addCase(fetchFavorites.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.isFavoritesLoading = false;
        state.hasError = true;
      })
      .addCase(setFavoriteStatus.pending, (state) => {
        state.isStatusSanding = true;
      })
      .addCase(setFavoriteStatus.fulfilled, (state, action) => {
        if (action.meta.arg.status) {
          state.favorites = state.favorites.filter((offer) => offer.id !== action.payload.id);
        }
        if (!action.meta.arg.status) {
          state.favorites.push(action.payload);
        }
        state.isStatusSanding = false;
      })
      .addCase(setFavoriteStatus.rejected, (state) => {
        state.hasError = true;
      });
  }
});
