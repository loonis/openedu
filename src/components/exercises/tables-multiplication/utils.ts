import type { MultiplicationQuestion, ExerciseConfig } from './types';

/**
 * Génère une liste de questions aléatoires selon la configuration
 */
export function generateQuestions(config: ExerciseConfig): MultiplicationQuestion[] {
  const questions: MultiplicationQuestion[] = [];
  const { tables, questionCount } = config;

  if (tables.length === 0) {
    return [];
  }

  for (let i = 0; i < questionCount; i++) {
    // Choisir aléatoirement une table parmi celles sélectionnées
    const table = tables[Math.floor(Math.random() * tables.length)];

    // Générer un multiplicateur entre 1 et 10
    const multiplier = Math.floor(Math.random() * 10) + 1;

    questions.push({
      a: table,
      b: multiplier,
      answer: table * multiplier,
    });
  }

  return questions;
}

/**
 * Mélange aléatoirement un tableau (Fisher-Yates shuffle)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
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
