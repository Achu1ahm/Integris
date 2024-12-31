import React from 'react';
import Chat from './app/chat';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Chat />
    </ThemeProvider>
  );
}

export default App;
