/**
 * Configuration de l'exercice (choix de l'utilisateur)
 */
export interface ExerciseConfig {
  tables: number[];        // Tables sélectionnées (ex: [2, 3, 5])
  questionCount: number;   // Nombre de questions à générer
}

/**
 * Une question de multiplication
 */
export interface MultiplicationQuestion {
  a: number;               // Premier opérande
  b: number;               // Second opérande
  answer: number;          // Réponse correcte (a * b)
  userAnswer?: number;     // Réponse de l'utilisateur
  isCorrect?: boolean;     // La réponse était-elle correcte ?
}

/**
 * Étapes de l'exercice
 */
export type ExerciseStep = 'config' | 'quiz' | 'results';

/**
 * État global de l'exercice
 */
export interface ExerciseState {
  step: ExerciseStep;
  config: ExerciseConfig | null;
  questions: MultiplicationQuestion[];
  currentQuestionIndex: number;
  score: number;
}
