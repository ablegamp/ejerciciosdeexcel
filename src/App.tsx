import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LessonView } from './components/LessonView';
import { CategoryView } from './components/CategoryView';
import { RankingView } from './components/RankingView';
import { categories } from './data/lessonData';
import { Lesson, Category } from './types';

type View = 'dashboard' | 'lesson' | 'category' | 'ranking';

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleStartLesson = (lessonId: string) => {
    // Buscar la lección en todas las categorías
    for (const category of categories) {
      const lesson = category.lessons.find(l => l.id === lessonId);
      if (lesson) {
        setSelectedLesson(lesson);
        setCurrentView('lesson');
        return;
      }
    }
  };

  const handleViewCategory = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      setSelectedCategory(category);
      setCurrentView('category');
    }
  };

  const handleViewRanking = () => {
    setCurrentView('ranking');
  };

  const handleBack = () => {
    setCurrentView('dashboard');
    setSelectedLesson(null);
    setSelectedCategory(null);
  };

  const handleLessonComplete = (lessonId: string) => {
    console.log(`Lección completada: ${lessonId}`);
    // Aquí podrías actualizar el estado del usuario, guardar en localStorage, etc.
    
    // Regresar a la vista de categoría después de completar la lección
    if (selectedLesson) {
      const category = categories.find(c => c.lessons.some(l => l.id === lessonId));
      if (category) {
        setSelectedCategory(category);
        setCurrentView('category');
        setSelectedLesson(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'dashboard' && (
        <Dashboard
          onStartLesson={handleStartLesson}
          onViewCategory={handleViewCategory}
          onViewRanking={handleViewRanking}
        />
      )}
      
      {currentView === 'lesson' && selectedLesson && (
        <LessonView
          lesson={selectedLesson}
          onBack={handleBack}
          onComplete={handleLessonComplete}
        />
      )}
      
      {currentView === 'category' && selectedCategory && (
        <CategoryView
          category={selectedCategory}
          onBack={handleBack}
          onStartLesson={handleStartLesson}
        />
      )}
      
      {currentView === 'ranking' && (
        <RankingView onBack={handleBack} />
      )}
    </div>
  );
}

export default App;