import { UserFilterOptions, UserProfile, UserRole, UserStatus } from '@/types';

const STORAGE_KEY_USERS = 'taltrix_users_db';

function getStoredUsers(): UserProfile[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USERS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveStoredUsers(users: UserProfile[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
}

export class UserService {
  static async getUsers(options: UserFilterOptions) {
    await new Promise((res) => setTimeout(res, 150));
    let users = getStoredUsers();

    if (options.search.trim()) {
      const q = options.search.toLowerCase().trim();
      users = users.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          (u.rollNumber && u.rollNumber.toLowerCase().includes(q)) ||
          (u.department && u.department.toLowerCase().includes(q))
      );
    }

    if (options.department && options.department !== 'all') {
      users = users.filter((u) => u.department === options.department);
    }

    if (options.year && options.year !== 'all') {
      users = users.filter((u) => u.year === options.year);
    }

    if (options.status && options.status !== 'all') {
      users = users.filter((u) => u.status === options.status);
    }

    if (options.role && options.role !== 'all') {
      users = users.filter((u) => u.role === options.role);
    }

    users.sort((a, b) => {
      let fieldA: any = a[options.sortBy] || '';
      let fieldB: any = b[options.sortBy] || '';

      if (typeof fieldA === 'string') fieldA = fieldA.toLowerCase();
      if (typeof fieldB === 'string') fieldB = fieldB.toLowerCase();

      if (fieldA < fieldB) return options.sortOrder === 'asc' ? -1 : 1;
      if (fieldA > fieldB) return options.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    const total = users.length;
    const startIndex = (options.page - 1) * options.pageSize;
    const paginatedUsers = users.slice(startIndex, startIndex + options.pageSize);

    return {
      users: paginatedUsers,
      total,
      totalPages: Math.max(1, Math.ceil(total / options.pageSize)),
      page: options.page,
    };
  }

  static async updateUserStatus(userId: string, status: UserStatus): Promise<UserProfile> {
    const users = getStoredUsers();
    const index = users.findIndex((u) => u.id === userId);
    if (index === -1) throw new Error('User not found');
    const updated = { ...users[index], status } as UserProfile;
    users[index] = updated;
    saveStoredUsers(users);
    return updated;
  }

  static async updateUserRole(userId: string, role: UserRole): Promise<UserProfile> {
    const users = getStoredUsers();
    const index = users.findIndex((u) => u.id === userId);
    if (index === -1) throw new Error('User not found');
    const updated = { ...users[index], role } as UserProfile;
    users[index] = updated;
    saveStoredUsers(users);
    return updated;
  }

  static async deleteUser(userId: string): Promise<boolean> {
    let users = getStoredUsers();
    users = users.filter((u) => u.id !== userId);
    saveStoredUsers(users);
    return true;
  }
}
