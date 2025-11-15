/**
 * Types pour les niveaux scolaires
 */
export type LevelId = 'ps' | 'ms' | 'gs' | 'cp' | 'ce1' | 'ce2' | 'cm1' | 'cm2';

/**
 * Types pour les matières
 */
export type SubjectId = 'francais' | 'maths' | 'sciences' | 'histoire' | 'geographie';

/**
 * Métadonnées d'un exercice
 */
export interface ExerciseMeta {
  id: string;              // ex: "tables-multiplication"
  title: string;
  description: string;
  level: LevelId;
  subject: SubjectId;
  path: string;            // route React, ex: "/exercice/tables-multiplication"
}

/**
 * Structure d'une matière dans la navigation
 */
export interface NavigationSubject {
  id: SubjectId;
  label: string;
  exercises: ExerciseMeta[];
}

/**
 * Structure d'un niveau dans la navigation
 */
export interface NavigationLevel {
  id: LevelId;
  label: string;
  subjects: NavigationSubject[];
}

/**
 * Configuration complète de la navigation
 */
export interface NavigationConfig {
  levels: NavigationLevel[];
}

/**
 * Labels lisibles pour les niveaux
 */
export const LEVEL_LABELS: Record<LevelId, string> = {
  ps: 'Petite Section',
  ms: 'Moyenne Section',
  gs: 'Grande Section',
  cp: 'CP',
  ce1: 'CE1',
  ce2: 'CE2',
  cm1: 'CM1',
  cm2: 'CM2',
};

/**
 * Labels lisibles pour les matières
 */
export const SUBJECT_LABELS: Record<SubjectId, string> = {
  francais: 'Français',
  maths: 'Mathématiques',
  sciences: 'Sciences',
  histoire: 'Histoire',
  geographie: 'Géographie',
};
