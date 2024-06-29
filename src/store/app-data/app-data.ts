import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Cities, CityName, NameSpaces, SortOption } from '../../const/const';
import { City, OfferData } from '../../types/offer';

const initialState: {
  activeCity?: City;
  activeSort: string;
  hoveredOffer: OfferData | undefined;
} = {
  activeCity: Cities.find((city) => city.name === CityName.Paris),
  activeSort: SortOption[0],
  hoveredOffer: undefined
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
    },
    changeHoveredOffer: (state, action: PayloadAction<OfferData | undefined>) => {
      state.hoveredOffer = action.payload;
    }
  },
});

export const { changeActiveCity, changeSortOption, changeHoveredOffer } = appData.actions;
