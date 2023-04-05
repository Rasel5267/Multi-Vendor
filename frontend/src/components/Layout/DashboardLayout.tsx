import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>App DashboardLayout Header</header>
      {children}
      <footer>App DashboardLayout Footer</footer>
    </div>
  );
};

export default DashboardLayout;
