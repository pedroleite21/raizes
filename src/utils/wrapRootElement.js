import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import theme from './theme';
import { DrawerProvider } from '../context/drawerContext';
import Dialog from '../components/dialog';

export default function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <DrawerProvider>
          <>
            <CssBaseline />
            {element}
            <Dialog />
          </>
        </DrawerProvider>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
}
