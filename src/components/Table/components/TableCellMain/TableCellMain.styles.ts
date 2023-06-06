import styled from '@emotion/styled';
import { colors } from '../../../../styles/colors';

export const TableCellMainWrap = styled.div<{
  borderBottom?: string;
  padding?: string;
  isHead?: boolean;
  color?: string;
  backGroundColor?: string;
}>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
  },
  ({ color }) => ({
    color: color,
  }),
  ({ borderBottom }) => ({
    borderBottom: borderBottom,
  }),
  ({ padding }) => ({
    padding: padding,
  }),
  ({ isHead }) => ({
    backgroundColor: isHead ? colors.blue : '',
  }),
  ({ backGroundColor }) => ({
    background: backGroundColor,
  })
);
