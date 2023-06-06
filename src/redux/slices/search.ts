import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit';

interface ISearchSlice {
  searchValue: string;
}

const initialState: ISearchSlice = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectorSearch = (state: RootState) => state.search;

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
