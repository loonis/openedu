import React, { useState, useEffect } from 'react';
import { Button, Card, Icon } from '../../ui';
import type { PhraseQuestion, AnswerType } from './types';
import { ALL_ANSWERS } from './data';

interface QuizScreenProps {
  question: PhraseQuestion;
  questionNumber: number;
  totalQuestions: number;
  onSubmitAnswer: (answer: AnswerType) => void;
  onExit: () => void;
}

// Durée d'affichage de la correction en millisecondes
const INCORRECT_ANSWER_DURATION = 5000;

/**
 * Écran de quiz avec les questions
 */
export const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onSubmitAnswer,
  onExit,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerType | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [timerProgress, setTimerProgress] = useState<number>(100);

  // Réinitialiser l'état à chaque nouvelle question
  useEffect(() => {
    setSelectedAnswer(null);
    setFeedback(null);
    setShowAnswer(false);
    setTimerProgress(100);
  }, [question]);

  // Gérer le timer pour les réponses incorrectes
  useEffect(() => {
    if (feedback === 'incorrect') {
      const intervalTime = 50; // mise à jour toutes les 50ms
      const decrementValue = (100 / INCORRECT_ANSWER_DURATION) * intervalTime;

      const timer = setInterval(() => {
        setTimerProgress((prev) => {
          const newProgress = prev - decrementValue;
          return newProgress <= 0 ? 0 : newProgress;
        });
      }, intervalTime);

      return () => clearInterval(timer);
    }
  }, [feedback]);

  // Gérer le clic sur un bouton de réponse
  const handleAnswerClick = (answer: AnswerType) => {
    if (feedback !== null) return; // Empêcher de cliquer plusieurs fois

    setSelectedAnswer(answer);
    const isCorrect = answer === question.correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    if (!isCorrect) {
      setShowAnswer(true);
    }

    // Attendre un peu avant de passer à la question suivante
    setTimeout(() => {
      onSubmitAnswer(answer);
    }, isCorrect ? 1000 : INCORRECT_ANSWER_DURATION);
  };

  // Remplacer ___ par la réponse dans la phrase (pour l'affichage de la bonne réponse)
  const getCompletedPhrase = (answer: AnswerType) => {
    return question.phrase.replace('___', answer);
  };

  return (
    <div className="space-y-6">
      {/* Bouton de sortie */}
      <div className="flex justify-end">
        <button
          onClick={onExit}
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Quitter l'exercice"
        >
          <Icon name="x" size={24} />
        </button>
      </div>

      {/* Progression */}
      <div className="text-center">
        <p className="text-gray-600 font-medium">
          Question {questionNumber} / {totalQuestions}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Phrase à compléter */}
      <Card
        className={`transition-all duration-300 ${
          feedback === 'correct'
            ? 'border-4 border-green-500 bg-green-50'
            : feedback === 'incorrect'
            ? 'border-4 border-red-500 bg-red-50 animate-shake'
            : ''
        }`}
      >
        <div className="text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Complète la phrase :
          </h2>

          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-xl sm:text-2xl font-medium text-gray-800">
              {question.phrase.split('___').map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="inline-block min-w-[120px] border-b-4 border-purple-400 mx-2 pb-1">
                      {selectedAnswer && feedback !== null ? (
                        <span className={feedback === 'correct' ? 'text-green-700' : 'text-red-700'}>
                          {selectedAnswer}
                        </span>
                      ) : (
                        <span className="text-purple-300">___</span>
                      )}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Boutons de réponse */}
          {feedback === null && (
            <div className="grid grid-cols-2 gap-4">
              {ALL_ANSWERS.map((answer) => (
                <Button
                  key={answer}
                  onClick={() => handleAnswerClick(answer)}
                  size="lg"
                  className="text-lg sm:text-xl py-6"
                  variant="secondary"
                >
                  {answer}
                </Button>
              ))}
            </div>
          )}

          {/* Feedback correct */}
          {feedback === 'correct' && (
            <div className="mt-6 space-y-3 animate-scale-in">
              <div className="flex items-center justify-center gap-2 text-green-700">
                <Icon name="check" size={32} className="text-green-600" />
                <span className="text-2xl font-bold">Bravo ! C'est correct !</span>
              </div>
              <p className="text-lg text-gray-700">
                "{getCompletedPhrase(question.correctAnswer)}"
              </p>
            </div>
          )}

          {/* Feedback incorrect */}
          {feedback === 'incorrect' && showAnswer && (
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-center gap-2 text-red-700">
                <Icon name="x" size={32} className="text-red-600" />
                <span className="text-xl font-bold">Pas tout à fait...</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">La bonne réponse était :</p>
                <p className="text-lg font-bold text-blue-700">
                  {question.correctAnswer}
                </p>
                <p className="text-base text-gray-700 mt-2">
                  "{getCompletedPhrase(question.correctAnswer)}"
                </p>
              </div>
              {/* Barre de progression du timer */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-50 ease-linear"
                  style={{ width: `${timerProgress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
