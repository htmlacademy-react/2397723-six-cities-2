import { NameSpaces } from '../../const/const';
import { State } from '../../types';

export const getFavorites = (state: Pick<State, NameSpaces.Favorites>) => state[NameSpaces.Favorites].favorites;
export const getFavoritesLoading = (state: Pick<State, NameSpaces.Favorites>) => state[NameSpaces.Favorites].isFavoritesLoading;
export const getIsStatusSanding = (state: Pick<State, NameSpaces.Favorites>) => state[NameSpaces.Favorites].isStatusSanding;
