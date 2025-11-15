import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../ui';
import type { ExerciseState, AnswerType } from './types';
import { generateQuestions } from './data';
import { ConfigScreen } from './ConfigScreen';
import { QuizScreen } from './QuizScreen';
import { ResultsScreen } from './ResultsScreen';

/**
 * Composant principal de l'exercice Différencier c'est / ses / ces / s'est
 */
export const DifferencesCestSesCesSestExercise: React.FC = () => {
  const [state, setState] = useState<ExerciseState>({
    step: 'config',
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
  });

  // Démarrer l'exercice avec le nombre de questions choisi
  const handleStartExercise = (questionCount: number) => {
    const questions = generateQuestions(questionCount);
    setState({
      step: 'quiz',
      questions,
      currentQuestionIndex: 0,
      score: 0,
    });
  };

  // Soumettre une réponse
  const handleSubmitAnswer = (userAnswer: AnswerType) => {
    const { questions, currentQuestionIndex } = state;
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = userAnswer === currentQuestion.correctAnswer;

    // Mettre à jour la question avec la réponse de l'utilisateur
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex] = {
      ...currentQuestion,
      userAnswer,
      isCorrect,
    };

    const newScore = isCorrect ? state.score + 1 : state.score;

    // Si c'est la dernière question, passer aux résultats
    if (currentQuestionIndex === questions.length - 1) {
      setState({
        ...state,
        questions: updatedQuestions,
        score: newScore,
        step: 'results',
      });
    } else {
      // Sinon, passer à la question suivante
      setState({
        ...state,
        questions: updatedQuestions,
        currentQuestionIndex: currentQuestionIndex + 1,
        score: newScore,
      });
    }
  };

  // Recommencer l'exercice
  const handleRestart = () => {
    setState({
      step: 'config',
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header minimal pour les exercices */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Icon name="home" size={20} />
            <span className="font-medium">Retour</span>
          </Link>
          <h1 className="text-lg font-bold text-gray-900">
            Différencier c'est / ses / ces / s'est
          </h1>
          <div className="w-20"></div> {/* Spacer pour centrer le titre */}
        </div>
      </div>

      {/* Contenu de l'exercice */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {state.step === 'config' && <ConfigScreen onStart={handleStartExercise} />}

        {state.step === 'quiz' && (
          <QuizScreen
            key={state.currentQuestionIndex}
            question={state.questions[state.currentQuestionIndex]}
            questionNumber={state.currentQuestionIndex + 1}
            totalQuestions={state.questions.length}
            onSubmitAnswer={handleSubmitAnswer}
          />
        )}

        {state.step === 'results' && (
          <ResultsScreen
            questions={state.questions}
            score={state.score}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};
