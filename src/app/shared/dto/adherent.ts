import { Gender } from "../enum/gender.enum";

export interface Adherent {
  id: string;
  firstname: string;
  lastname: string;
  birthdayDate: Date;
  inscriptionDate: Date;
  gender: Gender;
  postalCode: string;
  town: string;
}

export interface Adherents {
  adherents: Array<Adherent>;
}
