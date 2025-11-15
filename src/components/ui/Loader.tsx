import React from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Composant Loader pour afficher un spinner de chargement
 */
export const Loader: React.FC<LoaderProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-4',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizeClasses[size]} border-blue-600 border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};
