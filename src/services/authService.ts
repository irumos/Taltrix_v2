import {
  AuthSession,
  LoginCredentials,
  PasswordChangePayload,
  SignupPayload,
  UserProfile,
} from '@/types/auth';

const STORAGE_KEY_SESSION = 'taltrix_auth_session';
const STORAGE_KEY_USERS = 'taltrix_users_db';

const MOCK_USERS_SEED: UserProfile[] = [
  {
    id: 'user_student_1',
    name: 'Alex Rivera',
    email: 'student@college.edu',
    rollNumber: '21CS042',
    department: 'Computer Science',
    year: '3rd Year',
    role: 'student',
    status: 'active',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    createdAt: '2025-09-01T08:00:00Z',
    lastActive: new Date().toISOString(),
    bio: 'Passionate CS student obsessed with algorithm visualization and memory layout.',
    githubUrl: 'https://github.com/alexrivera',
    preferredTheme: 'graphite',
    preferredLanguage: 'python',
  },
  {
    id: 'user_admin_1',
    name: 'Dr. Sarah Jenkins',
    email: 'admin@college.edu',
    department: 'Computer Science',
    role: 'admin',
    status: 'active',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    createdAt: '2025-01-15T09:30:00Z',
    lastActive: new Date().toISOString(),
    bio: 'Senior Professor & Department Chair. Taltrix Platform Administrator.',
    preferredTheme: 'graphite',
  },
  {
    id: 'user_student_2',
    name: 'Marcus Chen',
    email: 'marcus.chen@college.edu',
    rollNumber: '22IT019',
    department: 'Information Technology',
    year: '2nd Year',
    role: 'student',
    status: 'active',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    createdAt: '2025-10-12T10:15:00Z',
    lastActive: '2026-08-06T14:20:00Z',
  },
  {
    id: 'user_student_3',
    name: 'Priya Sharma',
    email: 'priya.sharma@college.edu',
    rollNumber: '21AI007',
    department: 'Artificial Intelligence',
    year: '3rd Year',
    role: 'student',
    status: 'active',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    createdAt: '2025-08-20T11:45:00Z',
    lastActive: '2026-08-07T18:10:00Z',
  },
  {
    id: 'user_student_4',
    name: 'David Kim',
    email: 'david.kim@college.edu',
    rollNumber: '23EC088',
    department: 'Electronics',
    year: '1st Year',
    role: 'student',
    status: 'inactive',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    createdAt: '2026-01-10T16:00:00Z',
    lastActive: '2026-07-22T09:00:00Z',
  },
];

function getStoredUsers(): UserProfile[] {
  if (typeof window === 'undefined') return MOCK_USERS_SEED;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USERS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(MOCK_USERS_SEED));
      return MOCK_USERS_SEED;
    }
    return JSON.parse(raw);
  } catch (e) {
    return MOCK_USERS_SEED;
  }
}

function saveStoredUsers(users: UserProfile[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
}

export class AuthService {
  static async login(credentials: LoginCredentials): Promise<AuthSession> {
    await new Promise((res) => setTimeout(res, 250));

    const emailClean = credentials.email.trim().toLowerCase();
    const users = getStoredUsers();

    let user = users.find((u) => u.email.toLowerCase() === emailClean);

    if (!user) {
      if (emailClean === 'admin@college.edu') {
        user = MOCK_USERS_SEED[1];
      } else if (emailClean.includes('admin')) {
        user = {
          id: `user_admin_${Date.now()}`,
          name: 'Admin User',
          email: emailClean,
          role: 'admin',
          status: 'active',
          createdAt: new Date().toISOString(),
          lastActive: new Date().toISOString(),
        };
      } else {
        user = {
          id: `user_student_${Date.now()}`,
          name: emailClean.split('@')[0].replace('.', ' '),
          email: emailClean,
          rollNumber: `21CS${Math.floor(100 + Math.random() * 900)}`,
          department: 'Computer Science',
          year: '3rd Year',
          role: 'student',
          status: 'active',
          createdAt: new Date().toISOString(),
          lastActive: new Date().toISOString(),
        };
        users.push(user);
        saveStoredUsers(users);
      }
    }

    const activeUser: UserProfile = {
      ...user,
      lastActive: new Date().toISOString(),
    };

    const userIndex = users.findIndex((u) => u.id === activeUser.id);
    if (userIndex !== -1) {
      users[userIndex] = activeUser;
      saveStoredUsers(users);
    }

    const session: AuthSession = {
      token: `mock_jwt_token_${Date.now()}_${activeUser.id}`,
      user: activeUser,
      rememberMe: !!credentials.rememberMe,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    };

    AuthService.saveSession(session);
    return session;
  }

  static async signup(payload: SignupPayload): Promise<AuthSession> {
    await new Promise((res) => setTimeout(res, 350));

    const users = getStoredUsers();
    const emailClean = payload.email.trim().toLowerCase();

    if (users.some((u) => u.email.toLowerCase() === emailClean)) {
      throw new Error('An account with this college email already exists.');
    }

    const newUser: UserProfile = {
      id: `user_student_${Date.now()}`,
      name: payload.name.trim(),
      email: emailClean,
      rollNumber: payload.rollNumber.trim(),
      department: payload.department,
      year: payload.year,
      role: 'student',
      status: 'active',
      avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(payload.name)}`,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      bio: `Student at ${payload.department} Department.`,
    };

    users.push(newUser);
    saveStoredUsers(users);

    const session: AuthSession = {
      token: `mock_jwt_token_${Date.now()}_${newUser.id}`,
      user: newUser,
      rememberMe: true,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    };

    AuthService.saveSession(session);
    return session;
  }

  static createGuestSession(): AuthSession {
    const guestUser: UserProfile = {
      id: 'guest_user_preview',
      name: 'Guest Scholar',
      email: 'guest@taltrix.edu',
      role: 'guest',
      status: 'active',
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      department: 'General Engineering',
    };

    const session: AuthSession = {
      token: 'guest_token_preview',
      user: guestUser,
      rememberMe: false,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    };

    AuthService.saveSession(session);
    return session;
  }

  static async requestPasswordReset(email: string): Promise<boolean> {
    await new Promise((res) => setTimeout(res, 300));
    if (!email || !email.includes('@')) {
      throw new Error('Please enter a valid college email address.');
    }
    return true;
  }

  static async updateProfile(userId: string, updates: Partial<UserProfile>): Promise<UserProfile> {
    await new Promise((res) => setTimeout(res, 200));

    const users = getStoredUsers();
    const index = users.findIndex((u) => u.id === userId);
    if (index === -1) {
      throw new Error('User not found.');
    }

    const target = users[index];
    const updated: UserProfile = {
      id: target.id,
      name: updates.name ?? target.name,
      email: updates.email ?? target.email,
      rollNumber: updates.rollNumber ?? target.rollNumber,
      department: updates.department ?? target.department,
      year: updates.year ?? target.year,
      role: updates.role ?? target.role,
      avatarUrl: updates.avatarUrl ?? target.avatarUrl,
      status: updates.status ?? target.status,
      createdAt: target.createdAt,
      lastActive: new Date().toISOString(),
      bio: updates.bio ?? target.bio,
      githubUrl: updates.githubUrl ?? target.githubUrl,
      preferredTheme: updates.preferredTheme ?? target.preferredTheme,
      preferredLanguage: updates.preferredLanguage ?? target.preferredLanguage,
    };

    users[index] = updated;
    saveStoredUsers(users);

    const currentSession = AuthService.getPersistedSession();
    if (currentSession && currentSession.user.id === userId) {
      currentSession.user = updated;
      AuthService.saveSession(currentSession);
    }

    return updated;
  }

  static async changePassword(userId: string, payload: PasswordChangePayload): Promise<boolean> {
    await new Promise((res) => setTimeout(res, 300));
    if (payload.newPassword.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }
    if (payload.newPassword !== payload.confirmPassword) {
      throw new Error('New password and confirmation do not match.');
    }
    return true;
  }

  static saveSession(session: AuthSession) {
    if (typeof window === 'undefined') return;
    try {
      if (session.rememberMe) {
        localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
        sessionStorage.removeItem(STORAGE_KEY_SESSION);
      } else {
        sessionStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
        localStorage.removeItem(STORAGE_KEY_SESSION);
      }
    } catch (e) {
      console.error('Failed to save auth session:', e);
    }
  }

  static getPersistedSession(): AuthSession | null {
    if (typeof window === 'undefined') return null;
    try {
      const rawLocal = localStorage.getItem(STORAGE_KEY_SESSION);
      if (rawLocal) return JSON.parse(rawLocal);

      const rawSession = sessionStorage.getItem(STORAGE_KEY_SESSION);
      if (rawSession) return JSON.parse(rawSession);
    } catch (e) {
      console.error('Failed to restore session:', e);
    }
    return null;
  }

  static logout() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY_SESSION);
    sessionStorage.removeItem(STORAGE_KEY_SESSION);
  }
}
