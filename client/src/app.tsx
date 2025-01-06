import React from 'react';
import Chat from './app/chat';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './styles/theme/theme';
import AppLayout from './components/layout';


function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
      <AppLayout>
      <Chat />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
