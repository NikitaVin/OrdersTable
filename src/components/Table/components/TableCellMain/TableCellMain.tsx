import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IOrderInfo,
  addOrderForChange,
  selectorChangeInfo,
  clearOrderForChange,
  IProducts,
} from '../../../../redux/slices/changeInfo';
import { CheckBoxArea, CheckBoxFlex } from '../../../CheckBox/CheckBox.styles';
import { TableBody, TableRow } from '../../Table.styles';
import { TableCellMainWrap } from './TableCellMain.styles';
import { Text } from '../../../../App.styles';

interface ITableCellMain {
  id: number;
  date: string;
  status: string;
  quantity: number;
  price: string;
  name: string;
  products?: IProducts[];
}

export const TableCellMain: FC<ITableCellMain> = ({
  id,
  date,
  status,
  quantity,
  price,
  name,
  products,
}) => {
  const dispatch = useDispatch();
  const { orderInfo } = useSelector(selectorChangeInfo);

  const findId = (id: number) => {
    let isHaveId = false;
    for (let i = 0; i < orderInfo.length; i++) {
      if (orderInfo.length >= 1 && orderInfo[i].id === id) {
        isHaveId = true;
      }
    }
    return isHaveId;
  };
  const didChecked = findId(id);

  const onClickCheckBoxChangeStatus = () => {
    if (findId(id)) {
      dispatch(clearOrderForChange(id));
    }
    if (!findId(id)) {
      const orderItem: IOrderInfo = {
        id,
        date,
        status,
        quantity,
        price,
        name,
        products,
      };
      dispatch(addOrderForChange(orderItem));
    }
  };

  return (
    <TableBody>
      <TableRow>
        <TableCellMainWrap>
          <CheckBoxFlex>
            <CheckBoxArea
              didChecked={didChecked}
              type="checkbox"
              onClick={onClickCheckBoxChangeStatus}
            />
          </CheckBoxFlex>
        </TableCellMainWrap>
        <TableCellMainWrap>
          <Text>{id}</Text>
        </TableCellMainWrap>
        <TableCellMainWrap>
          <Text>{date}</Text>
        </TableCellMainWrap>
        <TableCellMainWrap>
          <Text>{status}</Text>
        </TableCellMainWrap>
        <TableCellMainWrap>
          <Text>{quantity}</Text>
        </TableCellMainWrap>
        <TableCellMainWrap>
          <Text>{price} ₽</Text>
        </TableCellMainWrap>
        <TableCellMainWrap>
          <Text>{name}</Text>
        </TableCellMainWrap>
      </TableRow>
    </TableBody>
  );
};
