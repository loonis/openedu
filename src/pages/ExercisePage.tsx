import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getExerciseById } from '../data/exercises';
import { TablesMultiplicationExercise } from '../components/exercises/tables-multiplication/TablesMultiplicationExercise';
import { Loader } from '../components/ui';

/**
 * Page générique pour afficher un exercice
 * Utilise le paramètre d'URL pour charger le bon exercice
 */
export const ExercisePage: React.FC = () => {
  const { exerciseId } = useParams<{ exerciseId: string }>();

  if (!exerciseId) {
    return <Navigate to="/" replace />;
  }

  const exercise = getExerciseById(exerciseId);

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Exercice non trouvé</h1>
          <p className="text-gray-600 mb-6">
            L'exercice que vous recherchez n'existe pas ou a été supprimé.
          </p>
          <a
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }

  // Mapping des IDs d'exercices vers leurs composants
  // Pour ajouter un nouvel exercice, ajoutez-le ici
  const exerciseComponents: Record<string, React.ComponentType> = {
    'tables-multiplication': TablesMultiplicationExercise,
    // Exemples futurs :
    // 'conjugaison-present': ConjugaisonPresentExercise,
    // 'additions-soustractions': AdditionsSoustractionsExercise,
  };

  const ExerciseComponent = exerciseComponents[exerciseId];

  if (!ExerciseComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ExerciseComponent />
    </div>
  );
};
