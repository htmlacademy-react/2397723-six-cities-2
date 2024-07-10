import { NameSpaces } from '../../const/const';
import { State } from '../../types';

export const getAuthorizationStatus = (state: Pick<State, NameSpaces.User>) => state[NameSpaces.User].authorizationStatus;
export const getUser = (state: Pick<State, NameSpaces.User>) => state[NameSpaces.User].user;
export const getIsCheckAuthLoading = (state: Pick<State, NameSpaces.User>) => state[NameSpaces.User].isCheckAuthLoading;
export const getIsLoginLoading = (state: Pick<State, NameSpaces.User>) => state[NameSpaces.User].isLoginLoading;
export const getIsLogoutLoading = (state: Pick<State, NameSpaces.User>) => state[NameSpaces.User].isLogoutLoading;
