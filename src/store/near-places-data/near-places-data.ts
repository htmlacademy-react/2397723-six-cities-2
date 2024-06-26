import { createSlice } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const/const';
import { OfferData } from '../../types/offer';
import { fetchNearPlaces, setFavoriteStatus } from '../api-actions';

const initialState: {
  nearPlaces: OfferData[];
  isNearPlacesLoading: boolean;
  hasError: boolean;
} = {
  nearPlaces: [],
  isNearPlacesLoading: false,
  hasError: false
};

export const nearPlacesData = createSlice({
  name: NameSpaces.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearPlaces.pending, (state) => {
        state.isNearPlacesLoading = true;
      })
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
        state.isNearPlacesLoading = false;
      })
      .addCase(fetchNearPlaces.rejected, (state) => {
        state.isNearPlacesLoading = false;
        state.hasError = true;
      })
      .addCase(setFavoriteStatus.fulfilled, (state, action) => {
        state.nearPlaces = state.nearPlaces
          .map((nearPlace) => nearPlace.id === action.payload.id ? { ...nearPlace, isFavorite: action.payload.isFavorite } : nearPlace);
      });
  }
});
