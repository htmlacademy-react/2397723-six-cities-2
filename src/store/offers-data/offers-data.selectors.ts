import { NameSpaces } from '../../const/const';
import { State } from '../../types';

export const getOffers = (state: Pick<State, NameSpaces.Offers>) => state[NameSpaces.Offers].offers;
export const getIsOffersLoading = (state: Pick<State, NameSpaces.Offers>) => state[NameSpaces.Offers].isOffersLoading;
