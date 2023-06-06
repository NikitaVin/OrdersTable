import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import ordersSlice from './slices/orders';
import sortSlice from './slices/sort';
import searchSlice from './slices/search';
import changeInfo from './slices/changeInfo';
import fullOrdersSlice from './slices/fullOrders';

export const store = configureStore({
  reducer: {
    orders: ordersSlice,
    sort: sortSlice,
    search: searchSlice,
    changeInfo,
    fullOrders: fullOrdersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
