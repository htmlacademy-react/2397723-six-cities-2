import { NameSpaces } from '../../const/const';
import { State } from '../../types';

export const getReviews = (state: Pick<State, NameSpaces.Reviews>) => state[NameSpaces.Reviews].reviews;
export const getIsReviewSanding = (state: Pick<State, NameSpaces.Reviews>) => state[NameSpaces.Reviews].isReviewSanding;
export const getIsReviewsLoading = (state: Pick<State, NameSpaces.Reviews>) => state[NameSpaces.Reviews].isReviewsLoading;
export const getNewReview = (state: Pick<State, NameSpaces.Reviews>) => state[NameSpaces.Reviews].newReview;
