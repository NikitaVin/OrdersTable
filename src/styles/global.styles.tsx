import { fontStyle } from './font.styles';
import { css, Global } from '@emotion/react';
import { FC } from 'react';

interface IGlobalStyles {
  isLightTheme?: boolean;
  theme: {
    colors: {
      light: string;
      dark: string;
    };
    backGrounds: {
      light: string;
      dark: string;
      nightDarkBack: string;
    };
  };
}

export const GlobalStyles: FC<IGlobalStyles> = ({ isLightTheme, theme }) => {
  return (
    <Global
      styles={css`
        ${fontStyle}

        html {
          height: 100%;
        }

        html,
        body {
          position: relative;
          font-family: 'Ubuntu', sans-serif;
          overflow-x: auto;
          width: 1500px;
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          border: 0;
          background: ${isLightTheme && theme.backGrounds.dark};
          color: ${isLightTheme && theme.colors.dark};
        }

        span {
          background-color: inherit;
        }

        svg {
          background-color: inherit;
        }

        button {
          cursor: pointer;
        }
      `}
    />
  );
};
