import { colors } from './../../../../styles/colors';
import styled from '@emotion/styled';

export const HeaderFiltersWrap = styled.div<{ isLightTheme?: boolean }>(
  {
    display: 'flex',
  },
  ({ theme, isLightTheme }) => ({
    backgroundColor: isLightTheme ? theme.backGrounds.nightDarkBack : theme.backGrounds.lightGray,
  })
);

export const HeaderButtonWrap = styled.div<{ isLightTheme?: boolean }>(
  {
    marginLeft: 16,
  },
  ({ theme, isLightTheme }) => ({
    backgroundColor: isLightTheme ? theme.backGrounds.nightDarkBack : theme.backGrounds.lightGray,
  })
);

export const HeaderFiltersContainer = styled.div<{ isLightTheme?: boolean }>(
  {
    display: 'flex',
    alignItems: 'flex-end',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: colors.dayWhite,
    marginBottom: 32,
  },
  ({ theme, isLightTheme }) => ({
    backgroundColor: isLightTheme ? theme.backGrounds.nightDarkBack : theme.backGrounds.lightGray,
  })
);
