import React from 'react';
import { ArrowLeft, Trophy, Award, TrendingUp, Users } from 'lucide-react';
import { mockUsers } from '../data/lessonData';

interface RankingViewProps {
  onBack: () => void;
}

export const RankingView: React.FC<RankingViewProps> = ({ onBack }) => {
  const rankedUsers = [...mockUsers]
    .sort((a, b) => b.xp - a.xp)
    .map((user, index) => ({
      rank: index + 1,
      user,
      score: user.xp
    }));

  const getTrophyIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Trophy className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Trophy className="h-6 w-6 text-amber-600" />;
      default:
        return (
          <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">#{rank}</span>
          </div>
        );
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return 'bg-yellow-100 text-yellow-800';
    if (rank === 2) return 'bg-gray-100 text-gray-800';
    if (rank === 3) return 'bg-amber-100 text-amber-800';
    return 'bg-gray-50 text-gray-600';
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
              <Trophy className="h-6 w-6 text-yellow-500 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Ranking Global</h1>
                <p className="text-gray-600">Clasificación de usuarios por XP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Estadísticas generales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Usuarios Activos</p>
                <p className="text-2xl font-bold text-gray-900">{mockUsers.length}</p>
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
                <p className="text-2xl font-bold text-gray-900">
                  {mockUsers.reduce((acc, user) => acc + user.xp, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Mejor Racha</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.max(...mockUsers.map(u => u.streak))} días
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Podio (Top 3) */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            🏆 Podio de Honor
          </h2>
          
          <div className="flex justify-center items-end space-x-8">
            {/* Segundo lugar */}
            {rankedUsers[1] && (
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">
                      {rankedUsers[1].user.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{rankedUsers[1].user.name}</h3>
                  <p className="text-sm text-gray-500">Nivel {rankedUsers[1].user.level}</p>
                </div>
                <div className="flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="font-bold text-gray-700">2°</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {rankedUsers[1].score.toLocaleString()} XP
                </p>
              </div>
            )}

            {/* Primer lugar */}
            {rankedUsers[0] && (
              <div className="text-center">
                <div className="bg-yellow-50 rounded-lg p-6 mb-4 border-2 border-yellow-200">
                  <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-2xl">
                      {rankedUsers[0].user.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{rankedUsers[0].user.name}</h3>
                  <p className="text-sm text-gray-500">Nivel {rankedUsers[0].user.level}</p>
                </div>
                <div className="flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
                  <span className="font-bold text-yellow-700">1°</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {rankedUsers[0].score.toLocaleString()} XP
                </p>
              </div>
            )}

            {/* Tercer lugar */}
            {rankedUsers[2] && (
              <div className="text-center">
                <div className="bg-amber-50 rounded-lg p-6 mb-4">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">
                      {rankedUsers[2].user.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{rankedUsers[2].user.name}</h3>
                  <p className="text-sm text-gray-500">Nivel {rankedUsers[2].user.level}</p>
                </div>
                <div className="flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="font-bold text-amber-700">3°</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {rankedUsers[2].score.toLocaleString()} XP
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Ranking completo */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Ranking Completo</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {rankedUsers.map((entry) => (
              <div key={entry.user.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                      {getTrophyIcon(entry.rank)}
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-3 ${getRankBadge(entry.rank)}`}>
                          #{entry.rank}
                        </span>
                        <h3 className="text-sm font-medium text-gray-900">
                          {entry.user.name}
                        </h3>
                      </div>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <span>Nivel {entry.user.level}</span>
                        <span className="mx-2">•</span>
                        <span>Racha: {entry.user.streak} días</span>
                        <span className="mx-2">•</span>
                        <span>
                          {entry.user.completedLessons}/{entry.user.totalLessons} lecciones
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {entry.score.toLocaleString()} XP
                    </p>
                    <p className="text-xs text-gray-500">
                      {Math.floor((entry.user.completedLessons / entry.user.totalLessons) * 100)}% completado
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};