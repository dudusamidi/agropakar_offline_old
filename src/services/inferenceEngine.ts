import { Disease, Symptom, DiagnosisResult, CropType } from '../types';

export function runExpertDiagnosis(
  selectedSymptomIds: string[],
  selectedCrop: CropType,
  allDiseases: Disease[],
  allSymptoms: Symptom[]
): DiagnosisResult[] {
  if (!selectedSymptomIds || selectedSymptomIds.length === 0) {
    return [];
  }

  // Filter diseases relevant to the selected crop
  const cropDiseases = allDiseases.filter((d) => d.cropType === selectedCrop);
  const symptomMap = new Map<string, Symptom>();
  allSymptoms.forEach((s) => symptomMap.set(s.id, s));

  const results: DiagnosisResult[] = [];

  for (const disease of cropDiseases) {
    // Check which symptoms match this disease
    const matchedSymptomIds = disease.symptoms.filter((symId) =>
      selectedSymptomIds.includes(symId)
    );

    if (matchedSymptomIds.length === 0) {
      continue;
    }

    const matchedSymptoms = matchedSymptomIds
      .map((id) => symptomMap.get(id))
      .filter((s): s is Symptom => s !== undefined);

    // Compute Certainty Factor using CF Combine Formula
    // CF = MB - MD for each symptom
    let combinedCF = 0;

    for (let i = 0; i < matchedSymptoms.length; i++) {
      const s = matchedSymptoms[i];
      const cf_symptom = s.mb - s.md; // Single symptom CF

      if (i === 0) {
        combinedCF = cf_symptom;
      } else {
        // CF_combine(CF1, CF2) = CF1 + CF2 * (1 - CF1)
        combinedCF = combinedCF + cf_symptom * (1 - combinedCF);
      }
    }

    // Factor in ratio of matched symptoms to total symptoms defining this disease
    const coverageRatio = matchedSymptomIds.length / Math.max(1, disease.symptoms.length);
    
    // Scale with disease base certainty
    const finalScore = Math.min(
      99,
      Math.round(combinedCF * (0.6 + 0.4 * coverageRatio) * (disease.certaintyFactorBase || 0.9) * 100)
    );

    let confidenceText = 'Kemungkinan Rendah';
    if (finalScore >= 85) {
      confidenceText = 'Sangat Tinggi (Pasti)';
    } else if (finalScore >= 70) {
      confidenceText = 'Tinggi (Kuat Terindikasi)';
    } else if (finalScore >= 50) {
      confidenceText = 'Cukup / Perlu Pengamatan Lanjutan';
    }

    results.push({
      disease,
      certaintyFactor: finalScore,
      matchedSymptoms,
      method: 'offline_rules',
      confidenceText,
      aiObservationNotes: `Teridentifikasi melalui mesin inferensi sistem pakar pohon gejala offline berdasarkan ${matchedSymptoms.length} gejala spesifik tanaman.`
    });
  }

  // Sort by highest certainty factor descending
  results.sort((a, b) => b.certaintyFactor - a.certaintyFactor);

  return results;
}
