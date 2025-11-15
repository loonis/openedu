import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BurgerMenu } from './BurgerMenu';

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

/**
 * Layout principal du site avec Header, Footer et BurgerMenu
 */
export const Layout: React.FC<LayoutProps> = ({ children, hideFooter = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};
