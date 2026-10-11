import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  FlaskConical, 
  Clock, 
  ExternalLink, 
  ShieldAlert, 
  X,
  Sparkles
} from 'lucide-react';
import { Disease, CropType, PathogenType } from '../types';
import { ALL_CROPS, CROP_CATEGORIES } from '../data/cropsMetadata';

interface CatalogSectionProps {
  diseases: Disease[];
  selectedDisease: Disease | null;
  onSelectDisease: (disease: Disease | null) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  diseases,
  selectedDisease,
  onSelectDisease
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCropCategory, setSelectedCropCategory] = useState<string>('all');
  const [selectedCrop, setSelectedCrop] = useState<CropType | 'all'>('all');
  const [selectedPathogen, setSelectedPathogen] = useState<PathogenType | 'all'>('all');

  // Filter diseases based on search, commodity, category, and pathogen
  const filteredDiseases = diseases.filter((d) => {
    const matchSearch =
      d.nameIndo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.symptomSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.cropType.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Commodity match
    const matchCrop = selectedCrop === 'all' || d.cropType === selectedCrop;
    
    // Category match
    const cropMeta = ALL_CROPS.find((c) => c.id === d.cropType);
    const matchCategory =
      selectedCropCategory === 'all' || (cropMeta && cropMeta.category === selectedCropCategory);

    // Pathogen match
    const matchPathogen = selectedPathogen === 'all' || d.pathogenType === selectedPathogen;

    return matchSearch && matchCrop && matchCategory && matchPathogen;
  });

  const commoditiesList: { id: CropType | 'all'; label: string; emoji: string; category?: string }[] = [
    { id: 'all', label: 'Semua Komoditas', emoji: '🌱' },
    ...ALL_CROPS.map((c) => ({
      id: c.id,
      label: c.name,
      emoji: c.emoji,
      category: c.category
    }))
  ];

  const visibleCommodities = commoditiesList.filter(
    (c) => c.id === 'all' || selectedCropCategory === 'all' || c.category === selectedCropCategory
  );

  return (
    <div className="space-y-4">
      {/* Header Info */}
      <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-sm shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-stone-900 text-base">
              Katalog Penyakit & Resep Obat Nabati Offline
            </h3>
            <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
              Basis data ilmiah fitopatologi lengkap dengan tata nama patogen dan formula ramah lingkungan yang aman bagi tanah dan ekosistem kebun.
            </p>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama penyakit, hama, atau nama latin (misal: Blas, Patek, Colletotrichum)..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-stone-50 focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Category Pills & Commodity Filter */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
              Filter Komoditas Tanaman ({filteredDiseases.length} Penyakit Ditemukan)
            </label>
            <span className="text-[11px] text-stone-400">
              Total {diseases.length} patogen terdaftar
            </span>
          </div>

          {/* Kategori Selector */}
          <div className="flex gap-1 overflow-x-auto pb-1 no-scrollbar">
            {CROP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCropCategory(cat.id);
                  setSelectedCrop('all');
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                  selectedCropCategory === cat.id
                    ? 'bg-emerald-700 text-white font-bold shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Commodity Chips */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {visibleCommodities.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCrop(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1 shrink-0 ${
                  selectedCrop === c.id
                    ? 'bg-emerald-600 text-white font-bold shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <span>{c.emoji}</span>
                <span>{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pathogen Filter */}
        <div>
          <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1.5">
            Tipe Patogen
          </label>
          <div className="flex flex-wrap gap-1.5">
            {(['all', 'jamur', 'bakteri', 'virus', 'hama'] as (PathogenType | 'all')[]).map((pat) => (
              <button
                key={pat}
                onClick={() => setSelectedPathogen(pat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                  selectedPathogen === pat
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {pat === 'all' ? 'Semua Tipe' : pat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Disease Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filteredDiseases.length === 0 ? (
          <div className="col-span-full bg-white p-8 rounded-2xl border border-stone-200 text-center text-xs text-stone-500">
            Tidak ditemukan penyakit dengan kata kunci atau filter tersebut.
          </div>
        ) : (
          filteredDiseases.map((d) => (
            <div
              key={d.id}
              onClick={() => onSelectDisease(d)}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="h-36 w-full bg-stone-100 relative overflow-hidden">
                  <img
                    src={d.sampleImage}
                    alt={d.nameIndo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="bg-stone-900/80 backdrop-blur-sm text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
                      {d.cropType}
                    </span>
                    <span className="bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded capitalize">
                      {d.pathogenType}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-1.5">
                  <h4 className="font-extrabold text-stone-900 text-sm leading-snug group-hover:text-emerald-700 transition-colors">
                    {d.nameIndo}
                  </h4>
                  <p className="text-[11px] font-mono text-emerald-800 italic">
                    {d.scientificName}
                  </p>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed pt-1">
                    {d.symptomSummary}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 pb-3.5 pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                  <FlaskConical className="w-3.5 h-3.5" />
                  {d.ecoFriendlyTreatments.length} Solusi Nabati
                </span>
                <span className="text-stone-400 group-hover:text-emerald-700 font-semibold transition-colors">
                  Lihat Resep &rarr;
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Disease Detail Modal */}
      {selectedDisease && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-y-auto flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-200">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-stone-200 px-5 py-4 flex items-center justify-between z-10">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                  Komoditas: {selectedDisease.cropType}
                </span>
                <h3 className="font-extrabold text-lg text-stone-900 mt-1">
                  {selectedDisease.nameIndo}
                </h3>
              </div>
              <button
                onClick={() => onSelectDisease(null)}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-5">
              {/* Image banner */}
              <div className="rounded-2xl overflow-hidden max-h-56 w-full border border-stone-200 bg-stone-100 shadow-sm">
                <img
                  src={selectedDisease.sampleImage}
                  alt={selectedDisease.nameIndo}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Taxonomy & Summary */}
              <div className="bg-stone-50 border border-stone-200 p-4 rounded-2xl space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-white px-2 py-1 rounded border border-emerald-200">
                    🔬 Patogen: {selectedDisease.scientificName}
                  </span>
                  <span className="text-xs font-bold text-stone-700 bg-white px-2 py-1 rounded border border-stone-200">
                    Tipe: {selectedDisease.pathogenType.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {selectedDisease.symptomSummary}
                </p>
              </div>

              {/* Eco Treatments */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-emerald-700" />
                  <h4 className="font-extrabold text-base text-stone-900">
                    Panduan Resep Penanganan Ramah Lingkungan:
                  </h4>
                </div>

                <div className="space-y-3">
                  {selectedDisease.ecoFriendlyTreatments.map((tr, idx) => (
                    <div
                      key={idx}
                      className="bg-emerald-50/70 border border-emerald-200/90 rounded-2xl p-4 space-y-2.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="font-bold text-sm text-emerald-950">
                          {tr.title}
                        </h5>
                        <span className="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded uppercase">
                          {tr.category.replace('_', ' ')}
                        </span>
                      </div>

                      <div className="text-xs text-emerald-800 font-mono bg-white p-2.5 rounded-xl border border-emerald-200/60 shadow-inner">
                        <strong>Bahan Aktif Biologis:</strong> {tr.activeBioCompound}
                      </div>

                      {tr.ingredients && tr.ingredients.length > 0 && (
                        <div>
                          <span className="text-xs font-bold text-stone-700 block mb-1">
                            Bahan Baku yang Perlu Disiapkan:
                          </span>
                          <ul className="text-xs text-stone-600 list-disc list-inside space-y-0.5">
                            {tr.ingredients.map((ing, iIdx) => (
                              <li key={iIdx}>{ing}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <span className="text-xs font-bold text-stone-700 block mb-1">
                          Tahapan Peracikan & Aplikasi:
                        </span>
                        <ol className="text-xs text-stone-600 list-decimal list-inside space-y-1">
                          {tr.instructions.map((ins, iIdx) => (
                            <li key={iIdx}>{ins}</li>
                          ))}
                        </ol>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-emerald-900 font-medium pt-1 border-t border-emerald-200/60">
                        <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{tr.applicationTiming}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Science Reference */}
              <div className="bg-stone-50 border border-stone-200 p-4 rounded-2xl text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-stone-800 font-bold">
                  <BookOpen className="w-4 h-4 text-stone-600" />
                  <span>Kutipan Fitopatologi & Rujukan Ilmiah:</span>
                </div>
                <p className="text-stone-600 text-xs italic leading-relaxed">
                  "{selectedDisease.scientificReference.summary}"
                </p>
                <div className="text-[11px] text-stone-500 pt-1 flex items-center justify-between">
                  <span>Jurnal: {selectedDisease.scientificReference.journalOrDb}</span>
                  {selectedDisease.scientificReference.doiOrAccession && (
                    <span className="font-mono text-emerald-700">
                      DOI: {selectedDisease.scientificReference.doiOrAccession}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-200">
              <button
                onClick={() => onSelectDisease(null)}
                className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs"
              >
                Tutup Katalog
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
