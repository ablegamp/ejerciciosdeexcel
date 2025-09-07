import React, { useState, useEffect, useCallback } from 'react';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { Exercise, CellData } from '../types';
import { FormulaParser } from '../utils/formulaParser';

interface ExcelSimulatorProps {
  exercise: Exercise;
  onExerciseComplete: (success: boolean) => void;
  onNextExercise?: () => void;
  showNextButton?: boolean;
}

export const ExcelSimulator: React.FC<ExcelSimulatorProps> = ({ 
  exercise, 
  onExerciseComplete,
  onNextExercise,
  showNextButton
}) => {
  const [grid, setGrid] = useState<CellData[][]>([]);
  const [selectedCell, setSelectedCell] = useState<{row: number, col: number} | null>(null);
  const [formulaBarValue, setFormulaBarValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [feedback, setFeedback] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [exerciseCompleted, setExerciseCompleted] = useState(false);

  // Inicializar grid
  useEffect(() => {
    const initialGrid: CellData[][] = Array(10).fill(null).map(() =>
      Array(10).fill(null).map(() => ({
        value: '',
        type: 'text' as const
      }))
    );

    // Cargar datos iniciales si existen
    if (exercise.initialData) {
      exercise.initialData.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (initialGrid[rowIndex] && initialGrid[rowIndex][colIndex]) {
            initialGrid[rowIndex][colIndex] = { ...cell };
          }
        });
      });
    }

    setGrid(initialGrid);
  }, [exercise]);

  // Actualizar barra de fórmulas cuando cambia la celda seleccionada
  useEffect(() => {
    if (selectedCell) {
      const cell = grid[selectedCell.row]?.[selectedCell.col];
      if (cell) {
        setFormulaBarValue(cell.formula || cell.value);
      }
    }
  }, [selectedCell, grid]);

  const columnToLetter = (col: number): string => {
    let result = '';
    while (col >= 0) {
      result = String.fromCharCode(65 + (col % 26)) + result;
      col = Math.floor(col / 26) - 1;
    }
    return result;
  };

  const letterToColumn = (letter: string): number => {
    let result = 0;
    for (let i = 0; i < letter.length; i++) {
      result = result * 26 + (letter.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
    }
    return result - 1;
  };

  const cellRefToCoords = (cellRef: string): {row: number, col: number} => {
    const match = cellRef.match(/^([A-Z]+)(\d+)$/);
    if (!match) return {row: 0, col: 0};
    const col = letterToColumn(match[1]);
    const row = parseInt(match[2]) - 1;
    return {row, col};
  };

  const handleCellClick = (row: number, col: number) => {
    if (isEditing) {
      handleFormulaSubmit();
    }
    setSelectedCell({row, col});
  };

  const handleFormulaBarChange = (value: string) => {
    setFormulaBarValue(value);
    setIsEditing(true);
  };

  const handleFormulaSubmit = useCallback(() => {
    if (!selectedCell) return;

    const newGrid = [...grid];
    const parser = new FormulaParser(newGrid);
    let processedValue = formulaBarValue;
    let cellType: 'text' | 'number' | 'formula' | 'error' = 'text';

    // Determinar tipo de celda y procesar valor
    if (formulaBarValue.startsWith('=')) {
      cellType = 'formula';
      try {
        const result = parser.parseFormula(formulaBarValue, selectedCell.row, selectedCell.col);
        processedValue = String(result);
        if (result === '#ERROR!' || result === '#NAME?' || result === '#VALUE!' || result === '#N/A') {
          cellType = 'error';
        } else if (typeof result === 'number') {
          cellType = 'number';
        }
      } catch (error) {
        processedValue = '#ERROR!';
        cellType = 'error';
      }
    } else if (!isNaN(Number(formulaBarValue)) && formulaBarValue.trim() !== '') {
      cellType = 'number';
    }

    newGrid[selectedCell.row][selectedCell.col] = {
      value: processedValue,
      formula: formulaBarValue.startsWith('=') ? formulaBarValue : undefined,
      type: cellType,
      ...(cellType === 'error' && { error: processedValue })
    };

    setGrid(newGrid);
    setIsEditing(false);
    checkExerciseCompletion(newGrid);
  }, [selectedCell, formulaBarValue, grid]);

  const checkExerciseCompletion = (currentGrid: CellData[][]) => {
    if (!exercise.targetCell) return;

    const targetCoords = cellRefToCoords(exercise.targetCell);
    const targetCell = currentGrid[targetCoords.row]?.[targetCoords.col];

    if (!targetCell) return;

    // Verificar si la fórmula o valor coincide con la solución
    const userInput = targetCell.formula || targetCell.value;
    const expectedSolution = exercise.solution;

    // Normalizar ambas fórmulas para comparación más flexible
    const normalizeFormula = (formula: string) => {
      return formula
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '') // Remover espacios
        .replace(/;/g, ',') // Normalizar separadores
        .replace(/"/g, '"') // Normalizar comillas
        .replace(/"/g, '"');
    };
    
    const normalizedUserInput = normalizeFormula(userInput);
    const normalizedExpected = normalizeFormula(expectedSolution);
    
    const isCorrect = normalizedUserInput === normalizedExpected;

    if (isCorrect) {
      setFeedback({
        type: 'success',
        message: '¡Correcto! Has completado el ejercicio.'
      });
      setExerciseCompleted(true);
    } else if (userInput.trim() !== '') {
      setFeedback({
        type: 'error',
        message: `Incorrecto. Intenta de nuevo. Se esperaba: ${expectedSolution}. Tu entrada: ${userInput}`
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleFormulaSubmit();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      if (selectedCell) {
        const cell = grid[selectedCell.row]?.[selectedCell.col];
        setFormulaBarValue(cell?.formula || cell?.value || '');
      }
    }
  };

  const resetExercise = () => {
    const initialGrid: CellData[][] = Array(10).fill(null).map(() =>
      Array(10).fill(null).map(() => ({
        value: '',
        type: 'text' as const
      }))
    );

    if (exercise.initialData) {
      exercise.initialData.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (initialGrid[rowIndex] && initialGrid[rowIndex][colIndex]) {
            initialGrid[rowIndex][colIndex] = { ...cell };
          }
        });
      });
    }

    setGrid(initialGrid);
    setSelectedCell(null);
    setFormulaBarValue('');
    setIsEditing(false);
    setFeedback(null);
    setExerciseCompleted(false);
  };

  const handleContinue = () => {
    onExerciseComplete(true);
    setExerciseCompleted(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Barra de herramientas */}
      <div className="bg-gray-50 border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={resetExercise}
              className="flex items-center text-gray-600 hover:text-gray-900 text-sm"
            >
              <RefreshCw className="h-4 w-4 mr-1" />
              Reiniciar
            </button>
            <div className="text-sm text-gray-500">
              Celda seleccionada: {selectedCell ? `${columnToLetter(selectedCell.col)}${selectedCell.row + 1}` : 'Ninguna'}
            </div>
          </div>
          {feedback && (
            <div className={`flex items-center text-sm ${
              feedback.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}>
              {feedback.type === 'success' ? (
                <CheckCircle className="h-4 w-4 mr-1" />
              ) : (
                <XCircle className="h-4 w-4 mr-1" />
              )}
              {feedback.message}
              {exerciseCompleted && (
                <button
                  onClick={handleContinue}
                  className="ml-4 bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors font-medium"
                >
                  Continuar
                </button>
              )}
              {showNextButton && !exerciseCompleted && (
                <button
                  onClick={onNextExercise}
                  className="ml-4 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors font-medium"
                >
                  Siguiente Ejercicio
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Barra de fórmulas */}
      <div className="bg-white border-b px-4 py-2">
        <div className="flex items-center">
          <div className="w-16 text-sm font-medium text-gray-700 mr-2">
            {selectedCell ? `${columnToLetter(selectedCell.col)}${selectedCell.row + 1}` : ''}
          </div>
          <input
            type="text"
            value={formulaBarValue}
            onChange={(e) => handleFormulaBarChange(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleFormulaSubmit}
            placeholder="Ingresa una fórmula o valor..."
            className="flex-1 px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Grid de Excel */}
      <div className="overflow-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="w-12 h-8 border border-gray-300 text-xs font-medium text-gray-600"></th>
              {Array.from({ length: 10 }, (_, i) => (
                <th key={i} className="w-20 h-8 border border-gray-300 text-xs font-medium text-gray-600">
                  {columnToLetter(i)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="w-12 h-8 border border-gray-300 bg-gray-50 text-xs font-medium text-gray-600 text-center">
                  {rowIndex + 1}
                </td>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={`w-20 h-8 border border-gray-300 cursor-cell relative ${
                      selectedCell?.row === rowIndex && selectedCell?.col === colIndex
                        ? 'bg-blue-100 ring-2 ring-blue-500'
                        : 'hover:bg-gray-50'
                    } ${
                      cell.type === 'error' ? 'bg-red-50 text-red-700' : 
                      cell.type === 'number' ? 'text-right' : 'text-left'
                    }`}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    <div className="px-2 py-1 text-xs truncate">
                      {cell.value}
                    </div>
                    {exercise.targetCell === `${columnToLetter(colIndex)}${rowIndex + 1}` && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border border-yellow-600"></div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};