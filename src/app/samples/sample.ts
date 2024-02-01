
export interface Sample {
    echantillonId: number;
    patientId: number | null;
    patient: any | null; // Remplacez 'any' par le type réel de votre objet patient
    datePrelevement: Date | null;
    analyses: any[]; // Remplacez 'any' par le type réel de votre objet d'analyse
  }
  