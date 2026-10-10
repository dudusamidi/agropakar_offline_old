import React, { useState, useEffect } from 'react';
import { 
  CloudSun, 
  Droplets, 
  Wind, 
  Thermometer, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  MapPin, 
  RefreshCw,
  Navigation,
  Search,
  Compass,
  Check
} from 'lucide-react';
import { WeatherInfo } from '../types';

interface WeatherSectionProps {
  weather: WeatherInfo;
  onRefreshWeather: (location: string, lat?: number, lon?: number) => Promise<void>;
  isLoadingWeather: boolean;
}

export const WeatherSection: React.FC<WeatherSectionProps> = ({
  weather,
  onRefreshWeather,
  isLoadingWeather
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('banyuwangi');
  const [customSearch, setCustomSearch] = useState<string>('');
  const [isGpsLoading, setIsGpsLoading] = useState<boolean>(false);
  const [gpsError, setGpsError] = useState<string | null>(null);
  const [locationMode, setLocationMode] = useState<'gps' | 'preset' | 'custom'>('preset');

  // Comprehensive agricultural regions across Indonesia
  const presetLocations = [
    { id: 'banyuwangi', name: 'Banyuwangi', province: 'Jatim', crop: 'Padi & Buah Naga' },
    { id: 'karawang', name: 'Karawang', province: 'Jabar', crop: 'Lumbung Padi' },
    { id: 'magelang', name: 'Magelang', province: 'Jateng', crop: 'Cabai & Sayuran' },
    { id: 'brebes', name: 'Brebes', province: 'Jateng', crop: 'Bawang Merah' },
    { id: 'malang', name: 'Malang & Batu', province: 'Jatim', crop: 'Hortikultura' },
    { id: 'tanah_karo', name: 'Tanah Karo', province: 'Sumut', crop: 'Kopi & Jeruk' },
    { id: 'tabanan', name: 'Tabanan', province: 'Bali', crop: 'Subak Padi' },
    { id: 'lampung', name: 'Lampung Tengah', province: 'Lampung', crop: 'Kopi & Sawit' }
  ];

  // Try auto-detect location on initial load if saved or available
  useEffect(() => {
    try {
      const savedMode = localStorage.getItem('agropakar_loc_mode');
      const savedLoc = localStorage.getItem('agropakar_loc_query');
      if (savedMode === 'gps') {
        handleDetectGps(true);
      } else if (savedLoc) {
        setSelectedCity(savedLoc);
      }
    } catch {
      // ignore storage error
    }
  }, []);

  // --- AUTO DETECT GPS ---
  const handleDetectGps = (isSilent = false) => {
    if (!navigator.geolocation) {
      if (!isSilent) setGpsError('Peramban atau ponsel Anda belum mendukung sensor Geolocation.');
      return;
    }

    setIsGpsLoading(true);
    setGpsError(null);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        setIsGpsLoading(false);
        setLocationMode('gps');
        try {
          localStorage.setItem('agropakar_loc_mode', 'gps');
        } catch {}
        await onRefreshWeather('', pos.coords.latitude, pos.coords.longitude);
      },
      (err) => {
        setIsGpsLoading(false);
        console.warn('Geolocation error:', err);
        if (!isSilent) {
          if (err.code === 1) {
            setGpsError('Izin akses lokasi belum diberikan. Anda tetap bisa memilih lokasi sentra tani di bawah.');
          } else {
            setGpsError('Sinyal GPS lemah atau timeout. Silakan pilih lokasi dari daftar.');
          }
        }
      },
      { timeout: 10000, enableHighAccuracy: true, maximumAge: 60000 }
    );
  };

  // --- MANUAL PRESET CHANGE ---
  const handlePresetChange = (cityId: string) => {
    setSelectedCity(cityId);
    setLocationMode('preset');
    setCustomSearch('');
    setGpsError(null);
    try {
      localStorage.setItem('agropakar_loc_mode', 'preset');
      localStorage.setItem('agropakar_loc_query', cityId);
    } catch {}
    onRefreshWeather(cityId);
  };

  // --- CUSTOM SEARCH SUBMIT ---
  const handleCustomSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSearch.trim()) return;

    setLocationMode('custom');
    setGpsError(null);
    try {
      localStorage.setItem('agropakar_loc_mode', 'custom');
      localStorage.setItem('agropakar_loc_query', customSearch.trim());
    } catch {}
    onRefreshWeather(customSearch.trim());
  };

  return (
    <div className="space-y-4">
      {/* Header Info */}
      <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-sm shrink-0">
            <CloudSun className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-stone-900 text-base">
              Prakiraan Cuaca Pertanian & Peringatan Dini
            </h3>
            <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
              Ketahui kondisi mikroklimat lahan (suhu, kelembapan udara, curah hujan, dan arah angin) secara otomatis via GPS ponsel Anda atau pilih sentra pertanian di bawah.
            </p>
          </div>
        </div>
      </div>

      {/* Location Control Card */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-3.5">
        {/* GPS Auto-Detect Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pb-2 border-b border-stone-100">
          <button
            onClick={() => handleDetectGps(false)}
            disabled={isGpsLoading}
            className={`py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${
              locationMode === 'gps'
                ? 'bg-emerald-700 text-white ring-2 ring-emerald-300'
                : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300'
            }`}
          >
            {isGpsLoading ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                <span>Mendeteksi Koordinat GPS Lahan...</span>
              </>
            ) : (
              <>
                <Navigation className={`w-4 h-4 ${locationMode === 'gps' ? 'fill-white' : 'text-emerald-700'}`} />
                <span>Deteksi Lokasi GPS Otomatis (Lahan Saya)</span>
              </>
            )}
          </button>

          {/* Location Mode Status Badge */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-400 font-medium">Status:</span>
            <span
              className={`font-bold px-2.5 py-1 rounded-lg text-[11px] flex items-center gap-1 ${
                locationMode === 'gps'
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-stone-100 text-stone-700'
              }`}
            >
              <Compass className="w-3 h-3" />
              {locationMode === 'gps' ? 'GPS Otomatis Aktif' : 'Pilihan Wilayah Tani'}
            </span>
          </div>
        </div>

        {gpsError && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{gpsError}</span>
          </div>
        )}

        {/* Custom Location Search */}
        <form onSubmit={handleCustomSearchSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={customSearch}
              onChange={(e) => setCustomSearch(e.target.value)}
              placeholder="Ketik desa/kecamatan Anda (misal: Rogojampi, Cianjur, Sleman)..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 text-xs bg-stone-50 focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button
            type="submit"
            className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold shrink-0 transition-colors"
          >
            Terapkan
          </button>
        </form>

        {/* Quick Sentra Chips */}
        <div>
          <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1.5">
            Atau Pilih Sentra Pertanian Terdekat:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {presetLocations.map((loc) => {
              const isSelected = locationMode === 'preset' && selectedCity === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => handlePresetChange(loc.id)}
                  className={`p-2 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm font-bold ring-1 ring-emerald-300'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100 font-medium'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs truncate">{loc.name}</span>
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className={`text-[10px] mt-0.5 truncate ${isSelected ? 'text-emerald-100' : 'text-stone-400'}`}>
                    {loc.province} • {loc.crop}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Weather Card */}
      <div className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white rounded-3xl p-5 shadow-lg space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-bold text-emerald-200 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>{weather.location}</span>
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl font-extrabold">{weather.temperature}°C</span>
              <span className="text-sm text-emerald-200 font-medium">
                {weather.weatherDesc}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
              <CloudSun className="w-10 h-10 text-amber-300" />
            </div>
            <button
              onClick={() => onRefreshWeather(locationMode === 'custom' ? customSearch : selectedCity)}
              disabled={isLoadingWeather}
              className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-emerald-200 text-xs flex items-center gap-1 transition-colors"
              title="Perbarui Cuaca"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingWeather ? 'animate-spin' : ''}`} />
              <span className="text-[10px]">Perbarui</span>
            </button>
          </div>
        </div>

        {/* Climate Metrics */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
          <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-sm">
            <Droplets className="w-4 h-4 text-emerald-300 mx-auto mb-1" />
            <span className="text-[10px] text-emerald-200 font-semibold uppercase block">
              Kelembapan Udara
            </span>
            <span className="text-sm font-extrabold">{weather.humidity}%</span>
          </div>

          <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-sm">
            <Wind className="w-4 h-4 text-emerald-300 mx-auto mb-1" />
            <span className="text-[10px] text-emerald-200 font-semibold uppercase block">
              Kecepatan Angin
            </span>
            <span className="text-sm font-extrabold">{weather.windSpeed} km/j</span>
          </div>

          <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-sm">
            <Thermometer className="w-4 h-4 text-emerald-300 mx-auto mb-1" />
            <span className="text-[10px] text-emerald-200 font-semibold uppercase block">
              Curah Hujan
            </span>
            <span className="text-sm font-extrabold">{weather.rainfallMm} mm</span>
          </div>
        </div>
      </div>

      {/* Pathogen Alert Card */}
      <div
        className={`rounded-2xl p-4 border space-y-2.5 shadow-sm ${
          weather.farmAlert.level === 'bahaya'
            ? 'bg-rose-50 border-rose-300 text-rose-950'
            : weather.farmAlert.level === 'waspada'
            ? 'bg-amber-50 border-amber-300 text-amber-950'
            : 'bg-emerald-50 border-emerald-300 text-emerald-950'
        }`}
      >
        <div className="flex items-center gap-2">
          {weather.farmAlert.level === 'bahaya' ? (
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
          ) : weather.farmAlert.level === 'waspada' ? (
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          ) : (
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          )}
          <span className="font-extrabold text-sm uppercase tracking-wide">
            Peringatan Dini Serangan Penyakit ({weather.farmAlert.level.toUpperCase()})
          </span>
        </div>

        <p className="text-xs font-semibold leading-relaxed">
          {weather.farmAlert.message}
        </p>

        <div className="bg-white/80 p-3 rounded-xl border border-current/20 text-xs leading-relaxed">
          <strong>Rekomendasi Tindakan di Lahan:</strong> {weather.farmAlert.recommendation}
        </div>
      </div>

      {/* Spray Recommendation Card */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-600" />
            <h4 className="font-extrabold text-sm text-stone-900">
              Jadwal Penyemprotan Pestisida Nabati Hari Ini
            </h4>
          </div>
          <span
            className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
              weather.sprayRecommendation.suitable
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-rose-100 text-rose-800'
            }`}
          >
            {weather.sprayRecommendation.suitable ? 'Cocok Semprot' : 'Tunda Semprot'}
          </span>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed">
          {weather.sprayRecommendation.reason}
        </p>

        <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
          <span className="font-bold text-stone-800 block">Panduan Jam Penyemprotan:</span>
          <p>
            • <strong>Pagi (06:30 - 08:30):</strong> Terbaik untuk penanganan hama kutu kebul dan ulat yang aktif di permukaan daun.
          </p>
          <p>
            • <strong>Sore (16:00 - 17:30):</strong> Sangat dianjurkan untuk mikroba hayati (*Beauveria bassiana*, *Trichoderma*) agar tidak rusak oleh sinar UV terik.
          </p>
        </div>
      </div>
    </div>
  );
};
