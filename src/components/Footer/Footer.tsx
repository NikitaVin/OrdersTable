import React, { FC, useContext, useState } from 'react';
import AppContext from '../../context';
import { Button } from '../Button/Button';
import { Pagination } from './components/Pagination/Pagination';
import { PopUp } from './components/PopUp/PopUp';
import { FooterMain, FooterWrapper, MainContainer } from './Footer.styles';
import { OrdersPerPage } from './components/OrdersPerPage/OrdersPerPage';
import { useSelector } from 'react-redux';
import { selectorChangeInfo } from '../../redux/slices/changeInfo';

interface IFooter {
  onClickChangeStatus?: () => void;
  ordersPerPage: number;
  paginate: (pageNumber: number) => void;
  currentPage?: number;
  hendleLimitOrdersPerPage: (i: number) => void;
}

export const Footer: FC<IFooter> = ({
  onClickChangeStatus,
  ordersPerPage,
  paginate,
  currentPage,
  hendleLimitOrdersPerPage,
}) => {
  const { orderInfo } = useSelector(selectorChangeInfo);
  const [isPopUp, setIsPopUp] = useState(false);

  const onClickTrash = () => {
    setIsPopUp(!isPopUp);
  };

  const { isLightTheme } = useContext(AppContext);

  return (
    <FooterMain>
      <FooterWrapper isLightTheme={isLightTheme}>
        <MainContainer isLightTheme={isLightTheme}>
          <Button
            iconForButton="pencil"
            color="blue"
            text="Изменить статус"
            colorIcon="white"
            margin="0px 15px"
            padding="0px 10px"
            disabled={orderInfo.length ? false : true}
            onClick={onClickChangeStatus}
          />
          <Button
            onClick={onClickTrash}
            iconForButton="trash"
            color="red"
            text="Удалить"
            colorIcon="white"
            disabled={orderInfo.length ? false : true}
          />
          {isPopUp && <PopUp onClickTrash={onClickTrash} />}
        </MainContainer>
        <Pagination
          paginate={paginate}
          isLightTheme={isLightTheme}
          ordersPerPage={ordersPerPage}
          currentPage={currentPage}
        />
      </FooterWrapper>
      <FooterWrapper isLightTheme={isLightTheme}>
        <OrdersPerPage
          hendleLimitOrdersPerPage={hendleLimitOrdersPerPage}
          ordersPerPage={ordersPerPage}
          isLightTheme={isLightTheme}
        />
      </FooterWrapper>
    </FooterMain>
  );
};
