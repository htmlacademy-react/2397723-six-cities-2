import { createSlice } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const/const';
import { OfferData } from '../../types/offer';
import { fetchOffer } from '../api-actions';

const initialState: {
  offer: OfferData | null;
  isOfferLoading: boolean;
  hasError: boolean;
} = {
  offer: null,
  isOfferLoading: false,
  hasError: false
};

export const offerData = createSlice({
  name: NameSpaces.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isOfferLoading = false;
        state.hasError = true;
      });
  }
});
