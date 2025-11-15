import React from 'react';

/**
 * Composant Footer du site
 */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À propos */}
          <div>
            <h3 className="font-bold text-lg mb-3">OpenEdu</h3>
            <p className="text-gray-300 text-sm">
              Plateforme d'exercices éducatifs gratuite et open source pour les enfants de la maternelle au CM2.
            </p>
          </div>

          {/* Liens */}
          <div>
            <h3 className="font-bold text-lg mb-3">Liens utiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/loonis/openedu" className="text-gray-300 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="font-bold text-lg mb-3">Projet open source</h3>
            <p className="text-gray-300 text-sm">
              100% gratuit, sans publicité, sans collecte de données.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 OpenEdu. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
