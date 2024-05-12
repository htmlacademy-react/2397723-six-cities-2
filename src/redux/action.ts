import { createAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../const/const';
import { OfferData } from '../types/offer';


export const fetchOffers = createAction(`${NameSpaces.Offers}/fetch`);
export const fetchOffer = createAction<OfferData['id']>(`${NameSpaces.Offer}/fetch`);
