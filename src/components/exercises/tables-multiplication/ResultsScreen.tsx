import React from 'react';
import { Button, Card } from '../../ui';
import type { MultiplicationQuestion } from './types';
import { calculateScore, getEncouragementMessage } from './utils';

interface ResultsScreenProps {
  questions: MultiplicationQuestion[];
  score: number;
  onRestart: () => void;
}

/**
 * Écran des résultats de l'exercice
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
      {/* Résumé des résultats */}
      <Card className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Exercice terminé !</h2>

        <div className="my-8">
          <div className="inline-block p-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
            <p className="text-6xl font-bold text-white">{percentage}%</p>
          </div>
        </div>

        <p className="text-2xl font-bold text-gray-900 mb-2">
          {score} / {questions.length} bonnes réponses
        </p>

        <p className="text-lg text-gray-700 mb-6">{message}</p>

        <Button size="lg" onClick={onRestart}>
          Refaire l'exercice
        </Button>
      </Card>

      {/* Détails des réponses */}
      <Card>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Détail des réponses</h3>

        <div className="space-y-2">
          {questions.map((q, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg ${
                q.isCorrect ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              <span className="font-medium text-gray-900">
                Question {index + 1} : {q.a} × {q.b}
              </span>

              <div className="flex items-center gap-3">
                <span className={q.isCorrect ? 'text-green-700' : 'text-red-700'}>
                  Ta réponse : <span className="font-bold">{q.userAnswer}</span>
                </span>

                {!q.isCorrect && (
                  <span className="text-gray-600">
                    (Correct : <span className="font-bold">{q.answer}</span>)
                  </span>
                )}

                <span className="text-xl">
                  {q.isCorrect ? '✅' : '❌'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Conseils */}
      <Card className="bg-blue-50">
        <h3 className="font-bold text-gray-900 mb-2">📚 Continue de progresser !</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          {percentage < 100 && (
            <>
              <li>• Refais l'exercice pour t'améliorer</li>
              <li>• Révise les tables où tu as fait des erreurs</li>
            </>
          )}
          {percentage >= 80 && (
            <li>• Essaie avec plus de tables pour te challenger !</li>
          )}
          <li>• La pratique régulière est la clé de la réussite 💪</li>
        </ul>
      </Card>
    </div>
  );
};
