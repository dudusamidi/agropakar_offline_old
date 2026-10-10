import React, { useState } from 'react';
import { 
  MessageSquare, 
  Heart, 
  Send, 
  ShieldCheck, 
  MapPin, 
  PlusCircle, 
  User, 
  Image as ImageIcon,
  CheckCircle,
  X
} from 'lucide-react';
import { ForumPost, ForumComment, UserRole, CropType } from '../types';

interface ForumSectionProps {
  posts: ForumPost[];
  userRole: UserRole;
  onAddPost: (post: ForumPost) => void;
  onAddComment: (postId: string, comment: ForumComment) => void;
  onToggleLike: (postId: string) => void;
  onVerifyPost: (postId: string, notes: string) => void;
}

export const ForumSection: React.FC<ForumSectionProps> = ({
  posts,
  userRole,
  onAddPost,
  onAddComment,
  onToggleLike,
  onVerifyPost
}) => {
  const [selectedCrop, setSelectedCrop] = useState<CropType | 'all'>('all');
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState<string>('');

  // New post form state
  const [authorName, setAuthorName] = useState<string>('');
  const [authorVillage, setAuthorVillage] = useState<string>('');
  const [postCrop, setPostCrop] = useState<CropType>('padi');
  const [postTitle, setPostTitle] = useState<string>('');
  const [postContent, setPostContent] = useState<string>('');
  const [postImage, setPostImage] = useState<string>('');

  // Admin verification state
  const [verifyingPostId, setVerifyingPostId] = useState<string | null>(null);
  const [verifyNotes, setVerifyNotes] = useState<string>('');

  const filteredPosts = posts.filter((p) =>
    selectedCrop === 'all' ? true : p.crop === selectedCrop
  );

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle || !postContent) return;

    const newPost: ForumPost = {
      id: `post_${Date.now()}`,
      authorName: authorName.trim() || (userRole === 'admin' ? 'Agronomis AgroPakar' : 'Petani Berdaya'),
      authorVillage: authorVillage.trim() || 'Desa Tani Nusantara',
      role: userRole,
      crop: postCrop,
      title: postTitle,
      content: postContent,
      imageUrl: postImage.trim() || undefined,
      likes: 0,
      likedByMe: false,
      comments: [],
      isVerifiedAgronomist: userRole === 'admin',
      verifiedNotes: userRole === 'admin' ? 'Diverifikasi langsung oleh Tim Agronomis' : undefined,
      createdAt: new Date().toISOString()
    };

    onAddPost(newPost);
    setShowCreateModal(false);
    setPostTitle('');
    setPostContent('');
    setPostImage('');
  };

  const handleSendComment = (postId: string) => {
    if (!commentText.trim()) return;

    const newComment: ForumComment = {
      id: `c_${Date.now()}`,
      authorName: userRole === 'admin' ? 'Agronomis AgroPakar' : 'Petani Komunitas',
      role: userRole,
      content: commentText.trim(),
      timestamp: new Date().toISOString()
    };

    onAddComment(postId, newComment);
    setCommentText('');
  };

  const handleConfirmVerification = (postId: string) => {
    if (!verifyNotes.trim()) return;
    onVerifyPost(postId, verifyNotes);
    setVerifyingPostId(null);
    setVerifyNotes('');
  };

  return (
    <div className="space-y-4">
      {/* Header Info */}
      <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-sm shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-stone-900 text-base">
              Forum Petani Gotong Royong
            </h3>
            <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
              Tanyakan keluhan tanaman Anda dan bagikan tips bertani organik. Jawaban praktis yang telah diuji dapat diverifikasi oleh Agronomis.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shrink-0 active:scale-95 transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Tanya / Bagikan Tips</span>
          <span className="sm:hidden">Tanya</span>
        </button>
      </div>

      {/* Filter by Crop */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {[
          { id: 'all', label: 'Semua Komoditas' },
          { id: 'padi', label: '🌾 Padi' },
          { id: 'cabai', label: '🌶️ Cabai' },
          { id: 'jagung', label: '🌽 Jagung' },
          { id: 'tomat', label: '🍅 Tomat' },
          { id: 'bawang', label: '🧅 Bawang' },
          { id: 'kopi', label: '☕ Kopi' },
          { id: 'kakao', label: '🍫 Kakao' },
          { id: 'sawit', label: '🌴 Sawit' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedCrop(item.id as any)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCrop === item.id
                ? 'bg-stone-900 text-white font-bold'
                : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Posts Feed */}
      <div className="space-y-3.5">
        {filteredPosts.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-xs text-stone-500">
            Belum ada diskusi untuk komoditas ini. Jadilah yang pertama bertanya!
          </div>
        ) : (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-sm space-y-3"
            >
              {/* Author & Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 font-bold text-xs shrink-0">
                    {post.authorName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold text-sm text-stone-900">
                        {post.authorName}
                      </span>
                      {post.role === 'admin' ? (
                        <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-extrabold px-1.5 py-0.2 rounded">
                          Ahli Agronomi
                        </span>
                      ) : (
                        <span className="bg-stone-100 text-stone-600 text-[10px] font-medium px-1.5 py-0.2 rounded">
                          Petani
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-stone-500">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      <span>{post.authorVillage}</span>
                      <span>•</span>
                      <span>{new Date(post.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
                    </div>
                  </div>
                </div>

                <span className="text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-lg uppercase">
                  {post.crop}
                </span>
              </div>

              {/* Title & Content */}
              <div>
                <h4 className="font-extrabold text-base text-stone-900 leading-snug">
                  {post.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mt-1">
                  {post.content}
                </p>
              </div>

              {/* Image attachment if any */}
              {post.imageUrl && (
                <div className="rounded-xl overflow-hidden max-h-64 border border-stone-200 bg-stone-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Agronomist Verification Badge */}
              {post.isVerifiedAgronomist && (
                <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-emerald-900 block">
                      Telah Diverifikasi oleh Pakar Agronomi AgroPakar
                    </span>
                    <p className="text-emerald-800 text-[11px] mt-0.5 leading-relaxed">
                      {post.verifiedNotes || 'Metode pengendalian ramah lingkungan ini telah sesuai dengan kaidah Pengendalian Hama Terpadu (PHT).'}
                    </p>
                  </div>
                </div>
              )}

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-1 border-t border-stone-100 text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onToggleLike(post.id)}
                    className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg font-bold transition-all ${
                      post.likedByMe
                        ? 'text-rose-600 bg-rose-50'
                        : 'text-stone-500 hover:text-rose-600 hover:bg-stone-50'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${post.likedByMe ? 'fill-rose-600' : ''}`} />
                    <span>{post.likes} Suka</span>
                  </button>

                  <button
                    onClick={() =>
                      setActiveCommentPostId(
                        activeCommentPostId === post.id ? null : post.id
                      )
                    }
                    className="flex items-center gap-1.5 py-1 px-2.5 rounded-lg text-stone-500 hover:text-stone-800 font-bold transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments.length} Tanggapan</span>
                  </button>
                </div>

                {/* Admin Verification Trigger */}
                {userRole === 'admin' && !post.isVerifiedAgronomist && (
                  <button
                    onClick={() => setVerifyingPostId(post.id)}
                    className="text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200 transition-colors"
                  >
                    + Verifikasi Solusi
                  </button>
                )}
              </div>

              {/* Admin Verification Input Box */}
              {verifyingPostId === post.id && (
                <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl space-y-2 text-xs">
                  <span className="font-bold text-amber-950 block">
                    Tambahkan Catatan Verifikasi Ahli:
                  </span>
                  <input
                    type="text"
                    value={verifyNotes}
                    onChange={(e) => setVerifyNotes(e.target.value)}
                    placeholder="Contoh: Takaran mimba terkonfirmasi aman untuk cabai fase pembuahan..."
                    className="w-full p-2 rounded-lg border border-amber-300 text-xs bg-white"
                  />
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setVerifyingPostId(null)}
                      className="px-2.5 py-1 text-stone-600 font-bold"
                    >
                      Batal
                    </button>
                    <button
                      onClick={() => handleConfirmVerification(post.id)}
                      className="px-3 py-1 bg-emerald-700 text-white rounded-lg font-bold"
                    >
                      Simpan Verifikasi
                    </button>
                  </div>
                </div>
              )}

              {/* Comments Section */}
              {activeCommentPostId === post.id && (
                <div className="pt-2 border-t border-stone-100 space-y-2.5">
                  {post.comments.length > 0 && (
                    <div className="space-y-2 pl-2 border-l-2 border-stone-200">
                      {post.comments.map((c) => (
                        <div key={c.id} className="text-xs bg-stone-50 p-2.5 rounded-xl space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-stone-800 flex items-center gap-1">
                              {c.authorName}
                              {c.role === 'admin' && (
                                <span className="text-[9px] bg-amber-100 text-amber-900 px-1 rounded font-extrabold">
                                  Pakar
                                </span>
                              )}
                            </span>
                            <span className="text-[10px] text-stone-400">
                              {new Date(c.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                          <p className="text-stone-700 leading-relaxed">{c.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add Comment Input */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendComment(post.id)}
                      placeholder="Tulis tanggapan atau saran Anda..."
                      className="flex-1 p-2.5 rounded-xl border border-stone-300 text-xs bg-stone-50 focus:ring-2 focus:ring-emerald-500"
                    />
                    <button
                      onClick={() => handleSendComment(post.id)}
                      className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                      title="Kirim Komentar"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4">
            <div className="px-5 py-4 border-b border-stone-200 flex items-center justify-between">
              <h3 className="font-extrabold text-stone-900 text-base">
                Buat Postingan Diskusi Petani
              </h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-1 rounded-full text-stone-400 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="p-5 space-y-3.5">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-stone-500 uppercase block mb-1">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Contoh: Pak Sukardi"
                    className="w-full p-2.5 rounded-xl border border-stone-300 text-xs bg-stone-50"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-stone-500 uppercase block mb-1">
                    Desa / Daerah
                  </label>
                  <input
                    type="text"
                    value={authorVillage}
                    onChange={(e) => setAuthorVillage(e.target.value)}
                    placeholder="Contoh: Rogojampi, Banyuwangi"
                    className="w-full p-2.5 rounded-xl border border-stone-300 text-xs bg-stone-50"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-stone-500 uppercase block mb-1">
                  Komoditas Tanaman
                </label>
                <select
                  value={postCrop}
                  onChange={(e) => setPostCrop(e.target.value as CropType)}
                  className="w-full p-2.5 rounded-xl border border-stone-300 text-xs bg-stone-50 font-bold"
                >
                  <option value="padi">🌾 Padi</option>
                  <option value="cabai">🌶️ Cabai</option>
                  <option value="jagung">🌽 Jagung</option>
                  <option value="tomat">🍅 Tomat</option>
                  <option value="bawang">🧅 Bawang</option>
                  <option value="kopi">☕ Kopi</option>
                  <option value="kakao">🍫 Kakao</option>
                  <option value="sawit">🌴 Sawit</option>
                  <option value="kedelai">🫘 Kedelai</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-stone-500 uppercase block mb-1">
                  Judul Keluhan / Tips
                </label>
                <input
                  type="text"
                  required
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="Contoh: Daun cabai rontok setelah disemprot, apa solusinya?"
                  className="w-full p-2.5 rounded-xl border border-stone-300 text-xs bg-stone-50 font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-stone-500 uppercase block mb-1">
                  Rincian Pertanyaan / Pengalaman
                </label>
                <textarea
                  required
                  rows={4}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Jelaskan kondisi tanaman, cuaca sekitar, atau takaran ramuan yang sudah dicoba..."
                  className="w-full p-2.5 rounded-xl border border-stone-300 text-xs bg-stone-50"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-stone-500 uppercase block mb-1">
                  URL Foto Tanaman (Opsional)
                </label>
                <input
                  type="url"
                  value={postImage}
                  onChange={(e) => setPostImage(e.target.value)}
                  placeholder="https://..."
                  className="w-full p-2.5 rounded-xl border border-stone-300 text-xs bg-stone-50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
                >
                  Publikasikan Diskusi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
