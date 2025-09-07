import React from 'react';
import { ArrowLeft, BookOpen, Award, CheckCircle, Lock } from 'lucide-react';
import { Category } from '../types';

interface CategoryViewProps {
  category: Category;
  onBack: () => void;
  onStartLesson: (lessonId: string) => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({ 
  category, 
  onBack, 
  onStartLesson 
}) => {
  // Simular más lecciones completadas para desbloquear contenido
  const completedLessons = [
    'basics-1', 
    'calc-1', 
    'sum-1', 
    'logical-1', 
    'text-1', 
    'text-2',
    'lookup-1',
    'count-1'
  ];
  const isLessonCompleted = (lessonId: string) => completedLessons.includes(lessonId);
  
  // Cambiar la lógica de bloqueo - solo bloquear si es la tercera lección o más en una categoría
  // y las dos anteriores no están completadas
  const isLessonLocked = (lessonId: string, index: number) => {
    // No bloquear las primeras dos lecciones de cada categoría
    if (index <= 1) return false;
    
    // Para lecciones posteriores, verificar que al menos una anterior esté completada
    const previousLessons = category.lessons.slice(0, index);
    const hasCompletedPrevious = previousLessons.some(lesson => 
      isLessonCompleted(lesson.id)
    );
    
    return !hasCompletedPrevious;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Volver
            </button>
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{category.name}</h1>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Lecciones ({category.lessons.length})
            </h2>
            <div className="text-sm text-gray-500">
              {completedLessons.length} de {category.lessons.length} completadas
            </div>
          </div>
          
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedLessons.length / category.lessons.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.lessons.map((lesson, index) => {
            const isCompleted = isLessonCompleted(lesson.id);
            const isLocked = isLessonLocked(lesson.id, index);
            
            return (
              <div
                key={lesson.id}
                className={`bg-white rounded-lg shadow-sm border transition-all duration-200 ${
                  isLocked 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:shadow-md cursor-pointer'
                }`}
                onClick={() => !isLocked && onStartLesson(lesson.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {lesson.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {lesson.description}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {isCompleted && (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      )}
                      {isLocked && (
                        <Lock className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        lesson.difficulty === 'beginner' 
                          ? 'bg-green-100 text-green-800'
                          : lesson.difficulty === 'intermediate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {lesson.difficulty === 'beginner' ? 'Principiante' :
                         lesson.difficulty === 'intermediate' ? 'Intermedio' : 'Avanzado'}
                      </span>
                      <div className="flex items-center text-blue-600 text-sm">
                        <Award className="h-4 w-4 mr-1" />
                        <span>{lesson.xpReward} XP</span>
                      </div>
                    </div>
                    
                    {!isLocked && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onStartLesson(lesson.id);
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        {isCompleted ? 'Revisar' : 'Empezar'}
                      </button>
                    )}
                  </div>

                  {lesson.prerequisites && lesson.prerequisites.length > 0 && (
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-xs text-gray-500 mb-2">Prerrequisitos:</p>
                      <div className="flex flex-wrap gap-1">
                        {lesson.prerequisites.map((prereq, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {prereq}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};