import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Composant Card pour afficher du contenu dans un cadre
 */
export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  const baseClasses = 'bg-white rounded-lg shadow-md p-6 transition-shadow duration-200';
  const hoverClasses = onClick ? 'hover:shadow-lg cursor-pointer' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};
