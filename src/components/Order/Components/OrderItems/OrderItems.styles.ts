import { colors } from './../../../../styles/colors';
import styled from '@emotion/styled';

export const GridContainerOrderItems = styled.div({
  margin: '32px 0px',
});

export const TableHead = styled.div({
  backgroundColor: colors.blue,
  padding: '8px 16px',
});

export const TableRow = styled.div({
  backgroundColor: 'inherit',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 50%)',
});

export const TableBody = styled.div({});

export const Sum = styled.div<{ isLightTheme: boolean }>(
  {
    display: 'flex',
    padding: '8px 16px',
    justifyContent: 'flex-end',
    backgroundColor: '#EBF0F5',
  },
  ({ theme, isLightTheme }) => ({
    backgroundColor: isLightTheme ? theme.backGrounds.nightDarkBack : theme.backGrounds.lightGray,
  })
);
