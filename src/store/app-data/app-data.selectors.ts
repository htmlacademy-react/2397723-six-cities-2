import { NameSpaces } from '../../const/const';
import { State } from '../../types';

export const getActiveCity = (state: Pick<State, NameSpaces.App>) => state[NameSpaces.App].activeCity;
export const getActiveSort = (state: Pick<State, NameSpaces.App>) => state[NameSpaces.App].activeSort;
export const getHoveredOffer = (state: Pick<State, NameSpaces.App>) => state[NameSpaces.App].hoveredOffer;
