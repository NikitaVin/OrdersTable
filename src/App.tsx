import { FC, useState } from 'react';
import { Header } from './components/Header/Header';
import { MainContent } from './pages/MainContent/MainContent';
import { DivApp, DivRoot } from './App.styles';
import { GlobalStyles } from './styles/global.styles';
import { Order } from './components/Order/Order';
import AppContext from './context';
import { ThemeProvider } from '@emotion/react';
import { colors } from './styles/colors';
import { useSelector } from 'react-redux';
import { selectorChangeInfo } from './redux/slices/changeInfo';

const App: FC = () => {
  const [openOrder, setOpenOrder] = useState(false);

  const { orderInfo } = useSelector(selectorChangeInfo);

  const onClickChangeStatus = () => {
    setOpenOrder(true);
  };

  const onClickCloseChangeStatus = () => {
    setOpenOrder(false);
  };

  const [isLightTheme, setIsLightTheme] = useState(false);

  const changeTheme = () => {
    setIsLightTheme(!isLightTheme);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(5);

  const toFirstPage = () => {
    setCurrentPage(1);
  };

  const hendleLimitOrdersPerPage = (i: number) => {
    setOrdersPerPage(i);
    toFirstPage();
  };

  const theme = {
    colors: {
      light: colors.black,
      dark: colors.white,
    },
    backGrounds: {
      light: colors.white,
      lightGray: colors.dayWhite,
      dark: colors.nightBack,
      nightDarkBack: colors.nightDarkBack,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ isLightTheme }}>
        <DivApp isLightTheme={isLightTheme}>
          <GlobalStyles theme={theme} isLightTheme={isLightTheme} />
          {openOrder &&
            orderInfo &&
            orderInfo.map(({ id, date, status, price, name, products }) => (
              <Order
                key={id.toString()}
                id={id.toString()}
                date={date}
                status={status}
                price={price}
                name={name}
                products={products}
                onClickCloseChangeStatus={onClickCloseChangeStatus}
              />
            ))}
          <DivRoot>
            <Header changeTheme={changeTheme} toFirstPage={toFirstPage} />
            <MainContent
              onClickChangeStatus={onClickChangeStatus}
              currentPage={currentPage}
              ordersPerPage={ordersPerPage}
              setCurrentPage={setCurrentPage}
              hendleLimitOrdersPerPage={hendleLimitOrdersPerPage}
            />
          </DivRoot>
        </DivApp>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
