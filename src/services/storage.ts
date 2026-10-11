import {
  Disease,
  Symptom,
  DiagnosisHistoryItem,
  OfflineQueueItem,
  ForumPost,
  ForumComment,
  AppNotification,
  UserRole
} from '../types';
import {
  INITIAL_DISEASES,
  INITIAL_SYMPTOMS,
  INITIAL_FORUM_POSTS,
  INITIAL_NOTIFICATIONS
} from '../data/initialData';

const STORAGE_KEYS = {
  DISEASES: 'agropakar_diseases_v1',
  SYMPTOMS: 'agropakar_symptoms_v1',
  HISTORY: 'agropakar_history_v1',
  OFFLINE_QUEUE: 'agropakar_offline_queue_v1',
  FORUM: 'agropakar_forum_v1',
  NOTIFICATIONS: 'agropakar_notifications_v1',
  DB_VERSION: 'agropakar_db_version',
  USER_ROLE: 'agropakar_current_role',
  ADMIN_AUTH: 'agropakar_admin_auth_session'
};

export const DEFAULT_ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin'
};

export const storage = {
  // --- ADMIN AUTH ---
  isAdminAuthenticated(): boolean {
    try {
      return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
    } catch {
      return false;
    }
  },

  setAdminAuthenticated(isAuth: boolean): void {
    try {
      if (isAuth) {
        localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      } else {
        localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },

  // --- DATABASE VERSION ---
  getDbVersion(): number {
    try {
      const v = localStorage.getItem(STORAGE_KEYS.DB_VERSION);
      return v ? parseInt(v, 10) : 1;
    } catch {
      return 1;
    }
  },

  setDbVersion(v: number): void {
    try {
      localStorage.setItem(STORAGE_KEYS.DB_VERSION, v.toString());
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },

  // --- ROLE ---
  getUserRole(): UserRole {
    try {
      const role = localStorage.getItem(STORAGE_KEYS.USER_ROLE);
      return (role as UserRole) || 'petani';
    } catch {
      return 'petani';
    }
  },

  setUserRole(role: UserRole): void {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_ROLE, role);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },

  // --- DISEASES ---
  getDiseases(): Disease[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.DISEASES);
      if (!data) {
        this.saveDiseases(INITIAL_DISEASES);
        return INITIAL_DISEASES;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_DISEASES;
    }
  },

  saveDiseases(diseases: Disease[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.DISEASES, JSON.stringify(diseases));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },

  addOrUpdateDisease(disease: Disease): void {
    const list = this.getDiseases();
    const index = list.findIndex((d) => d.id === disease.id);
    if (index >= 0) {
      list[index] = { ...disease, updatedAt: new Date().toISOString() };
    } else {
      list.unshift({ ...disease, updatedAt: new Date().toISOString() });
    }
    this.saveDiseases(list);
    // increment version
    const newVersion = this.getDbVersion() + 1;
    this.setDbVersion(newVersion);
  },

  deleteDisease(id: string): void {
    const list = this.getDiseases().filter((d) => d.id !== id);
    this.saveDiseases(list);
  },

  resetDefaultDiseases(): Disease[] {
    this.saveDiseases(INITIAL_DISEASES);
    this.saveSymptoms(INITIAL_SYMPTOMS);
    this.setDbVersion(1);
    return INITIAL_DISEASES;
  },

  // --- SYMPTOMS ---
  getSymptoms(): Symptom[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SYMPTOMS);
      if (!data) {
        this.saveSymptoms(INITIAL_SYMPTOMS);
        return INITIAL_SYMPTOMS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_SYMPTOMS;
    }
  },

  saveSymptoms(symptoms: Symptom[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SYMPTOMS, JSON.stringify(symptoms));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },

  // --- DIAGNOSIS HISTORY ---
  getHistory(): DiagnosisHistoryItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  addHistory(item: DiagnosisHistoryItem): void {
    try {
      const list = this.getHistory();
      list.unshift(item);
      // Keep up to 50 items
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(list.slice(0, 50)));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },

  clearHistory(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.HISTORY);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },

  // --- OFFLINE SYNC QUEUE ---
  getOfflineQueue(): OfflineQueueItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.OFFLINE_QUEUE);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveOfflineQueue(queue: OfflineQueueItem[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.OFFLINE_QUEUE, JSON.stringify(queue));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },

  addToOfflineQueue(item: OfflineQueueItem): void {
    const queue = this.getOfflineQueue();
    queue.unshift(item);
    this.saveOfflineQueue(queue);
  },

  updateQueueItem(id: string, updates: Partial<OfflineQueueItem>): void {
    const queue = this.getOfflineQueue().map((item) => {
      if (item.id === id) {
        return { ...item, ...updates };
      }
      return item;
    });
    this.saveOfflineQueue(queue);
  },

  removeQueueItem(id: string): void {
    const queue = this.getOfflineQueue().filter((item) => item.id !== id);
    this.saveOfflineQueue(queue);
  },

  // --- FORUM ---
  getForumPosts(): ForumPost[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FORUM);
      if (!data) {
        this.saveForumPosts(INITIAL_FORUM_POSTS);
        return INITIAL_FORUM_POSTS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_FORUM_POSTS;
    }
  },

  saveForumPosts(posts: ForumPost[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.FORUM, JSON.stringify(posts));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },

  addForumPost(post: ForumPost): void {
    const posts = this.getForumPosts();
    posts.unshift(post);
    this.saveForumPosts(posts);
  },

  addForumComment(postId: string, comment: ForumComment): void {
    const posts = this.getForumPosts().map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, comment]
        };
      }
      return post;
    });
    this.saveForumPosts(posts);
  },

  toggleLikePost(postId: string): void {
    const posts = this.getForumPosts().map((post) => {
      if (post.id === postId) {
        const currentlyLiked = post.likedByMe ?? false;
        return {
          ...post,
          likedByMe: !currentlyLiked,
          likes: currentlyLiked ? Math.max(0, post.likes - 1) : post.likes + 1
        };
      }
      return post;
    });
    this.saveForumPosts(posts);
  },

  verifyPostByAgronomist(postId: string, verifiedNotes: string): void {
    const posts = this.getForumPosts().map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          isVerifiedAgronomist: true,
          verifiedNotes
        };
      }
      return post;
    });
    this.saveForumPosts(posts);
  },

  // --- NOTIFICATIONS ---
  getNotifications(): AppNotification[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
      if (!data) {
        this.saveNotifications(INITIAL_NOTIFICATIONS);
        return INITIAL_NOTIFICATIONS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_NOTIFICATIONS;
    }
  },

  saveNotifications(notifs: AppNotification[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifs));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },

  addNotification(notif: AppNotification): void {
    const list = this.getNotifications();
    list.unshift(notif);
    this.saveNotifications(list);
  },

  markNotificationRead(id: string): void {
    const list = this.getNotifications().map((n) => (n.id === id ? { ...n, read: true } : n));
    this.saveNotifications(list);
  },

  markAllNotificationsRead(): void {
    const list = this.getNotifications().map((n) => ({ ...n, read: true }));
    this.saveNotifications(list);
  }
};
