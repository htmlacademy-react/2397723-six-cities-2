import { createSlice } from '@reduxjs/toolkit';
import { MAX_NEAR_PLACES_COUNT, NameSpaces } from '../../const/const';
import { OfferData } from '../../types';
import { fetchNearPlaces, setFavoriteStatus } from '../api-actions';
import { getRandomNearPlaces } from '../../utils';

const initialState: {
  nearPlaces: OfferData[];
  randomNearPlaces: OfferData[];
  isNearPlacesLoading: boolean;
  hasError: boolean;
} = {
  nearPlaces: [],
  randomNearPlaces: [],
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
        state.randomNearPlaces = getRandomNearPlaces(MAX_NEAR_PLACES_COUNT, state.nearPlaces);
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
