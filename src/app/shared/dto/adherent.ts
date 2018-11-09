import { Gender } from "../enum/gender.enum";
import { ArrayUtil } from "../../util/array-util";
import { DateUtil } from "../../util/date-util";

export interface Adherent  {
  id: string;
  firstname: string;
  lastname: string;
  birthdayDate: Date;
  inscriptionDate: Date;
  gender: Gender;
  postalCode: string;
  town: string;
}

export class AdherentsDTO {
  public adherents: Array<Adherent>;

  constructor(adherents: Array<Adherent>) {
    this.adherents = adherents;
  }

  getOccurenceByAge(): Map<string, number>  {
    const ages = new Array<string>();
    this.adherents.forEach(element => {
      const age = DateUtil.getAge(element.birthdayDate).toString();
      ages.push(age);
    });
    return ArrayUtil.getOccurences(ages);
  }

  getOccurenceByGender() {
    let HFNAb: number[];
    HFNAb = [0, 0, 0, 0];
    this.adherents.forEach(element => {
      switch (element.gender) {
        case Gender.homme:
          HFNAb[0] += 1;
          break;
        case Gender.femme:
          HFNAb[1] += 1;
          break;
        case Gender.nonBinaire:
          HFNAb[2] += 1;
          break;
        default:
          HFNAb[3] += 1;
      }
    });
    return HFNAb;
  }
}
