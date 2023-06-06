import styled from '@emotion/styled';
import { colors } from './../../../../styles/colors';

export const ListUlQuantity = styled.ul<{ isLightTheme?: boolean }>(
  {},
  ({ theme, isLightTheme }) => ({
    marginLeft: '15px',
    backgroundColor: isLightTheme ? theme.backGrounds.nightDarkBack : theme.backGrounds.lightGray,
  })
);

export const ListLiQuantity = styled.li<{ padding?: string; border?: string }>(
  {
    display: 'inline',
    marginRight: '5px',
    borderRadius: '4px',
    backgroundColor: colors.blue,
    color: colors.white,
    cursor: 'pointer',
    '&:hover': {
      padding: '6px',
    },
  },
  ({ padding }) => ({
    padding,
  }),
  ({ border }) => ({
    border,
  })
);
