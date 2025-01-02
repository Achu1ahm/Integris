import React from 'react';
import Header from './header';

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div >
           <Header/>
            <main>
                {children}
            </main>
        </div>
    );
};


export default AppLayout;
