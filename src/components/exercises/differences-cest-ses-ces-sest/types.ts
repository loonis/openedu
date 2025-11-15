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
 * Configuration de l'exercice (choix de l'utilisateur)
 */
export class ExerciseConfig {
  questionCount: number;

  constructor(questionCount: number = 15) {
    this.questionCount = questionCount;
  }
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
  questions: PhraseQuestion[];
  currentQuestionIndex: number;
  score: number;
}
