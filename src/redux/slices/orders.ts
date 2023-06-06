import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';
import { RootState } from '../store';
import { IProducts } from './changeInfo';

interface ISort {
  sortByDateInc: boolean;
  sortByDateDec: boolean;
  sortByPriceInc: boolean;
  sortByPriceDec: boolean;
  sortByQuantityInc: boolean;
  sortByQuantityDec: boolean;
}

interface IFilters {
  startDate?: string;
  endDate?: string;
  startPrice?: string;
  endPrice?: string;
  filteredStatus?: string;
  page?: number;
  limit?: number;
  searchValue?: string | number;
  sort?: ISort;
}

interface FilterTypes {
  filters?: IFilters;
}

export const getAsyncOrdersByParams = createAsyncThunk(
  'orders/getAsyncOrdersByParams',
  async (filters: FilterTypes) => {
    const { data } = await axios.post('/orders', filters);
    return data;
  }
);

interface IItems {
  id: number;
  name: string;
  status: string;
  date: string;
  products: IProducts[];
}

interface IOrders {
  orders: {
    items: IItems[];
    status: string;
  };
}

const initialState: IOrders = {
  orders: {
    items: [],
    status: 'loading',
  },
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAsyncOrdersByParams.pending, (state) => {
      state.orders.status = 'loading';
    });

    builder.addCase(getAsyncOrdersByParams.fulfilled, (state, action) => {
      state.orders.items = action.payload;
      state.orders.status = 'loaded';
    });

    builder.addCase(getAsyncOrdersByParams.rejected, (state) => {
      console.log('err', state);
      alert('Произошла ошибка, попробуйте обновить страницу');
      state.orders.status = 'loaded';
    });
  },
});

export const ordersSelector = (state: RootState) => state.orders;

export default ordersSlice.reducer;
