import React, { FC, useState } from 'react';
import { TableCell } from './components/TableCell/TableCell';
import { TableCellMain } from './components/TableCellMain/TableCellMain';
import { GridContainer, TableHead, TableRow } from './Table.styles';
import { useDispatch } from 'react-redux';
import {
  setSortByDateDec,
  setSortByDateInc,
  setSortByPriceDec,
  setSortByPriceInc,
  setSortByQuantityDec,
  setSortByQuantityInc,
} from '../../redux/slices/sort';
import { colors } from '../../styles/colors';
import { totalPrice } from '../../utils/totalPrice';
import { IProducts } from '../../redux/slices/changeInfo';

interface IOrders {
  id: number;
  name: string;
  status: string;
  date: string;
  products: IProducts[];
}

interface ITable {
  orders: IOrders[];
}

export const Table: FC<ITable> = ({ orders }) => {
  const dispatch = useDispatch();
  const [isClickSortDate, setIsClickSortDate] = useState(false);
  const [isClickSortQuantity, setIsClickSortQuantity] = useState(false);
  const [isClickSortPrice, setIsClickSortPrice] = useState(false);

  const onClickSortByDateInc = (i: boolean) => {
    dispatch(setSortByDateInc(i));
  };

  const onClickSortByDateDec = (i: boolean) => {
    dispatch(setSortByDateDec(i));
  };

  const onClickSortByPriceInc = (i: boolean) => {
    dispatch(setSortByPriceInc(i));
  };

  const onClickSortByPriceDec = (i: boolean) => {
    dispatch(setSortByPriceDec(i));
  };

  const onClickSortByQuantityInc = (i: boolean) => {
    dispatch(setSortByQuantityInc(i));
  };

  const onClickSortByQuantityDec = (i: boolean) => {
    dispatch(setSortByQuantityDec(i));
  };

  const onClickOpenSortDate = () => {
    setIsClickSortPrice(false);
    setIsClickSortQuantity(false);
    setIsClickSortDate(true);
  };

  const onClickOpenSortQuantity = () => {
    setIsClickSortPrice(false);
    setIsClickSortDate(false);
    setIsClickSortQuantity(true);
  };

  const onClickOpenSortPrice = () => {
    setIsClickSortQuantity(false);
    setIsClickSortDate(false);
    setIsClickSortPrice(true);
  };

  return (
    <GridContainer>
      <TableHead>
        <TableRow backGroundColor={colors.blue}>
          <TableCell color="white" title="" backGroundColor={colors.blue} width="50px" />
          <TableCell color="white" title="#" backGroundColor={colors.blue} />
          <TableCell
            backGroundColor={colors.blue}
            color="white"
            title="Дата"
            sort
            isClickSortDate={isClickSortDate}
            onClickSortByDateInc={(i) => onClickSortByDateInc(i)}
            onClickSortByDateDec={(i) => onClickSortByDateDec(i)}
            onClickSortByPriceInc={(i) => onClickSortByPriceInc(i)}
            onClickSortByPriceDec={(i) => onClickSortByPriceDec(i)}
            onClickSortByQuantityInc={(i) => onClickSortByQuantityInc(i)}
            onClickSortByQuantityDec={(i) => onClickSortByQuantityDec(i)}
            onClickOpenSortDate={onClickOpenSortDate}
          />
          <TableCell color="white" backGroundColor={colors.blue} title="Статус заказа" />
          <TableCell
            backGroundColor={colors.blue}
            color="white"
            title="Позиций"
            sort
            isClickSortQuantity={isClickSortQuantity}
            onClickSortByQuantityInc={(i) => onClickSortByQuantityInc(i)}
            onClickSortByQuantityDec={(i) => onClickSortByQuantityDec(i)}
            onClickSortByDateInc={(i) => onClickSortByDateInc(i)}
            onClickSortByDateDec={(i) => onClickSortByDateDec(i)}
            onClickSortByPriceInc={(i) => onClickSortByPriceInc(i)}
            onClickSortByPriceDec={(i) => onClickSortByPriceDec(i)}
            onClickOpenSortQuantity={onClickOpenSortQuantity}
          />
          <TableCell
            backGroundColor={colors.blue}
            color="white"
            title="Сумма"
            sort
            isClickSortPrice={isClickSortPrice}
            onClickSortByPriceInc={(i) => onClickSortByPriceInc(i)}
            onClickSortByPriceDec={(i) => onClickSortByPriceDec(i)}
            onClickSortByDateInc={(i) => onClickSortByDateInc(i)}
            onClickSortByDateDec={(i) => onClickSortByDateDec(i)}
            onClickSortByQuantityInc={(i) => onClickSortByQuantityInc(i)}
            onClickSortByQuantityDec={(i) => onClickSortByQuantityDec(i)}
            onClickOpenSortPrice={onClickOpenSortPrice}
          />
          <TableCell color="white" backGroundColor={colors.blue} title="ФИО покупателя" />
        </TableRow>
      </TableHead>
      {orders.map((i) => {
        const arrDate = i.date.split('');
        const year = arrDate.splice(0, 4);
        const mounth = arrDate.splice(1, 2);
        const day = arrDate.splice(2, 2);
        const formatToDate = [...day, ...mounth, ...year];

        formatToDate.splice(2, 0, '.');
        formatToDate.splice(5, 0, '.');
        const strFormatToDate = formatToDate.join('');

        return (
          <TableCellMain
            id={i.id}
            date={strFormatToDate}
            status={i.status}
            quantity={i.products.length}
            price={`${totalPrice(i.products)}`}
            name={i.name}
            products={i.products}
            key={i.id}
          />
        );
      })}
    </GridContainer>
  );
};
