import { LogLevel } from "../app/shared/enum/LogLevel.enum";

const localApiUrl = 'http://localhost:3000/api/';

export const environment = {
  production: true,

  urlAdherent: localApiUrl + 'adherent',

  angularLogLevel: LogLevel.ERROR
};
