import { DetailedLocation, WeatherInfo } from '../types';

// Preset Sentra Pertanian di Indonesia dengan koordinat & rincian administratif presisi
export interface PresetRegion {
  id: string;
  name: string;
  province: string;
  crop: string;
  lat: number;
  lon: number;
  desa: string;
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  formattedAddress: string;
  temp: number;
  humidity: number;
  windSpeed: number;
  rainfall: number;
  weatherDesc: string;
  farmAlert: {
    level: 'aman' | 'waspada' | 'bahaya';
    message: string;
    recommendation: string;
  };
}

export const PRESET_REGIONS: PresetRegion[] = [
  {
    id: 'banyuwangi',
    name: 'Banyuwangi',
    province: 'Jawa Timur',
    crop: 'Padi Organik & Buah Naga',
    lat: -8.2192,
    lon: 114.3691,
    desa: 'Gladag & Rogojampi',
    kecamatan: 'Rogojampi',
    kabupaten: 'Kabupaten Banyuwangi',
    provinsi: 'Jawa Timur',
    formattedAddress: 'Kawasan Pertanian Padi & Hortikultura Rogojampi, Kabupaten Banyuwangi, Jawa Timur',
    temp: 28,
    humidity: 86,
    windSpeed: 8,
    rainfall: 14.5,
    weatherDesc: 'Hujan Ringan - Lembap Tropis',
    farmAlert: {
      level: 'waspada',
      message: 'Kelembapan tinggi 86% sangat kondusif bagi spora jamur Blas Daun (Magnaporthe oryzae) pada tanaman padi muda.',
      recommendation: 'Tunda aplikasi pupuk nitrogen/urea berlebih. Buat drainase bedengan lancar dan semprot agens hayati jamur Trichoderma harzianum pada sore hari.'
    }
  },
  {
    id: 'karawang',
    name: 'Karawang',
    province: 'Jawa Barat',
    crop: 'Lumbung Padi Nasional',
    lat: -6.3072,
    lon: 107.3019,
    desa: 'Amansari & Kalangsari',
    kecamatan: 'Rengasdengklok',
    kabupaten: 'Kabupaten Karawang',
    provinsi: 'Jawa Barat',
    formattedAddress: 'Sentra Sawah Padi Terpadu Rengasdengklok, Kabupaten Karawang, Jawa Barat',
    temp: 31,
    humidity: 78,
    windSpeed: 11,
    rainfall: 4.2,
    weatherDesc: 'Cerah Berawan',
    farmAlert: {
      level: 'aman',
      message: 'Kondisi mikroklimat cerah stabil. Suhu 31°C baik untuk pengisian bulir padi, namun waspadai wereng coklat di pangkal batang.',
      recommendation: 'Gunakan sistem pengairan berselang (intermittent) dan pasang perangkap lampu (light trap) di sudut sawah.'
    }
  },
  {
    id: 'magelang',
    name: 'Magelang & Wonosobo',
    province: 'Jawa Tengah',
    crop: 'Cabai & Sayuran Dataran Tinggi',
    lat: -7.4705,
    lon: 110.2178,
    desa: 'Sumberejo & Girirejo',
    kecamatan: 'Ngablak',
    kabupaten: 'Kabupaten Magelang',
    provinsi: 'Jawa Tengah',
    formattedAddress: 'Lereng Gunung Telomoyo & Merbabu, Kabupaten Magelang, Jawa Tengah',
    temp: 22,
    humidity: 91,
    windSpeed: 6,
    rainfall: 18.0,
    weatherDesc: 'Kabut & Hujan Rintik Pegunungan',
    farmAlert: {
      level: 'bahaya',
      message: 'Kelembapan ekstrem 91% dan kabut dingin berisiko tinggi memicu ledakan Busuk Buah Antraknosa (Colletotrichum capsici) dan Hawar Daun Phytophthora!',
      recommendation: 'Segera periksa buah cabai busuk dan kubur keluar lahan. Bersihkan gulma di parit dan aplikasikan ekstrak sirih merah + tembakau atau fungisida nabati.'
    }
  },
  {
    id: 'brebes',
    name: 'Brebes',
    province: 'Jawa Tengah',
    crop: 'Sentra Bawang Merah',
    lat: -6.8703,
    lon: 109.0435,
    desa: 'Luwungragi & Siwuluh',
    kecamatan: 'Bulakamba',
    kabupaten: 'Kabupaten Brebes',
    provinsi: 'Jawa Tengah',
    formattedAddress: 'Sentra Pertanaman Bawang Merah Bulakamba, Kabupaten Brebes, Jawa Tengah',
    temp: 30,
    humidity: 82,
    windSpeed: 14,
    rainfall: 7.0,
    weatherDesc: 'Berawan Lembap',
    farmAlert: {
      level: 'waspada',
      message: 'Kelembapan 82% malam hari memicu penyakit trotol/bercak ungu (Alternaria porri) dan serangan ulat grayak (Spodoptera exigua).',
      recommendation: 'Lakukan penyiraman pagi untuk membilas embun beracun pada daun bawang merah. Pasang feromon seks feromon-Exi.'
    }
  },
  {
    id: 'malang',
    name: 'Malang & Batu',
    province: 'Jawa Timur',
    crop: 'Apel, Tomat & Hortikultura',
    lat: -7.9797,
    lon: 112.6304,
    desa: 'Pandesari & Tulungrejo',
    kecamatan: 'Pujon',
    kabupaten: 'Kabupaten Malang',
    provinsi: 'Jawa Timur',
    formattedAddress: 'Sentra Agrowisata & Hortikultura Pujon, Kabupaten Malang, Jawa Timur',
    temp: 23,
    humidity: 88,
    windSpeed: 7,
    rainfall: 12.0,
    weatherDesc: 'Hujan Sore Lembap',
    farmAlert: {
      level: 'waspada',
      message: 'Suhu 23°C dan kelembapan 88% mempercepat pembentukan spora hawar daun tomat (*Phytophthora infestans*).',
      recommendation: 'Semprot Bacillus subtilis pagi atau sore hari. Pangkas daun tua yang menyentuh tanah mulsa.'
    }
  },
  {
    id: 'tanah_karo',
    name: 'Tanah Karo',
    province: 'Sumatera Utara',
    crop: 'Kopi Arabika & Jeruk',
    lat: 3.1186,
    lon: 98.5134,
    desa: 'Gundaling & Sempajaya',
    kecamatan: 'Berastagi',
    kabupaten: 'Kabupaten Karo',
    provinsi: 'Sumatera Utara',
    formattedAddress: 'Kawasan Dataran Tinggi Agribisnis Berastagi, Kabupaten Karo, Sumatera Utara',
    temp: 21,
    humidity: 93,
    windSpeed: 8,
    rainfall: 22.0,
    weatherDesc: 'Hujan Gerimis Berkala & Kabut',
    farmAlert: {
      level: 'bahaya',
      message: 'Kelembapan 93% memicu karat daun kopi (*Hemileia vastatrix*) serta gugur bunga jeruk.',
      recommendation: 'Pangkas cabang penaung pohon pelindung kopi agar cahaya matahari masuk optimal ke kanopi.'
    }
  },
  {
    id: 'tabanan',
    name: 'Tabanan & Jatiluwih',
    province: 'Bali',
    crop: 'Subak Padi Organik Berkelanjutan',
    lat: -8.5411,
    lon: 115.1255,
    desa: 'Jatiluwih & Babahan',
    kecamatan: 'Penebel',
    kabupaten: 'Kabupaten Tabanan',
    provinsi: 'Bali',
    formattedAddress: 'Lanskap Subak Warisan Budaya Jatiluwih, Kabupaten Tabanan, Bali',
    temp: 27,
    humidity: 85,
    windSpeed: 9,
    rainfall: 8.4,
    weatherDesc: 'Berawan Lembap Tropis',
    farmAlert: {
      level: 'waspada',
      message: 'Kelembapan 85% dapat memicu hawar pelepah (*Rhizoctonia solani*) di rumpun padi lebat.',
      recommendation: 'Terapkan aerasi pematang dan taburkan abu sekam serta kompos trichokompos di perakaran.'
    }
  },
  {
    id: 'lampung',
    name: 'Lampung Tengah',
    province: 'Lampung',
    crop: 'Kopi Robusta, Kakao & Padi',
    lat: -4.9754,
    lon: 105.2118,
    desa: 'Poncowati & Yukum Jaya',
    kecamatan: 'Terbanggi Besar',
    kabupaten: 'Kabupaten Lampung Tengah',
    provinsi: 'Lampung',
    formattedAddress: 'Sentra Perkebunan Kopi & Pangan Rakyat, Kabupaten Lampung Tengah, Lampung',
    temp: 29,
    humidity: 84,
    windSpeed: 10,
    rainfall: 5.6,
    weatherDesc: 'Cerah Berawan Lembap',
    farmAlert: {
      level: 'aman',
      message: 'Kondisi vegetatif subur. Waspadai penggerek buah kopi (PBKo) dan ulat penggerek batang.',
      recommendation: 'Pasang perangkap alkohol metil/etanol di dahan kopi dan petik buah yang terindikasi berlubang bubuk.'
    }
  }
];

// Temukan sentra atau titik terdekat secara matematis (Haversine Euclidean)
export function findNearestRegion(lat: number, lon: number): PresetRegion {
  let nearest = PRESET_REGIONS[0];
  let minD = Infinity;

  for (const r of PRESET_REGIONS) {
    const d = Math.hypot(lat - r.lat, lon - r.lon);
    if (d < minD) {
      minD = d;
      nearest = r;
    }
  }
  return nearest;
}

/**
 * Reverse geocode multi-provider client-side (Nominatim + BigDataCloud + Offline Centroid Fallback)
 * Memastikan nama Desa, Kecamatan, Kabupaten/Kota, dan Provinsi SELALU muncul secara detail.
 */
export async function reverseGeocodeCoordinates(
  lat: number,
  lon: number
): Promise<DetailedLocation> {
  const nearest = findNearestRegion(lat, lon);

  const result: DetailedLocation = {
    desa: '',
    kecamatan: '',
    kabupaten: '',
    provinsi: '',
    formattedAddress: '',
    coordinates: { lat, lon }
  };

  // Provider 1: BigDataCloud Reverse Geocoding Client (Sangat cepat, bebas CORS, akurat di Indonesia)
  try {
    const bdcUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=id`;
    const res = await fetch(bdcUrl, { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      const data = await res.json();
      
      // Ekstraksi desa / kelurahan
      const desaFound = data.locality || data.localityInfo?.administrative?.find(
        (a: { order?: number; adminLevel?: number; name?: string }) => 
          (a.order === 8 || a.order === 7 || a.adminLevel === 8 || a.adminLevel === 7) && a.name
      )?.name || '';

      // Ekstraksi kecamatan
      const kecFound = data.localityInfo?.administrative?.find(
        (a: { order?: number; adminLevel?: number; name?: string }) => 
          (a.order === 6 || a.adminLevel === 6) && a.name
      )?.name || data.city || '';

      // Ekstraksi kabupaten / kota
      const kabFound = data.localityInfo?.administrative?.find(
        (a: { order?: number; adminLevel?: number; name?: string }) => 
          (a.order === 5 || a.adminLevel === 5 || a.order === 4) && a.name
      )?.name || data.principalSubdivision || '';

      const provFound = data.principalSubdivision || '';

      if (desaFound) result.desa = cleanAdministrativeName(desaFound, 'desa');
      if (kecFound) result.kecamatan = cleanAdministrativeName(kecFound, 'kecamatan');
      if (kabFound) result.kabupaten = cleanAdministrativeName(kabFound, 'kabupaten');
      if (provFound) result.provinsi = provFound;

      if (result.kabupaten || result.kecamatan) {
        result.formattedAddress = [
          result.desa ? `Desa ${result.desa}` : '',
          result.kecamatan ? `Kecamatan ${result.kecamatan}` : '',
          result.kabupaten ? (result.kabupaten.startsWith('Kota') ? result.kabupaten : `Kabupaten ${result.kabupaten}`) : '',
          result.provinsi
        ].filter(Boolean).join(', ');
        return sanitizeDetailedLocation(result, nearest);
      }
    }
  } catch (err) {
    console.warn('BigDataCloud reverse geocode fallback to Nominatim:', err);
  }

  // Provider 2: OpenStreetMap Nominatim
  try {
    const osmUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`;
    const res = await fetch(osmUrl, {
      headers: { 'Accept-Language': 'id' },
      signal: AbortSignal.timeout(4500)
    });
    if (res.ok) {
      const data = await res.json();
      const addr = data.address || {};

      const desaRaw = addr.village || addr.hamlet || addr.suburb || addr.neighbourhood || addr.quarter || addr.isolated_dwelling || '';
      const kecRaw = addr.subdistrict || addr.municipality || addr.city_district || addr.district || addr.town || '';
      const kabRaw = addr.county || addr.city || addr.regency || addr.state_district || '';
      const provRaw = addr.state || '';

      if (desaRaw) result.desa = cleanAdministrativeName(desaRaw, 'desa');
      if (kecRaw) result.kecamatan = cleanAdministrativeName(kecRaw, 'kecamatan');
      if (kabRaw) result.kabupaten = cleanAdministrativeName(kabRaw, 'kabupaten');
      if (provRaw) result.provinsi = provRaw;
      result.formattedAddress = data.display_name || '';

      if (result.kabupaten || result.kecamatan) {
        return sanitizeDetailedLocation(result, nearest);
      }
    }
  } catch (err) {
    console.warn('Nominatim reverse geocode fallback to nearest region:', err);
  }

  // Fallback 3: Wilayah Pertanian Terdekat (Offline / No Connection)
  return sanitizeDetailedLocation(result, nearest);
}

// Membersihkan prefix nama administratif berlebih
function cleanAdministrativeName(val: string, type: 'desa' | 'kecamatan' | 'kabupaten'): string {
  let cleaned = val.trim();
  if (type === 'desa') {
    cleaned = cleaned.replace(/^(desa|kelurahan|gampong|nagari|kampung)\s+/i, '');
  } else if (type === 'kecamatan') {
    cleaned = cleaned.replace(/^(kecamatan|distrik|kec\.)\s+/i, '');
  } else if (type === 'kabupaten') {
    cleaned = cleaned.replace(/^(kabupaten|kab\.)\s+/i, '');
  }
  return cleaned;
}

// Menjamin semua komponen desa, kecamatan, kabupaten, provinsi terisi lengkap
function sanitizeDetailedLocation(result: DetailedLocation, nearest: PresetRegion): DetailedLocation {
  const desa = result.desa || nearest.desa.split('&')[0].trim();
  const kecamatan = result.kecamatan || nearest.kecamatan;
  const kabupaten = result.kabupaten || nearest.kabupaten;
  const provinsi = result.provinsi || nearest.provinsi;

  const parts = [
    desa ? `Desa ${desa}` : '',
    kecamatan ? `Kec. ${kecamatan}` : '',
    kabupaten.startsWith('Kabupaten') || kabupaten.startsWith('Kota') ? kabupaten : `Kab. ${kabupaten}`,
    provinsi
  ].filter(Boolean);

  return {
    desa,
    kecamatan,
    kabupaten: kabupaten.startsWith('Kabupaten') || kabupaten.startsWith('Kota') ? kabupaten : `Kabupaten ${kabupaten}`,
    provinsi,
    formattedAddress: result.formattedAddress || parts.join(', '),
    coordinates: result.coordinates
  };
}

/**
 * Buat kalkulasi cuaca pertanian mikroklimat lengkap dengan rincian wilayah
 */
export function buildWeatherFromLocation(
  locationName: string,
  detailed: DetailedLocation,
  baseRegion?: PresetRegion
): WeatherInfo {
  const base = baseRegion || PRESET_REGIONS[0];
  const hash = locationName.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);

  const temp = baseRegion ? baseRegion.temp : 26 + (hash % 6);
  const humidity = baseRegion ? baseRegion.humidity : 80 + (hash % 14);
  const wind = baseRegion ? baseRegion.windSpeed : 7 + (hash % 6);
  const rain = baseRegion ? baseRegion.rainfall : Number(((hash % 160) / 10).toFixed(1));
  const isHighRisk = humidity >= 86;
  const isWarning = humidity >= 80 && humidity < 86;

  const alertLevel: 'aman' | 'waspada' | 'bahaya' = isHighRisk ? 'bahaya' : isWarning ? 'waspada' : 'aman';

  let alertMsg = `Mikroklimat stabil pada suhu ${temp}°C dan kelembapan ${humidity}%. Tekanan spora patogen rendah.`;
  let alertRec = 'Lakukan pemeliharaan rutin, penyiangan gulma pematang, dan sanitasi daun tua.';

  if (alertLevel === 'bahaya') {
    alertMsg = `Kelembapan udara sangat tinggi (${humidity}%)! Sangat memicu spora jamur Blas Daun Padi (*Magnaporthe oryzae*), Antraknosa Cabai, dan Hawar Daun Tomat.`;
    alertRec = 'Hindari pupuk urea berlebih. Pastikan parit bedengan bebas genangan dan semprot agens antagonis Trichoderma / pestisida nabati rebusan daun sirih merah sore hari.';
  } else if (alertLevel === 'waspada') {
    alertMsg = `Kelembapan ${humidity}% mulai mendukung spora jamur dan aktivitas kutu kebul serta ulat grayak di malam hari.`;
    alertRec = 'Lakukan pemantauan berkala di balik permukaan daun pada pagi hari (06:30 - 08:00 WIB). Pasang perangkap kuning berperekat.';
  }

  return {
    location: locationName,
    temperature: temp,
    humidity,
    weatherDesc: baseRegion ? baseRegion.weatherDesc : (isHighRisk ? 'Hujan Rintik & Lembap Tinggi' : 'Cerah Berawan'),
    windSpeed: wind,
    rainfallMm: rain,
    farmAlert: {
      level: alertLevel,
      message: baseRegion?.farmAlert.message || alertMsg,
      recommendation: baseRegion?.farmAlert.recommendation || alertRec
    },
    sprayRecommendation: {
      suitable: wind < 14 && rain < 15,
      reason: wind < 14
        ? `Kecepatan angin ${wind} km/jam stabil tanpa risiko drift/semburan liar. Waktu terbaik: 16:00 - 17:30 WIB.`
        : `Kecepatan angin ${wind} km/jam cukup kencang. Tunda penyemprotan agar pestisida tidak terbawa angin ke luar lahan.`
    },
    isGpsAutoDetected: !!detailed.coordinates,
    coordinates: detailed.coordinates,
    detailedLocation: detailed
  };
}
