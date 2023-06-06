import React, { FC } from 'react';
import { Button } from '../../../Button/Button';
import { Container, HeaderTitleContainer } from '../../Header.styles';
import { colors } from '../../../../styles/colors';
import { H2 } from '../../../../App.styles';

interface IHeaderTitle {
  changeTheme?: () => void;
}

export const HeaderTitle: FC<IHeaderTitle> = ({ changeTheme }) => (
  <HeaderTitleContainer>
    <H2>Список заказов</H2>
    <Container>
      <Button
        onClick={changeTheme}
        iconForButton="sunIcon"
        colorIcon={colors.blue}
        text="Светлая тема"
        color="Transparent"
      />
    </Container>
  </HeaderTitleContainer>
);
