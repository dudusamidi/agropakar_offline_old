/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Disease, 
  Symptom, 
  DiagnosisResult, 
  DiagnosisHistoryItem, 
  OfflineQueueItem, 
  ForumPost, 
  ForumComment, 
  AppNotification, 
  WeatherInfo, 
  UserRole 
} from './types';
import { storage } from './services/storage';
import { INITIAL_WEATHER } from './data/initialData';
import { Navbar } from './components/Navbar';
import { TabNavigation, ActiveTab } from './components/TabNavigation';
import { DiagnoseSection } from './components/DiagnoseSection';
import { CatalogSection } from './components/CatalogSection';
import { WeatherSection } from './components/WeatherSection';
import { ForumSection } from './components/ForumSection';
import { AdminSection } from './components/AdminSection';
import { HistorySection } from './components/HistorySection';
import { NotificationModal } from './components/NotificationModal';

export default function App() {
  // --- NETWORK STATE ---
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [isSimulatedOffline, setIsSimulatedOffline] = useState<boolean>(false);
  const effectiveOnline = isOnline && !isSimulatedOffline;

  // --- CORE APPLICATION STATE ---
  const [userRole, setUserRole] = useState<UserRole>('petani');
  const [activeTab, setActiveTab] = useState<ActiveTab>('diagnose');
  const [dbVersion, setDbVersion] = useState<number>(1);
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [diagnosisHistory, setDiagnosisHistory] = useState<DiagnosisHistoryItem[]>([]);
  const [offlineQueue, setOfflineQueue] = useState<OfflineQueueItem[]>([]);
  const [forumPosts, setForumPosts] = useState<ForumPost[]>([]);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [weather, setWeather] = useState<WeatherInfo>(INITIAL_WEATHER);
  const [isLoadingWeather, setIsLoadingWeather] = useState<boolean>(false);

  // --- MODAL STATES ---
  const [showNotificationModal, setShowNotificationModal] = useState<boolean>(false);
  const [selectedDiseaseForModal, setSelectedDiseaseForModal] = useState<Disease | null>(null);
  const [syncToast, setSyncToast] = useState<string | null>(null);

  // Load initial local data
  useEffect(() => {
    setUserRole(storage.getUserRole());
    setDbVersion(storage.getDbVersion());
    setDiseases(storage.getDiseases());
    setSymptoms(storage.getSymptoms());
    setDiagnosisHistory(storage.getHistory());
    setOfflineQueue(storage.getOfflineQueue());
    setForumPosts(storage.getForumPosts());
    setNotifications(storage.getNotifications());
  }, []);

  // Network listeners
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      showToast('Koneksi internet terhubung kembali!');
    };
    const handleOffline = () => {
      setIsOnline(false);
      showToast('Koneksi terputus: Mode luring aktif.');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const showToast = (message: string) => {
    setSyncToast(message);
    setTimeout(() => setSyncToast(null), 3500);
  };

  const toggleSimulatedOffline = () => {
    const nextVal = !isSimulatedOffline;
    setIsSimulatedOffline(nextVal);
    if (nextVal) {
      showToast('Simulasi Mode Luring (Offline) diaktifkan untuk pengujian lapangan.');
    } else {
      showToast('Simulasi Mode Luring dimatikan. Kembali ke status daring.');
    }
  };

  const handleSetUserRole = (role: UserRole) => {
    setUserRole(role);
    storage.setUserRole(role);
    showToast(`Peran dialihkan ke: ${role === 'admin' ? 'Admin Agronomis' : 'Petani Lapangan'}`);
  };

  // --- WEATHER FETCHER ---
  const handleFetchWeather = async (location: string, lat?: number, lon?: number) => {
    if (!effectiveOnline) {
      showToast('Prakiraan cuaca offline menggunakan data mikroklimat tersimpan.');
      return;
    }

    setIsLoadingWeather(true);
    try {
      let url = `/api/weather?location=${encodeURIComponent(location)}`;
      if (lat !== undefined && lon !== undefined) {
        url = `/api/weather?lat=${lat}&lon=${lon}`;
      }
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setWeather(data);
        if (lat !== undefined) {
          showToast('Lokasi GPS lahan berhasil dideteksi otomatis.');
        } else {
          showToast(`Data cuaca ${data.location || location} diperbarui.`);
        }
      }
    } catch (e) {
      console.warn('Weather fetch failed, using fallback cached data:', e);
    } finally {
      setIsLoadingWeather(false);
    }
  };

  // --- OFFLINE QUEUE PROCESSOR ---
  const handleProcessQueueItem = async (itemId: string) => {
    if (!effectiveOnline) {
      alert('Tidak ada koneksi internet. Sambungkan ke sinyal untuk memproses AI.');
      return;
    }

    const item = offlineQueue.find((q) => q.id === itemId);
    if (!item) return;

    try {
      const res = await fetch('/api/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: item.photoBase64,
          cropType: item.cropType,
          notes: item.notes
        })
      });

      if (!res.ok) throw new Error('Diagnosa gagal');
      const data = await res.json();

      // Remove from queue
      storage.removeQueueItem(itemId);
      setOfflineQueue(storage.getOfflineQueue());

      // Save to history
      const historyItem: DiagnosisHistoryItem = {
        id: `hist_${Date.now()}`,
        timestamp: new Date().toISOString(),
        cropType: item.cropType,
        diseaseName: data.diseaseName || 'Penyakit Teridentifikasi AI',
        scientificName: data.scientificName || 'Patogen Spesifik',
        confidence: data.confidencePercent || 85,
        method: 'ai_vision',
        photoPreview: item.photoBase64,
        notes: item.notes,
        syncStatus: 'synced'
      };

      storage.addHistory(historyItem);
      setDiagnosisHistory(storage.getHistory());

      // Add Notification
      const newNotif: AppNotification = {
        id: `notif_${Date.now()}`,
        title: 'Hasil AI Antrean Selesai',
        message: `Foto ${item.cropType} Anda teridentifikasi: ${data.diseaseName} (${data.confidencePercent}% keyakinan).`,
        type: 'hama',
        timestamp: new Date().toISOString(),
        read: false,
        linkTab: 'history'
      };
      storage.addNotification(newNotif);
      setNotifications(storage.getNotifications());

      showToast(`Foto antrean ${item.cropType} sukses dianalisis oleh AI!`);
    } catch (err) {
      console.error(err);
      alert('Gagal memproses antrean. Silakan coba lagi.');
    }
  };

  // --- SAVE DIAGNOSIS TO HISTORY ---
  const handleSaveToHistory = (
    result: DiagnosisResult,
    photo?: string,
    notes?: string
  ) => {
    const historyItem: DiagnosisHistoryItem = {
      id: `hist_${Date.now()}`,
      timestamp: new Date().toISOString(),
      cropType: result.disease.cropType,
      diseaseName: result.disease.nameIndo,
      scientificName: result.disease.scientificName,
      confidence: result.certaintyFactor,
      method: result.method,
      photoPreview: photo,
      notes: notes || result.aiObservationNotes,
      syncStatus: 'synced'
    };

    storage.addHistory(historyItem);
    setDiagnosisHistory(storage.getHistory());
    showToast('Diagnosis berhasil disimpan ke riwayat ponsel.');
  };

  // --- OFFLINE QUEUE ADD ---
  const handleAddToQueue = (item: OfflineQueueItem) => {
    storage.addToOfflineQueue(item);
    setOfflineQueue(storage.getOfflineQueue());
  };

  // --- SYNC DATABASE VERSION ---
  const handleSyncDatabase = async () => {
    if (!effectiveOnline) {
      showToast('Perangkat luring: Menggunakan basis data lokal terinstal.');
      return;
    }

    try {
      const res = await fetch('/api/sync');
      if (res.ok) {
        const data = await res.json();
        const currentV = storage.getDbVersion();
        if (data.latestVersion > currentV) {
          storage.setDbVersion(data.latestVersion);
          setDbVersion(data.latestVersion);
          showToast(`Basis data diperbarui ke versi v${data.latestVersion}.0!`);
        } else {
          showToast('Basis data penyakit lokal Anda sudah versi terbaru (v' + currentV + '.0).');
        }
      }
    } catch {
      showToast('Sinkronisasi offline: Basis data lokal siap digunakan.');
    }
  };

  // --- ADMIN ACTIONS ---
  const handleAddOrUpdateDisease = (d: Disease) => {
    storage.addOrUpdateDisease(d);
    setDiseases(storage.getDiseases());
    setDbVersion(storage.getDbVersion());
    showToast(`Data penyakit ${d.nameIndo} berhasil disimpan.`);
  };

  const handleDeleteDisease = (id: string) => {
    storage.deleteDisease(id);
    setDiseases(storage.getDiseases());
    showToast('Penyakit berhasil dihapus dari basis data.');
  };

  const handleResetDiseases = () => {
    const fresh = storage.resetDefaultDiseases();
    setDiseases(fresh);
    setDbVersion(1);
    showToast('Basis data dikembalikan ke standar awal.');
  };

  const handleReleaseDbVersion = () => {
    const newV = dbVersion + 1;
    storage.setDbVersion(newV);
    setDbVersion(newV);

    const updateNotif: AppNotification = {
      id: `notif_${Date.now()}`,
      title: `Pembaruan Basis Data v${newV}.0 Dirilis`,
      message: 'Admin agronomis telah merilis pembaruan resep biopestisida dan patogen terbaru untuk semua petani.',
      type: 'update_db',
      timestamp: new Date().toISOString(),
      read: false,
      linkTab: 'catalog'
    };

    storage.addNotification(updateNotif);
    setNotifications(storage.getNotifications());
    showToast(`Pembaruan v${newV}.0 berhasil dirilis ke seluruh pengguna.`);
  };

  const handleBroadcastNotification = (notif: AppNotification) => {
    storage.addNotification(notif);
    setNotifications(storage.getNotifications());
    showToast('Siaran peringatan terkirim ke seluruh petani!');
  };

  // --- FORUM ACTIONS ---
  const handleAddForumPost = (post: ForumPost) => {
    storage.addForumPost(post);
    setForumPosts(storage.getForumPosts());
    showToast('Pertanyaan/tips Anda berhasil diposting di forum.');
  };

  const handleAddForumComment = (postId: string, comment: ForumComment) => {
    storage.addForumComment(postId, comment);
    setForumPosts(storage.getForumPosts());
  };

  const handleToggleLike = (postId: string) => {
    storage.toggleLikePost(postId);
    setForumPosts(storage.getForumPosts());
  };

  const handleVerifyPost = (postId: string, notes: string) => {
    storage.verifyPostByAgronomist(postId, notes);
    setForumPosts(storage.getForumPosts());
    showToast('Postingan telah diverifikasi resmi oleh Agronomis.');
  };

  return (
    <div className="min-h-screen bg-stone-100/70 text-stone-900 pb-20 md:pb-8 flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar
        isOnline={effectiveOnline}
        toggleSimulatedOffline={toggleSimulatedOffline}
        isSimulatedOffline={isSimulatedOffline}
        userRole={userRole}
        setUserRole={handleSetUserRole}
        notifications={notifications}
        onOpenNotifications={() => setShowNotificationModal(true)}
        onSyncDatabase={handleSyncDatabase}
        dbVersion={dbVersion}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-4 py-4 space-y-4">
        {/* Desktop Tab Selector (Hidden on mobile, bottom bar is used) */}
        <div className="hidden md:block">
          <TabNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            userRole={userRole}
            queueCount={offlineQueue.length}
          />
        </div>

        {/* View Routing */}
        {activeTab === 'diagnose' && (
          <DiagnoseSection
            isOnline={effectiveOnline}
            diseases={diseases}
            symptoms={symptoms}
            offlineQueue={offlineQueue}
            onAddToQueue={handleAddToQueue}
            onProcessQueueItem={handleProcessQueueItem}
            onSaveToHistory={handleSaveToHistory}
            onSelectDiseaseForDetail={(d) => setSelectedDiseaseForModal(d)}
          />
        )}

        {activeTab === 'catalog' && (
          <CatalogSection
            diseases={diseases}
            selectedDisease={selectedDiseaseForModal}
            onSelectDisease={setSelectedDiseaseForModal}
          />
        )}

        {activeTab === 'weather' && (
          <WeatherSection
            weather={weather}
            onRefreshWeather={handleFetchWeather}
            isLoadingWeather={isLoadingWeather}
          />
        )}

        {activeTab === 'forum' && (
          <ForumSection
            posts={forumPosts}
            userRole={userRole}
            onAddPost={handleAddForumPost}
            onAddComment={handleAddForumComment}
            onToggleLike={handleToggleLike}
            onVerifyPost={handleVerifyPost}
          />
        )}

        {activeTab === 'admin' && userRole === 'admin' && (
          <AdminSection
            diseases={diseases}
            onAddOrUpdateDisease={handleAddOrUpdateDisease}
            onDeleteDisease={handleDeleteDisease}
            onResetDiseases={handleResetDiseases}
            dbVersion={dbVersion}
            onReleaseDbVersion={handleReleaseDbVersion}
            onBroadcastNotification={handleBroadcastNotification}
            offlineQueueCount={offlineQueue.length}
          />
        )}

        {activeTab === 'history' && (
          <HistorySection
            history={diagnosisHistory}
            onClearHistory={() => {
              storage.clearHistory();
              setDiagnosisHistory([]);
              showToast('Riwayat diagnosa berhasil dibersihkan.');
            }}
          />
        )}
      </main>

      {/* Mobile Bottom Tab Navigation */}
      <div className="md:hidden">
        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userRole={userRole}
          queueCount={offlineQueue.length}
        />
      </div>

      {/* Notification Modal */}
      {showNotificationModal && (
        <NotificationModal
          notifications={notifications}
          onClose={() => setShowNotificationModal(false)}
          onMarkRead={(id) => {
            storage.markNotificationRead(id);
            setNotifications(storage.getNotifications());
          }}
          onMarkAllRead={() => {
            storage.markAllNotificationsRead();
            setNotifications(storage.getNotifications());
          }}
          onNavigateTab={(t) => setActiveTab(t)}
        />
      )}

      {/* Toast Notification Banner */}
      {syncToast && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-stone-900/95 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-2xl border border-stone-700 animate-in fade-in slide-in-from-top-2 flex items-center gap-2 max-w-[90vw] text-center">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-ping" />
          <span>{syncToast}</span>
        </div>
      )}
    </div>
  );
}
