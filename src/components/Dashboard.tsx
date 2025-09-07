import React from 'react';
import { Trophy, Target, Flame, BookOpen, Users, Award, TrendingUp } from 'lucide-react';
import { categories, mockUsers, currentUser } from '../data/lessonData';
import { User, RankingEntry, Progress } from '../types';

interface DashboardProps {
  onStartLesson: (lessonId: string) => void;
  onViewCategory: (categoryId: string) => void;
  onViewRanking: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  onStartLesson, 
  onViewCategory, 
  onViewRanking 
}) => {
  // Calcular progreso por categoría
  const getProgress = (): Progress[] => {
    return categories.map(category => ({
      categoryId: category.id,
      completedLessons: Math.floor(category.lessons.length * 0.7), // Simulado
      totalLessons: category.lessons.length,
      percentage: Math.floor(category.lessons.length * 0.7 / category.lessons.length * 100)
    }));
  };

  const progress = getProgress();
  const totalProgress = Math.floor(progress.reduce((acc, p) => acc + p.percentage, 0) / progress.length);

  // Lección recomendada (primera lección incompleta)
  const getRecommendedLesson = () => {
    for (const category of categories) {
      for (const lesson of category.lessons) {
        // Simulamos que las primeras lecciones están completadas
        if (lesson.id !== 'basics-1' && lesson.id !== 'calc-1') {
          return { lesson, category };
        }
      }
    }
    return null;
  };

  const recommended = getRecommendedLesson();

  // Top 3 usuarios para el ranking
  const topUsers = [...mockUsers]
    .sort((a, b) => b.xp - a.xp)
    .slice(0, 3)
    .map((user, index) => ({
      rank: index + 1,
      user,
      score: user.xp
    }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ejercicios de Excel</h1>
              <p className="text-gray-600 mt-1">Aprende Excel de forma divertida y gamificada</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Bienvenido/a</p>
                <p className="font-semibold text-gray-900">{currentUser.name}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {currentUser.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Estadísticas del usuario */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Nivel</p>
                <p className="text-2xl font-bold text-gray-900">{currentUser.level}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">XP Total</p>
                <p className="text-2xl font-bold text-gray-900">{currentUser.xp.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Flame className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Racha</p>
                <p className="text-2xl font-bold text-gray-900">{currentUser.streak} días</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Progreso</p>
                <p className="text-2xl font-bold text-gray-900">{totalProgress}%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Lección recomendada */}
            {recommended && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-5 w-5 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Lección Recomendada</h2>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {recommended.lesson.title}
                      </h3>
                      <p className="text-gray-600">{recommended.lesson.description}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        recommended.lesson.difficulty === 'beginner' 
                          ? 'bg-green-100 text-green-800'
                          : recommended.lesson.difficulty === 'intermediate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {recommended.lesson.difficulty === 'beginner' ? 'Principiante' :
                         recommended.lesson.difficulty === 'intermediate' ? 'Intermedio' : 'Avanzado'}
                      </span>
                      <p className="text-sm text-gray-500 mt-2">+{recommended.lesson.xpReward} XP</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onStartLesson(recommended.lesson.id)}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Empezar Lección
                  </button>
                </div>
              </div>
            )}

            {/* Categorías */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Categorías</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((category) => {
                  const categoryProgress = progress.find(p => p.categoryId === category.id);
                  return (
                    <div
                      key={category.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => onViewCategory(category.id)}
                    >
                      <div className="flex items-center mb-3">
                        <div className={`p-2 rounded-lg ${category.color}`}>
                          <div className="w-5 h-5 text-white">
                            {category.icon === 'BookOpen' && <BookOpen className="w-5 h-5" />}
                            {category.icon === 'Calculator' && <div className="w-5 h-5 bg-white rounded"></div>}
                            {category.icon === 'Plus' && <div className="w-5 h-5 bg-white rounded"></div>}
                            {category.icon === 'GitBranch' && <div className="w-5 h-5 bg-white rounded"></div>}
                            {category.icon === 'Type' && <div className="w-5 h-5 bg-white rounded"></div>}
                            {category.icon === 'Search' && <div className="w-5 h-5 bg-white rounded"></div>}
                            {category.icon === 'Hash' && <div className="w-5 h-5 bg-white rounded"></div>}
                          </div>
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-900">{category.name}</h3>
                          <p className="text-sm text-gray-500">{category.lessons.length} lecciones</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${categoryProgress?.percentage || 0}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500 ml-3">
                          {categoryProgress?.percentage || 0}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ranking */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Ranking</h2>
                <button
                  onClick={onViewRanking}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Ver todo
                </button>
              </div>
              <div className="space-y-3">
                {topUsers.map((entry) => (
                  <div key={entry.user.id} className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      {entry.rank === 1 && <Trophy className="h-5 w-5 text-yellow-500" />}
                      {entry.rank === 2 && <Trophy className="h-5 w-5 text-gray-400" />}
                      {entry.rank === 3 && <Trophy className="h-5 w-5 text-amber-600" />}
                      {entry.rank > 3 && <span className="text-sm font-medium text-gray-500">#{entry.rank}</span>}
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">{entry.user.name}</p>
                      <p className="text-xs text-gray-500">Nivel {entry.user.level}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{entry.score.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">XP</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actividad reciente */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Actividad Reciente</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Completaste "Operaciones Básicas"</p>
                    <p className="text-xs text-gray-500">Hace 2 horas</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Nuevo récord de racha: 12 días</p>
                    <p className="text-xs text-gray-500">Hace 1 día</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Subiste al nivel 8</p>
                    <p className="text-xs text-gray-500">Hace 3 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};