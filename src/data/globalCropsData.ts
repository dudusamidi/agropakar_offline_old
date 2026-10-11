import { Disease, Symptom } from '../types';

export const GLOBAL_ADDITIONAL_SYMPTOMS: Symptom[] = [
  // --- KENTANG (Solanum tuberosum) ---
  {
    id: 'sym_kentang_1',
    code: 'G_KT01',
    cropType: 'kentang',
    plantPart: 'daun',
    title: 'Bercak basah coklat kehitaman di tepi daun (Hawar Daun)',
    description: 'Bercak basah melepuh dari tepi atau ujung daun meluas cepat saat dingin berembun, bagian bawah tampak jamur putih kapas halus.',
    mb: 0.94,
    md: 0.05
  },
  {
    id: 'sym_kentang_2',
    code: 'G_KT02',
    cropType: 'kentang',
    plantPart: 'akar',
    title: 'Umbi kentang busuk coklat berkarat di bawah kulit',
    description: 'Daging umbi di bawah kulit berubah kecokelatan kering bergranula keras hingga busuk basah menyengat.',
    mb: 0.92,
    md: 0.05
  },
  {
    id: 'sym_kentang_3',
    code: 'G_KT03',
    cropType: 'kentang',
    plantPart: 'batang',
    title: 'Layu mendadak dan lendir bakteri keluar dari umbi',
    description: 'Batang tanaman tiba-tiba layu pada siang terik, lingkaran vaskular umbi berwarna coklat dan mengeluarkan tetesan lendir putih saat dipijat.',
    mb: 0.95,
    md: 0.05
  },

  // --- PISANG (Musa paradisiaca) ---
  {
    id: 'sym_pisang_1',
    code: 'G_PS01',
    cropType: 'pisang',
    plantPart: 'daun',
    title: 'Daun menguning dari tepi patah terkulai di pangkal tangkai (Panama)',
    description: 'Daun tua menguning mulai dari tepian luar, lalu tangkai daun patah terkulai mengelilingi batang semu seperti rok rumbai.',
    mb: 0.96,
    md: 0.05
  },
  {
    id: 'sym_pisang_2',
    code: 'G_PS02',
    cropType: 'pisang',
    plantPart: 'batang',
    title: 'Batang semu dibelah membujur ada garis merah kecoklatan',
    description: 'Jaringan pembuluh vaskular batang semu mengalami diskolorasi merah darah, coklat keunguan, dan berbau khas masam busuk.',
    mb: 0.95,
    md: 0.05
  },
  {
    id: 'sym_pisang_3',
    code: 'G_PS03',
    cropType: 'pisang',
    plantPart: 'buah',
    title: 'Daging buah pisang menghitam busuk berlendir (Penyakit Darah)',
    description: 'Buah matang sebelum waktunya, saat dibelah daging buah bagian dalam membusuk basah kecokelatan berlendir merah kecokelatan.',
    mb: 0.93,
    md: 0.05
  },
  {
    id: 'sym_pisang_4',
    code: 'G_PS04',
    cropType: 'pisang',
    plantPart: 'daun',
    title: 'Garis bercak sempit cokelat berpusat hitam sejajar tulang daun (Sigatoka)',
    description: 'Bercak memanjang sempit seperti goresan pensil kuning lalu menjadi coklat gelap dengan pusat abu-abu mati membakar daun.',
    mb: 0.90,
    md: 0.05
  },

  // --- SINGKONG (Manihot esculenta) ---
  {
    id: 'sym_singkong_1',
    code: 'G_SK01',
    cropType: 'singkong',
    plantPart: 'daun',
    title: 'Daun keriting berkerut belang hijau kekuningan mosaik',
    description: 'Daun muda singkong mengalami distorsi parah, mengecil, tepi meliuk tidak rata dengan bercak mosaik kuning cerah kontras.',
    mb: 0.95,
    md: 0.05
  },
  {
    id: 'sym_singkong_2',
    code: 'G_SK02',
    cropType: 'singkong',
    plantPart: 'akar',
    title: 'Garis nekrotik cokelat kehitaman di dalam daging umbi (CBSD)',
    description: 'Daging umbi singkong tampak garis-garis kering kecokelatan berserat keras melintang yang merusak mutu pati.',
    mb: 0.91,
    md: 0.05
  },
  {
    id: 'sym_singkong_3',
    code: 'G_SK03',
    cropType: 'singkong',
    plantPart: 'daun',
    title: 'Bercak bersudut basah dan tetesan eksudat getah di bawah daun (Hawar Bakteri)',
    description: 'Bercak basah bersudut dibatasi tulang daun halus, permukaan bawah daun mengeluarkan tetesan getah lengket mengering berkilau.',
    mb: 0.89,
    md: 0.05
  },

  // --- JERUK (Citrus spp.) ---
  {
    id: 'sym_jeruk_1',
    code: 'G_JR01',
    cropType: 'jeruk',
    plantPart: 'daun',
    title: 'Daun menguning belang tidak simetris / Blotchy Mottle (CVPD / HLB)',
    description: 'Daun kaku menegak dengan corak kuning belang tak beraturan (asimetris) antara belahan kiri dan kanan helai daun.',
    mb: 0.97,
    md: 0.03
  },
  {
    id: 'sym_jeruk_2',
    code: 'G_JR02',
    cropType: 'jeruk',
    plantPart: 'buah',
    title: 'Buah jeruk asimetris, kecil, dan rasa asam pahit',
    description: 'Buah jeruk berbentuk tidak simetris (miring), warna kuning terbalik dari pangkal tangkai tetap hijau, biji di dalam abortus menghitam.',
    mb: 0.95,
    md: 0.05
  },
  {
    id: 'sym_jeruk_3',
    code: 'G_JR03',
    cropType: 'jeruk',
    plantPart: 'daun',
    title: 'Kudis gabus menonjol cokelat berhalo kuning di daun dan buah (Kanker Jeruk)',
    description: 'Bercak bundar menonjol seperti kawah gabus kasar berwarna coklat terang dikelilingi lingkaran kuning berminyak (halo kuning).',
    mb: 0.93,
    md: 0.05
  },

  // --- PEPAYA (Carica papaya) ---
  {
    id: 'sym_pepaya_1',
    code: 'G_PP01',
    cropType: 'pepaya',
    plantPart: 'buah',
    title: 'Cincin melingkar konsentris mirip donat pada kulit buah pepaya (PRSV)',
    description: 'Pola cincin bercincin hijau tua gelap atau kekuningan melingkar pada kulit buah, tangkai daun memiliki garis basah hijau tua.',
    mb: 0.96,
    md: 0.04
  },
  {
    id: 'sym_pepaya_2',
    code: 'G_PP02',
    cropType: 'pepaya',
    plantPart: 'akar',
    title: 'Pangkal batang dan akar busuk basah berbau busuk lembek (Phytophthora)',
    description: 'Pangkal batang di permukaan tanah melunak berair kecokelatan, daun menguning serentak layu dan pohon mudah roboh.',
    mb: 0.92,
    md: 0.05
  },

  // --- MANGGA (Mangifera indica) ---
  {
    id: 'sym_mangga_1',
    code: 'G_MG01',
    cropType: 'mangga',
    plantPart: 'bunga',
    title: 'Malai bunga mangga menghitam kering rontok (Antraknosa Bunga)',
    description: 'Tangkai malai bunga muncul bintik hitam meluas cepat mematikan bunga dan pentil mangga rontok massal.',
    mb: 0.93,
    md: 0.05
  },
  {
    id: 'sym_mangga_2',
    code: 'G_MG02',
    cropType: 'mangga',
    plantPart: 'buah',
    title: 'Bercak hitam melekuk dan belahan getah pada kulit buah mangga',
    description: 'Bercak hitam melekuk basah tidak beraturan pada buah matang, dapat muncul retakan kulit yang mengeluarkan getah coklat.',
    mb: 0.91,
    md: 0.05
  },

  // --- KUBIS / SAYURAN CRUCIFERAE (Brassica oleracea) ---
  {
    id: 'sym_kubis_1',
    code: 'G_KB01',
    cropType: 'kubis',
    plantPart: 'akar',
    title: 'Akar bengkak membesar seperti gada / pentungan (Akar Gada Plasmodiophora)',
    description: 'Akar utama dan cabang mengalami hipertrofi bengkak menyerupai gada kayu tidak beraturan, tanaman layu saat siang hari.',
    mb: 0.97,
    md: 0.03
  },
  {
    id: 'sym_kubis_2',
    code: 'G_KB02',
    cropType: 'kubis',
    plantPart: 'daun',
    title: 'Klorosis membentuk huruf V kuning di tepi daun (Busuk Hitam Xanthomonas)',
    description: 'Bercak kuning berbentuk huruf V melebar dari tepi daun dengan urat daun menghitam tegas di dalam bercak.',
    mb: 0.94,
    md: 0.05
  },

  // --- TEBU (Saccharum officinarum) ---
  {
    id: 'sym_tebu_1',
    code: 'G_TB01',
    cropType: 'tebu',
    plantPart: 'batang',
    title: 'Garis merah membujur di dalam empulur batang tebu berbau alkohol (Busuk Merah)',
    description: 'Saat batang tebu dibelah membujur tampak jaringan empulur merah tua dengan garis-garis putih melintang dan bau asam fermentasi.',
    mb: 0.95,
    md: 0.05
  },
  {
    id: 'sym_tebu_2',
    code: 'G_TB02',
    cropType: 'tebu',
    plantPart: 'daun',
    title: 'Pucuk tebu berubah menjadi cambuk hitam berdebu spora (Lekuk Cambuk)',
    description: 'Titik tumbuh pucuk memanjang melengkung menyerupai cambuk hitam pekat diselimuti serbuk jutaan spora jelaga.',
    mb: 0.96,
    md: 0.04
  },

  // --- KARET (Hevea brasiliensis) ---
  {
    id: 'sym_karet_1',
    code: 'G_KR01',
    cropType: 'karet',
    plantPart: 'akar',
    title: 'Miselium benang putih menempel tebal pada permukaan akar karet (Jamur Akar Putih)',
    description: 'Akar tunggang dan lateral diselimuti benang miselium jamur putih pipih menjalar menembus kulit, daun menguning kusam rontok.',
    mb: 0.97,
    md: 0.03
  },
  {
    id: 'sym_karet_2',
    code: 'G_KR02',
    cropType: 'karet',
    plantPart: 'batang',
    title: 'Alur sadap membusuk bergaris vertikal hitam (Garis Bidang Sadap)',
    description: 'Garis-garis nekrotik hitam sejajar pada bidang bekas sadapan lateks, getah lateks membeku berbau busuk masam.',
    mb: 0.92,
    md: 0.05
  },

  // --- TEH (Camellia sinensis) ---
  {
    id: 'sym_teh_1',
    code: 'G_TH01',
    cropType: 'teh',
    plantPart: 'daun',
    title: 'Lepuh melepuh tembus pandang pada daun muda teh (Cacar Daun Teh)',
    description: 'Bercak bundar melepuh cekung di atas dan cembung di bawah daun, warna awal kuning bening lalu putih berserbuk spora.',
    mb: 0.95,
    md: 0.05
  },

  // --- GANDUM (Triticum aestivum - Komoditas Dunia) ---
  {
    id: 'sym_gandum_1',
    code: 'G_GD01',
    cropType: 'gandum',
    plantPart: 'daun',
    title: 'Pustul serbuk jingga kecokelatan sejajar urat daun (Karat Garis Gandum)',
    description: 'Pustul urediniospora berwarna kuning oranye berderet sejajar panjang di sepanjang helaian daun dan pelepah batang.',
    mb: 0.94,
    md: 0.05
  },
  {
    id: 'sym_gandum_2',
    code: 'G_GD02',
    cropType: 'gandum',
    plantPart: 'bulir',
    title: 'Bulir gandum memutih prematur dengan bulu spora merah muda (Fusarium Head Blight)',
    description: 'Sebagian malai atau seluruh bulir gandum memutih layu lebih awal, pangkal bulir tampak lapisan miselium merah muda keemasan.',
    mb: 0.93,
    md: 0.05
  },

  // --- TEMBAKAU (Nicotiana tabacum) ---
  {
    id: 'sym_tembakau_1',
    code: 'G_TM01',
    cropType: 'tembakau',
    plantPart: 'daun',
    title: 'Belang mosaik hijau tua dan hijau muda melepuh (TMV)',
    description: 'Helaian daun tembakau bercorak mozaik hijau gelap timbul melepuh dengan tepi daun melengkung ke bawah, pertumbuhan kerdil.',
    mb: 0.96,
    md: 0.04
  },
  {
    id: 'sym_tembakau_2',
    code: 'G_TM02',
    cropType: 'tembakau',
    plantPart: 'batang',
    title: 'Pangkal batang menghitam busuk kering daun layu sepihak (Lanas Tembakau)',
    description: 'Pangkal batang setinggi tanah berubah hitam kering, empulur batang terbagi menjadi lempengan-lempengan cakram tipis khas.',
    mb: 0.94,
    md: 0.05
  },

  // --- APEL & ANGGUR (Komoditas Global & Hortikultura) ---
  {
    id: 'sym_apel_1',
    code: 'G_AP01',
    cropType: 'apel',
    plantPart: 'daun',
    title: 'Bercak beludru zaitun kehitaman pada daun dan kudis buah apel (Apple Scab)',
    description: 'Bercak bulat berwarna hijau zaitun gelap seperti beludru pada permukaan daun, kulit buah retak bergabus kasar.',
    mb: 0.93,
    md: 0.05
  },
  {
    id: 'sym_anggur_1',
    code: 'G_AG01',
    cropType: 'anggur',
    plantPart: 'daun',
    title: 'Bercak berminyak kekuningan di atas daun dan tepung putih di bawah (Downy Mildew)',
    description: 'Bercak seperti tumpahan minyak kuning tembus pandang di permukaan atas, di bawahnya terdapat kumpulan sporangia putih salju padat.',
    mb: 0.95,
    md: 0.05
  },

  // --- TERONG & MENTIMUN ---
  {
    id: 'sym_terong_1',
    code: 'G_TR01',
    cropType: 'terong',
    plantPart: 'batang',
    title: 'Pucuk terong layu tiba-tiba dan batang berlubang gerek ulat (Penggerek Batang)',
    description: 'Ujung cabang atau pucuk tanaman terong terkulai layu mengering, terdapat lubang gerek yang mengeluarkan kotoran ulat.',
    mb: 0.92,
    md: 0.05
  },
  {
    id: 'sym_mentimun_1',
    code: 'G_MT01',
    cropType: 'mentimun',
    plantPart: 'daun',
    title: 'Bercak kuning bersudut tegas dibatasi tulang daun timun (Embun Bulu)',
    description: 'Bercak kuning poligonal bersudut kaku di antara urat daun, jika dibalik tampak lapisan keunguan keabuan basah.',
    mb: 0.93,
    md: 0.05
  }
];

export const GLOBAL_ADDITIONAL_DISEASES: Disease[] = [
  // 1. HAWAR DAUN KENTANG (Phytophthora infestans)
  {
    id: 'dis_kentang_hawar',
    cropType: 'kentang',
    nameIndo: 'Hawar Daun & Busuk Umbi Kentang (Late Blight)',
    scientificName: 'Phytophthora infestans (Mont.) de Bary',
    pathogenType: 'jamur',
    symptoms: ['sym_kentang_1', 'sym_kentang_2'],
    symptomSummary: 'Bercak basah coklat tua melepuh di tepi daun meluas sangat cepat saat dingin berembun, bagian bawah daun berbulu putih halus.',
    affectedParts: ['daun', 'batang', 'akar'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Aplikasi Isolat Trichoderma viride & Bacillus subtilis',
        activeBioCompound: 'Lipopeptida Iturin, Surfactin & kitinase bio-fungisida',
        ingredients: [
          'Biakan isolat cair Bacillus subtilis 150 mL',
          'Biakan spora Trichoderma padat 200 g',
          'Air bersih non-klorin 16 Liter'
        ],
        instructions: [
          'Campurkan biakan ke dalam tangki sprayer.',
          'Semprotkan ke seluruh permukaan bawah dan atas daun secara merata.',
          'Aplikasikan pada awal musim hujan atau saat kabut embun tebal di dataran tinggi.'
        ],
        applicationTiming: 'Pagi hari (06:30 - 08:30) sebelum matahari terik. Ulangi interval 5 hari sekali.'
      },
      {
        category: 'pestisida_nabati',
        title: 'Ekstrak Rebusan Daun Sirih Merah & Bawang Putih',
        activeBioCompound: 'Allicin & Karvakrol (Penghambat zoospora jamur Oomycota)',
        ingredients: [
          'Bawang putih 250 g (tumbuk halus)',
          'Daun sirih merah 200 g',
          'Sabun lerak 1 sdt',
          'Air 5 Liter'
        ],
        instructions: [
          'Rebus bahan dengan 2 L air selama 15 menit, dinginkan dan saring.',
          'Encerkan ke 10 L air semprot dan tambahkan perekat alami lerak.',
          'Semprotkan ke daun saat mendung berembun.'
        ],
        applicationTiming: 'Sore hari pukul 16:00 WIB.'
      }
    ],
    scientificReference: {
      journalOrDb: 'International Potato Center (CIP) & Nature Plants',
      doiOrAccession: '10.1038/s41477-020-0708-5',
      summary: 'Phytophthora infestans adalah patogen bersejarah penyebab Bencana Kelaparan Besar Irlandia. Pengendalian hayati dengan Bacillus subtilis strain QST713 terbukti menekan perkecambahan zoospora hingga 78%.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.95,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 2. LAYU BAKTERI KENTANG (Ralstonia solanacearum)
  {
    id: 'dis_kentang_layubakteri',
    cropType: 'kentang',
    nameIndo: 'Layu Bakteri / Lendir Umbi Kentang (Bacterial Wilt)',
    scientificName: 'Ralstonia solanacearum (Smith) Yabuuchi',
    pathogenType: 'bakteri',
    symptoms: ['sym_kentang_3'],
    symptomSummary: 'Tanaman layu mendadak di siang hari saat tanah basah, lingkaran vaskular umbi kentang mengeluarkan cairan lendir bakteri saat ditekan.',
    affectedParts: ['batang', 'akar'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Inokulasi Pseudomonas fluorescens & Streptomyces sp.',
        activeBioCompound: 'Senyawa Phenazine & Siderofor pengkelat besi rizosfer',
        ingredients: ['Isolat Pseudomonas fluorescens 200 mL', 'Kompos matang 10 kg', 'Air kelapa 1 L'],
        instructions: [
          'Campur isolat ke kompos matang lalu peram 3 hari.',
          'Taburkan 1 genggam ke lubang tanam sebelum menanam benih umbi.',
          'Kocorkan cairan biakan ke pangkal batang setiap 14 hari.'
        ],
        applicationTiming: 'Saat tanam dan fase pembentukan umbi.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Phytopathology & Balai Penelitian Tanaman Sayuran (Balitsa Lembang)',
      doiOrAccession: '10.1094/PHYTO-04-19-0129-R',
      summary: 'Ralstonia solanacearum mengkolonisasi xilem dan memproduksi eksopolisakarida (EPS) yang menyumbat translokasi air. Rotasi dengan jagung dan inokulasi PGPR menekan insidensi layu hingga 62%.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.94,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 3. LAYU PANAMA PISANG (Fusarium oxysporum f. sp. cubense TR4)
  {
    id: 'dis_pisang_panama',
    cropType: 'pisang',
    nameIndo: 'Layu Fusarium / Layu Panama Pisang (TR4 Tropis)',
    scientificName: 'Fusarium oxysporum f. sp. cubense (Foc Tropical Race 4)',
    pathogenType: 'jamur',
    symptoms: ['sym_pisang_1', 'sym_pisang_2'],
    symptomSummary: 'Daun tua menguning patah terkulai seperti rok melingkari batang semu, jaringan pembuluh batang semu merah darah kecokelatan.',
    affectedParts: ['daun', 'batang', 'akar'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Bio-Fumigasi Tanah & Agen Hayati Trichoderma virens + Paenibacillus',
        activeBioCompound: 'Trichoderma virens & Senyawa Isosianat Biofumigan Nabati',
        ingredients: [
          'Isolat padat Trichoderma virens 500 g',
          'Biomassa cacahan tanaman kubis/sawi 5 kg (biofumigan alami)',
          'Kapur dolomit 1 kg'
        ],
        instructions: [
          'Gali tanah sekitar perakaran, benamkan cacahan kubis untuk biofumigasi dan tutup tanah.',
          'Dua minggu kemudian inokulasikan biakan Trichoderma dicampur kompos ke sekeliling rumpun pisang.',
          'Sterilisasi seluruh parang dan alat pertanian dengan api/alkohol sebelum pindah ke pohon lain.'
        ],
        applicationTiming: 'Aplikasi berkala 3 bulan sekali pada sentra pisang.'
      }
    ],
    scientificReference: {
      journalOrDb: 'FAO World Banana Forum & PLoS Pathogens',
      doiOrAccession: '10.1371/journal.ppat.1005197',
      summary: 'Fusarium TR4 mengancam kultivar Cavendish secara global di Asia Tenggara, Amerika Latin, dan Afrika. Karantina ketat dan introduksi endofit antagonis merupakan lini pertahanan hayati utama.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.96,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 4. PENYAKIT DARAH PISANG (Ralstonia syzygii subsp. celebesensis)
  {
    id: 'dis_pisang_darah',
    cropType: 'pisang',
    nameIndo: 'Penyakit Darah Pisang (Blood Disease Bacterium - BDB)',
    scientificName: 'Ralstonia syzygii subsp. celebesensis',
    pathogenType: 'bakteri',
    symptoms: ['sym_pisang_2', 'sym_pisang_3'],
    symptomSummary: 'Daging buah pisang membusuk menghitam kemerahan berlendir cair seperti darah kental, jantung pisang mengering layu.',
    affectedParts: ['buah', 'batang', 'bunga'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'mekanis_kultur',
        title: 'Sanitasi Bungkus Jantung Pisang & Pemotongan Bunga Jantan',
        activeBioCompound: 'Pemutus Vektor Serangga Penyerbuk',
        instructions: [
          'Bungkus tandan pisang dengan plastik bening berlubang segera setelah sisir terakhir keluar.',
          'Patahkan jantung pisang (bunga jantan) segera agar tidak dihinggapi lebah dan lalat buah yang menularkan bakteri BDB.',
          'Pohon yang positif segera disuntik herbisida nabati/minyak tanah dan dibakar di tempat.'
        ],
        applicationTiming: 'Saat fase keluar tandan buah pisang.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Plant Pathology & Pusat Penelitian Hortikultura Kementan',
      doiOrAccession: '10.1111/ppa.13258',
      summary: 'Endemik di Indonesia (Sulawesi lalu menyebar ke Jawa & Sumatera). Penularan utama lewat serangga penyerbuk ke bunga jantan yang belum dipotong.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.94,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 5. PENYAKIT SIGATOKA HITAM PISANG (Pseudocercospora fijiensis)
  {
    id: 'dis_pisang_sigatoka',
    cropType: 'pisang',
    nameIndo: 'Sigatoka Hitam Pisang (Black Sigatoka)',
    scientificName: 'Pseudocercospora fijiensis (Morelet)',
    pathogenType: 'jamur',
    symptoms: ['sym_pisang_4'],
    symptomSummary: 'Garis bercak sempit cokelat kemerahan sejajar tulang daun membesar membentuk nekrosis elips pusat abu-abu membakar daun.',
    affectedParts: ['daun'],
    severityLevel: 'parah',
    ecoFriendlyTreatments: [
      {
        category: 'pestisida_nabati',
        title: 'Emulsi Minyak Nabati Mimba & Ekstrak Serai Wangi',
        activeBioCompound: 'Sitronelal, Geraniol & Azadirachtin',
        ingredients: ['Minyak mimba murni 50 mL', 'Minyak serai wangi 20 mL', 'Emulsifier lerak 10 mL', 'Air 15 Liter'],
        instructions: ['Campur minyak dengan lerak hingga emulsi putih susu.', 'Encerkan ke air dan semprot tajuk daun pisang.'],
        applicationTiming: 'Pagi hari interval 10 hari.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Theoretical and Applied Genetics (TAG)',
      doiOrAccession: '10.1007/s00122-019-03412-1',
      summary: 'Penyebab penurunan fotosintesis hingga 50% pada perkebunan pisang komersial dunia.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1603052875302-d376b7c0638a?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.90,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 6. MOSAIK SINGKONG AFRIKA & ASIA (Cassava Mosaic Virus - CMD)
  {
    id: 'dis_singkong_cmd',
    cropType: 'singkong',
    nameIndo: 'Penyakit Mosaik Singkong (Cassava Mosaic Disease - CMD)',
    scientificName: 'Sri Lankan cassava mosaic virus (SLCMV) / ACMV',
    pathogenType: 'virus',
    symptoms: ['sym_singkong_1'],
    symptomSummary: 'Daun singkong muda mengecil kerdil melintir dengan bercak mosaik kuning cerah menyolok, produksi umbi turun hingga 80%.',
    affectedParts: ['daun', 'batang'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'pencegahan',
        title: 'Pengendalian Kutu Kebul (Bemisia tabaci) Vektor & Stek Bebas Virus',
        activeBioCompound: 'Bio-insektisida Beauveria bassiana & Minyak Mimba',
        instructions: [
          'Gunakan hanya bibit stek bersertifikasi bebas virus mosaik.',
          'Kendalikan populasi kutu kebul putih dengan jamur entomopatogen Beauveria bassiana (100 g/tangki).',
          'Cabut dan musnahkan tanaman yang memperlihatkan gejala mosaik seawal mungkin.'
        ],
        applicationTiming: 'Fase 1-3 bulan pertama pertumbuhan singkong.'
      }
    ],
    scientificReference: {
      journalOrDb: 'CGIAR International Institute of Tropical Agriculture (IITA) & CIAT',
      doiOrAccession: '10.1094/PDIS-07-20-1498-PDN',
      summary: 'SLCMV menyebar di Asia Tenggara termasuk Kamboja, Vietnam, Thailand, dan Indonesia. Pemilihan klon toleran dan karantina vektor Bemisia tabaci adalah strategi kunci.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.95,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 7. CVPD / CITRUS GREENING / HUANGLONGBING (Candidatus Liberibacter asiaticus)
  {
    id: 'dis_jeruk_cvpd',
    cropType: 'jeruk',
    nameIndo: 'CVPD / Citrus Greening (Huanglongbing - HLB)',
    scientificName: 'Candidatus Liberibacter asiaticus (CLas)',
    pathogenType: 'bakteri',
    symptoms: ['sym_jeruk_1', 'sym_jeruk_2'],
    symptomSummary: 'Daun belang kuning tidak simetris (blotchy mottle), buah asimetris kecil berasa asam pahit dengan biji aborsi menghitam.',
    affectedParts: ['daun', 'buah', 'batang'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Pengendalian Kutu Loncat Jeruk (Diaphorina citri) & Konsorsium Mikrobial',
        activeBioCompound: 'Tamarixia radiata (Parasitoid) & Ekstrak Nimba',
        ingredients: ['Pelepasan parasitoid Tamarixia radiata', 'Minyak mimba konsentrasi 1%'],
        instructions: [
          'Semprot nimba pada tunas muda flush jeruk saat Diaphorina citri bertelur.',
          'Lepaskan parasitoid alami Tamarixia radiata di area kebun.',
          'Berikan pupuk hara mikro seng (Zn), besi (Fe), mangan (Mn) melalui daun untuk menjaga vigor.'
        ],
        applicationTiming: 'Setiap fase pertunasan baru (flushing).'
      }
    ],
    scientificReference: {
      journalOrDb: 'Balai Penelitian Tanaman Jeruk dan Buah Subtropika (Balitjestro Batu) & PNAS',
      doiOrAccession: '10.1073/pnas.1911475117',
      summary: 'Patogen bakteri vaskular floem yang ditularkan oleh psyllid Diaphorina citri. Menginfeksi jeruk di Asia, Amerika Serikat (Florida, California), dan Brazil.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.97,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 8. KANKER JERUK (Xanthomonas citri subsp. citri)
  {
    id: 'dis_jeruk_kanker',
    cropType: 'jeruk',
    nameIndo: 'Kanker Jeruk (Citrus Canker)',
    scientificName: 'Xanthomonas citri subsp. citri',
    pathogenType: 'bakteri',
    symptoms: ['sym_jeruk_3'],
    symptomSummary: 'Bercak kawah gabus menonjol coklat terang dikelilingi lingkaran kuning basah berminyak pada daun, ranting, dan kulit buah.',
    affectedParts: ['daun', 'buah', 'batang'],
    severityLevel: 'parah',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Bakterisida Hayati Bacillus amyloliquefaciens & Tembaga Nabati',
        activeBioCompound: 'Lipopeptida Bacillomycin & Enzim Lisis Dinding Bakteri',
        instructions: [
          'Semprotkan suspensi Bacillus amyloliquefaciens (5 g/L) pada tunas daun baru.',
          'Pangkas ranting sakit dan bakar di luar areal kebun.',
          'Pasang windbreak tanaman penahan angin untuk mencegah gesekan daun saat badai hujan.'
        ],
        applicationTiming: 'Segera setelah hujan lebat berangin kencang.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Molecular Plant Pathology',
      doiOrAccession: '10.1111/mpp.12034',
      summary: 'Bakteri masuk melalui stomata dan luka mekanis akibat pengorok daun (Citrus leafminer Phyllocnistis citrella).'
    },
    sampleImage: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.92,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 9. PAPAYA RINGSPOT VIRUS (PRSV)
  {
    id: 'dis_pepaya_prsv',
    cropType: 'pepaya',
    nameIndo: 'Virus Cincin Pepaya (Papaya Ringspot Virus - PRSV)',
    scientificName: 'Papaya ringspot potyvirus (PRSV-P)',
    pathogenType: 'virus',
    symptoms: ['sym_pepaya_1'],
    symptomSummary: 'Pola cincin melingkar mirip donat pada kulit buah pepaya, garis basah hijau tua pada tangkai daun, daun mengecil seperti cakar tali.',
    affectedParts: ['buah', 'daun', 'batang'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'pencegahan',
        title: 'Pengendalian Kutu Daun Aphis & Penanaman Tanaman Perangkap',
        activeBioCompound: 'Semprotan Minyak Nabati & Refugia Jagung',
        instructions: [
          'Tanam tanaman jagung di sekeliling kebun pepaya sebagai barrier penyaring kutu daun vektor (Aphis gossypii & Myzus persicae).',
          'Semprot emulsi minyak nabati 1% seminggu sekali untuk menghalangi transmisi stilet aphid.',
          'Eradikasi tanaman yang terinfeksi untuk menyelamatkan blok kebun lainnya.'
        ],
        applicationTiming: 'Sejak bibit pindah tanam hingga produksi.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Annual Review of Phytopathology & University of Hawaii',
      doiOrAccession: '10.1146/annurev.phyto.40.120301.093900',
      summary: 'Virus yang hampir memusnahkan industri pepaya Hawaii sebelum ditemukannya isolat transgenik Rainbow dan SunUp.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1526318897999-53347c14400c?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.95,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 10. ANTRAKNOSA BUNGA & BUAH MANGGA (Colletotrichum gloeosporioides)
  {
    id: 'dis_mangga_antraknosa',
    cropType: 'mangga',
    nameIndo: 'Antraknosa Bunga & Buah Mangga (Colletotrichum)',
    scientificName: 'Colletotrichum gloeosporioides (Penz.) Penz. & Sacc.',
    pathogenType: 'jamur',
    symptoms: ['sym_mangga_1', 'sym_mangga_2'],
    symptomSummary: 'Malai bunga menghitam kering rontok massal gagal berbuah, pada buah muncul bercak hitam melekuk dan retak getah.',
    affectedParts: ['bunga', 'buah', 'daun'],
    severityLevel: 'parah',
    ecoFriendlyTreatments: [
      {
        category: 'pestisida_nabati',
        title: 'Formula Ekstrak Biji Mimba & Lengkuas Rebusan',
        activeBioCompound: 'Galangin & Azadirachtin',
        ingredients: ['Biji mimba tumbuk 300 g', 'Lengkuas parut 200 g', 'Air 10 L', 'Perekat lerak 2 sdm'],
        instructions: [
          'Rebus lengkuas dan rendam biji mimba semalam.',
          'Campurkan, saring, dan semprotkan ke kuntum malai bunga mangga saat mulai mekar.',
          'Lakukan pembungkusan buah mangga muda (fruit bagging) dengan kertas semen/koran.'
        ],
        applicationTiming: 'Saat fase pembungaan dan pentil buah.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Postharvest Biology and Technology',
      doiOrAccession: '10.1016/j.postharvbio.2021.111623',
      summary: 'Penyebab utama kerugian pascapanen mangga tropis. Pembungkusan buah dan pencucian air hangat (hot water treatment 52°C selama 5 menit) menekan infeksi laten.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.92,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 11. AKAR GADA KUBIS (Plasmodiophora brassicae)
  {
    id: 'dis_kubis_akargada',
    cropType: 'kubis',
    nameIndo: 'Penyakit Akar Gada Kubis / Kol (Clubroot)',
    scientificName: 'Plasmodiophora brassicae Woronin',
    pathogenType: 'jamur',
    symptoms: ['sym_kubis_1'],
    symptomSummary: 'Akar bengkak membesar seperti gada kayu menonjol tak beraturan, tanaman layu terkulai di siang terik lalu kerdil.',
    affectedParts: ['akar'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'mekanis_kultur',
        title: 'Peningkatan pH Tanah (Kapur Pertanian/Dolomit) & Trichoderma',
        activeBioCompound: 'Kalsium Karbonat (Menaikkan pH > 7.2 untuk menekan spora istirahat)',
        ingredients: ['Kapur dolomit 2-4 ton/ha', 'Biakan Trichoderma harzianum 200 g/m2 bedeng'],
        instructions: [
          'Taburkan dolomit 3-4 minggu sebelum tanam hingga pH tanah mencapai 7.2 - 7.5.',
          'Plasmodiophora tidak mampu menginfeksi rambut akar pada kondisi tanah basa berkalsium tinggi.',
          'Aplikasi Trichoderma pada lubang tanam sebagai kompetitor perakaran.'
        ],
        applicationTiming: 'Saat olah tanah dan pembibitan.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Canadian Journal of Plant Pathology',
      doiOrAccession: '10.1080/07060661.2019.1614979',
      summary: 'Spora istirahat Plasmodiophora brassicae dapat bertahan hingga 20 tahun di dalam tanah. Liming dan biofungisida merupakan standar manajemen terpadu global.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.96,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 12. BUSUK MERAH BATANG TEBU (Colletotrichum falcatum)
  {
    id: 'dis_tebu_busukmerah',
    cropType: 'tebu',
    nameIndo: 'Busuk Merah Batang Tebu (Red Rot of Sugarcane)',
    scientificName: 'Colletotrichum falcatum Went (Glomerella tucumanensis)',
    pathogenType: 'jamur',
    symptoms: ['sym_tebu_1'],
    symptomSummary: 'Empulur batang tebu membusuk merah tua dengan pita putih melintang dan bau alkohol fermentasi masam, kadar gula nira anjlok drastis.',
    affectedParts: ['batang'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Perlakuan Bibit Air Hangat (Hot Water Treatment) & Endofit Trichoderma',
        activeBioCompound: 'Trichoderma harzianum strain tebu & Termoterapi Fisik',
        instructions: [
          'Rendam bagal bibit tebu dalam air hangat 50°C selama 2 jam sebelum tanam.',
          'Celupkan ke suspensi spora Trichoderma harzianum selama 15 menit.',
          'Drainase parit kebun diperbaiki agar tidak ada genangan air hujan.'
        ],
        applicationTiming: 'Persiapan bibit bagal tanam.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Sugar Tech & Indian Institute of Sugarcane Research',
      doiOrAccession: '10.1007/s12355-020-00832-w',
      summary: 'Penyakit paling merusak pada tanaman tebu di Asia tropis dan subtropis (The Cancer of Sugarcane).'
    },
    sampleImage: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.94,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 13. JAMUR AKAR PUTIH KARET (Rigidoporus microporus)
  {
    id: 'dis_karet_jap',
    cropType: 'karet',
    nameIndo: 'Jamur Akar Putih Karet (White Root Rot - JAP)',
    scientificName: 'Rigidoporus microporus (Sw.) Overeem',
    pathogenType: 'jamur',
    symptoms: ['sym_karet_1'],
    symptomSummary: 'Akar tunggang dan lateral diselimuti benang miselium jamur putih tebal menjalar, daun menguning kusam rontok dan pohon tumbang mati.',
    affectedParts: ['akar', 'batang'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Aplikasi Hayati Trichoderma virens & Pembersihan Sisa Tunggul Kayu',
        activeBioCompound: 'Trichoderma virens & Belerang Pertanian (Sulfur)',
        ingredients: ['Trichoderma biakan media jagung 200 g/pohon', 'Belerang bubuk 100 g/lubang'],
        instructions: [
          'Bongkar leher akar tanaman yang sakit, kerok miselium jamur putih.',
          'Taburkan belerang bubuk dan biakan Trichoderma pada permukaan akar lalu timbun kembali.',
          'Buat parit isolasi sedalam 100 cm di sekeliling pohon terinfeksi.'
        ],
        applicationTiming: 'Awal musim hujan.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Pusat Penelitian Karet Indonesia (Balai Penelitian Sungei Putih) & Forest Pathology',
      doiOrAccession: '10.1111/efp.12451',
      summary: 'Penyakit nomor satu perkebunan karet di Indonesia, Malaysia, dan Thailand. Penggunaan tanaman antagonis legum cover crop (Mucuna bracteata) membantu menekan inokulum tanah.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.97,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 14. CACAR DAUN TEH (Exobasidium vexans)
  {
    id: 'dis_teh_cacar',
    cropType: 'teh',
    nameIndo: 'Penyakit Cacar Daun Teh (Blister Blight of Tea)',
    scientificName: 'Exobasidium vexans Massee',
    pathogenType: 'jamur',
    symptoms: ['sym_teh_1'],
    symptomSummary: 'Bercak bulat melepuh cekung di atas dan cembung di bawah daun muda teh, warna putih berserbuk spora merusak pucuk petik (peko).',
    affectedParts: ['daun'],
    severityLevel: 'parah',
    ecoFriendlyTreatments: [
      {
        category: 'mekanis_kultur',
        title: 'Pemangkasan Pohon Penaung & Semprot Biofungisida Nabati Sirih',
        activeBioCompound: 'Minyak Atsiri Sirih Hijau & Pengaturan Intensitas Sinar Matahari',
        instructions: [
          'Pangkas pohon pelindung (Albizia/Dadap) agar sinar matahari pagi masuk mengeringkan embun pada tajuk perdu teh.',
          'Semprotkan ekstrak daun sirih hijau dan rimpang lengkuas (rebusan 5%) pada daun muda.',
          'Perpendek daur petik pucuk menjadi 7 hari sekali saat musim kabut tebal.'
        ],
        applicationTiming: 'Pagi hari setelah petik teh.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Pusat Penelitian Teh dan Kina (PPTK Gambung Bandung) & Plant Disease',
      doiOrAccession: '10.1094/PDIS-93-1-0021',
      summary: 'Patogen obligat yang menginfeksi tunas pucuk teh muda. Penetrasi cahaya matahari langsung dan kelembapan tajuk <80% sangat efektif menekan perkecambahan basidiospora.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.93,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 15. KARAT GARIS GANDUM (Puccinia striiformis f. sp. tritici - Penyakit Dunia)
  {
    id: 'dis_gandum_karatgaris',
    cropType: 'gandum',
    nameIndo: 'Penyakit Karat Garis / Karat Kuning Gandum (Stripe Rust)',
    scientificName: 'Puccinia striiformis f. sp. tritici',
    pathogenType: 'jamur',
    symptoms: ['sym_gandum_1'],
    symptomSummary: 'Pustul serbuk jingga kuning berderet membentuk garis panjang sejajar urat daun, menyebabkan daun kering dan bulir gandum keriput hampa.',
    affectedParts: ['daun', 'bulir'],
    severityLevel: 'kritis',
    ecoFriendlyTreatments: [
      {
        category: 'agen_hayati',
        title: 'Aplikasi Antagonis Bacillus velezensis & Varietas Tahan',
        activeBioCompound: 'Bacillus velezensis bio-protektan sereal',
        instructions: [
          'Gunakan varietas gandum bersertifikat gen ketahanan Yr (Yellow rust).',
          'Aplikasi suspensi bakteri Bacillus velezensis atau Streptomyces pada fase anakan dan bunting.'
        ],
        applicationTiming: 'Saat suhu 10-15°C dengan kelembapan tinggi.'
      }
    ],
    scientificReference: {
      journalOrDb: 'CIMMYT (International Maize and Wheat Improvement Center) & Science',
      doiOrAccession: '10.1126/science.1256400',
      summary: 'Penyakit sereal paling mengancam ketahanan pangan gandum dunia dengan penyebaran spora lintas benua oleh angin atmosfer.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.95,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 16. TOBACCO MOSAIC VIRUS (TMV)
  {
    id: 'dis_tembakau_tmv',
    cropType: 'tembakau',
    nameIndo: 'Virus Mosaik Tembakau (Tobacco Mosaic Virus - TMV)',
    scientificName: 'Tobacco mosaic tobamovirus (TMV)',
    pathogenType: 'virus',
    symptoms: ['sym_tembakau_1'],
    symptomSummary: 'Corak mosaik hijau tua dan muda melepuh berkerut pada daun, pertumbuhan terhambat dan daun rapuh pecah.',
    affectedParts: ['daun'],
    severityLevel: 'parah',
    ecoFriendlyTreatments: [
      {
        category: 'mekanis_kultur',
        title: 'Sanitasi Tangan Pekerja dengan Susu Skim & Eradikasi Kontak',
        activeBioCompound: 'Protein Kasein Susu (Inaktivasi partikel virion TMV)',
        ingredients: ['Susu skim bubuk 100 g', 'Air 1 Liter'],
        instructions: [
          'Pekerja dilarang merokok saat mengelola kebun tembakau.',
          'Celupkan tangan dan gunting pangkas ke dalam larutan susu skim 10% setiap kali memegang tanaman.',
          'Protein kasein mengikat kapsid virus TMV dan menonaktifkan penularan mekanis lewat gesekan.'
        ],
        applicationTiming: 'Saat wiwil tunas dan panen daun tembakau.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Nature & Journal of General Virology',
      doiOrAccession: '10.1099/0022-1317-80-6-1361',
      summary: 'Virus pertama yang diisolasi dalam sejarah sains (Martinus Beijerinck, 1898). Sangat stabil dan tahan pemanasan serta pengeringan.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.95,
    updatedAt: '2026-10-10',
    version: 2
  },

  // 17. EMBUN BULU MENTIMUN / MELON (Pseudoperonospora cubensis)
  {
    id: 'dis_mentimun_embunbulu',
    cropType: 'mentimun',
    nameIndo: 'Penyakit Embun Bulu / Kresek Mentimun (Downy Mildew)',
    scientificName: 'Pseudoperonospora cubensis (Berk. & M.A. Curtis) Rostovzev',
    pathogenType: 'jamur',
    symptoms: ['sym_mentimun_1'],
    symptomSummary: 'Bercak kuning bersudut tegas dibatasi tulang daun timun/melon, di balik daun tampak lapisan ungu keabuan basah berbulu spora.',
    affectedParts: ['daun'],
    severityLevel: 'parah',
    ecoFriendlyTreatments: [
      {
        category: 'pestisida_nabati',
        title: 'Formula Ekstrak Bawang Putih & Susu Segar',
        activeBioCompound: 'Allicin & Lactoferrin Anti-Oomycota',
        ingredients: ['Bawang putih 200 g', 'Susu segar 1 Liter', 'Air 9 Liter'],
        instructions: [
          'Haluskan bawang putih, campur dengan susu dan saring.',
          'Semprotkan ke bagian bawah daun tanaman mentimun secara menyeluruh.'
        ],
        applicationTiming: 'Pagi hari sebelum sinar matahari terik.'
      }
    ],
    scientificReference: {
      journalOrDb: 'Plant Disease & World Vegetable Center (AVRDC)',
      doiOrAccession: '10.1094/PDIS-04-16-0428-FE',
      summary: 'Penyakit nomor satu famili Cucurbitaceae di Asia tropis dan Amerika.'
    },
    sampleImage: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=80',
    certaintyFactorBase: 0.91,
    updatedAt: '2026-10-10',
    version: 2
  }
];
