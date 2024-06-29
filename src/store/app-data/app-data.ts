import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Cities, CityName, NameSpaces, SortOption } from '../../const/const';
import { City } from '../../types/offer';

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
  reducers: {
    changeActiveCity: (state, action) => {
      state.activeCity = Cities.find((city) => city.name === action.payload);
    },
    changeSortOption: (state, action: PayloadAction<string>) => {
      state.activeSort = action.payload;
    }
  },
});

export const { changeActiveCity, changeSortOption } = appData.actions;
