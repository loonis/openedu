import type { ExerciseMeta } from '../types';

/**
 * Liste de tous les exercices disponibles dans l'application.
 * Pour ajouter un nouvel exercice, il suffit d'ajouter une entrée ici.
 */
export const exercises: ExerciseMeta[] = [
  {
    id: 'tables-multiplication',
    title: 'Tables de multiplication',
    description: 'Réviser ses tables de multiplication de 1 à 10',
    level: 'ce2',
    subject: 'maths',
    path: '/exercice/tables-multiplication',
  },
  {
    id: 'differences-cest-ses-ces-sest',
    title: "Différencier c'est / ses / ces / s'est",
    description: 'Choisir la bonne forme dans chaque phrase',
    level: 'ce2',
    subject: 'francais',
    path: '/exercice/differences-cest-ses-ces-sest',
  },
  // Exemples d'exercices futurs (commentés pour l'instant)
  // {
  //   id: 'conjugaison-present',
  //   title: 'Conjugaison au présent',
  //   description: 'S\'entraîner à conjuguer les verbes au présent',
  //   level: 'ce1',
  //   subject: 'francais',
  //   path: '/exercice/conjugaison-present',
  // },
];

/**
 * Récupère un exercice par son ID
 */
export function getExerciseById(id: string): ExerciseMeta | undefined {
  return exercises.find((ex) => ex.id === id);
}

/**
 * Récupère tous les exercices d'un niveau donné
 */
export function getExercisesByLevel(level: string): ExerciseMeta[] {
  return exercises.filter((ex) => ex.level === level);
}

/**
 * Récupère tous les exercices d'une matière donnée
 */
export function getExercisesBySubject(subject: string): ExerciseMeta[] {
  return exercises.filter((ex) => ex.subject === subject);
}

/**
 * Recherche des exercices par titre ou description
 */
export function searchExercises(query: string): ExerciseMeta[] {
  const lowerQuery = query.toLowerCase().trim();

  if (!lowerQuery) {
    return exercises;
  }

  return exercises.filter((ex) =>
    ex.title.toLowerCase().includes(lowerQuery) ||
    ex.description.toLowerCase().includes(lowerQuery)
  );
}
