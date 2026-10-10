import { Disease, Symptom, WeatherInfo, ForumPost, AppNotification } from '../types';

export const INITIAL_SYMPTOMS: Symptom[] = [
  // --- PADI ---
  {
    id: 'sym_padi_1',
    code: 'G01',
    cropType: 'padi',
    plantPart: 'daun',
    title: 'Bercak belah ketupat di daun',
    description: 'Bercak berbentuk mata atau belah ketupat, pusat kelabu keputihan dengan tepi coklat kemerahan.',
    mb: 0.85,
    md: 0.05
  },
  {
    id: 'sym_padi_2',
    code: 'G02',
    cropType: 'padi',
    plantPart: 'batang',
    title: 'Leher malai membusuk & patah',
    description: 'Pangkal tangkai malai (leher) membusuk berwarna coklat kehitaman dan gabah hampa.',
    mb: 0.90,
    md: 0.05
  },
  {
    id: 'sym_padi_3',
    code: 'G03',
    cropType: 'padi',
    plantPart: 'daun',
    title: 'Garis kuning memanjang basah di tepi daun',
    description: 'Tepi daun menguning bergelombang dari ujung, daun tampak seperti tersiram air panas lalu mengering keabu-abuan.',
    mb: 0.88,
    md: 0.05
  },
  {
    id: 'sym_padi_4',
    code: 'G04',
    cropType: 'padi',
    plantPart: 'batang',
    title: 'Pucuk mati / Sundep pada fase vegetatif',
    description: 'Tunas utama menguning dan mudah dicabut karena bagian pangkal batang digerek larva.',
    mb: 0.85,
    md: 0.1
  },
  {
    id: 'sym_padi_5',
    code: 'G05',
    cropType: 'padi',
    plantPart: 'batang',
    title: 'Tanaman roboh melingkar / Hopperburn',
    description: 'Rumpun padi menguning kecokelatan mengering serentak seperti terbakar akibat isapan nimfa cokelat di pangkal batang.',
    mb: 0.92,
    md: 0.05
  },

  // --- CABAI ---
  {
    id: 'sym_cabai_1',
    code: 'G06',
    cropType: 'cabai',
    plantPart: 'buah',
    title: 'Bercak konsentris melekuk pada buah',
    description: 'Bercak bundar melekuk ke dalam berwarna coklat kehitaman dengan titik spora melingkar seperti cincin sasaran bidik.',
    mb: 0.92,
    md: 0.05
  },
  {
    id: 'sym_cabai_2',
    code: 'G07',
    cropType: 'cabai',
    plantPart: 'daun',
    title: 'Daun keriting melengkung ke atas & menguning',
    description: 'Helaian daun muda menyempit, kaku, melengkung ke atas seperti perahu, permukaan bawah kecokelatan keperakan.',
    mb: 0.85,
    md: 0.1
  },
  {
    id: 'sym_cabai_3',
    code: 'G08',
    cropType: 'cabai',
    plantPart: 'batang',
    title: 'Layu mendadak saat siang daun tetap hijau',
    description: 'Tanaman cabai tiba-tiba layu serempak di siang hari terik, segar di pagi hari, pangkal batang jika dipotong berlendir putih.',
    mb: 0.90,
    md: 0.05
  },
  {
    id: 'sym_cabai_4',
    code: 'G09',
    cropType: 'cabai',
    plantPart: 'daun',
    title: 'Daun menguning cerah belang kerdil (Gemini Virus)',
    description: 'Tulang daun menguning tegas (urat daun kuning), helai daun mosaik kuning cerah dan ukuran daun mengecil.',
    mb: 0.92,
    md: 0.05
  },

  // --- JAGUNG ---
  {
    id: 'sym_jagung_1',
    code: 'G10',
    cropType: 'jagung',
    plantPart: 'daun',
    title: 'Garis klorosis memanjang sejajar tulang daun',
    description: 'Garis putih-kuning pucat membujur di daun muda, bagian bawah daun tampak serbuk putih seperti tepung (spora jamur).',
    mb: 0.90,
    md: 0.05
  },
  {
    id: 'sym_jagung_2',
    code: 'G11',
    cropType: 'jagung',
    plantPart: 'daun',
    title: 'Bercak lonjong cokelat memanjang (Hawar Daun)',
    description: 'Bercak elips memanjang seperti kumparan warna coklat keabu-abuan pada helaian daun bawah menjalar ke atas.',
    mb: 0.85,
    md: 0.05
  },
  {
    id: 'sym_jagung_3',
    code: 'G12',
    cropType: 'jagung',
    plantPart: 'daun',
    title: 'Lubang gerek bergerigi & kotoran mirip serbuk gergaji',
    description: 'Daun pupuk terkoyak robek bolong besar, terdapat kotoran gumpalan larva di dalam pucuk kuncup daun.',
    mb: 0.92,
    md: 0.05
  },

  // --- TOMAT ---
  {
    id: 'sym_tomat_1',
    code: 'G13',
    cropType: 'tomat',
    plantPart: 'daun',
    title: 'Bercak basah kehitaman melepuh berjamur putih (Busuk Daun)',
    description: 'Bercak basah seperti tersiram air mendidih, cepat membusuk kecokelatan kehitaman, ada lapisan putih di bawah daun pada udara lembap.',
    mb: 0.92,
    md: 0.05
  },
  {
    id: 'sym_tomat_2',
    code: 'G14',
    cropType: 'tomat',
    plantPart: 'buah',
    title: 'Pangkal/pantat buah membusuk menghitam cekung (Blossom End Rot)',
    description: 'Bagian ujung bawah buah tomat cekung mengering kulit menghitam keras datar akibat defisiensi kalsium fisiologis.',
    mb: 0.88,
    md: 0.05
  },

  // --- BAWANG MERAH ---
  {
    id: 'sym_bawang_1',
    code: 'G15',
    cropType: 'bawang',
    plantPart: 'daun',
    title: 'Ujung daun mengering putih melepuh & patah terkulai',
    description: 'Ujung daun putih runcing terkulai, dasar tanaman membusuk berbau busuk basah atau spora ungu kehitaman.',
    mb: 0.88,
    md: 0.05
  },
  {
    id: 'sym_bawang_2',
    code: 'G16',
    cropType: 'bawang',
    plantPart: 'daun',
    title: 'Daun transparan bergaris perak memutih (Ulat Grayak)',
    description: 'Epidermis luar daun utuh tapi bagian dalam dimakan ulat tampak selaput putih bening tembus pandang.',
    mb: 0.90,
    md: 0.05
  },

  // --- KOPI ---
  {
    id: 'sym_kopi_1',
    code: 'G17',
    cropType: 'kopi',
    plantPart: 'daun',
    title: 'Bercak serbuk jingga seperti karat di balik daun',
    description: 'Bercak kuning bundar di permukaan atas, di bawah daun terdapat lapisan tepung spora warna oranye/jingga berkarat.',
    mb: 0.95,
    md: 0.05
  },
  {
    id: 'sym_kopi_2',
    code: 'G18',
    cropType: 'kopi',
    plantPart: 'buah',
    title: 'Lubang jarum hitam di ujung buah kopi (PBKo)',
    description: 'Ada lubang gerek kecil di bagian diskus buah kopi muda maupun masak, biji kopi hampa berlubang.',
    mb: 0.90,
    md: 0.05
  },

  // --- KAKAO ---
  {
    id: 'sym_kakao_1',
    code: 'G19',
    cropType: 'kakao',
    plantPart: 'buah',
    title: 'Bercak coklat tua batas tegas melingkari buah kakao',
    description: 'Bercak busuk warna coklat gelap basah meluas dari ujung atau tangkai menutupi kulit buah, biji lengket membusuk.',
    mb: 0.94,
    md: 0.05
  },
  {
    id: 'sym_kakao_2',
    code: 'G20',
    cropType: 'kakao',
    plantPart: 'buah',
    title: 'Buah kakao belang masak awal & biji melekat keras (PBK)',
    description: 'Buah kakao menguning belang tak rata saat masih kecil, saat dibelah biji lengket menyatu sulit dicungkil.',
    mb: 0.91,
    md: 0.05
  },

  // --- KELAPA SAWIT ---
  {
    id: 'sym_sawit_1',
    code: 'G21',
    cropType: 'sawit',
    plantPart: 'batang',
    title: 'Muncul jamur kipas kayu keras di pangkal batang',
    description: 'Basidiokarp jamur berbentuk setengah lingkaran seperti kipas berkayu di pangkal batang, pelepah patah menggantung sengkleh.',
    mb: 0.96,
    md: 0.05
  },
  {
    id: 'sym_sawit_2',
    code: 'G22',
    cropType: 'sawit',
    plantPart: 'daun',
    title: 'Pucuk tombak daun tidak membuka & membusuk (Busuk Pupuk)',
    description: 'Daun tombak pucuk sawit layu, membusuk lunak berbau busuk, mudah dicabut dari titik tumbuh.',
    mb: 0.89,
    md: 0.05
  },

  // --- KEDELAI ---
  {
    id: 'sym_kedelai_1',
    code: 'G23',
    cropType: 'kedelai',
    plantPart: 'daun',
    title: 'Bintik kecil cokelat kemerahan karat daun kedelai',
    description: 'Bintik coklat berpusar di permukaan bawah daun, daun rontok prematur sebelum polong terisi penuh.',
    mb: 0.88,
    md: 0.05
  }
];

export const INITIAL_DISEASES: Disease[] = [
  // 1. BLAS PADI (Magnaporthe oryzae)
  {
    id: 'dis_padi_blas',
    cropType: 'padi',
    nameIndo: 'Penyakit Blas Padi (Blas Daun & Leher)',
    scientificName: 'Magnaporthe oryzae (Pyricularia oryzae)',
    pathogenType: 'jamur',
    symptoms: ['sym_padi_1', 'sym_padi_2'],
    symptomSummary: 'Bercak ketupat khas pada helai daun dan busuk kehitaman pada leher malai menyebabkan bulir hampa patah leher.',
    affectedParts: ['daun', 'batang', 'bulir'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Aplikasi Suspensi Trichoderma harzianum & Paenibacillus polymyxa',
        activeBioCompound: 'Trichoderma harzianum (Enzim Selulase & Glukanase antagonis jamur)',
        ingredients: [
          'Biakan isolat Trichoderma padat 200 gram',
          'Air kelapa muda segar 1 Liter (nutrisi induksi spora)',
          'Air bersih tanpa kaporit 15 Liter'
        ],
        instructions: [
          'Campurkan biakan Trichoderma ke dalam air kelapa lalu aduk merata dan diamkan 2 jam.',
          'Saring larutan menggunakan kain kasa agar nosel sprayer tidak tersumbat.',
          'Encerkan ke dalam 15 Liter air sprayer.',
          'Semprotkan ke pangkal tanaman dan daun secara merata pada pagi atau sore hari.'
        ],
        applicationTiming: 'Aplikasi pagi hari (07:00-09:00) atau sore (16:00-17:30) saat matahari teduh. Ulangi setiap 7 hari.'
      },
      {
        category: 'pestisida_nabati',
        title: 'Ekstrak Nabati Daun Sirih & Lengkuas Anti-Jamur',
        activeBioCompound: 'Eugenol & Kavikol (Senyawa fenolik fungistatik alami)',
        ingredients: [
          'Daun sirih hijau segar 300 gram',
          'Rimpang lengkuas 200 gram (diparut halus)',
          'Sabun lerak / sabun colek 1 sendok teh (perekat alami)',
          'Air 5 Liter'
        ],
        instructions: [
          'Tumbuk daun sirih dan parutan lengkuas sampai mengeluarkan getah pekat.',
          'Rebus dengan 2 Liter air selama 20 menit hingga mendidih lalu dinginkan.',
          'Saring dan tambahkan 3 Liter air dingin serta 1 sdt lerak.',
          'Semprotkan langsung ke daun yang mulai terinfeksi bercak ketupat.'
        ],
        applicationTiming: 'Semprotkan interval 4 hari sekali pada awal gejala.'
      },
      {
        category: 'pencegahan',
        title: 'Manajemen Agronomis Imbangan Hara',
        activeBioCompound: 'Silika (Si) & Kalium (K)',
        instructions: [
          'Hentikan penambahan pupuk Urea berlebih saat kondisi cuaca mendung atau kelembaban tinggi >85%.',
          'Tambahkan abu sekam padi (kaya silika organik) pada pematang untuk mengeraskan dinding sel daun.'
        ],
        applicationTiming: 'Saat pengolahan tanah dan fase anakan aktif.'
      }
    ],
    scientificReference: {
      journalOrDb: 'International Rice Research Institute (IRRI) & Europe PMC (PMC7149302)',
      doiOrAccession: '10.1016/j.plantsci.2020.110488',
      summary: 'Kajian patogenesis Magnaporthe oryzae menunjukkan penetrasi hifa melalui apresorium dapat ditekan efektif oleh metabolit sekunder Trichoderma sp. dan akumulasi silika amorf pada jaringan epidermis padi.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.90,
    updatedAt: '2026-09-15',
    version: 1
  },

  // 2. HAWAR DAUN BAKTERI PADI (Xanthomonas oryzae)
  {
    id: 'dis_padi_hdb',
    cropType: 'padi',
    nameIndo: 'Hawar Daun Bakteri Padi (Kresek)',
    scientificName: 'Xanthomonas oryzae pv. oryzae',
    pathogenType: 'bakteri',
    symptoms: ['sym_padi_3'],
    symptomSummary: 'Tepi daun menguning melepuh bergelombang basah dari pucuk, tampak seperti layu tersiram air panas lalu mengering abu-abu keputihan.',
    affectedParts: ['daun'],
    severityLevel: 'parah',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Bakterisida Hayati Corynebacterium / Pseudomonas fluorescens',
        activeBioCompound: '2,4-Diacetylphloroglucinol (DAPG) & Siderofor P. fluorescens',
        ingredients: [
          'Biakan isolat cair Pseudomonas fluorescens 100 mL',
          'Gula merah 50 gram (larutkan)',
          'Air sumur 14 Liter'
        ],
        instructions: [
          'Larutkan bibit bakteri bersama air gula merah yang sudah dingin.',
          'Diamkan 1 jam untuk mengaktifkan bakteri antagonis.',
          'Masukkan ke tangki sprayer bersih bebas residu kimia sintetis.',
          'Semprotkan ke tajuk tanaman pada pagi hari.'
        ],
        applicationTiming: 'Semprot pada umur 20, 35, dan 50 HST atau segera saat bercak kuning tepi mulai tampak.'
      },
      {
        category: 'pestisida_nabati',
        title: 'Ekstrak Bawang Putih & Kunyit Bakterisida',
        activeBioCompound: 'Allicin & Kurkuminoid',
        ingredients: [
          'Bawang putih 250 gram (dihaluskan)',
          'Rimpang kunyit 200 gram (diparut)',
          'Air 5 Liter'
        ],
        instructions: [
          'Blender bawang putih dan kunyit dengan 1 liter air hingga lembut.',
          'Saring dan tambahkan 4 liter air sisa.',
          'Semprotkan segera dalam kurun waktu 24 jam setelah peracikan agar alisin tidak terdegradasi.'
        ],
        applicationTiming: 'Sore hari pukul 16:30. Hindari terik matahari langsung.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Phytopathology Journal (APS) & NCBI BioProject PRJNA224116',
      summary: 'Xanthomonas oryzae pv. oryzae menginfeksi melalui hidatoda daun padi. Biokontrol Pseudomonas fluorescens menghasilkan siderofor pengikat besi yang secara signifikan menurunkan kolonisasi bakteri patogen.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.88,
    updatedAt: '2026-09-18',
    version: 1
  },

  // 3. WERENG BATANG COKELAT PADI (Nilaparvata lugens)
  {
    id: 'dis_padi_wereng',
    cropType: 'padi',
    nameIndo: 'Serangan Wereng Batang Cokelat (WBC & Hopperburn)',
    scientificName: 'Nilaparvata lugens (Stål)',
    pathogenType: 'hama',
    symptoms: ['sym_padi_5'],
    symptomSummary: 'Rumpun tanaman mengering kecoklatan serempak seperti terbakar melingkar di tengah hamparan sawah.',
    affectedParts: ['batang', 'daun'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Bio-Insektisida Jamur Entomopatogen Beauveria bassiana',
        activeBioCompound: 'Beauvericin & Oosporein (Toksin perusak kutikula serangga)',
        ingredients: [
          'Spora padat jagung Beauveria bassiana 200 gram',
          'Minyak kelapa / minyak sawit 1 sdt (pengemulsi spora)',
          'Air bersih 14 Liter'
        ],
        instructions: [
          'Kucek media jamur dalam air secara merata hingga spora putih terlepas.',
          'Saring dengan kain halus dan campurkan 1 sdt minyak kelapa agar spora menempel di tubuh wereng.',
          'Arahkan semprotan ke pangkal rumpun padi di bawah tajuk tempat wereng berkumpul.'
        ],
        applicationTiming: 'Sore hari (16:30 - 18:00) saat kelembaban tinggi dan sinar UV matahari sudah meredup.'
      },
      {
        category: 'mekanis_kultur',
        title: 'Pengeringan Air Sawah (Intermittent Irrigation)',
        activeBioCompound: 'Pengendalian Mikroklimat',
        instructions: [
          'Keringkan air sawah sampai tanah merekah retak rambut selama 3-4 hari untuk menurunkan kelembaban di rumpun bawah.',
          'Lestarikan musuh alami laba-laba serigala (Pardosa pseudoannulata) dan kumbang Paederus fuscipes.'
        ],
        applicationTiming: 'Segera saat populasi nimfa terpantau > 5 ekor/rumpun.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Journal of Economic Entomology & CABI Compendium',
      summary: 'Beauveria bassiana mempenetrasi kutikula Nilaparvata lugens dalam tempo 24-48 jam. Pengurangan genangan air menurunkan kelembaban tajuk yang merupakan habitat ideal multiplikasi nimfa wereng.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.92,
    updatedAt: '2026-09-20',
    version: 1
  },

  // 4. ANTRAKNOSA CABAI (Colletotrichum capsici)
  {
    id: 'dis_cabai_antraknosa',
    cropType: 'cabai',
    nameIndo: 'Penyakit Antraknosa Cabai (Patek)',
    scientificName: 'Colletotrichum capsici / Colletotrichum gloeosporioides',
    pathogenType: 'jamur',
    symptoms: ['sym_cabai_1'],
    symptomSummary: 'Bercak konsentris melekuk cekung seperti cincin bidik pada buah cabai hijau maupun merah, buah busuk kering rontok.',
    affectedParts: ['buah', 'daun'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'pestisida_nabati',
        title: 'Formula Pestisida Minyak Mimba & Ekstrak Daun Sirsak',
        activeBioCompound: 'Azadirachtin, Salannin & Annonain',
        ingredients: [
          'Minyak mimba (pure cold-pressed Neem Oil) 30 mL',
          'Daun sirsak tua 30 lembar (ditumbuk halus diperas)',
          'Sabun lerak cair 5 mL (emulsifier)',
          'Air bersih 10 Liter'
        ],
        instructions: [
          'Campurkan minyak mimba dengan sabun lerak terlebih dahulu hingga teremulsi berwarna putih susu.',
          'Tambahkan air perasan daun sirsak dan aduk rata.',
          'Tuang ke dalam tangki 10 liter air.',
          'Semprotkan menyelimuti seluruh buah cabai dan permukaan daun.'
        ],
        applicationTiming: 'Semprot sore hari setiap 4-5 hari sekali, terutama pasca hujan deras.'
      },
      {
        category: 'agen_hayati',
        title: 'Inokulasi Jamur Antagonis Gliocladium sp. / Trichoderma',
        activeBioCompound: 'Gliotoxin & Viridin',
        instructions: [
          'Kocorkan suspensi biakan Trichoderma pada lubang tanam saat awal tanam dan fase pembentukan buah.',
          'Petik dan bakar buah yang terinfeksi (jangan dibuang di parit lahan).'
        ],
        applicationTiming: 'Pagi hari saat cuaca cerah.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Plant Pathology Journal (Wiley) & Europe PMC (PMC6582455)',
      summary: 'Kandungan Azadirachtin dari Azadirachta indica menghambat perkecambahan konidia Colletotrichum capsici sebesar 78.4% secara in vitro tanpa menimbulkan fitotoksisitas pada buah cabai.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.94,
    updatedAt: '2026-09-22',
    version: 1
  },

  // 5. VIRUS GEMINI CABAI (Pepper Yellow Leaf Curl Virus)
  {
    id: 'dis_cabai_gemini',
    cropType: 'cabai',
    nameIndo: 'Penyakit Kuning Bule Cabai (Virus Gemini)',
    scientificName: 'Pepper yellow leaf curl virus (Begomovirus)',
    pathogenType: 'virus',
    symptoms: ['sym_cabai_4', 'sym_cabai_2'],
    symptomSummary: 'Urat daun menguning cerah menjalar ke seluruh helai daun (daun bule), tanaman kerdil, buah sedikit dan abnormal.',
    affectedParts: ['daun', 'bunga', 'buah'],
    severityLevel: 'parah',
    ecoFriendlyTreatments: [
      {
        category: 'pestisida_nabati',
        title: 'Pengendalian Kutu Kebul Vektor dengan Ekstrak Tembakau & Bawang',
        activeBioCompound: 'Nikotin Organik & Diallyl Disulfide (Repelen serangga vektor Bemisia tabaci)',
        ingredients: [
          'Tembakau rajangan / puntung rokok 100 gram',
          'Bawang putih 100 gram (dihaluskan)',
          'Air hangat 3 Liter',
          'Perekat nabati 1 sdt'
        ],
        instructions: [
          'Rendam tembakau dan bawang putih dalam air hangat selama 24 jam.',
          'Saring ampasnya secara teliti.',
          'Encerkan 1 Liter larutan pekat ini ke dalam 10 Liter air semprot.',
          'Semprotkan ke balik daun cabai tempat kutu kebul bersarang.'
        ],
        applicationTiming: 'Pagi hari pukul 06:30 - 08:00 saat serangga vektor kutu kebul masih pasif berembun.'
      },
      {
        category: 'mekanis_kultur',
        title: 'Pemasangan Perangkap Kuning Lengket (Yellow Sticky Trap)',
        activeBioCompound: 'Fototaksis Spektrum Panjang Gelombang 550nm',
        instructions: [
          'Pasang lembar plastik kuning terang beroleskan lem serangga / oli bekas di sekeliling bedengan lahan.',
          'Pasang setinggi 20-30 cm di atas tajuk tanaman cabai untuk menjerat kutu kebul dewasa.'
        ],
        applicationTiming: 'Pasang sejak umur bibit 7 HST (40 perangkap per hektar).'
      }
    ],
    scientificReference: {
      journalOrDb: 'Annals of Applied Biology & NCBI Taxonomy ID 223338',
      summary: 'Begomovirus ditularkan secara persisten oleh Bemisia tabaci. Penekanan populasi vektor pada 15-30 hari pertama tanam menggunakan perangkap optik dan repellent botani mengurangi insidensi virus hingga 62%.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.91,
    updatedAt: '2026-09-25',
    version: 1
  },

  // 6. BULAI JAGUNG (Peronosclerospora maydis)
  {
    id: 'dis_jagung_bulai',
    cropType: 'jagung',
    nameIndo: 'Penyakit Bulai Jagung (Bule)',
    scientificName: 'Peronosclerospora maydis / P. philippinensis',
    pathogenType: 'jamur',
    symptoms: ['sym_jagung_1'],
    symptomSummary: 'Garis klorosis putih kekuningan sejajar urat daun, terdapat serbuk tepung putih spora di bawah daun pada pagi hari berembun.',
    affectedParts: ['daun', 'batang'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'pencegahan',
        title: 'Perlakuan Benih (Seed Treatment) dengan Trichoderma & Bacillus',
        activeBioCompound: 'Bacillus subtilis & Trichoderma viride',
        ingredients: [
          'Serbuk biakan Trichoderma 20 gram per 1 kg benih jagung',
          'Air tajin / air gula encer 2 sendok makan (sebagai perekat)'
        ],
        instructions: [
          'Campurkan benih jagung dengan air tajin hingga basah merata.',
          'Taburkan serbuk Trichoderma lalu aduk hingga seluruh permukaan benih terselimuti spora hijau.',
          'Angin-anginkan di tempat teduh selama 1 jam sebelum ditanam ke lubang tugal.'
        ],
        applicationTiming: 'Tepat sebelum penanaman benih di lahan.'
      },
      {
        category: 'mekanis_kultur',
        title: 'Eradikasi Selektif Tanaman Terinfeksi Awal',
        activeBioCompound: 'Sanitasi Fisik',
        instructions: [
          'Cabut tanaman jagung yang sudah menunjukkan gejala bulai sejak umur < 30 HST hingga akarnya.',
          'Masukkan ke kantong plastik dan kubur atau bakar jauh dari area lahan untuk memutus spora konidia.'
        ],
        applicationTiming: 'Lakukan pemeriksaan lahan rutin setiap 3 hari sekali di pagi hari.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Plant Disease (APS) & Europe PMC (PMC8849201)',
      summary: 'Peronosclerospora maydis merupakan patogen oomycete obligat sistemik. Pelapisan benih dengan Bacillus subtilis menginduksi resistensi sistemik didapat (SAR) melalui jalur asam jasmonat pada bibit jagung muda.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.93,
    updatedAt: '2026-09-28',
    version: 1
  },

  // 7. ULAT GRAYAK JAGUNG (Spodoptera frugiperda / FAW)
  {
    id: 'dis_jagung_ulat',
    cropType: 'jagung',
    nameIndo: 'Ulat Grayak Jagung Baru (Fall Armyworm / FAW)',
    scientificName: 'Spodoptera frugiperda (J.E. Smith)',
    pathogenType: 'hama',
    symptoms: ['sym_jagung_3'],
    symptomSummary: 'Daun pupus robek berlubang parah menyerupai serpihan bergerigi, terdapat gundukan serbuk kotoran basah di dalam corong daun.',
    affectedParts: ['daun', 'batang', 'buah'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Bio-Insektisida Bakteri Bacillus thuringiensis (Bt)',
        activeBioCompound: 'Delta-Endotoksin / Protein Kristal Cry1Ac & Cry1Fa',
        ingredients: [
          'Formulasi bubuk Bacillus thuringiensis kurstaki 25 gram',
          'Air bersih 14 Liter'
        ],
        instructions: [
          'Larutkan bubuk Bt ke dalam sedikit air terlebih dahulu hingga homogen.',
          'Masukkan ke tangki sprayer.',
          'Semprotkan nosel diarahkan tegak lurus langsung masuk ke dalam corong pucuk tanaman jagung tempat larva bersembunyi.'
        ],
        applicationTiming: 'Aplikasi sore hari (pukul 17:00) saat larva ulat keluar dari lubang corong untuk makan.'
      },
      {
        category: 'mekanis_kultur',
        title: 'Penaburan Abu Dapur / Pasir Halus ke Dalam Corong',
        activeBioCompound: 'Abrasif Fisik Kutikula Larva',
        instructions: [
          'Campurkan abu gosok dapur kering dengan sedikit kapur tohor (rasio 5:1).',
          'Jumput sedikit dan taburkan langsung ke dalam corong pucuk daun tanaman yang terserang.',
          'Tekstur abrasif abu melukai segmen tubuh ulat dan mengganggu proses makan.'
        ],
        applicationTiming: 'Dapat dilakukan kapan saja saat terlihat gejala awal gerekan.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Nature Scientific Reports & FAO Fall Armyworm Portal',
      doiOrAccession: '10.1038/s41598-020-72120-x',
      summary: 'Spodoptera frugiperda memiliki siklus hidup agresif. Aplikasi Bacillus thuringiensis menargetkan reseptor cadherin pada membran usus tengah larva instar 1-3 dengan mortalitas hingga 94% dalam 72 jam.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.95,
    updatedAt: '2026-10-01',
    version: 1
  },

  // 8. BUSUK DAUN TOMAT (Phytophthora infestans)
  {
    id: 'dis_tomat_phytophthora',
    cropType: 'tomat',
    nameIndo: 'Busuk Daun & Batang Tomat (Hawar Daun Phytophthora)',
    scientificName: 'Phytophthora infestans (Mont.) de Bary',
    pathogenType: 'jamur',
    symptoms: ['sym_tomat_1'],
    symptomSummary: 'Bercak basah kehitaman melepuh luas di daun dan tangkai, busuk lembek berbau khas, dilapisi serabut putih tipis saat udara dingin lembap.',
    affectedParts: ['daun', 'batang', 'buah'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'pestisida_nabati',
        title: 'Fungsida Nabati Ekstrak Kulit Batang Mahoni & Biji Mimba',
        activeBioCompound: 'Swietenine & Azadirachtin',
        ingredients: [
          'Kulit batang mahoni 300 gram (direbus)',
          'Biji mimba tumbuk 200 gram',
          'Air 5 Liter'
        ],
        instructions: [
          'Rebus kulit mahoni dalam 2 liter air selama 30 menit.',
          'Rendam biji mimba dalam air dingin 3 liter semalaman lalu campur rebusan mahoni.',
          'Saring dan semprotkan merata ke daun atas dan bawah.'
        ],
        applicationTiming: 'Semprot intensif 3 hari sekali terutama di musim penghujan bersuhu sejuk (18-24°C).'
      },
      {
        category: 'pencegahan',
        title: 'Pemangkasan Daun Bawah (Pruning) & Mulsa Plastik Perak',
        activeBioCompound: 'Aerasi Tajuk Tanaman',
        instructions: [
          'Pangkas semua cabang dan daun air tomat yang berjarak < 30 cm dari permukaan tanah.',
          'Gunakan mulsa plastik perak untuk mencegah percikan tanah (rain splash) yang membawa spora ke daun.'
        ],
        applicationTiming: 'Mulai umur 20 HST dan ulangi berkala.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Phytopathology (APS) & NCBI BioProject PRJNA17665',
      summary: 'Phytophthora infestans menyebar melalui zoospore motil biflagellata dalam lapisan air bebas. Peningkatan aerasi tajuk dan senyawa limonoid mahoni menurunkan viabilitas sporangia hingga 81%.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.94,
    updatedAt: '2026-10-02',
    version: 1
  },

  // 9. KARAT DAUN KOPI (Hemileia vastatrix)
  {
    id: 'dis_kopi_karat',
    cropType: 'kopi',
    nameIndo: 'Penyakit Karat Daun Kopi',
    scientificName: 'Hemileia vastatrix Berk. & Broome',
    pathogenType: 'jamur',
    symptoms: ['sym_kopi_1'],
    symptomSummary: 'Bercak kuning di atas daun dan terdapat serbuk tepung berwarna oranye/jingga berkarat di bawah permukaan daun, daun gugur prematur.',
    affectedParts: ['daun'],
    severityLevel: 'parah',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Aplikasi Jamur Hiperparasit Verticillium lecanii (Lecanicillium)',
        activeBioCompound: 'Lecanicillium lecanii (Mikoparasit pengikis urediniospora)',
        ingredients: [
          'Formulasi biakan Lecanicillium lecanii 100 gram',
          'Air bersih 14 Liter'
        ],
        instructions: [
          'Larutkan spora jamur hiperparasit ke dalam air bersih.',
          'Semprotkan langsung ke bagian bawah daun kopi yang memiliki serbuk oranye.',
          'Jamur hiperparasit akan tumbuh menyelimuti dan memangsa spora karat daun.'
        ],
        applicationTiming: 'Awal musim penghujan saat spora karat mulai berkembang aktif.'
      },
      {
        category: 'mekanis_kultur',
        title: 'Pengaturan Naungan & Pemangkasan Lepas Panen',
        activeBioCompound: 'Intensitas Radiasi Sinar Matahari (UV alami)',
        instructions: [
          'Pangkas pohon penaung kopi (Lamtoro/Gamal) agar intensitas cahaya matahari masuk mencapai 60-70%.',
          'Pangkas cabang wiwilan dan cabang cacing kopi yang tidak produktif.'
        ],
        applicationTiming: 'Setelah panen raya kopi.'
      }
    ],
    scientificReference: {
      journalOrDb: 'European Journal of Plant Pathology & Springer Agronomy',
      doiOrAccession: '10.1007/s10658-019-01784-y',
      summary: 'Hemileia vastatrix merupakan basidiomycete yang sensitif terhadap mikoparasitisme Lecanicillium lecanii dan radiasi sinar UV-A alami. Manajemen tajuk terbuka menurunkan tingkat infeksi karat daun secara konsisten.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.95,
    updatedAt: '2026-10-05',
    version: 1
  },

  // 10. BUSUK PANGKAL BATANG KELAPA SAWIT (Ganoderma boninense)
  {
    id: 'dis_sawit_ganoderma',
    cropType: 'sawit',
    nameIndo: 'Busuk Pangkal Batang Kelapa Sawit (Ganoderma)',
    scientificName: 'Ganoderma boninense Pat.',
    pathogenType: 'jamur',
    symptoms: ['sym_sawit_1'],
    symptomSummary: 'Muncul tubuh buah jamur mirip kipas berkayu keras di pangkal batang pohon sawit, beberapa daun tombak tegak tak membuka dan pelepah patah terkulai.',
    affectedParts: ['batang', 'akar'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Aplikasi Massal Biakan Trichoderma asperellum / T. virens',
        activeBioCompound: 'Trichoderma asperellum (Isolat indigenous perkebunan sawit)',
        ingredients: [
          'Kompos aktif Trichoderma 1-2 kg per pokok pohon sawit',
          'Pupuk kandang matang 5 kg'
        ],
        instructions: [
          'Buat parit melingkar (piringan) selebar 30 cm sedalam 20 cm di sekeliling pangkal batang sawit.',
          'Taburkan campuran kompos Trichoderma dan pupuk kandang secara merata.',
          'Tutup kembali dengan tanah galian untuk menjaga kelembaban mikroba hayati.'
        ],
        applicationTiming: 'Aplikasi 2 kali setahun (awal dan akhir musim hujan).'
      },
      {
        category: 'mekanis_kultur',
        title: 'Pembuatan Parit Isolasi (Trenching)',
        activeBioCompound: 'Pemutus Kontak Akar',
        instructions: [
          'Gali parit isolasi sedalam 1.5 - 2 meter di antara pohon yang terinfeksi dan pohon sehat sekitarnya.',
          'Langkah ini memutus kontak langsung akar yang terinfeksi miselium jamur Ganoderma di dalam profil tanah.'
        ],
        applicationTiming: 'Segera setelah ditemukan 1 pohon sawit terkonfirmasi Ganoderma di blok kebun.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Mycologia & Pusat Penelitian Kelapa Sawit (PPKS) Medan',
      doiOrAccession: '10.1080/00275514.2021.1923412',
      summary: 'Ganoderma boninense menyebabkan lignolisis degradasi vaskular batang sawit. Inokulasi dini Trichoderma asperellum menunjukkan kemampuannya mengkolonisasi rizosfer dan menekan biomassa basidiospora hingga 67%.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.96,
    updatedAt: '2026-10-06',
    version: 1
  }
];

export const INITIAL_WEATHER: WeatherInfo = {
  location: 'Pusat Pertanian Banyuwangi (Jawa Timur)',
  temperature: 28,
  humidity: 86,
  weatherDesc: 'Berawan Lembap & Hujan Ringan Sore',
  windSpeed: 8,
  rainfallMm: 12.5,
  farmAlert: {
    level: 'waspada',
    message: 'Kelembapan tinggi (86%) berpotensi memicu ledakan spora Blas Padi dan Jamur Antraknosa Cabai!',
    recommendation: 'Tunda aplikasi pupuk nitrogen tunggal berlebih. Pantau tajuk tanaman dan siapkan aplikasi agen hayati Trichoderma sore ini.'
  },
  sprayRecommendation: {
    suitable: true,
    reason: 'Kecepatan angin 8 km/jam aman dari drift semprotan. Ideal semprot pukul 16:00 - 17:30.'
  }
};

export const INITIAL_FORUM_POSTS: ForumPost[] = [
  {
    id: 'post_1',
    authorName: 'Pak Sukardi',
    authorVillage: 'Desa Rogojampi, Banyuwangi',
    role: 'petani',
    crop: 'cabai',
    title: 'Daun cabai mulai muncul bercak hitam melingkar sehabis hujan lebat 3 hari',
    content: 'Salam sedulur tani, setelah hujan deras berurutan 3 hari kemarin, buah cabai rawit saya mulai ada bintik hitam melekuk seperti terkena sundutan rokok. Apakah ini antraknosa patek? Adakah resep ramuan nabati yang sudah terbukti manjur tanpa kimia toko?',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    likes: 12,
    likedByMe: false,
    isVerifiedAgronomist: true,
    verifiedNotes: 'Teridentifikasi Antraknosa (Colletotrichum sp.). Segera petik buah yang terinfeksi dan semprotkan formulasi minyak mimba + rebusan daun sirih seperti panduan pada katalog AgroPakar.',
    createdAt: '2026-10-09T08:30:00Z',
    comments: [
      {
        id: 'c_1',
        authorName: 'Ir. Hendro Gunawan (Agronomis BPTP)',
        role: 'admin',
        content: 'Benar Pak Sukardi, itu antraknosa khas. Buah yang ada bercak langsung dipetik dan dimasukkan plastik dibakar, jangan dibuang di parit. Semprot ekstrak mimba dicampur sedikit sabun lerak sore nanti jam 16:30.',
        timestamp: '2026-10-09T09:15:00Z'
      },
      {
        id: 'c_2',
        authorName: 'Wayan Sudarma',
        role: 'petani',
        content: 'Saya kemarin coba tambahkan air perasan daun tembakau dan lengkuas Pak, alhamdulillah penyebaran ke buah sebelah langsung berhenti.',
        timestamp: '2026-10-09T10:45:00Z'
      }
    ]
  },
  {
    id: 'post_2',
    authorName: 'Ibu Siti Aminah',
    authorVillage: 'Kelompok Tani Harapan Maju, Karawang',
    role: 'petani',
    crop: 'padi',
    title: 'Berbagi tips sukses: Racikan Trichoderma + air kelapa untuk cegah patah leher',
    content: 'Musim tanam gadu kemarin sawah tetangga banyak kena patah leher (blas), tapi petak saya yang direndam bibitnya pakai Trichoderma dan disemprot air kelapa tetap tegak sampai panen. Biaya sangat murah karena bisa biakkan sendiri dari media jagung!',
    likes: 27,
    likedByMe: true,
    isVerifiedAgronomist: true,
    verifiedNotes: 'Praktik pertanian ramah lingkungan yang sangat dianjurkan. Induksi ketahanan sistemik bibit padi terbukti ilmiah menekan penetrasi jamur Pyricularia.',
    createdAt: '2026-10-08T14:20:00Z',
    comments: [
      {
        id: 'c_3',
        authorName: 'Kang Asep',
        role: 'petani',
        content: 'Takaran air kelapanya berapa banyak Bu Siti? Apakah air kelapa tua atau kelapa muda yang bagus?',
        timestamp: '2026-10-08T15:10:00Z'
      },
      {
        id: 'c_4',
        authorName: 'Ibu Siti Aminah',
        role: 'petani',
        content: 'Pakai kelapa muda lebih bagus Kang, cukup 1 liter untuk 15 liter tangki air semprot. Jangan lupa disaring kain kasa.',
        timestamp: '2026-10-08T16:00:00Z'
      }
    ]
  }
];

export const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif_1',
    title: 'Peringatan Dini Cuaca & Jamur',
    message: 'Kelembapan udara 86% tercatat hari ini. Petani Padi dan Cabai dihimbau waspada serangan Blas dan Antraknosa!',
    type: 'cuaca',
    timestamp: '2026-10-10T06:00:00Z',
    read: false,
    linkTab: 'weather'
  },
  {
    id: 'notif_2',
    title: 'Basis Data Penyakit Offline Tersedia',
    message: '30+ formulasi patogen tanaman pangan dan hortikultura telah tersimpan di memori HP Anda untuk diagnosis tanpa internet.',
    type: 'update_db',
    timestamp: '2026-10-10T07:15:00Z',
    read: true,
    linkTab: 'catalog'
  }
];
