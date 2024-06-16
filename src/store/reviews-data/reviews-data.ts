import { createSlice } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const/const';
import { addReview, fetchReviews } from '../api-actions';
import { Review } from '../../types/reviews';
import { changeComment, changeRating } from './reviews-action';

const initialState: {
  reviews: Review[];
  newReview: {
    comment: string;
    rating: number | null;
  };
  isReviewsLoading: boolean;
  isReviewSanding: boolean;
  hasError: boolean;
} = {
  reviews: [],
  newReview: {
    comment: '',
    rating: null
  },
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
        state.newReview.comment = '';
        state.newReview.rating = null;
        state.isReviewSanding = false;
      })
      .addCase(addReview.rejected, (state) => {
        state.isReviewSanding = false;
        state.hasError = true;
      })
      .addCase(changeComment, (state, action) => {
        state.newReview.comment = action.payload;
      })
      .addCase(changeRating, (state, action) => {
        state.newReview.rating = action.payload;
      });
  }
});
