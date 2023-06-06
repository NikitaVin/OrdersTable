import React, { FC, useContext } from 'react';
import AppContext from '../../../../context';
import { TableCell } from '../../../Table/components/TableCell/TableCell';
import { TableRow, GridContainerOrderItems, TableHead, TableBody, Sum } from './OrderItems.styles';
import { IProducts } from '../../../../redux/slices/changeInfo';
import { Text } from '../../../../App.styles';

interface IOrderItems {
  price?: string;
  products?: IProducts[];
}

export const OrderItems: FC<IOrderItems> = ({ price, products }) => {
  const { isLightTheme } = useContext(AppContext);

  return (
    <GridContainerOrderItems>
      <TableHead>
        <TableRow>
          <TableCell isHead padding="0px 16px" color="white" title="Наименование" />
          <TableCell isHead padding="0px 16px" color="white" title="Цена" />
        </TableRow>
      </TableHead>
      <TableBody>
        {products?.map((i, index) => {
          return (
            <TableRow key={index}>
              <TableCell
                padding="8px 16px"
                borderBottom="1px solid #EBF0F5"
                color="black"
                title={i.name}
              />
              <TableCell
                padding="8px 16px"
                borderBottom="1px solid #EBF0F5"
                color="black"
                title={i.price}
              />
            </TableRow>
          );
        })}

        <Sum isLightTheme={isLightTheme}>
          <Text>Итоговая сумма: {price} ₽</Text>
        </Sum>
      </TableBody>
    </GridContainerOrderItems>
  );
};
