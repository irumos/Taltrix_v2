export type UserRole = 'student' | 'admin' | 'guest';

export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  rollNumber?: string;
  department?: string;
  year?: string;
  role: UserRole;
  avatarUrl?: string;
  status: UserStatus;
  createdAt: string;
  lastActive: string;
  bio?: string;
  githubUrl?: string;
  preferredTheme?: string;
  preferredLanguage?: string;
}

export interface AuthSession {
  token: string;
  user: UserProfile;
  rememberMe: boolean;
  expiresAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupPayload {
  name: string;
  rollNumber: string;
  email: string;
  department: string;
  year: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface PasswordChangePayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
