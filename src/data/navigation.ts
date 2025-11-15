import type { NavigationConfig, LevelId, SubjectId } from '../types';
import { LEVEL_LABELS, SUBJECT_LABELS } from '../types';
import { exercises } from './exercises';

/**
 * Configuration de la navigation du site.
 * Cette structure est générée dynamiquement à partir de la liste des exercices.
 */
export const navigationConfig: NavigationConfig = {
  levels: [
    {
      id: 'ps' as LevelId,
      label: LEVEL_LABELS.ps,
      subjects: [
        {
          id: 'maths' as SubjectId,
          label: SUBJECT_LABELS.maths,
          exercises: exercises.filter((ex) => ex.level === 'ps' && ex.subject === 'maths'),
        },
        {
          id: 'francais' as SubjectId,
          label: SUBJECT_LABELS.francais,
          exercises: exercises.filter((ex) => ex.level === 'ps' && ex.subject === 'francais'),
        },
      ].filter((subject) => subject.exercises.length > 0),
    },
    {
      id: 'ms' as LevelId,
      label: LEVEL_LABELS.ms,
      subjects: [
        {
          id: 'maths' as SubjectId,
          label: SUBJECT_LABELS.maths,
          exercises: exercises.filter((ex) => ex.level === 'ms' && ex.subject === 'maths'),
        },
        {
          id: 'francais' as SubjectId,
          label: SUBJECT_LABELS.francais,
          exercises: exercises.filter((ex) => ex.level === 'ms' && ex.subject === 'francais'),
        },
      ].filter((subject) => subject.exercises.length > 0),
    },
    {
      id: 'gs' as LevelId,
      label: LEVEL_LABELS.gs,
      subjects: [
        {
          id: 'maths' as SubjectId,
          label: SUBJECT_LABELS.maths,
          exercises: exercises.filter((ex) => ex.level === 'gs' && ex.subject === 'maths'),
        },
        {
          id: 'francais' as SubjectId,
          label: SUBJECT_LABELS.francais,
          exercises: exercises.filter((ex) => ex.level === 'gs' && ex.subject === 'francais'),
        },
      ].filter((subject) => subject.exercises.length > 0),
    },
    {
      id: 'cp' as LevelId,
      label: LEVEL_LABELS.cp,
      subjects: [
        {
          id: 'maths' as SubjectId,
          label: SUBJECT_LABELS.maths,
          exercises: exercises.filter((ex) => ex.level === 'cp' && ex.subject === 'maths'),
        },
        {
          id: 'francais' as SubjectId,
          label: SUBJECT_LABELS.francais,
          exercises: exercises.filter((ex) => ex.level === 'cp' && ex.subject === 'francais'),
        },
      ].filter((subject) => subject.exercises.length > 0),
    },
    {
      id: 'ce1' as LevelId,
      label: LEVEL_LABELS.ce1,
      subjects: [
        {
          id: 'maths' as SubjectId,
          label: SUBJECT_LABELS.maths,
          exercises: exercises.filter((ex) => ex.level === 'ce1' && ex.subject === 'maths'),
        },
        {
          id: 'francais' as SubjectId,
          label: SUBJECT_LABELS.francais,
          exercises: exercises.filter((ex) => ex.level === 'ce1' && ex.subject === 'francais'),
        },
      ].filter((subject) => subject.exercises.length > 0),
    },
    {
      id: 'ce2' as LevelId,
      label: LEVEL_LABELS.ce2,
      subjects: [
        {
          id: 'maths' as SubjectId,
          label: SUBJECT_LABELS.maths,
          exercises: exercises.filter((ex) => ex.level === 'ce2' && ex.subject === 'maths'),
        },
        {
          id: 'francais' as SubjectId,
          label: SUBJECT_LABELS.francais,
          exercises: exercises.filter((ex) => ex.level === 'ce2' && ex.subject === 'francais'),
        },
        {
          id: 'sciences' as SubjectId,
          label: SUBJECT_LABELS.sciences,
          exercises: exercises.filter((ex) => ex.level === 'ce2' && ex.subject === 'sciences'),
        },
      ].filter((subject) => subject.exercises.length > 0),
    },
    {
      id: 'cm1' as LevelId,
      label: LEVEL_LABELS.cm1,
      subjects: [
        {
          id: 'maths' as SubjectId,
          label: SUBJECT_LABELS.maths,
          exercises: exercises.filter((ex) => ex.level === 'cm1' && ex.subject === 'maths'),
        },
        {
          id: 'francais' as SubjectId,
          label: SUBJECT_LABELS.francais,
          exercises: exercises.filter((ex) => ex.level === 'cm1' && ex.subject === 'francais'),
        },
        {
          id: 'sciences' as SubjectId,
          label: SUBJECT_LABELS.sciences,
          exercises: exercises.filter((ex) => ex.level === 'cm1' && ex.subject === 'sciences'),
        },
        {
          id: 'histoire' as SubjectId,
          label: SUBJECT_LABELS.histoire,
          exercises: exercises.filter((ex) => ex.level === 'cm1' && ex.subject === 'histoire'),
        },
        {
          id: 'geographie' as SubjectId,
          label: SUBJECT_LABELS.geographie,
          exercises: exercises.filter((ex) => ex.level === 'cm1' && ex.subject === 'geographie'),
        },
      ].filter((subject) => subject.exercises.length > 0),
    },
    {
      id: 'cm2' as LevelId,
      label: LEVEL_LABELS.cm2,
      subjects: [
        {
          id: 'maths' as SubjectId,
          label: SUBJECT_LABELS.maths,
          exercises: exercises.filter((ex) => ex.level === 'cm2' && ex.subject === 'maths'),
        },
        {
          id: 'francais' as SubjectId,
          label: SUBJECT_LABELS.francais,
          exercises: exercises.filter((ex) => ex.level === 'cm2' && ex.subject === 'francais'),
        },
        {
          id: 'sciences' as SubjectId,
          label: SUBJECT_LABELS.sciences,
          exercises: exercises.filter((ex) => ex.level === 'cm2' && ex.subject === 'sciences'),
        },
        {
          id: 'histoire' as SubjectId,
          label: SUBJECT_LABELS.histoire,
          exercises: exercises.filter((ex) => ex.level === 'cm2' && ex.subject === 'histoire'),
        },
        {
          id: 'geographie' as SubjectId,
          label: SUBJECT_LABELS.geographie,
          exercises: exercises.filter((ex) => ex.level === 'cm2' && ex.subject === 'geographie'),
        },
      ].filter((subject) => subject.exercises.length > 0),
    },
  ].filter((level) => level.subjects.length > 0),
};
