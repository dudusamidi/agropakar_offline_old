# AgroPakar: Sistem Pakar Diagnosis Tanaman & Deteksi Hama Cerdas (Offline-First)

Sistem pakar diagnosis penyakit dan hama tanaman berbasis web-mobile progresif (PWA) yang dirancang khusus untuk petani di daerah dengan keterbatasan sinyal internet. Aplikasi ini memadukan mesin inferensi gejala berbasis aturan lokal (Certainty Factor & Pohon Keputusan) yang 100% bekerja offline dengan analisis citra bertenaga AI (Gemini Flash Vision) saat daring, panduan penanganan organik ramah lingkungan, forum diskusi petani real-time, notifikasi cuaca terakurat, serta portal manajemen data untuk Admin.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> Keputusan dan preferensi pengguna telah diintegrasikan ke dalam rencana arsitektur ini:

- **Cakupan Komoditas Multi-Sektor (Dikonfirmasi)**: Mencakup tanaman pangan (Padi, Jagung, Kedelai), hortikultura (Cabai, Tomat, Bawang), dan perkebunan (Kopi, Kakao, Kelapa Sawit).
- **Mekanisme Diagnosis Hibrida Offline-Online (Dikonfirmasi)**: Mesin diagnosis gejala pohon keputusan berbasis basis aturan lokal yang langsung memberikan hasil di lapangan tanpa internet, dilengkapi antrean foto inspeksi lokal (*Offline Sync Queue*) yang otomatis dianalisis oleh AI saat perangkat tersambung internet.
- **Desain Ramah Lapangan (Dikonfirmasi)**: Antarmuka mobile-first dengan tombol besar ramah sentuhan jempol sarung tangan lapangan (*thumb-zone navigation*), teks berbobot keterbacaan tinggi, kontras visual tajam di bawah sinar matahari langsung, dan langkah penanganan bergambar.
- **Standar Science Skills**: Penyakit dan hama diklasifikasikan dengan taksonomi ilmiah akurat (*Phytopathology scientific nomenclature*, misal: *Magnaporthe oryzae*, *Xanthomonas oryzae pv. oryzae*, *Colletotrichum capsici*, *Phytophthora infestans*, *Spodoptera frugiperda*) beserta bahan aktif alami ramah lingkungan (*bio-compounds* seperti Azadirachtin, *Trichoderma harzianum*, Eugenol).

---

## 1. Overview & Core Concept

### 1.1 Masalah & Solusi
Petani di pelosok sering kali terlambat mendeteksi serangan hama dan penyakit tanaman karena minimnya akses ke penyuluh pertanian lapangan (PPL) dan ketiadaan sinyal internet yang stabil. Penggunaan pestisida sintetis yang tidak tepat dosis juga merusak ekosistem tanah dan kesehatan tanaman.

**AgroPakar** memberikan solusi:
1. **100% Berfungsi Saat Offline**: Basis data gejala, foto referensi, dan racikan pestisida nabati disimpan di penyimpanan lokal peramban (IndexedDB / Local Cache).
2. **Kamera Deteksi Dini AI**: Petani dapat memotret bagian tanaman yang sakit (daun, batang, buah) untuk identifikasi instan dengan Gemini Vision. Bila offline, foto disimpan ke antrean dan dianalisis otomatis begitu tersambung sinyal.
3. **Solusi Ramah Lingkungan (*Eco-Friendly Solutions*)**: Formula pestisida nabati (mimba, bawang putih, tembakau), perangkap feromon, agen hayati antagonis (*Beauveria bassiana*, *Trichoderma*), dan sanitasi lahan terpadu.
4. **Dua Peran Pengguna (Role-Based Access Control)**:
   - **Petani / Pengguna Biasa**: Akses diagnosis gejala offline, kamera AI, panduan penanganan, forum diskusi petani, riwayat diagnosis, dan pemantauan cuaca mikro pertanian.
   - **Admin / Petugas Agronomi**: Manajemen katalog penyakit dan gejala (tambah/edit patogen, formula obat nabati), publikasi pembaruan database berkala, moderasi dan verifikasi forum petani (*verified agronomist badge*), serta pengiriman siaran peringatan dini cuaca/wabah hama.
5. **Forum Petani & Notifikasi Cuaca**: Ruang berbagi tips budidaya dengan penanda lokasi, status verifikasi pakar, dan sistem peringatan cuaca otomatis (kelembapan tinggi pemicu jamur, curah hujan ekstrem, hari penyemprotan optimal).

---

## 2. User Experience & Visual Design

### 2.1 Alur Pengguna Utama
1. **Deteksi Cepat di Lapangan (Petani)**:
   - Pilih jenis tanaman (Padi / Cabai / Jagung / Kopi / Sawit / dll).
   - *Mode Offline*: Pilih gejala yang teramati (bagian tanaman, warna bercak, pola busuk, serangga teramati) melalui panduan visual bergambar -> Sistem kalkulasi kepastian (*Certainty Factor*) -> Solusi ramah lingkungan keluar seketika.
   - *Mode Foto / AI*: Jepret daun sakit -> AI menganalisis bercak/hama, mendiagnosis patogen, tingkat keparahan, serta tindakan darurat.
2. **Katalog Penanganan & Racikan Pestisida Nabati**:
   - Resep pembuatan obat organik langkah demi langkah (takaran bahan, cara fermentasi/perebusan, waktu penyemprotan pagi/sore).
3. **Prakiraan Cuaca Pertanian & Notifikasi**:
   - Status cuaca harian dan rekomendasi aksi: "Kelembapan 92% berpotensi memicu Blas Padi, tunda pemupukan nitrogen berlebih".
4. **Forum Petani Gotong Royong**:
   - Unggah keluhan atau tips bertani, beri tanggapan, dan baca ulasan berlabel terverifikasi oleh Admin/Agronomis.
5. **Panel Admin & Sinkronisasi Data**:
   - Dashboard statistik penyakit populer, form kelola patogen tanaman baru, tombol rilis pembaruan data penyakit (*versioning*), dan manajemen siaran waspada.

### 2.2 Desain Visual & Tata Letak
- **Nuansa Warna**: *Agri-Emerald & Earthy Warmth*
  - Primer: Hijau Daun Alami (`#15803d` / `#166534`)
  - Aksen: Kuning Matahari Terbit (`#eab308` / `#ca8a04`) untuk peringatan & highlight
  - Latar Belakang: `#f8fafc` (Off-white bersih dan kontras tinggi di luar ruangan)
  - Kartu & Kontainer: `#ffffff` dengan border tegas `border-emerald-100/200`
- **Tipografi**: Sans-serif bersih dengan ukuran minimum 16px untuk kemudahan membaca di bawah sinar matahari; font monospace untuk taksonomi ilmiah.
- **Komponen Khusus Lapangan**:
  - Floating Action Button (FAB) besar untuk Kamera Diagnosis.
  - Indikator Status Konektivitas (Pita Hijau "Mode Online" / Pita Kuning "Mode Offline Aktif - Basis Data Tersedia").
  - Tombol aksi dengan tinggi sentuh minimal 48px.

---

## 3. Key Product Decisions & Trade-Offs

### 3.1 Basis Data Offline vs Online
- **Pilihan**: Arsitektur *Local-First* menggunakan IndexedDB & Web Storage dengan seed dataset komprehensif bawaan (30+ penyakit utama komoditas terpilih lengkap dengan taksonomi ilmiah dan formula organik).
- **Alasan**: Petani di pelosok tidak boleh terhalang saat membutuhkan pertolongan pertama di lahan sawah/kebun tanpa sinyal.
- **Sinkronisasi**: Admin dapat merilis pembaruan data yang otomatis diunduh dan disimpan ke IndexedDB lokal saat perangkat online.

### 3.2 Dual Engine: Mesin Inferensi Gejala + AI Vision
- **Pilihan**:
  1. *Mesin Gejala Offline*: Forward-Chaining dengan Certainty Factor (CF) berdasarkan gejala teramati.
  2. *Vision AI*: Google Gemini 3.8 Flash multimodal API untuk analisis visual instan saat online, dilengkapi fallback offline queue.
- **Alasan**: Memberikan kepastian diagnostik dalam kondisi apapun.

### 3.3 Penanganan Ramah Lingkungan
- **Pilihan**: Menekankan Pengendalian Hama Terpadu (PHT / Integrated Pest Management), agen hayati (*Trichoderma*, *Bacillus thuringiensis*), dan pestisida nabati (neem oil, ekstraksi daun sirsak/papaya/mimba) dengan takaran ilmiah yang aman bagi tanah.

---

## 4. Technical Architecture & Data Strategy

### 4.1 Diagram Sistem & Aliran Data

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       AgroPakar Client (Mobile-First)                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  Top Bar: Indikator Offline/Online & Switch Peran (Petani / Admin Agronomi) │
├────────────────────────┬──────────────────────────┬─────────────────────────┤
│    Diagnosa Offline    │     Kamera AI Daring     │     Forum & Cuaca       │
│  - Pohon Gejala        │  - Gemini Vision API     │  - Tanya Petani         │
│  - Certainty Factor    │  - Deteksi Bercak/Hama   │  - Solusi Ahli          │
│  - Hasil Seketika      │  - Antrean Sinkronisasi  │  - Peringatan Dini      │
├────────────────────────┴──────────────────────────┴─────────────────────────┤
│                   Mesin Penyimpanan Lokal (IndexedDB / Cache)                │
│  - Data Penyakit & Hama (Nama Latin, Taksonomi, Formula Ramah Lingkungan)    │
│  - Riwayat Diagnosa Petani                                                  │
│  - Antrean Postingan & Foto Offline                                         │
│  - Pengaturan & Peringatan Cuaca Lokal                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                      Backend Proxy & Cloud Service API                      │
│  - /api/diagnose-image  --> Gemini 3.8 Flash Vision                         │
│  - /api/weather         --> Prakiraan Cuaca Pertanian BMKG / Agrometeorology│
│  - /api/sync-diseases   --> Distribusi Pembaruan Data dari Admin             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Struktur Data Inti
- `Disease`: `id`, `cropType`, `nameIndo`, `scientificName`, `pathogenType` (*fungi/bacteria/virus/pest*), `symptoms` (array ID gejala), `severity`, `images`, `ecoSolutions` (langkah pembuatan biopestisida & pengendalian hayati), `chemicalDisclaimer`, `updatedAt`, `version`.
- `Symptom`: `id`, `code`, `cropType`, `plantPart` (*daun, batang, akar, buah*), `description`, `iconOrThumbnail`, `weight`.
- `DiagnosisHistory`: `id`, `timestamp`, `cropType`, `matchedDiseaseId`, `confidenceScore`, `method` (*offline_rule* / *ai_vision*), `notes`, `photoUrl`.
- `ForumPost`: `id`, `authorName`, `authorRole` (*petani* / *admin_agronomis*), `crop`, `title`, `content`, `imageUrl`, `isVerified`, `createdAt`, `comments`.
- `WeatherAlert`: `location`, `temperature`, `humidity`, `rainProbability`, `riskAssessment` (misal risiko jamur embun tepung tinggi karena RH > 85%).

---

## 5. Implementation Phases (Tahap Eksekusi)

1. **Inisialisasi Proyek & Branding**:
   - Konfigurasi `metadata.json` (AgroPakar) dan `index.html`.
   - Setup state management lokal (IndexedDB helper & sinkronisasi status jaringan `navigator.onLine`).
2. **Basis Data Penyakit & Taksonomi Ilmiah (Science Skills)**:
   - Modul database penyakit terlengkap untuk Padi, Jagung, Cabai, Tomat, Kopi, Kakao, Sawit.
   - Taksonomi patogen lengkap dan formulasi pestisida nabati terstandar agroteknologi.
3. **Mesin Inferensi Gejala Offline (Expert System Engine)**:
   - Algoritma perhitungan kepastian berbasis pemilihan gejala bertingkat per bagian tanaman.
   - Hasil diagnosa visual dengan rekomendasi ramah lingkungan.
4. **Deteksi Citra AI (Gemini Vision) & Offline Queue**:
   - Integrasi kamera ponsel / upload foto dengan `/api/diagnose-image` (Gemini 3.8 Flash).
   - Mekanisme antrean foto saat offline dengan auto-process saat online kembali.
5. **Fitur Pendukung (Cuaca Pertanian, Forum Gotong Royong, Notifikasi)**:
   - Panel cuaca dengan indikator resiko agronomis (kelembaban & suhu).
   - Forum diskusi interaktif dengan label verifikasi pakar dan filter komoditas.
6. **Portal Khusus Admin**:
   - Manajemen data penyakit (CRUD), rilis versi data baru, moderasi forum, dan broadcast peringatan hama darurat.
7. **Pengujian Build & Verifikasi Akhir**:
   - `compile_applet` dan pemastian seluruh fungsionalitas berjalan lancar tanpa error.
