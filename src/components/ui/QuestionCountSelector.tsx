import React from 'react';
import { Button } from './Button';

interface QuestionCountSelectorProps {
  value: number;
  onChange: (count: number) => void;
  min: number;
  max: number;
  step: number;
  label?: string;
}

/**
 * Composant réutilisable pour sélectionner le nombre de questions
 * avec des boutons +/- qui respectent un min, max et un step (multiple)
 */
export const QuestionCountSelector: React.FC<QuestionCountSelectorProps> = ({
  value,
  onChange,
  min,
  max,
  step,
  label = 'Nombre de questions :',
}) => {
  const handleDecrease = () => {
    const newValue = Math.max(min, value - step);
    onChange(newValue);
  };

  const handleIncrease = () => {
    const newValue = Math.min(max, value + step);
    onChange(newValue);
  };

  return (
    <div>
      <label className="text-lg font-semibold text-gray-900">
        {label}
      </label>
      <div className="flex items-center justify-center gap-4 mt-4">
        <Button
          variant="secondary"
          onClick={handleDecrease}
          disabled={value <= min}
        >
          −
        </Button>
        <span className="text-2xl font-bold text-gray-900 w-16 text-center">
          {value}
        </span>
        <Button
          variant="secondary"
          onClick={handleIncrease}
          disabled={value >= max}
        >
          +
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-2 text-center">
        (Entre {min} et {max})
      </p>
    </div>
  );
};
