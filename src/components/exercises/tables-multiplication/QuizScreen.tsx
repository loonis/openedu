import React, { useState, useEffect, useRef } from 'react';
import { Button, Card, Icon } from '../../ui';
import type { MultiplicationQuestion } from './types';

interface QuizScreenProps {
  question: MultiplicationQuestion;
  questionNumber: number;
  totalQuestions: number;
  onSubmitAnswer: (answer: number) => void;
}

/**
 * Écran de quiz avec les questions
 */
export const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onSubmitAnswer,
}) => {
  const [userInput, setUserInput] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus automatique sur l'input à chaque nouvelle question
  useEffect(() => {
    setUserInput('');
    setFeedback(null);
    setShowAnswer(false);
    // Utiliser setTimeout pour s'assurer que le focus se fait après le rendu
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }, [question]);

  // Gérer la soumission de la réponse
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const answer = parseInt(userInput, 10);

    if (isNaN(answer)) {
      alert('Veuillez entrer un nombre valide');
      return;
    }

    const isCorrect = answer === question.answer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    if (!isCorrect) {
      setShowAnswer(true);
    }

    // Attendre un peu avant de passer à la question suivante
    setTimeout(() => {
      onSubmitAnswer(answer);
    }, isCorrect ? 800 : 2000);
  };

  // Gérer la touche Entrée
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && userInput.trim() !== '' && feedback === null) {
      handleSubmit(e as any);
    }
  };

  return (
    <div className="space-y-6">
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

      {/* Question */}
      <Card
        className={`transition-all duration-300 ${
          feedback === 'correct'
            ? 'border-4 border-green-500 bg-green-50'
            : feedback === 'incorrect'
            ? 'border-4 border-red-500 bg-red-50 animate-shake'
            : ''
        }`}
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Combien font {question.a} × {question.b} ?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl font-bold text-gray-700">
                {question.a} × {question.b} =
              </span>
              <input
                ref={inputRef}
                type="number"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={feedback !== null}
                className="w-32 px-4 py-3 text-2xl font-bold text-center border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none disabled:bg-gray-100"
                placeholder="?"
                autoComplete="off"
              />
            </div>

            {feedback === null && (
              <Button type="submit" size="lg" disabled={userInput.trim() === ''}>
                Valider
              </Button>
            )}
          </form>

          {/* Feedback */}
          {feedback === 'correct' && (
            <div className="mt-6 flex items-center justify-center gap-2 text-green-700 animate-scale-in">
              <Icon name="check" size={32} className="text-green-600" />
              <span className="text-2xl font-bold">Bravo ! C'est correct !</span>
            </div>
          )}

          {feedback === 'incorrect' && showAnswer && (
            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-center gap-2 text-red-700">
                <Icon name="x" size={32} className="text-red-600" />
                <span className="text-xl font-bold">Pas tout à fait...</span>
              </div>
              <p className="text-lg text-gray-700">
                La bonne réponse était <span className="font-bold text-blue-600">{question.answer}</span>
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Astuce */}
      {feedback === null && (
        <Card className="bg-purple-50">
          <p className="text-sm text-gray-700 text-center">
            💡 Prends ton temps pour bien réfléchir
          </p>
        </Card>
      )}
    </div>
  );
};
