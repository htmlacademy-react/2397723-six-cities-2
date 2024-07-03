import { NameSpaces } from '../../const/const';
import { State } from '../../types/state';

export const getOffer = (state: Pick<State, NameSpaces.Offer>) => state[NameSpaces.Offer].offer;
export const getOfferError = (state: Pick<State, NameSpaces.Offer>) => state[NameSpaces.Offer].hasError;
export const getIsOfferLoading = (state: Pick<State, NameSpaces.Offer>) => state[NameSpaces.Offer].isOfferLoading;
