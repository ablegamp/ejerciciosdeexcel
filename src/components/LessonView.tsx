import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Play, CheckCircle, XCircle, Lightbulb, Award } from 'lucide-react';
import { Lesson, Exercise } from '../types';
import { ExcelSimulator } from './ExcelSimulator';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
  onComplete: (lessonId: string) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({ lesson, onBack, onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState<'explanation' | 'exercises' | 'completed'>('explanation');
  const [currentExercise, setCurrentExercise] = useState(0);
  const [exerciseResults, setExerciseResults] = useState<boolean[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [exerciseKey, setExerciseKey] = useState(0); // Key para forzar re-render del simulador

  const handleExerciseComplete = (success: boolean) => {
    const newResults = [...exerciseResults];
    newResults[currentExercise] = success;
    setExerciseResults(newResults);

    if (success) {
      if (currentExercise < lesson.exercises.length - 1) {
        // No avanzar automáticamente, esperar a que el usuario haga clic en "Siguiente"
      } else {
        setCurrentPhase('completed');
        onComplete(lesson.id);
      }
    }
  };

  const handleNextExercise = () => {
    if (currentExercise < lesson.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setShowHint(false);
      setExerciseKey(prev => prev + 1); // Forzar re-render del simulador
    }
  };

  const startExercises = () => {
    setCurrentPhase('exercises');
    setExerciseKey(0); // Reset key
  };

  const currentExerciseData = lesson.exercises[currentExercise];
  const completedExercises = exerciseResults.filter(result => result).length;

  if (currentPhase === 'explanation') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center">
              <button
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Volver
              </button>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                <h1 className="text-xl font-semibold text-gray-900">{lesson.title}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{lesson.title}</h2>
                <div className="flex items-center space-x-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    lesson.difficulty === 'beginner' 
                      ? 'bg-green-100 text-green-800'
                      : lesson.difficulty === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {lesson.difficulty === 'beginner' ? 'Principiante' :
                     lesson.difficulty === 'intermediate' ? 'Intermedio' : 'Avanzado'}
                  </span>
                  <div className="flex items-center text-blue-600">
                    <Award className="h-4 w-4 mr-1" />
                    <span className="font-medium">+{lesson.xpReward} XP</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-lg">{lesson.description}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {lesson.explanation}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Siguiente paso</p>
                  <p className="font-medium text-gray-900">
                    Practica con {lesson.exercises.length} ejercicio{lesson.exercises.length > 1 ? 's' : ''}
                  </p>
                </div>
                <button
                  onClick={startExercises}
                  className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Empezar Ejercicios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPhase === 'completed') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center">
              <button
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Volver al Dashboard
              </button>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h1 className="text-xl font-semibold text-gray-900">¡Lección Completada!</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">¡Excelente trabajo!</h2>
              <p className="text-gray-600 text-lg">Has completado la lección "{lesson.title}"</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">+{lesson.xpReward}</div>
                <div className="text-sm text-gray-500">XP Ganados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{completedExercises}</div>
                <div className="text-sm text-gray-500">Ejercicios Completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-gray-500">Precisión</div>
              </div>
            </div>

            <button
              onClick={onBack}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Volver a la Categoría
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Volver
              </button>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                <h1 className="text-xl font-semibold text-gray-900">{lesson.title}</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Ejercicio {currentExercise + 1} de {lesson.exercises.length}
              </div>
              <div className="flex space-x-1">
                {lesson.exercises.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index < currentExercise
                        ? 'bg-green-500'
                        : index === currentExercise
                        ? 'bg-blue-500'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Panel de instrucciones */}
          <div className="xl:col-span-1 space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Instrucciones</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {currentExerciseData.instruction}
              </p>
            </div>

            {currentExerciseData.hints && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center text-yellow-600 hover:text-yellow-700 mb-3"
                >
                  <Lightbulb className="h-4 w-4 mr-2" />
                  <span className="font-medium">Pista</span>
                </button>
                {showHint && (
                  <div className="space-y-2">
                    {currentExerciseData.hints.map((hint, index) => (
                      <p key={index} className="text-sm text-gray-600 bg-yellow-50 p-3 rounded">
                        {hint}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Progreso</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Completado</span>
                  <span className="font-medium">
                    {completedExercises}/{lesson.exercises.length}
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(completedExercises / lesson.exercises.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Simulador de Excel */}
          <div className="xl:col-span-3">
            <ExcelSimulator
              key={exerciseKey} // Forzar re-render cuando cambia el ejercicio
              exercise={currentExerciseData}
              onExerciseComplete={(success) => {
                handleExerciseComplete(success);
                // Si es exitoso, mostrar botón para continuar
              }}
              onNextExercise={handleNextExercise}
              showNextButton={exerciseResults[currentExercise] === true && currentExercise < lesson.exercises.length - 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};