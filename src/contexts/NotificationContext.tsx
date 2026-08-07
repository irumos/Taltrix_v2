import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { toast } from 'sonner';
import { NotificationItem, NotificationType } from '@/types';

interface NotificationContextValue {
  notifications: NotificationItem[];
  unreadCount: number;
  notify: (type: NotificationType, title: string, message: string, actionLabel?: string, actionUrl?: string) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotification: (id: string) => void;
  clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

const SEED_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n_1',
    type: 'info',
    title: 'Welcome to TALTRIX',
    message: 'Explore code visualization with line-by-line execution, memory heap graphs, and interactive stack inspection.',
    timestamp: 'Just now',
    read: false,
  },
  {
    id: 'n_2',
    type: 'success',
    title: 'System Online',
    message: 'All AST execution engines (Python 3.11, C++17, JS ES2024) are running at optimal latency.',
    timestamp: '10m ago',
    read: false,
  },
];

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(SEED_NOTIFICATIONS);

  const notify = useCallback(
    (type: NotificationType, title: string, message: string, actionLabel?: string, actionUrl?: string) => {
      const newItem: NotificationItem = {
        id: `notif_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        type,
        title,
        message,
        timestamp: 'Just now',
        read: false,
        ...(actionLabel ? { actionLabel } : {}),
        ...(actionUrl ? { actionUrl } : {}),
      };

      setNotifications((prev) => [newItem, ...prev]);

      const toastOptions = {
        description: message,
      };

      switch (type) {
        case 'success':
          toast.success(title, toastOptions);
          break;
        case 'error':
          toast.error(title, toastOptions);
          break;
        case 'warning':
          toast.warning(title, toastOptions);
          break;
        case 'info':
        default:
          toast.info(title, toastOptions);
          break;
      }
    },
    []
  );

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const clearNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        notify,
        markAsRead,
        markAllAsRead,
        clearNotification,
        clearAll,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}
