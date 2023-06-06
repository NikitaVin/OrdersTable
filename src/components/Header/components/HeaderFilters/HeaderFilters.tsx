import React, { FC, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppContext from '../../../../context';
import {
  selectorSort,
  setEndPrice,
  setFirstDate,
  setFirstPrice,
  setLastDate,
} from '../../../../redux/slices/sort';
import { colors } from '../../../../styles/colors';
import { MarginContainer } from '../../../../styles/components.styles';
import { Button } from '../../../Button/Button';
import { Filter } from '../../../Filter/Filter';
import {
  ContainerFilterByPrice,
  TitleFilter,
  WrapperFilterByPriceForInput,
} from '../../../Filter/Filters.styles';
import { Input } from '../../../Input/Input';
import { InputArea } from '../../../Input/Input.styles';
import {
  HeaderFiltersWrap,
  HeaderButtonWrap,
  HeaderFiltersContainer,
} from './HeaderFilters.styles';
import { Text } from '../../../../App.styles';

interface IHeaderFilters {
  toFirstPage: () => void;
}

export const HeaderFilters: FC<IHeaderFilters> = ({ toFirstPage }) => {
  const { dateFirst, dateLast, priceFirst, priceLast } = useSelector(selectorSort);
  const { isLightTheme } = useContext(AppContext);
  const dispatch = useDispatch();

  const handleChangeDateFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    let dateMask = '';
    if (dateValue) {
      dateMask = !dateValue[2]
        ? dateValue[1]
        : `${dateValue[1]}.${dateValue[2]}${`${dateValue[3] ? `.${dateValue[3]}` : ''}`}`;
    }
    dispatch(setFirstDate(dateMask));
  };
  const handleChangeDateLast = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    let dateMask = '';
    if (dateValue) {
      dateMask = !dateValue[2]
        ? dateValue[1]
        : `${dateValue[1]}.${dateValue[2]}${`${dateValue[3] ? `.${dateValue[3]}` : ''}`}`;
    }
    dispatch(setLastDate(dateMask));
  };
  const handleChangePriceFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    (function () {
      const priceMask = e.target.value
        .replace(/[^\d]/g, '')
        .split('')
        .reverse()
        .join('')
        .replace(/\d{3}(?!$|(?:\s$))/g, '$& ')
        .split('')
        .reverse()
        .join('');
      dispatch(setFirstPrice(priceMask));
    })();
  };
  const handleChangePriceLast = (e: React.ChangeEvent<HTMLInputElement>) => {
    (function () {
      const priceMask = e.target.value
        .replace(/[^\d]/g, '')
        .split('')
        .reverse()
        .join('')
        .replace(/\d{3}(?!$|(?:\s$))/g, '$& ')
        .split('')
        .reverse()
        .join('');
      dispatch(setEndPrice(priceMask));
    })();
  };

  useEffect(() => {
    handleChangeDateFirst;
    handleChangeDateLast;
    handleChangePriceFirst;
    handleChangePriceLast;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateFirst, dateLast, priceFirst, priceLast]);

  const clearInputDateFirst = () => {
    dispatch(setFirstDate(''));
  };
  const clearInputDateLast = () => {
    dispatch(setLastDate(''));
  };
  const clearInputPriceFirst = () => {
    dispatch(setFirstPrice(''));
  };
  const clearInputPriceLast = () => {
    dispatch(setEndPrice(''));
  };

  return (
    <HeaderFiltersContainer isLightTheme={isLightTheme}>
      <HeaderFiltersWrap isLightTheme={isLightTheme}>
        <ContainerFilterByPrice>
          <TitleFilter isLightTheme={isLightTheme}>
            <Text>Дата оформления</Text>
          </TitleFilter>
          <WrapperFilterByPriceForInput>
            <MarginContainer>
              <Input
                marginRight={8}
                size={100}
                word="c"
                isWord
                isIconClear
                svgClear="x-large"
                iconColor={colors.blue}
                onClick={clearInputDateFirst}
              >
                <InputArea
                  type="text"
                  value={dateFirst}
                  placeholder="dd.mm.yyyy"
                  onChange={(e) => handleChangeDateFirst(e)}
                />
              </Input>
            </MarginContainer>
            <MarginContainer left={4}>
              <Input
                marginRight={8}
                size={100}
                word="по"
                isWord
                isIconClear
                svgClear="x-large"
                iconColor={colors.blue}
                onClick={clearInputDateLast}
              >
                <InputArea
                  type="text"
                  value={dateLast}
                  placeholder="dd.mm.yyyy"
                  onChange={(e) => handleChangeDateLast(e)}
                />
              </Input>
            </MarginContainer>
          </WrapperFilterByPriceForInput>
        </ContainerFilterByPrice>
        <MarginContainer left={16}>
          <Filter title="Статус заказа" />
        </MarginContainer>
        <MarginContainer left={16}>
          <ContainerFilterByPrice>
            <TitleFilter isLightTheme={isLightTheme}>
              <Text>Сумма заказа</Text>
            </TitleFilter>
            <WrapperFilterByPriceForInput>
              <MarginContainer>
                <Input
                  marginRight={8}
                  size={100}
                  word="от"
                  isWord
                  isIconClear
                  svgClear="x-large"
                  iconColor={colors.blue}
                  onClick={clearInputPriceFirst}
                >
                  <InputArea
                    type="text"
                    value={priceFirst}
                    placeholder="₽"
                    onChange={(e) => handleChangePriceFirst(e)}
                  />
                </Input>
              </MarginContainer>
              <MarginContainer left={4}>
                <Input
                  marginRight={8}
                  size={100}
                  word="до"
                  isWord
                  isIconClear
                  svgClear="x-large"
                  iconColor={colors.blue}
                  onClick={clearInputPriceLast}
                >
                  <InputArea
                    type="text"
                    value={priceLast}
                    placeholder="₽"
                    onChange={(e) => handleChangePriceLast(e)}
                  />
                </Input>
              </MarginContainer>
            </WrapperFilterByPriceForInput>
          </ContainerFilterByPrice>
        </MarginContainer>
      </HeaderFiltersWrap>
      <HeaderButtonWrap isLightTheme={isLightTheme}>
        <Button color="Transparent" text="Применить" sort onClick={toFirstPage} />
      </HeaderButtonWrap>
    </HeaderFiltersContainer>
  );
};
