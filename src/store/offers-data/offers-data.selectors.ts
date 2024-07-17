import { createSelector } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const/const';
import { State } from '../../types';
import { getActiveCity, getActiveSort } from '../app-data/app-data.selectors';
import { sorting } from '../../utils';

export const getOffers = (state: Pick<State, NameSpaces.Offers>) => state[NameSpaces.Offers].offers;
export const getOffersByCity = createSelector(getOffers, getActiveCity, (offers, activeCity) => offers.filter((offer) => offer.city.name === activeCity?.name));
export const getSortedOffers = createSelector(getOffersByCity, getActiveSort, (offersByCity, activeSort) => sorting[activeSort](offersByCity));
export const getIsOffersLoading = (state: Pick<State, NameSpaces.Offers>) => state[NameSpaces.Offers].isOffersLoading;
