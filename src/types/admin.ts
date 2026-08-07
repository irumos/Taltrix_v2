import { UserProfile, UserRole, UserStatus } from './auth';

export interface UserFilterOptions {
  search: string;
  department: string;
  year: string;
  status: string;
  role: string;
  sortBy: 'name' | 'email' | 'rollNumber' | 'createdAt' | 'lastActive';
  sortOrder: 'asc' | 'desc';
  page: number;
  pageSize: number;
}

export interface FeedbackItem {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  department: string;
  year: string;
  rating: number; // 1-5
  subject: string;
  category: 'bug' | 'feature' | 'ui' | 'performance' | 'general';
  message: string;
  status: 'unread' | 'read' | 'resolved' | 'archived';
  createdAt: string;
  adminResponse?: string;
}

export interface SystemAnalytics {
  totalUsers: number;
  activeUsersToday: number;
  feedbackCount: number;
  dailyVisits: number;
  userGrowthPercent: number;
  visualizationsCreatedOverTime: Array<{ date: string; count: number }>;
  mostUsedLanguages: Array<{ name: string; value: number; color: string }>;
  userGrowthMonthly: Array<{ month: string; students: number; admins: number }>;
  dailySessionsWeek: Array<{ day: string; sessions: number }>;
  ratingDistribution: Array<{ stars: number; count: number }>;
}

export interface PopularExample {
  id: string;
  title: string;
  language: string;
  views: number;
  category: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'normal' | 'important' | 'critical';
  createdAt: string;
  author: string;
}
