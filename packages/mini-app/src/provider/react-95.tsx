import React from 'react';
import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${styleReset}

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'UnifontExMono';
    src: url('https://stgiga.github.io/UnifontEX/UnifontExMono.eot');
    src: url('https://stgiga.github.io/UnifontEX/UnifontExMono.eot?#iefix') format('embedded-opentype'),
      url('https://stgiga.github.io/UnifontEX/UnifontExMono.woff') format('woff'),
      url('https://stgiga.github.io/UnifontEX/UnifontExMono.ttf') format('truetype'),
      url('https://stgiga.github.io/UnifontEX/UnifontExMono.svg#UnifontExMono') format('svg');
    font-weight: normal;
  }

  body, input, select, textarea, button {
    font-family: "UnifontExMono", sans-serif;
  }

  html {
    overflow: hidden;
    height: 100%;
    min-height: 100svh;
    width: 100%;

    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    overscroll-behavior: none;
    -webkit-overflow-scrolling: none;

    min-height: 100svh;
    -webkit-font-smoothing: antialiased;

    background: ${({ theme }) => theme.desktopBackground};
  }
`;

export function React95Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

type Theme = typeof original;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
