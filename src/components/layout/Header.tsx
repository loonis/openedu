import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../ui';

interface HeaderProps {
  onMenuClick: () => void;
}

/**
 * Composant Header principal du site
 */
export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            {/* Bouton du menu burger */}
            <button
              onClick={onMenuClick}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Ouvrir le menu"
            >
              <Icon name="menu" size={24} className="text-gray-700" />
            </button>

            {/* Logo et titre */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Icon name="book" size={32} className="text-blue-600" />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Open<span className="text-blue-600">Edu</span>
              </h1>
            </Link>
          </div>

          {/* Navigation desktop (optionnelle) */}
          <nav className="hidden md:flex items-center gap-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Accueil
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
