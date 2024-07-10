import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  AppDispatch,
  State, FullOffer,
  OfferData,
  AuthData,
  User,
  Review
} from '../types';
import { AxiosInstance } from 'axios';
import { APIRoute, NameSpaces } from '../const/const';
import { dropToken, saveToken } from '../services/token';

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

export const fetchOffer = createAsyncThunk<FullOffer, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.Offer}/fetch`,
  async (offerId, { extra: api }) => {
    const { data } = await api.get<FullOffer>(`${APIRoute.Offers}/${offerId ? offerId : ''}`);
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
    const { data } = await api.get<OfferData[]>(`${APIRoute.Offers}/${offerId}${APIRoute.NearPlaces}`);
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

export const setFavoriteStatus = createAsyncThunk<FullOffer, { offerId: string; status: boolean }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.Favorites}/setStatus`,
  async ({ offerId, status }, { extra: api }) => {
    const statusNumber = status ? 0 : 1;
    const { data } = await api.post<FullOffer>(`${APIRoute.Favorite}/${offerId}/${statusNumber}`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Review[], string, {
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

export const addReview = createAsyncThunk<Review, { offerId: string; comment: string; rating: number | null }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.Reviews}/addReview`,
  async ({ offerId, comment, rating }, { extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, { comment, rating });
    return data;
  }
);

export const checkAuth = createAsyncThunk<User, undefined, {
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
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<User>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpaces.User}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete<User>(APIRoute.Logout);
    dropToken();
  }
);
