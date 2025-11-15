import React, { useState } from 'react';
import { Button, Card, QuestionCountSelector } from '../../ui';
import { ExerciseConfig } from './types';
import { MIN_QUESTIONS, MAX_QUESTIONS } from './data';

interface ConfigScreenProps {
  onStart: (config: ExerciseConfig) => void;
}

/**
 * Écran de configuration de l'exercice
 */
export const ConfigScreen: React.FC<ConfigScreenProps> = ({ onStart }) => {
  const [questionCount, setQuestionCount] = useState<number>(10);

  const handleStart = () => {
    const config = new ExerciseConfig(questionCount);
    onStart(config);
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="text-center space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Différencier c'est / ses / ces / s'est
            </h2>
            <p className="text-gray-600">
              Choisis la bonne forme pour compléter chaque phrase.
            </p>
          </div>

          {/* Explication des différentes formes */}
          <div className="bg-blue-50 p-4 rounded-lg text-left space-y-3">
            <h3 className="font-bold text-blue-900 text-center mb-2">Rappel :</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-bold text-blue-700">c'est</span> = cela est
                <span className="text-gray-600 italic ml-2">(Ex: C'est mon ami.)</span>
              </div>
              <div>
                <span className="font-bold text-blue-700">ses</span> = déterminant possessif (à lui/elle)
                <span className="text-gray-600 italic ml-2">(Ex: Il range ses jouets.)</span>
              </div>
              <div>
                <span className="font-bold text-blue-700">ces</span> = déterminant démonstratif
                <span className="text-gray-600 italic ml-2">(Ex: Regarde ces fleurs.)</span>
              </div>
              <div>
                <span className="font-bold text-blue-700">s'est</span> = verbe pronominal
                <span className="text-gray-600 italic ml-2">(Ex: Il s'est levé tôt.)</span>
              </div>
            </div>
          </div>

          {/* Sélection du nombre de questions */}
          <QuestionCountSelector
            value={questionCount}
            onChange={setQuestionCount}
            min={MIN_QUESTIONS}
            max={MAX_QUESTIONS}
            step={5}
            label="Nombre de questions"
          />

          {/* Bouton démarrer */}
          <Button onClick={handleStart} size="lg" className="w-full sm:w-auto">
            Commencer l'exercice
          </Button>
        </div>
      </Card>
    </div>
  );
};
