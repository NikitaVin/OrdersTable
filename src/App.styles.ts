import styled from '@emotion/styled';

export const DivRoot = styled.div({});

export const DivApp = styled.div<{ isLightTheme?: boolean }>({
  marginTop: '32px',
  marginBottom: '32px',
  marginLeft: '48px',
  marginRight: '48px',
  width: '1440px',
});

export const Text = styled.span({
  fontSize: '16px',
  fontWeight: '400',
  background: 'inherit',
  //  color: 'inherit',
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

export const ButtonText = styled.p({
  fontSize: '13px',
  fontWeight: '400',
  background: 'inherit',
  color: 'inherit',
  '@media (max-width: 769px)': {
    fontSize: '14px',
  },
  '@media (max-width: 426px)': {
    fontSize: '15px',
  },
  '@media (max-width: 321px)': {
    fontSize: '17px',
  },
});

export const H2 = styled.h2({
  fontSize: '20px',
  fontWeight: '800',
  '@media (max-width: 769px)': {
    fontSize: '22px',
  },
  '@media (max-width: 426px)': {
    fontSize: '24px',
  },
  '@media (max-width: 321px)': {
    fontSize: '26px',
  },
});
