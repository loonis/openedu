import React from 'react';
import { Button, Card } from '../../ui';
import { Icon } from '../../ui';
import type { PhraseQuestion } from './types';
import { calculateScore, getEncouragementMessage } from './data';

interface ResultsScreenProps {
  questions: PhraseQuestion[];
  score: number;
  onRestart: () => void;
}

/**
 * Écran des résultats
 */
export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  questions,
  score,
  onRestart,
}) => {
  const percentage = calculateScore(questions);
  const message = getEncouragementMessage(percentage);

  return (
    <div className="space-y-6">
      {/* Résultat principal */}
      <Card className="text-center space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Exercice terminé !
          </h2>
          <p className="text-xl text-gray-600">
            {message}
          </p>
        </div>

        {/* Score */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <p className="text-lg text-gray-700 mb-2">Ton score :</p>
          <p className="text-5xl font-bold text-blue-600">
            {score} / {questions.length}
          </p>
          <p className="text-2xl text-gray-600 mt-2">
            {percentage}%
          </p>
        </div>

        {/* Bouton recommencer */}
        <Button onClick={onRestart} size="lg">
          Recommencer
        </Button>
      </Card>

      {/* Détails des réponses */}
      <Card>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Détails de tes réponses
        </h3>
        <div className="space-y-3">
          {questions.map((question, index) => {
            const completedPhrase = question.phrase.replace('___', question.correctAnswer);
            const isCorrect = question.isCorrect;

            return (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  isCorrect
                    ? 'bg-green-50 border-green-300'
                    : 'bg-red-50 border-red-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {isCorrect ? (
                      <Icon name="check" size={20} className="text-green-600" />
                    ) : (
                      <Icon name="x" size={20} className="text-red-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">
                      Question {index + 1}
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      {completedPhrase}
                    </p>
                    {!isCorrect && (
                      <div className="mt-2 text-sm">
                        <p className="text-red-700">
                          Ta réponse : <span className="font-bold">{question.userAnswer}</span>
                        </p>
                        <p className="text-green-700">
                          Bonne réponse : <span className="font-bold">{question.correctAnswer}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};
