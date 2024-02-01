export interface Reagent {
    reactifId: number;
    nom: string;
    description: string;
    quantite: number;
    dateDeExpiration: Date | null;
    fournisseur: string;
    analyseId: number | null;
  }
  