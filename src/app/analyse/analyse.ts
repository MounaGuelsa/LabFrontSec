import {User} from "../users/user";
import {AnalyseMesures} from "../analyse-mesures/analyse-mesures";

export interface Analyse {
  analyseId: number;
  utilisateurId: number;
  utilisateur: User;
  dateDebutAnalyse: number[];
  dateFinAnalyse: number[];
  sousAnalyses: {
    sousAnalyseId: number;
    valeur: number;
    sousAnalyseMesures: AnalyseMesures;
    statutDeResultat: string;
  }[];
  analyseType: string;
  etatAnalyse: string;
  commentaire: string;
  planificationId: number;
  echantillonId: number;
  reactifsIds: number[] | null;
}
