import { LogLevel } from "../app/shared/enum/LogLevel.enum";

const localApiUrl = '';

export const environment = {
  production: false,

  urlAllAdherent: localApiUrl + 'adherent/s',

  angularLogLevel: LogLevel.ERROR
};
