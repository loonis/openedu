/**
 * Type pour les réponses possibles
 */
export type AnswerType = "c'est" | 'ses' | 'ces' | "s'est";

/**
 * Une phrase à compléter
 */
export interface PhraseQuestion {
  phrase: string;           // La phrase avec ___ pour le trou
  correctAnswer: AnswerType; // La bonne réponse
  userAnswer?: AnswerType;   // La réponse de l'utilisateur
  isCorrect?: boolean;       // La réponse était-elle correcte ?
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
  questions: PhraseQuestion[];
  currentQuestionIndex: number;
  score: number;
}
