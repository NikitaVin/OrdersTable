import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';
import { RootState } from '../store';

interface IFilters {
  startDate?: string;
  endDate?: string;
  startPrice?: string;
  endPrice?: string;
  filteredStatus?: string;
  searchValue?: string | number;
}

interface FilterTypes {
  filters?: IFilters;
}

export const getAsyncFullOrders = createAsyncThunk(
  'fullOrders/getAsyncFullOrders',
  async (filters: FilterTypes) => {
    const { data } = await axios.post('/fullOrders', filters);
    return data;
  }
);

interface IItems {
  id: number;
  name: string;
  price: string;
  status: string;
  date: string;
  quantity: number;
}

interface IfullOrders {
  fullOrders: {
    items: IItems[];
    status: string;
  };
}

const initialState: IfullOrders = {
  fullOrders: {
    items: [],
    status: 'loading',
  },
};

const fullOrdersSlice = createSlice({
  name: 'fullOrders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAsyncFullOrders.pending, (state) => {
      state.fullOrders.status = 'loading';
    });

    builder.addCase(getAsyncFullOrders.fulfilled, (state, action) => {
      state.fullOrders.items = action.payload;
      state.fullOrders.status = 'loaded';
    });

    builder.addCase(getAsyncFullOrders.rejected, (state) => {
      console.log('err', state);
      alert('Произошла ошибка, попробуйте обновить страницу');
      state.fullOrders.status = 'loaded';
    });
  },
});

export const fullOrdersSelector = (state: RootState) => state.fullOrders;

export default fullOrdersSlice.reducer;
