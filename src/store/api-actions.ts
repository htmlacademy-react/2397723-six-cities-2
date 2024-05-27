import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, NameSpaces } from '../const/const';
import { OfferData } from '../types/offer';
import { Review } from '../types/reviews';
import { AuthData, User } from '../types/user';

export const fetchOffers = createAsyncThunk<OfferData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.Offers}/fetch`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferData[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchOffer = createAsyncThunk<OfferData, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.Offer}/fetch`,
  async (offerId: string, { extra: api }) => {
    const { data } = await api.get<OfferData>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchNearPlaces = createAsyncThunk<OfferData[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.NearPlaces}/fetch`,
  async (offerId: string, { extra: api }) => {
    const { data } = await api.get<OfferData[]>(`${APIRoute.Offers}/${offerId}/${APIRoute.NearPlaces}`);
    return data;
  }
);

export const fetchFavorites = createAsyncThunk<OfferData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.Favorites}/fetch`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferData[]>(APIRoute.Favorite);
    return data;
  }
);

export const setFavoriteStatus = createAsyncThunk<OfferData, { offerId: string; status: number }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.Offer}/setStatus`,
  async ({ offerId, status }, { extra: api }) => {
    const { data } = await api.post<OfferData>(`${APIRoute.Offers}/${offerId}/${status}`);
    return data;
  }
);

export const fetchComments = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.Reviews}/fetch`,
  async (offerId: string, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  }
);

export const addComment = createAsyncThunk<Review[], { offerId: string; comment: Review; rating: number }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.Reviews}/addComment`,
  async ({ offerId, comment, rating }, { extra: api }) => {
    const { data } = await api.post<Review[]>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    return data;
  }
);

export const user = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.User}/fetch`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<User>(APIRoute.Login);
    return data;
  }
);

export const login = createAsyncThunk<User, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.User}/login`,
  async ({email, password}, { extra: api }) => {
    const { data } = await api.post<User>(APIRoute.Login, {email, password});
    return data;
  }
);

export const logout = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.User}/logout`,
  async (_arg, { extra: api }) => {
    const { data } = await api.delete<User>(APIRoute.Logout);
    return data;
  }
);
