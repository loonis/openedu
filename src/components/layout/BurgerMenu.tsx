import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../ui';
import { navigationConfig } from '../../data/navigation';
import { searchExercises } from '../../data/exercises';
import type { ExerciseMeta } from '../../types';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Menu burger avec navigation hiérarchique et recherche
 */
export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ExerciseMeta[]>([]);
  const [expandedLevels, setExpandedLevels] = useState<Set<string>>(new Set());
  const [expandedSubjects, setExpandedSubjects] = useState<Set<string>>(new Set());

  // Gestion de la recherche
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchExercises(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Toggle niveau
  const toggleLevel = (levelId: string) => {
    const newExpanded = new Set(expandedLevels);
    if (newExpanded.has(levelId)) {
      newExpanded.delete(levelId);
    } else {
      newExpanded.add(levelId);
    }
    setExpandedLevels(newExpanded);
  };

  // Toggle matière
  const toggleSubject = (subjectKey: string) => {
    const newExpanded = new Set(expandedSubjects);
    if (newExpanded.has(subjectKey)) {
      newExpanded.delete(subjectKey);
    } else {
      newExpanded.add(subjectKey);
    }
    setExpandedSubjects(newExpanded);
  };

  // Fermer le menu lors d'un clic sur un exercice
  const handleExerciseClick = () => {
    onClose();
    setSearchQuery('');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Panel du menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header du menu */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-gray-900">Navigation</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Fermer le menu"
            >
              <Icon name="close" size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Barre de recherche */}
          <div className="p-4 border-b">
            <div className="relative">
              <Icon
                name="search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Rechercher un exercice..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Contenu scrollable */}
          <div className="flex-1 overflow-y-auto">
            {searchQuery.trim() ? (
              // Affichage des résultats de recherche
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-600 mb-3">
                  {searchResults.length} résultat{searchResults.length > 1 ? 's' : ''}
                </h3>
                {searchResults.length > 0 ? (
                  <div className="space-y-2">
                    {searchResults.map((exercise) => (
                      <Link
                        key={exercise.id}
                        to={exercise.path}
                        onClick={handleExerciseClick}
                        className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">{exercise.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{exercise.description}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {exercise.level.toUpperCase()} • {exercise.subject}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">Aucun exercice trouvé</p>
                )}
              </div>
            ) : (
              // Navigation hiérarchique par niveau → matière → exercice
              <div className="p-4">
                {navigationConfig.levels.map((level) => (
                  <div key={level.id} className="mb-2">
                    <button
                      onClick={() => toggleLevel(level.id)}
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                    >
                      <span className="font-semibold text-gray-900">{level.label}</span>
                      <span className="text-gray-500">
                        {expandedLevels.has(level.id) ? '−' : '+'}
                      </span>
                    </button>

                    {expandedLevels.has(level.id) && (
                      <div className="ml-4 mt-1 space-y-1">
                        {level.subjects.map((subject) => {
                          const subjectKey = `${level.id}-${subject.id}`;
                          return (
                            <div key={subjectKey}>
                              <button
                                onClick={() => toggleSubject(subjectKey)}
                                className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors text-left"
                              >
                                <span className="text-gray-700">{subject.label}</span>
                                <span className="text-gray-400 text-sm">
                                  {expandedSubjects.has(subjectKey) ? '−' : '+'}
                                </span>
                              </button>

                              {expandedSubjects.has(subjectKey) && (
                                <div className="ml-4 mt-1 space-y-1">
                                  {subject.exercises.map((exercise) => (
                                    <Link
                                      key={exercise.id}
                                      to={exercise.path}
                                      onClick={handleExerciseClick}
                                      className="block p-2 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                    >
                                      {exercise.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
