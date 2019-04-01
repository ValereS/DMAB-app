import { LogLevel } from "../app/shared/enum/LogLevel.enum";

const mainStubUrl = 'assets/stub/json';

export const environment = {
  production: false,

  urlAllAdherent: mainStubUrl + '/adherent.json',

  angularLogLevel: LogLevel.ALL
};
