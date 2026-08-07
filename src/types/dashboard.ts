export interface VisualizationItem {
  id: string;
  title: string;
  language: string;
  codeSnippet: string;
  stepCount: number;
  lastExecuted: string;
  tags: string[];
  starred?: boolean;
}

export interface SavedProgram {
  id: string;
  title: string;
  language: string;
  code: string;
  description: string;
  updatedAt: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconName: string;
  unlocked: boolean;
  unlockedAt?: string;
  progress: number; // 0 to 100
  category: 'execution' | 'learning' | 'social' | 'mastery';
}

export interface SubjectProgress {
  subject: string;
  completedPercent: number;
  totalModules: number;
  completedModules: number;
  color: string;
}

export interface RecentActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'visualization' | 'program_save' | 'achievement' | 'login' | 'feedback';
  language?: string;
  stepsCount?: number;
}

export interface StudentStats {
  programsVisualized: number;
  executionSessions: number;
  learningHours: number;
  favoriteLanguage: string;
  completionPercentage: number;
}
