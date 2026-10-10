import React from 'react';
import { 
  Bell, 
  X, 
  CheckCheck, 
  AlertTriangle, 
  CloudSun, 
  Database, 
  MessageSquare,
  ExternalLink 
} from 'lucide-react';
import { AppNotification } from '../types';
import { ActiveTab } from './TabNavigation';

interface NotificationModalProps {
  notifications: AppNotification[];
  onClose: () => void;
  onMarkRead: (id: string) => void;
  onMarkAllRead: () => void;
  onNavigateTab: (tab: ActiveTab) => void;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({
  notifications,
  onClose,
  onMarkRead,
  onMarkAllRead,
  onNavigateTab
}) => {
  const getIcon = (type: AppNotification['type']) => {
    switch (type) {
      case 'cuaca':
        return <CloudSun className="w-5 h-5 text-amber-500" />;
      case 'hama':
        return <AlertTriangle className="w-5 h-5 text-rose-500" />;
      case 'update_db':
        return <Database className="w-5 h-5 text-emerald-600" />;
      case 'forum':
        return <MessageSquare className="w-5 h-5 text-teal-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-md max-h-[85vh] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4">
        {/* Header */}
        <div className="px-5 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-emerald-700" />
            <h3 className="font-extrabold text-stone-900 text-base">
              Pemberitahuan & Peringatan ({notifications.length})
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onMarkAllRead}
              className="text-xs text-emerald-700 font-bold hover:underline flex items-center gap-1"
              title="Tandai semua dibaca"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              <span>Semua Dibaca</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-stone-400 hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="p-4 overflow-y-auto space-y-2.5 flex-1">
          {notifications.length === 0 ? (
            <div className="p-8 text-center text-xs text-stone-400">
              Tidak ada pemberitahuan saat ini.
            </div>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                onClick={() => {
                  onMarkRead(n.id);
                  if (n.linkTab) {
                    onNavigateTab(n.linkTab as ActiveTab);
                    onClose();
                  }
                }}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                  n.read
                    ? 'bg-stone-50 border-stone-200 opacity-80'
                    : 'bg-emerald-50/80 border-emerald-300 ring-1 ring-emerald-200 shadow-sm'
                }`}
              >
                <div className="p-2 rounded-xl bg-white shadow-sm shrink-0 border border-stone-100">
                  {getIcon(n.type)}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                      {n.title}
                    </h4>
                    {!n.read && (
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {n.message}
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-current/10 text-[10px] text-stone-400">
                    <span>
                      {new Date(n.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    {n.linkTab && (
                      <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                        Lihat <ExternalLink className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-stone-200 bg-stone-50 text-center">
          <button
            onClick={onClose}
            className="w-full py-2 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
