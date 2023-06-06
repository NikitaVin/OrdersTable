import { colors } from './../../../../styles/colors';
import styled from '@emotion/styled';

export const Wrapper = styled.div<{ isLightTheme?: boolean }>({}, ({ theme, isLightTheme }) => ({
  backgroundColor: isLightTheme ? theme.backGrounds.nightDarkBack : theme.backGrounds.lightGray,
  display: 'flex',
}));

export const ListUl = styled.ul<{ isLightTheme?: boolean }>({}, ({ theme, isLightTheme }) => ({
  margin: '0px',
  marginLeft: '50px',
  backgroundColor: isLightTheme ? theme.backGrounds.nightDarkBack : theme.backGrounds.lightGray,
}));

export const ListLi = styled.li<{ padding?: string; border?: string }>(
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

export const PageBox = styled.span({});
