import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar isLoggedIn={true} />
      {children}
      <footer>App Layout Footer</footer>
    </div>
  );
};

export default Layout;
