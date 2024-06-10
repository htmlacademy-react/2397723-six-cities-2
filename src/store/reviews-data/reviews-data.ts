import { createSlice } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const/const';
import { addReview, fetchReviews } from '../api-actions';
import { Review } from '../../types/reviews';

const initialState: {
  reviews: Review[];
  isReviewsLoading: boolean;
  isReviewSanding: boolean;
  hasError: boolean;
} = {
  reviews: [],
  isReviewsLoading: false,
  isReviewSanding: false,
  hasError: false
};

export const reviewsData = createSlice({
  name: NameSpaces.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.isReviewsLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.isReviewsLoading = false;
        state.hasError = true;
      })
      .addCase(addReview.pending, (state) => {
        state.isReviewSanding = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.isReviewSanding = false;
      })
      .addCase(addReview.rejected, (state) => {
        state.isReviewSanding = false;
        state.hasError = true;
      });
  }
});
