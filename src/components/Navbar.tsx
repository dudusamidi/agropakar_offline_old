import React from 'react';
import { 
  Sprout, 
  Wifi, 
  WifiOff, 
  Bell, 
  User, 
  ShieldCheck, 
  RefreshCw 
} from 'lucide-react';
import { UserRole, AppNotification } from '../types';

interface NavbarProps {
  isOnline: boolean;
  toggleSimulatedOffline: () => void;
  isSimulatedOffline: boolean;
  userRole: UserRole;
  onOpenAdminLogin: () => void;
  onAdminLogout: () => void;
  notifications: AppNotification[];
  onOpenNotifications: () => void;
  onSyncDatabase: () => void;
  dbVersion: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  isOnline,
  toggleSimulatedOffline,
  isSimulatedOffline,
  userRole,
  onOpenAdminLogin,
  onAdminLogout,
  notifications,
  onOpenNotifications,
  onSyncDatabase,
  dbVersion
}) => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-40 bg-emerald-900 text-white shadow-md border-b border-emerald-800">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2.5 flex items-center justify-between gap-2">
        {/* Logo & App Name */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-inner">
            <Sprout className="w-6 h-6 text-emerald-300" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white leading-none">
                AgroPakar
              </span>
              <span className="text-[10px] font-semibold bg-emerald-700/80 text-emerald-200 px-1.5 py-0.5 rounded uppercase">
                v{dbVersion}.0
              </span>
            </div>
            <p className="text-[11px] text-emerald-200/80 leading-tight">
              Sistem Pakar Tanaman & Deteksi Hama
            </p>
          </div>
        </div>

        {/* Status Pills & Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Network Mode Indicator with Simulation Toggle */}
          <button
            onClick={toggleSimulatedOffline}
            title={isSimulatedOffline ? 'Klik untuk kembali online' : 'Klik untuk tes simulasi offline di lapangan'}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              isOnline && !isSimulatedOffline
                ? 'bg-emerald-800/90 text-emerald-200 border-emerald-700 hover:bg-emerald-700'
                : 'bg-amber-500 text-stone-950 border-amber-400 font-bold animate-pulse'
            }`}
          >
            {isOnline && !isSimulatedOffline ? (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Daring (Online)</span>
                <span className="sm:hidden">Online</span>
              </>
            ) : (
              <>
                <WifiOff className="w-3.5 h-3.5 text-stone-950" />
                <span>Mode Offline</span>
              </>
            )}
          </button>

          {/* Sync Button */}
          <button
            onClick={onSyncDatabase}
            title="Sinkronisasi Basis Data & Antrean"
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-emerald-800/70 hover:bg-emerald-700 border border-emerald-700 text-emerald-200 text-xs font-medium flex items-center gap-1 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Sinkron Data</span>
          </button>

          {/* Notification Bell */}
          <button
            onClick={onOpenNotifications}
            className="relative p-2 rounded-lg bg-emerald-800/70 hover:bg-emerald-700 border border-emerald-700 text-emerald-200 transition-colors"
            title="Pemberitahuan & Peringatan Cuaca"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-emerald-950 text-[10px] font-black rounded-full flex items-center justify-center shadow">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Role Switcher / Admin Login Trigger */}
          {userRole === 'admin' ? (
            <button
              onClick={onAdminLogout}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border bg-amber-400 text-emerald-950 border-amber-300 shadow-sm hover:bg-amber-300"
              title="Keluar dari sesi Admin"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-950" />
              <span>Admin (Keluar)</span>
            </button>
          ) : (
            <button
              onClick={onOpenAdminLogin}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all border bg-emerald-800/90 text-emerald-200 border-emerald-700 hover:bg-emerald-700 hover:text-white"
              title="Masuk sebagai Admin Agronomis (Perlu Password)"
            >
              <User className="w-3.5 h-3.5 text-emerald-300" />
              <span>Masuk Admin</span>
            </button>
          )}
        </div>
      </div>

      {/* Offline Alert Strip if Offline */}
      {(!isOnline || isSimulatedOffline) && (
        <div className="bg-amber-500 text-stone-950 text-xs py-1 px-4 text-center font-semibold flex items-center justify-center gap-2 border-t border-amber-600">
          <WifiOff className="w-3.5 h-3.5" />
          <span>
            Mode Luring Aktif: Sistem pakar pohon gejala dan resep ramah lingkungan tetap 100% berfungsi tanpa sinyal internet.
          </span>
        </div>
      )}
    </header>
  );
};
