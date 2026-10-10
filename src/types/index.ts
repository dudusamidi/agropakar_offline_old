export type CropType = 
  | 'padi' 
  | 'jagung' 
  | 'kedelai' 
  | 'cabai' 
  | 'tomat' 
  | 'bawang' 
  | 'kopi' 
  | 'kakao' 
  | 'sawit';

export type PathogenType = 'jamur' | 'bakteri' | 'virus' | 'hama' | 'fisiologis';

export type PlantPart = 'daun' | 'batang' | 'akar' | 'buah' | 'bulir' | 'bunga';

export type SeverityLevel = 'ringan' | 'sedang' | 'parah' | 'kritis';

export type UserRole = 'petani' | 'admin';

export interface EcoTreatment {
  category: 'pestisida_nabati' | 'agen_hayati' | 'mekanis_kultur' | 'pencegahan';
  title: string;
  activeBioCompound: string; // e.g., "Azadirachtin", "Allicin", "Trichoderma harzianum"
  ingredients?: string[];
  instructions: string[];
  applicationTiming: string;
  safetyNotes?: string;
}

export interface ScientificReference {
  journalOrDb: string;
  doiOrAccession?: string;
  summary: string;
}

export interface Disease {
  id: string;
  cropType: CropType;
  nameIndo: string;
  scientificName: string; // Latin nomenclature, e.g., Magnaporthe oryzae
  pathogenType: PathogenType;
  symptoms: string[]; // List of Symptom IDs
  symptomSummary: string;
  affectedParts: PlantPart[];
  severityLevel: SeverityLevel;
  ecoFriendlyTreatments: EcoTreatment[];
  scientificReference: ScientificReference;
  sampleImage: string;
  certaintyFactorBase: number;
  updatedAt: string;
  version: number;
}

export interface Symptom {
  id: string;
  code: string;
  cropType: CropType | 'all';
  plantPart: PlantPart;
  title: string;
  description: string;
  mb: number; // Measure of Belief (0.1 - 0.9)
  md: number; // Measure of Disbelief (0.0 - 0.2)
}

export interface DiagnosisResult {
  disease: Disease;
  certaintyFactor: number; // 0 - 100%
  matchedSymptoms: Symptom[];
  method: 'offline_rules' | 'ai_vision';
  aiObservationNotes?: string;
  confidenceText: string;
}

export interface DiagnosisHistoryItem {
  id: string;
  timestamp: string;
  cropType: CropType;
  diseaseName: string;
  scientificName: string;
  confidence: number;
  method: 'offline_rules' | 'ai_vision';
  photoPreview?: string;
  matchedSymptomsSummary?: string;
  notes?: string;
  syncStatus: 'synced' | 'pending_sync';
}

export interface OfflineQueueItem {
  id: string;
  timestamp: string;
  cropType: CropType;
  photoBase64: string;
  notes: string;
  status: 'queued' | 'processing' | 'completed' | 'failed';
  result?: DiagnosisResult;
  errorMessage?: string;
}

export interface ForumComment {
  id: string;
  authorName: string;
  role: UserRole;
  content: string;
  timestamp: string;
}

export interface ForumPost {
  id: string;
  authorName: string;
  authorVillage: string;
  role: UserRole;
  crop: CropType;
  title: string;
  content: string;
  imageUrl?: string;
  likes: number;
  likedByMe?: boolean;
  comments: ForumComment[];
  isVerifiedAgronomist: boolean;
  verifiedNotes?: string;
  createdAt: string;
}

export interface WeatherInfo {
  location: string;
  temperature: number;
  humidity: number;
  weatherDesc: string;
  windSpeed: number;
  rainfallMm: number;
  farmAlert: {
    level: 'aman' | 'waspada' | 'bahaya';
    message: string;
    recommendation: string;
  };
  sprayRecommendation: {
    suitable: boolean;
    reason: string;
  };
  isGpsAutoDetected?: boolean;
  coordinates?: { lat: number; lon: number };
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: 'cuaca' | 'hama' | 'update_db' | 'forum';
  timestamp: string;
  read: boolean;
  linkTab?: string;
}
