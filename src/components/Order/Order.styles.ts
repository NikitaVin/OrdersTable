import { colors } from './../../styles/colors';
import styled from '@emotion/styled';

export const Overlay = styled.div<{ ovelayOpacity?: string }>(
  {
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: '1',
    transition: 'opacity 0.1s ease-in-out, visibility 0.1s ease-in-out',
    overflow: 'scroll',
    // visibility: 'visible',
  }
  //  ({ ovelayOpacity }) => ({
  //    opacity: ovelayOpacity,
  //  })
);

export const WrapperOrder = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  position: 'absolute',
  width: '31%',
  right: '0',
  background: 'white',
  boxShadow: '-10px 4px 24px rgba(0, 0, 0, 0.1)',
});

export const HeaderOrder = styled.div({
  width: '100%',
  display: 'flex',
  paddingLeft: '16px',
  paddingTop: '12px',
  paddingBottom: '12px',
  color: '#BAD8F5',
  backgroundColor: colors.blue,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const OrderTitle = styled.span<{ fontSize?: string; fontWeight?: string; margin?: string }>(
  {
    fontSize: '26',
    fontWeight: '700',
    '@media (max-width: 769px)': {
      fontSize: '17px',
    },
    '@media (max-width: 426px)': {
      fontSize: '18px',
    },
    '@media (max-width: 321px)': {
      fontSize: '20px',
    },
  },
  ({ fontSize }) => ({
    fontSize: fontSize,
  }),
  ({ margin }) => ({
    margin: margin,
  }),
  ({ fontWeight }) => ({
    fontWeight: fontWeight,
  })
);

export const InfoOrder = styled.div({
  width: '100%',
  padding: '32px 24px 48px 16px',
  fontSize: '13px',
  fontWeight: '400',
  display: 'flex',
  flexDirection: 'column',
});

export const FooterOrder = styled.div<{ isLightTheme?: boolean }>(
  {
    width: '100%',
    padding: '8px 16px',
    display: 'flex',
    backgroundColor: '#EBF0F5',
    justifyContent: 'flex-end',
  },
  ({ theme, isLightTheme }) => ({
    backgroundColor: isLightTheme ? theme.backGrounds.nightDarkBack : theme.backGrounds.lightGray,
  })
);
