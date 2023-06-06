import React, { FC } from 'react';
import { ListLi, ListUl, PageBox, Wrapper } from './Paginateion.styles';
import { useSelector } from 'react-redux';
import { fullOrdersSelector } from '../../../../redux/slices/fullOrders';

interface IPagination {
  isLightTheme?: boolean;
  ordersPerPage: number;
  paginate: (pageNumber: number) => void;
  currentPage?: number;
}

export const Pagination: FC<IPagination> = ({
  isLightTheme,
  ordersPerPage,
  paginate,
  currentPage,
}) => {
  const { fullOrders } = useSelector(fullOrdersSelector);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(fullOrders.items.length / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper isLightTheme={isLightTheme}>
      <ListUl isLightTheme={isLightTheme}>
        <span>Страница: </span>
        {pageNumbers.map((number) => (
          <ListLi
            key={number}
            padding={currentPage === number ? '6px' : '4px'}
            border={currentPage === number ? '2px solid #ff0000' : ''}
          >
            <PageBox onClick={() => paginate(number)}>{number}</PageBox>
          </ListLi>
        ))}
      </ListUl>
    </Wrapper>
  );
};
