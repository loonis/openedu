import React, { useState } from 'react';
import { Button, Card } from '../../ui';
import type { ExerciseConfig } from './types';

interface ConfigScreenProps {
  onStart: (config: ExerciseConfig) => void;
}

/**
 * Écran de configuration de l'exercice
 */
export const ConfigScreen: React.FC<ConfigScreenProps> = ({ onStart }) => {
  const [selectedTables, setSelectedTables] = useState<number[]>([2, 3, 4, 5]);
  const [questionCount, setQuestionCount] = useState<number>(10);

  const availableTables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const questionOptions = [5, 10, 15, 20, 30];

  // Toggle une table
  const toggleTable = (table: number) => {
    if (selectedTables.includes(table)) {
      setSelectedTables(selectedTables.filter((t) => t !== table));
    } else {
      setSelectedTables([...selectedTables, table].sort((a, b) => a - b));
    }
  };

  // Tout sélectionner / déselectionner
  const toggleAll = () => {
    if (selectedTables.length === availableTables.length) {
      setSelectedTables([]);
    } else {
      setSelectedTables([...availableTables]);
    }
  };

  // Démarrer l'exercice
  const handleStart = () => {
    if (selectedTables.length === 0) {
      alert('Veuillez sélectionner au moins une table de multiplication');
      return;
    }

    onStart({
      tables: selectedTables,
      questionCount,
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Configuration de l'exercice</h2>
        <p className="text-gray-600 mb-6">
          Choisis les tables que tu veux réviser et le nombre de questions
        </p>

        {/* Sélection des tables */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-lg font-semibold text-gray-900">
              Tables à réviser
            </label>
            <button
              onClick={toggleAll}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              {selectedTables.length === availableTables.length
                ? 'Tout désélectionner'
                : 'Tout sélectionner'}
            </button>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {availableTables.map((table) => (
              <button
                key={table}
                onClick={() => toggleTable(table)}
                className={`p-4 rounded-lg border-2 transition-all font-bold text-lg ${
                  selectedTables.includes(table)
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}
              >
                {table}
              </button>
            ))}
          </div>

          {selectedTables.length > 0 && (
            <p className="mt-3 text-sm text-gray-600">
              {selectedTables.length} table{selectedTables.length > 1 ? 's' : ''} sélectionnée
              {selectedTables.length > 1 ? 's' : ''} : {selectedTables.join(', ')}
            </p>
          )}
        </div>

        {/* Sélection du nombre de questions */}
        <div className="mb-6">
          <label className="text-lg font-semibold text-gray-900 mb-3 block">
            Nombre de questions
          </label>

          <div className="grid grid-cols-5 gap-3">
            {questionOptions.map((count) => (
              <button
                key={count}
                onClick={() => setQuestionCount(count)}
                className={`p-4 rounded-lg border-2 transition-all font-bold text-lg ${
                  questionCount === count
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}
              >
                {count}
              </button>
            ))}
          </div>
        </div>

        {/* Bouton de démarrage */}
        <Button
          onClick={handleStart}
          size="lg"
          className="w-full"
          disabled={selectedTables.length === 0}
        >
          Lancer l'exercice
        </Button>
      </Card>

      {/* Conseils */}
      <Card className="bg-blue-50">
        <h3 className="font-bold text-gray-900 mb-2">💡 Conseils</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Commence par réviser 2 ou 3 tables à la fois</li>
          <li>• Prends ton temps pour bien réfléchir avant de répondre</li>
          <li>• N'hésite pas à refaire l'exercice pour progresser !</li>
        </ul>
      </Card>
    </div>
  );
};
