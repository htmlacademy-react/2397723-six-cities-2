import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, NameSpaces } from '../const/const';
import { OfferData } from '../types/offer';
import { loadOffers, setLoading } from './action';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.Offers}/fetch`,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoading(true));
    const {data} = await api.get<OfferData[]>(APIRoute.Offers);
    dispatch(setLoading(false));
    dispatch(loadOffers(data));
  }
);
