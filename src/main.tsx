import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GameContexProvider from './store/game-context';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#242424',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: '0',
          display: 'flex',
          placeItems: 'center',
          minWidth: '320px',
          minHeight: '100vh',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <GameContexProvider>
      <App />
    </GameContexProvider>
  </ThemeProvider>
);
