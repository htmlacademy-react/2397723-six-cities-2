import { createAction } from '@reduxjs/toolkit';
import { AppRoute, NameSpaces } from '../../const/const';
import { City } from '../../types/offer';

export const changeActiveCity = createAction<City['name']>(`${NameSpaces.App}/changeActiveCity`);
export const changeSortOption = createAction<string>(`${NameSpaces.App}/changeSortOption`);
export const redirectToRoute = createAction<AppRoute>(`${NameSpaces.App}/redirectToRoute`);
