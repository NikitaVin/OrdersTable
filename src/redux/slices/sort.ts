import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISort {
  status: string;
  date: string;
  dateFirst: string;
  dateLast: string;
  priceFirst: string;
  priceLast: string;
  sortBool: boolean;
  sortByDateInc: boolean;
  sortByPriceInc: boolean;
  sortByQuantityInc: boolean;
  sortByDateDec: boolean;
  sortByPriceDec: boolean;
  sortByQuantityDec: boolean;
}

const initialState: ISort = {
  status: '',
  date: '',
  dateFirst: '',
  dateLast: '',
  priceFirst: '',
  priceLast: '',
  sortBool: false,
  sortByDateInc: false,
  sortByPriceInc: false,
  sortByQuantityInc: false,
  sortByDateDec: false,
  sortByPriceDec: false,
  sortByQuantityDec: false,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setFirstDate: (state, action: PayloadAction<string>) => {
      state.dateFirst = action.payload;
    },
    setLastDate: (state, action: PayloadAction<string>) => {
      state.dateLast = action.payload;
    },
    setFirstPrice: (state, action: PayloadAction<string>) => {
      state.priceFirst = action.payload;
    },
    setEndPrice: (state, action: PayloadAction<string>) => {
      state.priceLast = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setClear: (state) => {
      state.status = '';
    },
    setCard: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setSortBool: (state, action: PayloadAction<boolean>) => {
      state.sortBool = action.payload;
    },
    setSortByDateInc: (state, action) => {
      state.sortByDateInc = action.payload;
    },
    setSortByPriceInc: (state, action) => {
      state.sortByPriceInc = action.payload;
    },
    setSortByQuantityInc: (state, action) => {
      state.sortByQuantityInc = action.payload;
    },
    setSortByDateDec: (state, action) => {
      state.sortByDateDec = action.payload;
    },
    setSortByPriceDec: (state, action) => {
      state.sortByPriceDec = action.payload;
    },
    setSortByQuantityDec: (state, action) => {
      state.sortByQuantityDec = action.payload;
    },
  },
});

export const selectorSort = ({ sort }: RootState) => sort;

export const {
  setSort,
  setClear,
  setCard,
  setFirstDate,
  setLastDate,
  setFirstPrice,
  setEndPrice,
  setSortBool,
  setSortByDateInc,
  setSortByPriceInc,
  setSortByQuantityInc,
  setSortByDateDec,
  setSortByPriceDec,
  setSortByQuantityDec,
} = sortSlice.actions;
export default sortSlice.reducer;
