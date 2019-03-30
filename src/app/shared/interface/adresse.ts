import { Ville } from "./ville";

export interface Adresse {
  id: number;
  numeroVoie: string;
  typeVoie: string;
  nomVoie: string;
  commentaire: string;
  ville: Ville;
}
