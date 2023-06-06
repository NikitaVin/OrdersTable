import { colors } from './../../styles/colors';
import styled from '@emotion/styled';

export const FooterMain = styled.footer({});

export const FooterWrapper = styled.div<{
  isLightTheme?: boolean;
}>(
  {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.dayWhite,
    height: '40px',
    alignItems: 'center',
    padding: '8px 16px',
  },
  ({ theme, isLightTheme }) => ({
    backgroundColor: isLightTheme ? theme.backGrounds.nightDarkBack : theme.backGrounds.lightGray,
  })
);

export const MainContainer = styled.div<{
  isLightTheme?: boolean;
}>(
  {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  ({ theme, isLightTheme }) => ({
    backgroundColor: isLightTheme ? theme.backGrounds.nightDarkBack : theme.backGrounds.lightGray,
  })
);

export const OrderCounter = styled.span({
  color: colors.blue,
  fontSize: '13px',
  fontWeight: '500',
});
