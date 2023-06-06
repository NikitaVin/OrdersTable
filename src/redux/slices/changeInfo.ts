import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IProducts {
  name: string;
  price: string;
}

export interface IOrderInfo {
  id: number;
  name: string;
  status: string;
  date: string;
  quantity?: number;
  price?: string;
  products?: IProducts[];
}

interface IChangeInfoSlice {
  orderInfo: IOrderInfo[];
}

const initialState: IChangeInfoSlice = {
  orderInfo: [],
};

const changeInfoSlice = createSlice({
  name: 'changeInfo',
  initialState,
  reducers: {
    addOrderForChange: (state, action: PayloadAction<IOrderInfo>) => {
      state.orderInfo = [];
      state.orderInfo.push({ ...action.payload });
    },
    clearOrderForChange: (state, action) => {
      state.orderInfo = state.orderInfo.filter((el) => el.id === action.payload.id);
    },
  },
});

export const selectorChangeInfo = (state: RootState) => state.changeInfo;

export const { addOrderForChange, clearOrderForChange } = changeInfoSlice.actions;
export default changeInfoSlice.reducer;
