export interface User {
  id: string;
  name: string;
  level: number;
  xp: number;
  streak: number;
  totalLessons: number;
  completedLessons: number;
  lastActive: Date;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  xpReward: number;
  explanation: string;
  exercises: Exercise[];
  prerequisites?: string[];
}

export interface Exercise {
  id: string;
  instruction: string;
  initialData?: CellData[][];
  expectedResult?: any;
  targetCell?: string;
  hints?: string[];
  solution: string;
}

export interface CellData {
  value: string;
  formula?: string;
  type: 'text' | 'number' | 'formula' | 'error';
  error?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export interface RankingEntry {
  rank: number;
  user: User;
  score: number;
}

export interface Progress {
  categoryId: string;
  completedLessons: number;
  totalLessons: number;
  percentage: number;
}