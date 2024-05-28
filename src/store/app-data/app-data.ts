import { createSlice } from '@reduxjs/toolkit';
import { Cities, CityName, NameSpaces, SortOption } from '../../const/const';
import { City } from '../../types/offer';
import { changeActiveCity, changeSortOption } from './app-action';

const initialState: {
  activeCity?: City;
  activeSort: string;
} = {
  activeCity: Cities.find((city) => city.name === CityName.Paris),
  activeSort: SortOption[0],
};

export const appData = createSlice({
  name: NameSpaces.App,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeActiveCity, (state, action) => {
        state.activeCity = Cities.find((city) => city.name === action.payload);
      })
      .addCase(changeSortOption, (state, action) => {
        state.activeSort = action.payload;
      });
  }
});
