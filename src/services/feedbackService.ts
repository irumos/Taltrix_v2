import { FeedbackItem } from '@/types';

const STORAGE_KEY_FEEDBACK = 'taltrix_feedback_db';

const MOCK_FEEDBACK_SEED: FeedbackItem[] = [
  {
    id: 'fb_1',
    userId: 'user_student_1',
    userName: 'Alex Rivera',
    userEmail: 'student@college.edu',
    department: 'Computer Science',
    year: '3rd Year',
    rating: 5,
    subject: 'Call Stack Visualization is Incredible',
    category: 'ui',
    message:
      'The step-by-step recursion visualization helped me pass my Data Structures midterm! Would love to see memory heap pointers highlighted with custom colors.',
    status: 'read',
    createdAt: '2026-08-05T14:30:00Z',
    adminResponse: 'Thank you Alex! Custom color coding for heap pointers is planned for next release.',
  },
  {
    id: 'fb_2',
    userId: 'user_student_2',
    userName: 'Marcus Chen',
    userEmail: 'marcus.chen@college.edu',
    department: 'Information Technology',
    year: '2nd Year',
    rating: 4,
    subject: 'Python AST Parser speed',
    category: 'performance',
    message: 'The interactive timeline slider is super fluid. Sometimes large loops (>500 steps) take 2 seconds to trace. Can we increase step limit?',
    status: 'unread',
    createdAt: '2026-08-06T09:15:00Z',
  },
  {
    id: 'fb_3',
    userId: 'user_student_3',
    userName: 'Priya Sharma',
    userEmail: 'priya.sharma@college.edu',
    department: 'Artificial Intelligence',
    year: '3rd Year',
    rating: 5,
    subject: 'Dark Mode & Glassmorphism design',
    category: 'ui',
    message: 'This is hands down the cleanest developer tool I have ever used in college. The neon cyan accents look stunning on dark mode!',
    status: 'resolved',
    createdAt: '2026-08-04T18:20:00Z',
  },
  {
    id: 'fb_4',
    userId: 'user_student_4',
    userName: 'David Kim',
    userEmail: 'david.kim@college.edu',
    department: 'Electronics',
    year: '1st Year',
    rating: 3,
    subject: 'C++ Pointers and References Example',
    category: 'feature',
    message: 'Can we add more default C++ examples for double pointers and struct padding analysis?',
    status: 'unread',
    createdAt: '2026-08-07T11:00:00Z',
  },
];

function getStoredFeedback(): FeedbackItem[] {
  if (typeof window === 'undefined') return MOCK_FEEDBACK_SEED;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_FEEDBACK);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(MOCK_FEEDBACK_SEED));
      return MOCK_FEEDBACK_SEED;
    }
    return JSON.parse(raw);
  } catch (e) {
    return MOCK_FEEDBACK_SEED;
  }
}

function saveStoredFeedback(items: FeedbackItem[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(items));
}

export class FeedbackService {
  static async getFeedbacks(filters?: {
    rating?: number | 'all';
    department?: string | 'all';
    year?: string | 'all';
    search?: string;
  }): Promise<FeedbackItem[]> {
    await new Promise((res) => setTimeout(res, 150));
    let items = getStoredFeedback();

    if (filters) {
      if (filters.rating && filters.rating !== 'all') {
        items = items.filter((item) => item.rating === Number(filters.rating));
      }
      if (filters.department && filters.department !== 'all') {
        items = items.filter((item) => item.department === filters.department);
      }
      if (filters.year && filters.year !== 'all') {
        items = items.filter((item) => item.year === filters.year);
      }
      if (filters.search && filters.search.trim()) {
        const q = filters.search.toLowerCase().trim();
        items = items.filter(
          (item) =>
            item.subject.toLowerCase().includes(q) ||
            item.message.toLowerCase().includes(q) ||
            item.userName.toLowerCase().includes(q) ||
            item.userEmail.toLowerCase().includes(q)
        );
      }
    }

    return items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  static async submitFeedback(payload: {
    userId: string;
    userName: string;
    userEmail: string;
    department: string;
    year: string;
    rating: number;
    subject: string;
    category: 'bug' | 'feature' | 'ui' | 'performance' | 'general';
    message: string;
  }): Promise<FeedbackItem> {
    await new Promise((res) => setTimeout(res, 250));
    const items = getStoredFeedback();

    const newItem: FeedbackItem = {
      id: `fb_${Date.now()}`,
      ...payload,
      status: 'unread',
      createdAt: new Date().toISOString(),
    };

    items.unshift(newItem);
    saveStoredFeedback(items);
    return newItem;
  }

  static async updateFeedbackStatus(
    id: string,
    status: FeedbackItem['status'],
    adminResponse?: string
  ): Promise<FeedbackItem> {
    const items = getStoredFeedback();
    const index = items.findIndex((f) => f.id === id);
    if (index === -1) throw new Error('Feedback not found');

    const updated: FeedbackItem = {
      ...items[index],
      status,
      ...(adminResponse !== undefined ? { adminResponse } : {}),
    };

    items[index] = updated;
    saveStoredFeedback(items);
    return updated;
  }
}
