import { CropType, PlantPart } from '../types';

export interface CommodityInfo {
  id: CropType;
  name: string;
  scientificName: string;
  category: 'pangan' | 'hortikultura' | 'perkebunan' | 'buah' | 'sayur' | 'industri_dunia';
  origin: string;
  emoji: string;
  description: string;
}

export const CROP_CATEGORIES: { id: string; label: string }[] = [
  { id: 'all', label: 'Semua Komoditas' },
  { id: 'pangan', label: '🌾 Pangan Utama' },
  { id: 'hortikultura', label: '🌶️ Hortikultura & Bumbu' },
  { id: 'sayur', label: '🥬 Sayuran' },
  { id: 'buah', label: '🍌 Buah-buahan' },
  { id: 'perkebunan', label: '☕ Perkebunan Indonesia' },
  { id: 'industri_dunia', label: '🌍 Industri & Dunia' }
];

export const PLANT_PARTS_LIST: { id: PlantPart; label: string; icon: string }[] = [
  { id: 'daun', label: 'Daun & Tajuk', icon: '🍃' },
  { id: 'batang', label: 'Batang & Pelepah', icon: '🪵' },
  { id: 'buah', label: 'Buah & Polong', icon: '🍎' },
  { id: 'akar', label: 'Akar & Umbi', icon: '🥕' },
  { id: 'bunga', label: 'Bunga & Malai', icon: '🌸' },
  { id: 'bulir', label: 'Bulir & Gabah/Biji', icon: '🌾' }
];

export const ALL_CROPS: CommodityInfo[] = [
  // 1. Pangan
  {
    id: 'padi',
    name: 'Padi',
    scientificName: 'Oryza sativa',
    category: 'pangan',
    origin: 'Indonesia & Asia',
    emoji: '🌾',
    description: 'Komoditas pangan pokok strategis nasional Indonesia.'
  },
  {
    id: 'jagung',
    name: 'Jagung',
    scientificName: 'Zea mays',
    category: 'pangan',
    origin: 'Indonesia & Global',
    emoji: '🌽',
    description: 'Pangan pokok dan bahan baku pakan ternak utama.'
  },
  {
    id: 'kedelai',
    name: 'Kedelai',
    scientificName: 'Glycine max',
    category: 'pangan',
    origin: 'Indonesia & Global',
    emoji: '🫘',
    description: 'Sumber protein nabati tempe, tahu, dan susu kedelai.'
  },
  {
    id: 'singkong',
    name: 'Singkong / Ubi Kayu',
    scientificName: 'Manihot esculenta',
    category: 'pangan',
    origin: 'Indonesia & Tropis Dunia',
    emoji: '🍠',
    description: 'Bahan pangan pokok, tapioka, dan mocaf.'
  },
  {
    id: 'ubi_jalar',
    name: 'Ubi Jalar',
    scientificName: 'Ipomoea batatas',
    category: 'pangan',
    origin: 'Indonesia & Tropis Dunia',
    emoji: '🍠',
    description: 'Umbi kaya karbohidrat kompleks dan beta-karoten.'
  },
  {
    id: 'gandum',
    name: 'Gandum',
    scientificName: 'Triticum aestivum',
    category: 'industri_dunia',
    origin: 'Dunia / Global',
    emoji: '🌾',
    description: 'Serealia pangan utama dunia untuk tepung terigu dan roti.'
  },

  // 2. Hortikultura & Bumbu
  {
    id: 'cabai',
    name: 'Cabai Merah & Rawit',
    scientificName: 'Capsicum annuum / C. frutescens',
    category: 'hortikultura',
    origin: 'Indonesia & Global',
    emoji: '🌶️',
    description: 'Komoditas penyumbang inflasi dan bumbu pokok masakan.'
  },
  {
    id: 'bawang',
    name: 'Bawang Merah & Putih',
    scientificName: 'Allium cepa var. aggregatum',
    category: 'hortikultura',
    origin: 'Indonesia & Global',
    emoji: '🧅',
    description: 'Bumbu rempah penting dengan sentra utama Brebes dan Nganjuk.'
  },
  {
    id: 'tomat',
    name: 'Tomat',
    scientificName: 'Solanum lycopersicum',
    category: 'hortikultura',
    origin: 'Indonesia & Global',
    emoji: '🍅',
    description: 'Sayuran buah kaya likopen untuk konsumsi segar dan industri.'
  },
  {
    id: 'kentang',
    name: 'Kentang Dataran Tinggi',
    scientificName: 'Solanum tuberosum',
    category: 'hortikultura',
    origin: 'Indonesia & Global',
    emoji: '🥔',
    description: 'Komoditas hortikultura dataran tinggi (Dieng, Bromo, Karo).'
  },
  {
    id: 'terong',
    name: 'Terong',
    scientificName: 'Solanum melongena',
    category: 'sayur',
    origin: 'Indonesia & Asia',
    emoji: '🍆',
    description: 'Sayuran buah solanaceae populer di pasar tradisional.'
  },
  {
    id: 'mentimun',
    name: 'Mentimun',
    scientificName: 'Cucumis sativus',
    category: 'sayur',
    origin: 'Indonesia & Global',
    emoji: '🥒',
    description: 'Tanaman sayuran labu-labuan umur genjah.'
  },
  {
    id: 'kubis',
    name: 'Kubis / Kol',
    scientificName: 'Brassica oleracea var. capitata',
    category: 'sayur',
    origin: 'Indonesia & Dataran Tinggi',
    emoji: '🥬',
    description: 'Sayuran krop dataran tinggi berdaun padat.'
  },
  {
    id: 'kacang_tanah',
    name: 'Kacang Tanah',
    scientificName: 'Arachis hypogaea',
    category: 'pangan',
    origin: 'Indonesia & Global',
    emoji: '🥜',
    description: 'Legum polong dalam tanah kaya minyak dan protein.'
  },
  {
    id: 'semangka',
    name: 'Semangka & Melon',
    scientificName: 'Citrullus lanatus',
    category: 'buah',
    origin: 'Indonesia & Tropis',
    emoji: '🍉',
    description: 'Buah hortikultura segar dataran rendah dengan kadar air tinggi.'
  },

  // 3. Buah-buahan
  {
    id: 'pisang',
    name: 'Pisang',
    scientificName: 'Musa paradisiaca',
    category: 'buah',
    origin: 'Indonesia & Tropis Dunia',
    emoji: '🍌',
    description: 'Buah tropis favorit masyarakat Indonesia dan komoditas ekspor.'
  },
  {
    id: 'jeruk',
    name: 'Jeruk Manis & Siam',
    scientificName: 'Citrus sinensis / Citrus nobilis',
    category: 'buah',
    origin: 'Indonesia & Subtropis',
    emoji: '🍊',
    description: 'Sentra jeruk di Banyuwangi, Pontianak, dan Brastagi.'
  },
  {
    id: 'pepaya',
    name: 'Pepaya',
    scientificName: 'Carica papaya',
    category: 'buah',
    origin: 'Indonesia & Tropis',
    emoji: '🥭',
    description: 'Buah tropis cepat berbuah sepanjang tahun (Pepaya California).'
  },
  {
    id: 'mangga',
    name: 'Mangga Harum Manis & Gedong',
    scientificName: 'Mangifera indica',
    category: 'buah',
    origin: 'Indonesia & Asia Selatan',
    emoji: '🥭',
    description: 'Pohon buah musiman khas dataran rendah kering (Indramayu, Probolinggo).'
  },
  {
    id: 'apel',
    name: 'Apel',
    scientificName: 'Malus domestica',
    category: 'buah',
    origin: 'Malang (Batu) & Global',
    emoji: '🍎',
    description: 'Sentra Batu Malang di Indonesia serta komoditas global.'
  },
  {
    id: 'anggur',
    name: 'Anggur',
    scientificName: 'Vitis vinifera',
    category: 'buah',
    origin: 'Indonesia & Mediterania/Dunia',
    emoji: '🍇',
    description: 'Tanaman rambat buah bernilai ekonomi tinggi.'
  },
  {
    id: 'alpukat',
    name: 'Alpukat',
    scientificName: 'Persea americana',
    category: 'buah',
    origin: 'Indonesia & Global',
    emoji: '🥑',
    description: 'Buah berlemak nabati sehat dataran menengah ke atas.'
  },

  // 4. Perkebunan Indonesia & Industri Dunia
  {
    id: 'kopi',
    name: 'Kopi Arabika & Robusta',
    scientificName: 'Coffea arabica / C. canephora',
    category: 'perkebunan',
    origin: 'Indonesia & Sabuk Kopi Dunia',
    emoji: '☕',
    description: 'Komoditas ekspor andalan perkebunan rakyat Indonesia.'
  },
  {
    id: 'kakao',
    name: 'Kakao / Cokelat',
    scientificName: 'Theobroma cacao',
    category: 'perkebunan',
    origin: 'Sulawesi & Sabuk Tropis Dunia',
    emoji: '🍫',
    description: 'Bahan baku cokelat dunia sentra utama Sulawesi dan Sumatera.'
  },
  {
    id: 'sawit',
    name: 'Kelapa Sawit',
    scientificName: 'Elaeis guineensis',
    category: 'perkebunan',
    origin: 'Sumatera, Kalimantan & Tropis Dunia',
    emoji: '🌴',
    description: 'Produsen minyak nabati nabati terbesar di dunia (CPO).'
  },
  {
    id: 'karet',
    name: 'Karet Alam',
    scientificName: 'Hevea brasiliensis',
    category: 'perkebunan',
    origin: 'Sumatera & Tropis Dunia',
    emoji: '🌳',
    description: 'Sumber lateks alami untuk industri ban dan manufaktur.'
  },
  {
    id: 'teh',
    name: 'Teh Dataran Tinggi',
    scientificName: 'Camellia sinensis',
    category: 'perkebunan',
    origin: 'Jawa Barat, Sumatera & Asia',
    emoji: '🍵',
    description: 'Perkebunan lereng gunung penghasil teh hitam dan hijau.'
  },
  {
    id: 'tebu',
    name: 'Tebu (Gula)',
    scientificName: 'Saccharum officinarum',
    category: 'perkebunan',
    origin: 'Jawa, Lampung & Tropis',
    emoji: '🎋',
    description: 'Bahan baku industri gula pasir nasional.'
  },
  {
    id: 'tembakau',
    name: 'Tembakau',
    scientificName: 'Nicotiana tabacum',
    category: 'perkebunan',
    origin: 'Temanggung, Madura, Deli & Global',
    emoji: '🍂',
    description: 'Komoditas daun industri dengan nilai cukai dan ekspor tinggi.'
  },
  {
    id: 'kapas',
    name: 'Kapas',
    scientificName: 'Gossypium hirsutum',
    category: 'industri_dunia',
    origin: 'Dunia / Global',
    emoji: '☁️',
    description: 'Serat alami bahan baku industri tekstil dunia.'
  }
];
