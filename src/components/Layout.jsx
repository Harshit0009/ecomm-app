import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Header from './Header';
import { Outlet } from 'react-router-dom';
const theme = createTheme({
  palette: {
    mode: 'dark', /// it basically sets the theme of the page.
  },
});

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />{' '}
      {/* set the box sizing and industry standards of initating the cs */}
      <Header> </Header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}
