import React from 'react';
import Chat from './app/chat';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme/theme';
import AppLayout from './components/layout';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
      <Chat />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
