import React, { FC, useMemo, useState } from 'react';
import { Button } from '../../../Button/Button';
import { Input } from '../../../Input/Input';
import {
  HeaderSearchContainer,
  HeaderInputContainer,
  RightSideContainer,
  HeaderIconContainer,
} from '../../Header.styles';
import { MarginContainer } from '../../../../styles/components.styles';
import { InputArea, P } from '../../../Input/Input.styles';
import { SVGIcon } from '../../../../assets/icons/constansIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../../../redux/slices/search';
import {
  setFirstDate,
  setLastDate,
  setFirstPrice,
  setEndPrice,
  setSortBool,
  setSort,
  selectorSort,
} from '../../../../redux/slices/sort';
import debounce from 'lodash.debounce';
import { ordersSelector } from '../../../../redux/slices/orders';

interface IHeaderSearch {
  onClickFilters?: () => void;
  openFilters?: boolean;
  toFirstPage: () => void;
}

export const HeaderSearch: FC<IHeaderSearch> = ({ onClickFilters, openFilters, toFirstPage }) => {
  const [value, setValue] = useState('');
  const { sortBool } = useSelector(selectorSort);
  const { orders } = useSelector(ordersSelector);
  const dispatch = useDispatch();

  const cleanFilters = () => {
    dispatch(setFirstDate(''));
    dispatch(setLastDate(''));
    dispatch(setFirstPrice(''));
    dispatch(setEndPrice(''));
    dispatch(setSearchValue(''));
    dispatch(setSort(''));
    dispatch(setSortBool(!sortBool));
  };

  const updateSearchValue = useMemo(
    () =>
      debounce((str) => {
        dispatch(setSearchValue(str));
        toFirstPage();
      }, 250),
    [dispatch, toFirstPage]
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const cleanSearchArea = () => {
    setValue('');
    dispatch(setSearchValue(''));
    dispatch(setSortBool(!sortBool));
  };

  return (
    <HeaderSearchContainer>
      <HeaderInputContainer>
        <Input
          marginLeft={8}
          marginRight={8}
          svgForInput="searchIcon"
          svgClear="x-large"
          iconColor="#459DF5"
          size={25}
          isIconClear
          onClick={cleanSearchArea}
        >
          <InputArea value={value} placeholder="Номер заказа или ФИО" onChange={handleSearch} />
        </Input>
        <MarginContainer left={16}>
          <Button
            iconForButton="filterIcon"
            color="blue"
            text="Фильтры"
            colorIcon="white"
            onClick={onClickFilters}
          />
        </MarginContainer>
        <MarginContainer left={16}>
          {openFilters && (
            <Button color="Transparent" text="Сбросить фильтры" onClick={cleanFilters} />
          )}
        </MarginContainer>
      </HeaderInputContainer>
      {orders.status === 'loading' && (
        <RightSideContainer>
          <HeaderIconContainer>
            <SVGIcon icons="refreshIcon" color="#459DF5" />
          </HeaderIconContainer>
          <P>Загрузка</P>
        </RightSideContainer>
      )}
    </HeaderSearchContainer>
  );
};
