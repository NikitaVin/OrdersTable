import styled from '@emotion/styled';

export const ContainerFilterByPrice = styled.div({});

export const WrapperFilterByPriceForInput = styled.div({
  display: 'flex',
});

export const TitleFilter = styled.div<{
  isLightTheme?: boolean;
}>(
  {
    paddingBottom: 8,
  },
  ({ theme, isLightTheme }) => ({
    backgroundColor: isLightTheme ? theme.backGrounds.nightDarkBack : theme.backGrounds.lightGray,
  })
);
