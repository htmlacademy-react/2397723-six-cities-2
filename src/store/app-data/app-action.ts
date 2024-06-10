import { createAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const/const';
import { City } from '../../types/offer';

export const changeActiveCity = createAction<City['name']>(`${NameSpaces.Offers}/changeActiveCity`);
export const changeSortOption = createAction<string>(`${NameSpaces.Offers}/changeSortOption`);
