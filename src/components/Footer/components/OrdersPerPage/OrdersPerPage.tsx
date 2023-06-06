import React, { FC } from 'react';
import { PageBox, Wrapper } from '../Pagination/Paginateion.styles';
import { ListLiQuantity, ListUlQuantity } from './OrdersPerPage.styles';
import { Text } from '../../../../App.styles';

interface IOrersPerPage {
  isLightTheme?: boolean;
  ordersPerPage: number;
  hendleLimitOrdersPerPage: (i: number) => void;
}

export const OrdersPerPage: FC<IOrersPerPage> = ({
  isLightTheme,
  ordersPerPage,
  hendleLimitOrdersPerPage,
}) => {
  const ordersPerPageArr = [5, 10, 15];

  return (
    <Wrapper isLightTheme={isLightTheme}>
      <ListUlQuantity isLightTheme={isLightTheme}>
        <Text>Выводить по: </Text>
        {ordersPerPageArr.map((number) => (
          <ListLiQuantity
            key={number}
            padding={ordersPerPage === number ? '6px' : '4px'}
            border={ordersPerPage === number ? '2px solid #ff0000' : ''}
          >
            <PageBox onClick={() => hendleLimitOrdersPerPage(number)}>{number}</PageBox>
          </ListLiQuantity>
        ))}
      </ListUlQuantity>
    </Wrapper>
  );
};
