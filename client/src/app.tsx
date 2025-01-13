import React from "react";
import Chat from "@app/app/chat";
import AppLayout from "@app/components/layout";
import { CustomThemeProvider } from "@app/styles/theme/themeContext";

function App() {
  return (
    <CustomThemeProvider>
      <AppLayout>
        <Chat />
      </AppLayout>
    </CustomThemeProvider>
  );
}

export default App;
