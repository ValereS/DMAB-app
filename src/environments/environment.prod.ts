import { LogLevel } from "../app/shared/enum/LogLevel.enum";

const localApiUrl = '';

export const environment = {
  production: true,

  urlAdherent: localApiUrl + 'adherent',

  angularLogLevel: LogLevel.ERROR
};
