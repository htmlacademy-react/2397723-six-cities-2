import { combineReducers } from '@reduxjs/toolkit';
import { NameSpaces } from '../const/const';
import { offersData } from './offers-data/offers-data';
import { offerData } from './offer-data/offer-data';
import { nearPlacesData } from './near-places-data/near-places-data';
import { favoritesData } from './favorites-data/favorites-data';
import { appData } from './app-data/app-data';
import { reviewsData } from './reviews-data/reviews-data';
import { userData } from './user-data/user-data';

export const rootReducer = combineReducers({
  [NameSpaces.App]: appData.reducer,
  [NameSpaces.Offers]: offersData.reducer,
  [NameSpaces.Offer]: offerData.reducer,
  [NameSpaces.NearPlaces]: nearPlacesData.reducer,
  [NameSpaces.Favorites]: favoritesData.reducer,
  [NameSpaces.Reviews]: reviewsData.reducer,
  [NameSpaces.User]: userData.reducer,
});
