import React, { FC, useContext } from 'react';
import { ContainerFilterByPrice, TitleFilter } from './Filters.styles';
import AppContext from '../../context';
import { DropDownInput } from '../DropDown/InputDropDown';

interface IFilter {
  title: string;
}
export const Filter: FC<IFilter> = ({ title }) => {
  const { isLightTheme } = useContext(AppContext);

  return (
    <ContainerFilterByPrice>
      <TitleFilter isLightTheme={isLightTheme}>{title}</TitleFilter>
      <DropDownInput />
    </ContainerFilterByPrice>
  );
};
