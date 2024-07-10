import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpaces } from '../../const/const';
import { User } from '../../types';
import { checkAuth, login, logout } from '../api-actions';

type UserData = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  isCheckAuthLoading: boolean;
  isLoginLoading: boolean;
  isLogoutLoading: boolean;
};

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  isCheckAuthLoading: false,
  isLoginLoading: false,
  isLogoutLoading: false,
};

export const userData = createSlice({
  name: NameSpaces.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.isCheckAuthLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.isCheckAuthLoading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.isCheckAuthLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoginLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.isLoginLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.isLoginLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.isLogoutLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.isLogoutLoading = false;
      })
      .addCase(logout.rejected, (state) => {
        state.isLogoutLoading = false;
      });
  }
});
