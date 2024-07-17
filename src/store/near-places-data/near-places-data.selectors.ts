import { NameSpaces } from '../../const/const';
import { State } from '../../types';

export const getNearPlaces = (state: Pick<State, NameSpaces.NearPlaces>) => state[NameSpaces.NearPlaces].nearPlaces;
export const getRandomNearPlaces = (state: Pick<State, NameSpaces.NearPlaces>) => state[NameSpaces.NearPlaces].randomNearPlaces;
export const getIsNearPlacesLoading = (state: Pick<State, NameSpaces.NearPlaces>) => state[NameSpaces.NearPlaces].isNearPlacesLoading;
