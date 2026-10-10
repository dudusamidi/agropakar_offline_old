import React, { useState, useRef } from 'react';
import { 
  Camera, 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  WifiOff, 
  Leaf, 
  FlaskConical, 
  Clock, 
  RotateCcw,
  BookOpen,
  Send,
  HelpCircle,
  ShieldCheck,
  Check
} from 'lucide-react';
import { 
  CropType, 
  PlantPart, 
  Disease, 
  Symptom, 
  DiagnosisResult, 
  OfflineQueueItem 
} from '../types';
import { runExpertDiagnosis } from '../services/inferenceEngine';

interface DiagnoseSectionProps {
  isOnline: boolean;
  diseases: Disease[];
  symptoms: Symptom[];
  offlineQueue: OfflineQueueItem[];
  onAddToQueue: (item: OfflineQueueItem) => void;
  onProcessQueueItem: (id: string) => Promise<void>;
  onSaveToHistory: (result: DiagnosisResult, photo?: string, notes?: string) => void;
  onSelectDiseaseForDetail: (disease: Disease) => void;
}

export const DiagnoseSection: React.FC<DiagnoseSectionProps> = ({
  isOnline,
  diseases,
  symptoms,
  offlineQueue,
  onAddToQueue,
  onProcessQueueItem,
  onSaveToHistory,
  onSelectDiseaseForDetail
}) => {
  const [activeMode, setActiveMode] = useState<'symptom_rules' | 'ai_camera'>('symptom_rules');

  // --- SYMPTOM RULES STATE ---
  const [selectedCrop, setSelectedCrop] = useState<CropType>('padi');
  const [filterPart, setFilterPart] = useState<PlantPart | 'semua'>('semua');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [ruleResults, setRuleResults] = useState<DiagnosisResult[] | null>(null);

  // --- CAMERA / AI STATE ---
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [cameraCrop, setCameraCrop] = useState<CropType>('padi');
  const [farmerNotes, setFarmerNotes] = useState<string>('');
  const [isScanningAi, setIsScanningAi] = useState<boolean>(false);
  const [aiResult, setAiResult] = useState<any | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Crops list with display info
  const cropList: { id: CropType; name: string; emoji: string }[] = [
    { id: 'padi', name: 'Padi', emoji: '🌾' },
    { id: 'cabai', name: 'Cabai', emoji: '🌶️' },
    { id: 'jagung', name: 'Jagung', emoji: '🌽' },
    { id: 'tomat', name: 'Tomat', emoji: '🍅' },
    { id: 'bawang', name: 'Bawang', emoji: '🧅' },
    { id: 'kopi', name: 'Kopi', emoji: '☕' },
    { id: 'kakao', name: 'Kakao', emoji: '🍫' },
    { id: 'sawit', name: 'Kelapa Sawit', emoji: '🌴' },
    { id: 'kedelai', name: 'Kedelai', emoji: '🫘' }
  ];

  // Filter symptoms based on crop & part
  const filteredSymptoms = symptoms.filter((s) => {
    const matchCrop = s.cropType === selectedCrop || s.cropType === 'all';
    const matchPart = filterPart === 'semua' || s.plantPart === filterPart;
    return matchCrop && matchPart;
  });

  const toggleSymptom = (symId: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symId) ? prev.filter((id) => id !== symId) : [...prev, symId]
    );
  };

  const handleRunDiagnosis = () => {
    if (selectedSymptoms.length === 0) return;
    const res = runExpertDiagnosis(selectedSymptoms, selectedCrop, diseases, symptoms as Symptom[]);
    setRuleResults(res);
  };

  const handleResetDiagnosis = () => {
    setSelectedSymptoms([]);
    setRuleResults(null);
  };

  // --- IMAGE UPLOAD / CAMERA HANDLER ---
  const handleImageCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCameraError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setCameraError('File harus berupa foto/gambar.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setCapturedImage(reader.result as string);
      setAiResult(null);
    };
    reader.readAsDataURL(file);
  };

  // --- ONLINE AI DIAGNOSIS ---
  const handleAnalyzeWithAi = async () => {
    if (!capturedImage) return;

    setIsScanningAi(true);
    setCameraError(null);

    try {
      const response = await fetch('/api/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: capturedImage,
          cropType: cameraCrop,
          notes: farmerNotes
        })
      });

      if (!response.ok) {
        throw new Error(`Server status ${response.status}`);
      }

      const data = await response.json();
      setAiResult(data);

      // Save to history automatically
      onSaveToHistory(
        {
          disease: {
            id: `ai_${Date.now()}`,
            cropType: cameraCrop,
            nameIndo: data.diseaseName || 'Penyakit Teridentifikasi AI',
            scientificName: data.scientificName || 'Patogen Spesifik',
            pathogenType: (data.pathogenType as any) || 'jamur',
            symptoms: [],
            symptomSummary: data.symptomsObserved?.join(', ') || '',
            affectedParts: ['daun'],
            severityLevel: (data.severity as any) || 'sedang',
            ecoFriendlyTreatments: data.ecoFriendlyTreatments || [],
            scientificReference: {
              journalOrDb: 'Gemini Multimodal Phytopathology Diagnostic Engine',
              summary: data.scientificContext || ''
            },
            sampleImage: capturedImage,
            certaintyFactorBase: 0.9,
            updatedAt: new Date().toISOString(),
            version: 1
          },
          certaintyFactor: data.confidencePercent || 85,
          matchedSymptoms: [],
          method: 'ai_vision',
          confidenceText: `${data.confidencePercent}% Keyakinan Visual AI`,
          aiObservationNotes: data.symptomsObserved?.join('. ')
        },
        capturedImage,
        farmerNotes
      );
    } catch (err: any) {
      console.error('AI diagnosis error:', err);
      setCameraError(
        'Gagal menghubungi server AI. Anda dapat menyimpan foto ke Antrean Offline untuk diproses nanti.'
      );
    } finally {
      setIsScanningAi(false);
    }
  };

  // --- SAVE TO OFFLINE QUEUE ---
  const handleSaveToOfflineQueue = () => {
    if (!capturedImage) return;

    const queueItem: OfflineQueueItem = {
      id: `queue_${Date.now()}`,
      timestamp: new Date().toISOString(),
      cropType: cameraCrop,
      photoBase64: capturedImage,
      notes: farmerNotes || 'Foto inspeksi daun di lapangan',
      status: 'queued'
    };

    onAddToQueue(queueItem);
    setCapturedImage(null);
    setFarmerNotes('');
    alert('Foto berhasil disimpan ke Antrean Luring! Akan otomatis dianalisis saat tersambung internet.');
  };

  return (
    <div className="space-y-4">
      {/* Mode Switcher Tabs */}
      <div className="bg-white p-1.5 rounded-2xl border border-stone-200 shadow-sm flex gap-1">
        <button
          onClick={() => setActiveMode('symptom_rules')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeMode === 'symptom_rules'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Leaf className="w-4 h-4 text-emerald-300" />
          <span>Pohon Gejala (100% Offline)</span>
        </button>

        <button
          onClick={() => setActiveMode('ai_camera')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeMode === 'ai_camera'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Camera className="w-4 h-4 text-emerald-300" />
          <span>Kamera Deteksi AI</span>
          {offlineQueue.length > 0 && (
            <span className="bg-amber-400 text-stone-900 font-extrabold text-[10px] px-1.5 py-0.2 rounded-full">
              {offlineQueue.length}
            </span>
          )}
        </button>
      </div>

      {/* ============================================================== */}
      {/* MODE 1: POHON GEJALA LAPANGAN (100% OFFLINE EXPERT SYSTEM)     */}
      {/* ============================================================== */}
      {activeMode === 'symptom_rules' && (
        <div className="space-y-4">
          {/* Header Guide */}
          <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-sm shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-stone-900 text-base">
                  Diagnosis Gejala Lapangan (Bebas Internet)
                </h3>
                <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                  Pilih komoditas dan centang tanda-tanda kerusakan pada tanaman Anda. Mesin inferensi sistem pakar akan menghitung persentase kepastian patogen dan memberikan solusi ramah lingkungan secara instan.
                </p>
              </div>
            </div>
          </div>

          {/* Step 1: Pilih Komoditas Tanaman */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-2.5">
            <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
              Langkah 1: Pilih Jenis Tanaman
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {cropList.map((crop) => (
                <button
                  key={crop.id}
                  onClick={() => {
                    setSelectedCrop(crop.id);
                    setSelectedSymptoms([]);
                    setRuleResults(null);
                  }}
                  className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                    selectedCrop === crop.id
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow font-bold ring-2 ring-emerald-300'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100 font-medium'
                  }`}
                >
                  <span className="text-xl">{crop.emoji}</span>
                  <span className="text-xs truncate max-w-full">{crop.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Filter Bagian Tanaman */}
          <div className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
            <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
              Langkah 2: Bagian Tanaman yang Sakit
            </label>
            <div className="flex flex-wrap gap-1.5">
              {(['semua', 'daun', 'batang', 'buah', 'akar', 'bulir'] as (PlantPart | 'semua')[]).map((part) => (
                <button
                  key={part}
                  onClick={() => setFilterPart(part)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    filterPart === part
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Pilih Gejala */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Langkah 3: Centang Gejala yang Anda Lihat ({selectedSymptoms.length} Terpilih)
              </label>
              {selectedSymptoms.length > 0 && (
                <button
                  onClick={handleResetDiagnosis}
                  className="text-xs text-rose-600 font-bold hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>

            {filteredSymptoms.length === 0 ? (
              <div className="p-6 text-center text-stone-500 text-xs bg-stone-50 rounded-xl">
                Tidak ada data gejala pada bagian tanaman ini. Coba pilih bagian tanaman lain.
              </div>
            ) : (
              <div className="space-y-2">
                {filteredSymptoms.map((sym) => {
                  const isChecked = selectedSymptoms.includes(sym.id);
                  return (
                    <div
                      key={sym.id}
                      onClick={() => toggleSymptom(sym.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        isChecked
                          ? 'bg-emerald-50/90 border-emerald-400 ring-1 ring-emerald-400 text-stone-900'
                          : 'bg-stone-50/70 border-stone-200 hover:bg-stone-100 text-stone-700'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                          isChecked
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'border-stone-300 bg-white text-transparent'
                        }`}
                      >
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                            {sym.code}
                          </span>
                          <span className="text-xs font-bold text-stone-500 uppercase">
                            Bagian: {sym.plantPart}
                          </span>
                        </div>
                        <h4 className="font-bold text-sm text-stone-900 mt-1 leading-snug">
                          {sym.title}
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          {sym.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Diagnosis Button */}
            <div className="pt-2">
              <button
                disabled={selectedSymptoms.length === 0}
                onClick={handleRunDiagnosis}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                  selectedSymptoms.length > 0
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white active:scale-[0.99]'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Hitung Diagnosis Pakar Lapangan ({selectedSymptoms.length} Gejala)</span>
              </button>
            </div>
          </div>

          {/* Results Section */}
          {ruleResults && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-stone-900 text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Hasil Analisis Pakar ({ruleResults.length} Penyakit Terdeteksi)</span>
                </h3>
              </div>

              {ruleResults.length === 0 ? (
                <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
                  <HelpCircle className="w-10 h-10 text-stone-400 mx-auto" />
                  <h4 className="font-bold text-stone-800 text-sm">
                    Kombinasi Gejala Belum Cocok
                  </h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto">
                    Kombinasi gejala yang Anda pilih belum cocok dengan patogen utama {selectedCrop}. Silakan periksa kembali bagian tanaman atau gunakan fitur Kamera Deteksi AI.
                  </p>
                </div>
              ) : (
                ruleResults.map((result, idx) => (
                  <div
                    key={result.disease.id}
                    className={`bg-white rounded-2xl border p-4 sm:p-5 shadow-sm space-y-4 ${
                      idx === 0
                        ? 'border-emerald-300 ring-2 ring-emerald-100'
                        : 'border-stone-200'
                    }`}
                  >
                    {/* Top Tag & Certainty */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {idx === 0 && (
                          <span className="inline-block text-[11px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-0.5 rounded-full mb-1">
                            Kemungkinan Paling Kuat
                          </span>
                        )}
                        <h4 className="font-extrabold text-lg text-stone-900 leading-tight">
                          {result.disease.nameIndo}
                        </h4>
                        <p className="text-xs font-mono font-semibold text-emerald-700 italic mt-0.5">
                          Patogen Ilmiah: {result.disease.scientificName}
                        </p>
                      </div>

                      {/* Score Badge */}
                      <div className="text-right shrink-0">
                        <div className="text-2xl font-black text-emerald-700 leading-none">
                          {result.certaintyFactor}%
                        </div>
                        <span className="text-[10px] font-bold text-stone-500 uppercase">
                          Kepastian (CF)
                        </span>
                      </div>
                    </div>

                    {/* Pathogen Type & Severity Pill */}
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-stone-100 text-stone-800 font-bold px-2.5 py-1 rounded-lg">
                        Tipe: {result.disease.pathogenType.toUpperCase()}
                      </span>
                      <span
                        className={`font-bold px-2.5 py-1 rounded-lg ${
                          result.disease.severityLevel === 'kritis'
                            ? 'bg-rose-100 text-rose-800'
                            : result.disease.severityLevel === 'parah'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        Tingkat Keparahan: {result.disease.severityLevel.toUpperCase()}
                      </span>
                    </div>

                    {/* Matched Symptoms */}
                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/80">
                      <span className="text-xs font-bold text-stone-700 block mb-1">
                        Gejala Kunci yang Cocok:
                      </span>
                      <ul className="text-xs text-stone-600 space-y-1">
                        {result.matchedSymptoms.map((ms) => (
                          <li key={ms.id} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <span>
                              <strong>{ms.code}</strong>: {ms.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Practical Eco-Friendly Treatments */}
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center gap-2">
                        <FlaskConical className="w-4 h-4 text-emerald-700" />
                        <h5 className="font-extrabold text-sm text-stone-900">
                          Panduan Solusi Ramah Lingkungan (Organik / Hayati):
                        </h5>
                      </div>

                      <div className="space-y-2.5">
                        {result.disease.ecoFriendlyTreatments.map((tr, tIdx) => (
                          <div
                            key={tIdx}
                            className="bg-emerald-50/70 border border-emerald-200 p-3.5 rounded-xl space-y-2"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-bold text-xs text-emerald-900">
                                {tr.title}
                              </span>
                              <span className="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded uppercase">
                                {tr.category.replace('_', ' ')}
                              </span>
                            </div>

                            <div className="text-[11px] text-emerald-800 font-mono bg-white/80 p-2 rounded border border-emerald-200/60">
                              <strong>Bahan Aktif Alami:</strong> {tr.activeBioCompound}
                            </div>

                            {tr.ingredients && tr.ingredients.length > 0 && (
                              <div>
                                <span className="text-[11px] font-bold text-stone-700 block">
                                  Bahan Baku (Tersedia di Desa):
                                </span>
                                <ul className="text-xs text-stone-600 list-disc list-inside">
                                  {tr.ingredients.map((ing, iIdx) => (
                                    <li key={iIdx}>{ing}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div>
                              <span className="text-[11px] font-bold text-stone-700 block">
                                Cara Racik & Aplikasi:
                              </span>
                              <ol className="text-xs text-stone-600 list-decimal list-inside space-y-0.5">
                                {tr.instructions.map((ins, iIdx) => (
                                  <li key={iIdx}>{ins}</li>
                                ))}
                              </ol>
                            </div>

                            <div className="flex items-center gap-1.5 text-xs text-emerald-900 font-medium pt-1">
                              <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                              <span>{tr.applicationTiming}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Scientific Reference Accordion */}
                    <div className="bg-stone-50 border border-stone-200 p-3 rounded-xl text-xs space-y-1">
                      <div className="flex items-center gap-1.5 text-stone-700 font-bold">
                        <BookOpen className="w-3.5 h-3.5 text-stone-500" />
                        <span>Kutipan Fitopatologi Ilmiah (Science):</span>
                      </div>
                      <p className="text-stone-600 text-[11px] italic">
                        {result.disease.scientificReference.summary}
                      </p>
                      <span className="text-[10px] text-stone-400 block font-mono">
                        Sumber: {result.disease.scientificReference.journalOrDb}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => onSaveToHistory(result)}
                        className="flex-1 py-2 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Simpan ke Riwayat Tani</span>
                      </button>

                      <button
                        onClick={() => onSelectDiseaseForDetail(result.disease)}
                        className="py-2 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-all"
                      >
                        Detail Lengkap
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* MODE 2: KAMERA DETEKSI AI (GEMINI VISION & OFFLINE QUEUE)       */}
      {/* ============================================================== */}
      {activeMode === 'ai_camera' && (
        <div className="space-y-4">
          {/* Header Card */}
          <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-sm shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-stone-900 text-base">
                  Deteksi Dini Melalui Kamera Ponsel
                </h3>
                <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                  Ambil foto bagian daun, buah, atau batang yang sakit. Kecerdasan Buatan (Gemini Flash Vision) akan menganalisis bercak patogen secara cepat.
                </p>
              </div>
            </div>
          </div>

          {/* Camera Capture Card */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            {/* Crop Selector for AI context */}
            <div>
              <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2">
                Jenis Komoditas Tanaman
              </label>
              <select
                value={cameraCrop}
                onChange={(e) => setCameraCrop(e.target.value as CropType)}
                className="w-full p-2.5 rounded-xl border border-stone-300 text-sm font-semibold bg-stone-50 focus:ring-2 focus:ring-emerald-500"
              >
                {cropList.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.emoji} {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Photo Preview or Upload Zone */}
            <div className="space-y-3">
              {capturedImage ? (
                <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 bg-stone-900 shadow-inner max-h-80 flex items-center justify-center">
                  <img
                    src={capturedImage}
                    alt="Foto tanaman"
                    className="max-h-80 w-full object-contain"
                  />
                  <button
                    onClick={() => {
                      setCapturedImage(null);
                      setAiResult(null);
                    }}
                    className="absolute top-3 right-3 bg-stone-900/80 hover:bg-stone-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm transition-all"
                  >
                    Ganti Foto
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-stone-300 hover:border-emerald-500 bg-stone-50 hover:bg-emerald-50/40 rounded-2xl p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Camera className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-stone-800 text-sm">
                      Jepret Foto dengan Kamera / Unggah dari Galeri
                    </h4>
                    <p className="text-xs text-stone-500 mt-1 max-w-xs">
                      Pastikan pencahayaan cukup dan fokus pada bagian daun atau buah yang sakit.
                    </p>
                  </div>
                </div>
              )}

              {/* Hidden file input supporting camera capture on mobile */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageCapture}
                className="hidden"
              />

              {/* Notes Input */}
              <div>
                <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Catatan Gejala Tambahan (Opsional)
                </label>
                <input
                  type="text"
                  value={farmerNotes}
                  onChange={(e) => setFarmerNotes(e.target.value)}
                  placeholder="Contoh: Daun mulai menguning sejak 2 hari lalu setelah hujan deras..."
                  className="w-full p-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-stone-50 focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {cameraError && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{cameraError}</span>
                </div>
              )}

              {/* Action Buttons */}
              {capturedImage && (
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  {isOnline ? (
                    <button
                      onClick={handleAnalyzeWithAi}
                      disabled={isScanningAi}
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99]"
                    >
                      {isScanningAi ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>AI Sedang Menganalisis Bercak Patogen...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-emerald-200" />
                          <span>Pindai dengan AI Vision Sekarang</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={handleSaveToOfflineQueue}
                      className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <WifiOff className="w-4 h-4" />
                      <span>Simpan ke Antrean Offline Lapangan</span>
                    </button>
                  )}

                  {/* Even if online, give option to save to queue if desired */}
                  {isOnline && (
                    <button
                      onClick={handleSaveToOfflineQueue}
                      className="py-3 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs"
                      title="Simpan untuk nanti"
                    >
                      Antrekan Saja
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* AI Result Card */}
          {aiResult && (
            <div className="bg-white rounded-2xl border-2 border-emerald-400 p-4 sm:p-5 shadow-lg space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-block text-[11px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-0.5 rounded-full mb-1">
                    Hasil Diagnosis Gemini Vision AI
                  </span>
                  <h4 className="font-extrabold text-xl text-stone-900 leading-tight">
                    {aiResult.diseaseName}
                  </h4>
                  <p className="text-xs font-mono font-semibold text-emerald-700 italic mt-0.5">
                    Patogen Ilmiah: {aiResult.scientificName}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-2xl font-black text-emerald-700 leading-none">
                    {aiResult.confidencePercent}%
                  </div>
                  <span className="text-[10px] font-bold text-stone-500 uppercase">
                    Keyakinan AI
                  </span>
                </div>
              </div>

              {/* Observed Symptoms by AI */}
              {aiResult.symptomsObserved && (
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <span className="text-xs font-bold text-stone-700 block mb-1">
                    Gejala Visual Terdeteksi AI:
                  </span>
                  <ul className="text-xs text-stone-600 space-y-1">
                    {aiResult.symptomsObserved.map((sym: string, sIdx: number) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Eco Treatments */}
              {aiResult.ecoFriendlyTreatments && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-emerald-700" />
                    <h5 className="font-extrabold text-sm text-stone-900">
                      Rekomendasi Penanganan Ramah Lingkungan:
                    </h5>
                  </div>

                  <div className="space-y-2.5">
                    {aiResult.ecoFriendlyTreatments.map((tr: any, tIdx: number) => (
                      <div
                        key={tIdx}
                        className="bg-emerald-50/70 border border-emerald-200 p-3.5 rounded-xl space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-xs text-emerald-900">
                            {tr.title}
                          </span>
                          <span className="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded uppercase">
                            {tr.category?.replace('_', ' ') || 'Alami'}
                          </span>
                        </div>

                        {tr.activeBioCompound && (
                          <div className="text-[11px] text-emerald-800 font-mono bg-white/80 p-2 rounded border border-emerald-200/60">
                            <strong>Senyawa Bio-Aktif:</strong> {tr.activeBioCompound}
                          </div>
                        )}

                        {tr.ingredients && tr.ingredients.length > 0 && (
                          <div>
                            <span className="text-[11px] font-bold text-stone-700 block">
                              Bahan yang Dibutuhkan:
                            </span>
                            <ul className="text-xs text-stone-600 list-disc list-inside">
                              {tr.ingredients.map((ing: string, iIdx: number) => (
                                <li key={iIdx}>{ing}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {tr.instructions && (
                          <div>
                            <span className="text-[11px] font-bold text-stone-700 block">
                              Instruksi Penerapan:
                            </span>
                            <ol className="text-xs text-stone-600 list-decimal list-inside space-y-0.5">
                              {tr.instructions.map((ins: string, iIdx: number) => (
                                <li key={iIdx}>{ins}</li>
                              ))}
                            </ol>
                          </div>
                        )}

                        {tr.applicationTiming && (
                          <div className="flex items-center gap-1.5 text-xs text-emerald-900 font-medium pt-1">
                            <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                            <span>Waktu Aplikasi: {tr.applicationTiming}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scientific Context */}
              {aiResult.scientificContext && (
                <div className="bg-stone-50 border border-stone-200 p-3 rounded-xl text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-stone-700 font-bold">
                    <BookOpen className="w-3.5 h-3.5 text-stone-500" />
                    <span>Konteks Fitopatologi Ilmiah:</span>
                  </div>
                  <p className="text-stone-600 text-[11px] italic">
                    {aiResult.scientificContext}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Offline Queue Section */}
          {offlineQueue.length > 0 && (
            <div className="bg-amber-50/70 border border-amber-300 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <WifiOff className="w-4 h-4 text-amber-700" />
                  <h4 className="font-bold text-sm text-stone-900">
                    Antrean Foto Luring di Lapangan ({offlineQueue.length})
                  </h4>
                </div>
                {isOnline && (
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Sinyal Tersedia
                  </span>
                )}
              </div>

              <div className="space-y-2">
                {offlineQueue.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-3 rounded-xl border border-amber-200 flex items-center justify-between gap-3 shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.photoBase64}
                        alt="Thumbnail"
                        className="w-12 h-12 object-cover rounded-lg border border-stone-200 shrink-0"
                      />
                      <div>
                        <span className="text-xs font-bold text-stone-900 block capitalize">
                          Tanaman: {item.cropType}
                        </span>
                        <p className="text-[11px] text-stone-500 truncate max-w-[180px]">
                          {item.notes || 'Foto lapangan'}
                        </p>
                        <span className="text-[10px] text-stone-400">
                          {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>

                    <div>
                      {isOnline ? (
                        <button
                          onClick={() => onProcessQueueItem(item.id)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 shadow-sm"
                        >
                          <Send className="w-3 h-3" />
                          <span>Proses AI</span>
                        </button>
                      ) : (
                        <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-1 rounded">
                          Menunggu Sinyal
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
