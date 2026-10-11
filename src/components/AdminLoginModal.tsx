import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  User, 
  X, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  KeyRound,
  CheckCircle2
} from 'lucide-react';
import { DEFAULT_ADMIN_CREDENTIALS } from '../services/storage';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (
      username.trim() === DEFAULT_ADMIN_CREDENTIALS.username &&
      password.trim() === DEFAULT_ADMIN_CREDENTIALS.password
    ) {
      onSuccess();
      setUsername('');
      setPassword('');
    } else {
      setErrorMessage(
        'Nama pengguna atau kata sandi salah. Gunakan default: admin / admin'
      );
    }
  };

  const handleFillDefault = () => {
    setUsername(DEFAULT_ADMIN_CREDENTIALS.username);
    setPassword(DEFAULT_ADMIN_CREDENTIALS.password);
    setErrorMessage(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight">
                Masuk Portal Admin Agronomis
              </h3>
              <p className="text-[11px] text-emerald-200">
                Otorisasi Akses Manajemen AgroPakar
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleLogin} className="p-5 space-y-4">
          {/* Default Credentials Hint Card */}
          <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-3 flex items-start justify-between gap-3 text-xs">
            <div className="flex items-start gap-2">
              <KeyRound className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <span className="font-bold text-amber-950 block">
                  Kredensial Default Admin:
                </span>
                <span className="text-amber-800 text-[11px] font-mono">
                  User: <strong>admin</strong> | Password: <strong>admin</strong>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleFillDefault}
              className="px-2.5 py-1 rounded-lg bg-amber-200/80 hover:bg-amber-300 text-amber-950 font-bold text-[10px] shrink-0 transition-colors"
            >
              Isi Otomatis
            </button>
          </div>

          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Username Input */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
              Nama Pengguna (Username)
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username admin..."
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-stone-50 focus:ring-2 focus:ring-emerald-500 font-medium"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
              Kata Sandi (Password)
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-stone-50 focus:ring-2 focus:ring-emerald-500 font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-600 p-0.5"
                title={showPassword ? 'Sembunyikan' : 'Tampilkan'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Verifikasi & Masuk Admin</span>
            </button>
          </div>

          <p className="text-[11px] text-stone-400 text-center">
            Akses khusus petugas agronomi untuk mengelola database patogen & broadcast sistem.
          </p>
        </form>
      </div>
    </div>
  );
};
