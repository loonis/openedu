import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BurgerMenu } from './BurgerMenu';
import { useMenu } from '../../contexts/MenuContext';

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  hideHeader?: boolean;
}

/**
 * Layout principal du site avec Header, Footer et BurgerMenu
 */
export const Layout: React.FC<LayoutProps> = ({ children, hideFooter = false, hideHeader = false }) => {
  const { isMenuOpen, openMenu, closeMenu } = useMenu();

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeader && (
        <>
          <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
          <Header onMenuClick={openMenu} />
        </>
      )}
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};
