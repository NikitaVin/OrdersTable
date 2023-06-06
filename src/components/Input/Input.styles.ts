import { colors } from './../../styles/colors';
import styled from '@emotion/styled';

export const MyInputStyle = styled.span<{ size?: number; isLightTheme?: boolean }>(
  {
    position: 'relative',
    display: 'flex',
    border: '1px solid #459DF5',
    borderRadius: '4px',
    backgroundColor: 'white',
  },

  ({ size }) => ({
    width: `${size}%`,
  }),
  ({ theme, isLightTheme }) => ({
    backgroundColor: isLightTheme ? theme.backGrounds.dark : theme.backGrounds.light,
  })
);

export const P = styled.p({
  margin: '5px',
  fontWeight: '400',
  fontSize: '14px',
  color: colors.blue,
  '@media (max-width: 769px)': {
    fontSize: '17px',
  },
  '@media (max-width: 426px)': {
    fontSize: '18px',
  },
  '@media (max-width: 321px)': {
    fontSize: '20px',
  },
});

export const SearchImg = styled.img({
  position: 'absolute',
  width: '15px',
  height: '15px',
  top: 8,
});

export const InputArea = styled.input<{ padding?: string }>(
  {
    width: '100%',
    fontSize: '13px',
    fontWeight: '400',
    padding: '8px 4px 8px 0px',
    alignItems: 'center',
    outline: 'none',
    border: 0,
    borderRadius: '4px',
    '@media (max-width: 769px)': {
      fontSize: '17px',
    },
    '@media (max-width: 426px)': {
      fontSize: '18px',
    },
    '@media (max-width: 321px)': {
      fontSize: '20px',
    },
    '&::placeholder': {
      color: colors.blue,
      opacity: '0.4',
      fontSize: '13px',
      fontWeight: '400',
    },
  },
  ({ padding }) => ({
    padding: padding,
  })
);

export const Word = styled.span<{ isLightTheme?: boolean }>(
  {
    display: 'flex',
    alignItems: 'center',
    margin: '0px 4px 0px 8px',
    backgroundColor: 'white',
    fontSize: '13px',
    fontWeight: '400',
  },
  ({ theme, isLightTheme }) => ({
    backgroundColor: isLightTheme ? theme.backGrounds.dark : theme.backGrounds.light,
  })
);

export const IconContainer = styled.span<{
  marginLeft?: number;
  marginRight?: number;
  cursor?: string;
  transform?: string;
  isPointer?: boolean;
  width?: number;
  height?: number;
}>(
  {
    display: 'flex',
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

export const InputDropDown = styled.div({
  position: 'relative',
  width: '100%',
});

export const DropDownImg = styled.img({
  position: 'absolute',
  zIndex: 50,
  width: '14px',
  height: '14px',
});

export const IconContainerDropDown = styled.div({
  position: 'absolute',
  width: '18px',
  height: '14px',
  top: '6px',
  right: '10px',
  opacity: '0.4',
  cursor: 'pointer',
});
