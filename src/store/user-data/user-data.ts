import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpaces } from '../../const/const';
import { User } from '../../types/user';
import { checkAuth, login, logout } from '../api-actions';

type UserData = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
};

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

export const userData = createSlice({
  name: NameSpaces.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  }
});
