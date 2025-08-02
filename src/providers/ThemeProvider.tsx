import { CssBaseline, ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import type React from 'react';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CssBaseline enableColorScheme />
      <MuiThemeProvider theme={createTheme()}>{children}</MuiThemeProvider>
    </>
  );
};
