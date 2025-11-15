import type { MultiplicationQuestion, ExerciseConfig } from './types';

/**
 * Génère une liste de questions pour l'exercice
 * @param config Configuration de l'exercice (tables et nombre de questions)
 */
export function generateQuestions(config: ExerciseConfig): MultiplicationQuestion[] {
  const questions: MultiplicationQuestion[] = [];
  const { tables, questionCount } = config;

  if (tables.length === 0) {
    return [];
  }

  // Multiplicateurs autorisés (2 à 9, excluant 1 et 10)
  const allowedMultipliers = [2, 3, 4, 5, 6, 7, 8, 9];

  // Créer un Set pour stocker les combinaisons déjà générées (format: "a-b")
  const usedCombinations = new Set<string>();

  // Calculer le nombre maximum de combinaisons possibles
  const maxCombinations = tables.length * allowedMultipliers.length;

  // Si on demande plus de questions que de combinaisons possibles, limiter
  const actualQuestionCount = Math.min(questionCount, maxCombinations);

  let attempts = 0;
  const maxAttempts = actualQuestionCount * 10; // Limite pour éviter une boucle infinie

  while (questions.length < actualQuestionCount && attempts < maxAttempts) {
    attempts++;

    // Choisir aléatoirement une table parmi celles sélectionnées
    const table = tables[Math.floor(Math.random() * tables.length)];

    // Choisir aléatoirement un multiplicateur parmi les multiplicateurs autorisés
    const multiplier = allowedMultipliers[Math.floor(Math.random() * allowedMultipliers.length)];

    // Créer une clé unique pour cette combinaison
    const combinationKey = `${table}-${multiplier}`;

    // Vérifier si cette combinaison n'a pas déjà été utilisée
    if (!usedCombinations.has(combinationKey)) {
      usedCombinations.add(combinationKey);

      questions.push({
        a: table,
        b: multiplier,
        answer: table * multiplier,
      });
    }
  }

  return questions;
}

/**
 * Calcule le score (pourcentage de bonnes réponses)
 */
export function calculateScore(questions: MultiplicationQuestion[]): number {
  const correctCount = questions.filter((q) => q.isCorrect).length;
  return Math.round((correctCount / questions.length) * 100);
}

/**
 * Retourne un message d'encouragement selon le score
 */
export function getEncouragementMessage(score: number): string {
  if (score === 100) {
    return 'Parfait ! Tu es un champion des tables de multiplication ! 🏆';
  } else if (score >= 80) {
    return 'Très bien ! Continue comme ça ! 🌟';
  } else if (score >= 60) {
    return 'Bon travail ! Encore un petit effort ! 💪';
  } else if (score >= 40) {
    return 'Pas mal ! Continue de t\'entraîner ! 📚';
  } else {
    return 'Continue de t\'entraîner, tu vas y arriver ! 🎯';
  }
}

/**
 * Toutes les tables disponibles (1 à 10)
 */
export const ALL_TABLES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
