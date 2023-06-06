import { colors } from './../../../../styles/colors';
import styled from '@emotion/styled';

export const IconWrapper = styled.span<{
  marginLeft?: number;
  marginRight?: number;
  cursor?: string;
  transform?: string;
  isPointer?: boolean;
  width?: number;
  height?: number;
}>(
  {
    alignItems: 'center',
    width: '16px',
  },
  ({ width }) => ({
    width: width,
  }),
  ({ height }) => ({
    height: height,
  }),
  ({ marginLeft }) => ({
    marginLeft: marginLeft,
  }),
  ({ isPointer }) => ({
    cursor: isPointer ? 'pointer' : '',
  }),
  ({ marginRight }) => ({
    marginRight: marginRight,
  }),
  ({ cursor }) => ({
    cursor: cursor,
  }),
  ({ transform }) => ({
    transform: transform,
  })
);

export const TableCellWrap = styled.div<{
  borderBottom?: string;
  padding?: string;
  isHead?: boolean;
  color?: string;
  backGroundColor?: string;
  width?: string;
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
  }),
  ({ width }) => ({
    width: width,
  })
);

export const TableImg = styled.img({
  marginLeft: 4,
  width: '17px',
  height: '17px',
  color: 'white',
  cursor: 'pointer',
});

export const TableImgDec = styled.img({
  marginLeft: 4,
  width: '17px',
  height: '17px',
  color: 'white',
  cursor: 'pointer',
  transform: 'rotate(180deg)',
});
