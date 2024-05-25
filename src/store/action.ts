import { createAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../const/const';
import { City, OfferData } from '../types/offer';

export const loadOffers = createAction<OfferData[]>(`${NameSpaces.Offers}/load`);
export const setLoading = createAction<boolean>(`${NameSpaces.Offers}/setLoading`);
export const fetchFavorites = createAction(`${NameSpaces.Favorites}/fetch`);
export const fetchOffer = createAction<OfferData['id'] | undefined>(`${NameSpaces.Offer}/fetch`);
export const fetchNearPlaces = createAction<OfferData['id']>(`${NameSpaces.NearPlaces}/fetch`);
export const fetchReviews = createAction<OfferData['id']>(`${NameSpaces.Reviews}/fetch`);

export const changeActiveCity = createAction<City['name']>(`${NameSpaces.Offers}/changeActiveCity`);
export const changeSortOption = createAction<string>(`${NameSpaces.Offers}/changeSortOption`);
