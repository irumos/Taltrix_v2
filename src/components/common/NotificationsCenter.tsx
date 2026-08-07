import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  Bell,
  Check,
  Trash2,
  X,
  Info,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { useNotifications } from '@/contexts/NotificationContext';

export function NotificationsCenter() {
  const { notifications, unreadCount, markAsRead, markAllAsRead, clearNotification, clearAll } =
    useNotifications();
  const [isOpen, setIsOpen] = useState(false);
  const bellRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState<{ top: number; right: number }>({ top: 0, right: 0 });

  const updatePosition = useCallback(() => {
    if (!bellRef.current) return;
    const rect = bellRef.current.getBoundingClientRect();
    const rightOffset = Math.max(16, window.innerWidth - rect.right);
    const topOffset = rect.bottom + 10;
    setCoords({ top: topOffset, right: rightOffset });
  }, []);

  const handleToggle = () => {
    if (!isOpen) {
      updatePosition();
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;

    updatePosition();
    const handleResize = () => updatePosition();
    const handleScroll = () => updatePosition();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, updatePosition]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0" />;
      case 'info':
      default:
        return <Info className="h-4 w-4 text-cyan-400 shrink-0" />;
    }
  };

  return (
    <>
      {/* Bell Trigger Button */}
      <button
        ref={bellRef}
        type="button"
        onClick={handleToggle}
        aria-label="Notifications"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="relative grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
      >
        <Bell className="h-4 w-4" />
        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 font-mono text-[9px] font-bold text-black shadow-md shadow-cyan-500/50 transition-transform animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Floating Application Popover via React Portal */}
      {typeof window !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <div role="dialog" aria-label="Notifications popover" className="fixed inset-0 z-[9990]">
                {/* Full-screen Backdrop mask for outside click */}
                <div
                  className="fixed inset-0 bg-black/20 backdrop-blur-[1px] transition-opacity"
                  onClick={() => setIsOpen(false)}
                />

                {/* Floating Popover Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: -6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'fixed',
                    top: `${coords.top}px`,
                    right: `${coords.right}px`,
                  }}
                  className="z-[9999] w-[calc(100vw-2rem)] sm:w-96 max-w-[420px] rounded-2xl border border-border/80 bg-surface/95 p-4 shadow-2xl backdrop-blur-2xl"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-border/60 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-sm font-bold text-foreground">Notifications</span>
                      {unreadCount > 0 && (
                        <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-400 border border-cyan-500/30">
                          {unreadCount} new
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      {notifications.length > 0 && (
                        <>
                          <button
                            type="button"
                            onClick={markAllAsRead}
                            title="Mark all as read"
                            className="rounded-lg p-1.5 text-xs text-muted-foreground transition-colors hover:bg-surface-h hover:text-foreground"
                          >
                            <Check className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={clearAll}
                            title="Clear all notifications"
                            className="rounded-lg p-1.5 text-xs text-muted-foreground transition-colors hover:bg-surface-h hover:text-rose-400"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </>
                      )}
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-surface-h hover:text-foreground"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Body Notification List */}
                  <div className="mt-3 max-h-[400px] space-y-2 overflow-y-auto pr-1">
                    {notifications.length === 0 ? (
                      <div className="py-10 text-center font-sans text-xs text-muted-foreground space-y-1">
                        <Bell className="mx-auto h-6 w-6 text-muted-foreground/40" />
                        <p>All caught up!</p>
                        <p className="text-[11px]">No active notifications</p>
                      </div>
                    ) : (
                      notifications.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => markAsRead(item.id)}
                          className={`group relative flex items-start gap-3 rounded-xl border p-3 transition-all cursor-pointer ${
                            item.read
                              ? 'border-border/40 bg-surface/40 opacity-75'
                              : 'border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/50'
                          }`}
                        >
                          {getIcon(item.type)}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <h4 className="font-sans text-xs font-semibold text-foreground truncate">
                                {item.title}
                              </h4>
                              <span className="font-mono text-[10px] text-muted-foreground shrink-0">
                                {item.timestamp}
                              </span>
                            </div>
                            <p className="mt-1 font-sans text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                              {item.message}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              clearNotification(item.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-rose-400 transition-opacity"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between font-sans text-xs">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {notifications.length} total messages
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        markAllAsRead();
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-1 font-semibold text-cyan-400 hover:underline"
                    >
                      <span>View All Notifications</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
