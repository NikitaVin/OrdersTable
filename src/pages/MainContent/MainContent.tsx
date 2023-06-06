import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Footer } from '../../components/Footer/Footer';
import { Table } from '../../components/Table/Table';
import { getAsyncFullOrders } from '../../redux/slices/fullOrders';
import { getAsyncOrdersByParams, ordersSelector } from '../../redux/slices/orders';
import { selectorSort } from '../../redux/slices/sort';
import { useAppDispatch } from '../../redux/store';
import { selectorSearch } from '../../redux/slices/search';
import { formatToDate } from '../../utils/formatToDate';

interface IMainContent {
  onClickChangeStatus?: () => void;
  setCurrentPage: (pageNumber: number) => void;
  hendleLimitOrdersPerPage: (i: number) => void;
  currentPage: number;
  ordersPerPage: number;
}

export const MainContent: FC<IMainContent> = ({
  onClickChangeStatus,
  ordersPerPage,
  currentPage,
  setCurrentPage,
  hendleLimitOrdersPerPage,
}) => {
  const appDispatch = useAppDispatch();
  const { searchValue } = useSelector(selectorSearch);
  const {
    dateFirst,
    dateLast,
    priceFirst,
    priceLast,
    sortBool,
    status,
    sortByDateInc,
    sortByDateDec,
    sortByPriceInc,
    sortByPriceDec,
    sortByQuantityInc,
    sortByQuantityDec,
  } = useSelector(selectorSort);

  const { orders } = useSelector(ordersSelector);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const formatToPrice = (price: string) => {
    if (price.length > 3) {
      const arrPrice = price.split('');
      const trueFomat = arrPrice.filter((el) => el !== ' ').join('');
      return trueFomat;
    }
    return price;
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    appDispatch(
      getAsyncFullOrders({
        filters: {
          startDate: formatToDate(dateFirst),
          endDate: formatToDate(dateLast),
          startPrice: formatToPrice(priceFirst),
          endPrice: formatToPrice(priceLast),
          filteredStatus: status,
          searchValue,
        },
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBool, searchValue]);

  useEffect(() => {
    window.scrollTo(0, 0);

    appDispatch(
      getAsyncOrdersByParams({
        filters: {
          startDate: formatToDate(dateFirst),
          endDate: formatToDate(dateLast),
          startPrice: formatToPrice(priceFirst),
          endPrice: formatToPrice(priceLast),
          filteredStatus: status,
          page: currentPage,
          limit: ordersPerPage,
          searchValue,
          sort: {
            sortByDateInc,
            sortByDateDec,
            sortByPriceInc,
            sortByPriceDec,
            sortByQuantityInc,
            sortByQuantityDec,
          },
        },
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    sortBool,
    currentPage,
    ordersPerPage,
    searchValue,
    sortByDateInc,
    sortByDateDec,
    sortByPriceInc,
    sortByPriceDec,
    sortByQuantityInc,
    sortByQuantityDec,
  ]);

  return (
    <div>
      <Table orders={orders.items} />
      <Footer
        currentPage={currentPage}
        onClickChangeStatus={onClickChangeStatus}
        ordersPerPage={ordersPerPage}
        paginate={paginate}
        hendleLimitOrdersPerPage={hendleLimitOrdersPerPage}
      />
    </div>
  );
};
