import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
