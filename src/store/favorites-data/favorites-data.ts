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
          const newFavorite: OfferData = {
            id: action.payload.id,
            title: action.payload.title,
            type: action.payload.type,
            previewImage: action.payload.previewImage,
            price: action.payload.price,
            city: action.payload.city,
            location: action.payload.location,
            isFavorite: action.payload.isFavorite,
            isPremium: action.payload.isPremium,
            rating: action.payload.rating
          };

          state.favorites.push(newFavorite);
        }
        state.isStatusSanding = false;
      })
      .addCase(setFavoriteStatus.rejected, (state) => {
        state.hasError = true;
      });
  }
});
