import React from 'react';
import { styleReset } from 'react95';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import original from 'react95/dist/themes/original';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${styleReset}

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
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
