import { PopularExample, SystemAnalytics } from '@/types';

export class AnalyticsService {
  static async getSystemAnalytics(): Promise<SystemAnalytics> {
    await new Promise((res) => setTimeout(res, 100));

    return {
      totalUsers: 1420,
      activeUsersToday: 384,
      feedbackCount: 96,
      dailyVisits: 2850,
      userGrowthPercent: 14.8,
      visualizationsCreatedOverTime: [
        { date: 'Mon', count: 320 },
        { date: 'Tue', count: 410 },
        { date: 'Wed', count: 580 },
        { date: 'Thu', count: 720 },
        { date: 'Fri', count: 890 },
        { date: 'Sat', count: 640 },
        { date: 'Sun', count: 510 },
      ],
      mostUsedLanguages: [
        { name: 'Python', value: 45, color: '#3b82f6' },
        { name: 'C++', value: 25, color: '#c084fc' },
        { name: 'JavaScript', value: 20, color: '#fbbf24' },
        { name: 'Java', value: 10, color: '#34d399' },
      ],
      userGrowthMonthly: [
        { month: 'Jan', students: 450, admins: 8 },
        { month: 'Feb', students: 620, admins: 10 },
        { month: 'Mar', students: 780, admins: 12 },
        { month: 'Apr', students: 950, admins: 14 },
        { month: 'May', students: 1180, admins: 15 },
        { month: 'Jun', students: 1420, admins: 18 },
      ],
      dailySessionsWeek: [
        { day: 'Mon', sessions: 1200 },
        { day: 'Tue', sessions: 1450 },
        { day: 'Wed', sessions: 1900 },
        { day: 'Thu', sessions: 2100 },
        { day: 'Fri', sessions: 2400 },
        { day: 'Sat', sessions: 1800 },
        { day: 'Sun', sessions: 1650 },
      ],
      ratingDistribution: [
        { stars: 5, count: 68 },
        { stars: 4, count: 20 },
        { stars: 3, count: 5 },
        { stars: 2, count: 2 },
        { stars: 1, count: 1 },
      ],
    };
  }

  static async getPopularExamples(): Promise<PopularExample[]> {
    return [
      { id: 'ex_1', title: 'Binary Search Tree Balancing', language: 'python', views: 4320, category: 'Trees & Graphs' },
      { id: 'ex_2', title: 'Recursive Call Stack (Fibonacci)', language: 'cpp', views: 3890, category: 'Recursion' },
      { id: 'ex_3', title: 'QuickSort Partition Tracing', language: 'javascript', views: 3120, category: 'Sorting' },
      { id: 'ex_4', title: 'Linked List Reversal Memory Graph', language: 'c', views: 2750, category: 'Memory' },
    ];
  }
}
