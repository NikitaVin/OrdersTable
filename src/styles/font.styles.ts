import { css } from '@emotion/react';

export const fontStyle = css`
  @font-face {
    font-family: 'Ubuntu';
    font-display: swap;
    src: local('Nunito'), url(../assets/fonts/Ubuntu-Bold.ttf) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ubuntu';
    font-display: swap;
    src: local('Nunito'), url(../assets/fonts/Ubuntu-Medium.ttf) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ubuntu';
    font-display: swap;
    src: local('Nunito'), url(../assets/fonts/Ubuntu-Regular.ttf) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`;
