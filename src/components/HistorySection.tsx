import React from 'react';
import { History, Trash2, Calendar, Sparkles, Leaf, CheckCircle2 } from 'lucide-react';
import { DiagnosisHistoryItem } from '../types';

interface HistorySectionProps {
  history: DiagnosisHistoryItem[];
  onClearHistory: () => void;
}

export const HistorySection: React.FC<HistorySectionProps> = ({
  history,
  onClearHistory
}) => {
  return (
    <div className="space-y-4">
      {/* Header Info */}
      <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-sm shrink-0">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-stone-900 text-base">
              Riwayat Diagnosa Lahan Anda
            </h3>
            <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
              Catatan hasil identifikasi penyakit tanaman yang pernah dilakukan baik melalui pohon gejala maupun kamera AI. Tersimpan aman di memori lokal ponsel.
            </p>
          </div>
        </div>

        {history.length > 0 && (
          <button
            onClick={() => {
              if (confirm('Hapus seluruh riwayat diagnosis?')) {
                onClearHistory();
              }
            }}
            className="p-2 rounded-xl text-rose-600 hover:bg-rose-50 border border-rose-200 text-xs font-bold flex items-center gap-1 transition-colors shrink-0"
            title="Bersihkan Riwayat"
          >
            <Trash2 className="w-4 h-4" />
            <span className="hidden sm:inline">Bersihkan</span>
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl border border-stone-200 text-center space-y-2 shadow-sm">
          <History className="w-12 h-12 text-stone-300 mx-auto" />
          <h4 className="font-bold text-stone-700 text-sm">
            Belum Ada Riwayat Diagnosis
          </h4>
          <p className="text-xs text-stone-500 max-w-xs mx-auto">
            Hasil identifikasi penyakit dan hama yang Anda simpan akan muncul di sini untuk referensi evaluasi lahan.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {history.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm space-y-3 hover:border-emerald-300 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {item.photoPreview ? (
                    <img
                      src={item.photoPreview}
                      alt="Pratinjau"
                      className="w-14 h-14 object-cover rounded-xl border border-stone-200 shrink-0"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Leaf className="w-6 h-6" />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black uppercase bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
                        {item.cropType}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          item.method === 'ai_vision'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-stone-100 text-stone-800'
                        }`}
                      >
                        {item.method === 'ai_vision' ? 'Kamera AI' : 'Pohon Gejala Offline'}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-stone-900 text-sm mt-1">
                      {item.diseaseName}
                    </h4>

                    <p className="text-xs font-mono text-emerald-800 italic">
                      {item.scientificName}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-lg font-black text-emerald-700 leading-none">
                    {item.confidence}%
                  </span>
                  <span className="text-[10px] font-bold text-stone-400 block uppercase">
                    Kepastian
                  </span>
                </div>
              </div>

              {item.notes && (
                <p className="text-xs text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-100 italic">
                  "{item.notes}"
                </p>
              )}

              <div className="flex items-center justify-between text-[11px] text-stone-400 pt-1 border-t border-stone-100">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(item.timestamp).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Tersimpan di Memori HP
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
