import React, { FC, useState } from 'react';
import { HeaderContainer } from './Header.styles';
import { HeaderTitle } from './components/HeaderTitle/HeaderTitle';
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';
import { HeaderFilters } from './components/HeaderFilters/HeaderFilters';

interface IHeader {
  changeTheme?: () => void;
  toFirstPage: () => void;
}

export const Header: FC<IHeader> = ({ changeTheme, toFirstPage }) => {
  const [openFilters, setOpenFilters] = useState(false);
  const onClickFilters = () => {
    setOpenFilters(!openFilters);
  };
  return (
    <HeaderContainer>
      <HeaderTitle changeTheme={changeTheme} />
      <HeaderSearch
        onClickFilters={onClickFilters}
        openFilters={openFilters}
        toFirstPage={toFirstPage}
      />
      {openFilters && <HeaderFilters toFirstPage={toFirstPage} />}
    </HeaderContainer>
  );
};
