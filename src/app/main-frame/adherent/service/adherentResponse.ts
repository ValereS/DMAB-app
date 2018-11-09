import { Adherent } from "../../../shared/dto/adherent";

export interface AdherentResponse {
  error: string;
  message: string;
  result: Adherent[];
}
