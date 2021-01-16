import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import theme from './theme';

export default function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <>
          <CssBaseline />
          {element}
        </>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
}
